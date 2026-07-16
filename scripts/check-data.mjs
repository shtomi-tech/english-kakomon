import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../static/data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);

const exam = context.window.ENGLISH_EXAM;
if (!exam || !Array.isArray(exam.sections)) throw new Error("ENGLISH_EXAM.sections がありません");

const ids = new Set();
let questionCount = 0;
let autoCount = 0;
for (const section of exam.sections) {
  if (!section.id || !section.title || !Array.isArray(section.questions)) throw new Error(`章データ不正: ${section.id || "(idなし)"}`);
  if (section.audio?.file) {
    const audioUrl = new URL(`../data/${section.audio.file}`, import.meta.url);
    if (!fs.existsSync(audioUrl)) throw new Error(`${section.id}: 音声ファイルがありません: ${section.audio.file}`);
  }
  for (const question of section.questions) {
    questionCount += 1;
    if (!question.id || ids.has(question.id)) throw new Error(`問題IDが不正または重複: ${question.id}`);
    ids.add(question.id);
    if (!question.prompt) throw new Error(`${question.id}: prompt がありません`);
    if (question.type !== "self") autoCount += 1;
    if ((!question.type || question.type === "choice") && (!Array.isArray(question.options) || !Number.isInteger(question.answer) || !question.options[question.answer])) {
      throw new Error(`${question.id}: 選択肢または正解番号が不正です`);
    }
    if (question.type === "text" && !question.answers?.length) throw new Error(`${question.id}: answers がありません`);
    if (question.type === "fields" && (!question.fields?.length || question.fields.some((field) => !field.answers?.length))) throw new Error(`${question.id}: fields が不正です`);
    if (question.type === "ordering") {
      const tokenKeys = question.tokens?.map((token) => token.key) || [];
      if (!tokenKeys.length || new Set(tokenKeys).size !== tokenKeys.length) throw new Error(`${question.id}: tokens が不正です`);
      if (!Array.isArray(question.answerOrder) || question.answerOrder.length !== tokenKeys.length || question.answerOrder.some((key) => !tokenKeys.includes(key))) {
        throw new Error(`${question.id}: answerOrder が不正です`);
      }
    }
  }
}

console.log(`data OK: ${exam.sections.length} sections, ${questionCount} questions, ${autoCount} auto-graded`);
