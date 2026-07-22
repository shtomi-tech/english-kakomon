(() => {
  "use strict";

  const exam = window.ENGLISH_EXAM;
  const STORAGE_KEY = `english-kakomon:${exam.id}:v1`;
  const LAST_SECTION_KEY = `${STORAGE_KEY}:last-section`;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  let state = loadState();
  let currentSectionId = storedSectionId() || firstPracticeSection().id;
  let reviewOnly = false;
  const choiceLabels = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク"];
  const sectionGroups = [
    { id: "listen", step: "STEP 1", label: "聞く", sectionIds: ["I"] },
    { id: "language", step: "STEP 2", label: "文法・語法", sectionIds: ["II-A", "II-B", "II-C"] },
    { id: "reading", step: "STEP 3", label: "読む・書く", sectionIds: ["III", "IV"] },
  ];

  function storedSectionId() {
    const id = localStorage.getItem(LAST_SECTION_KEY);
    return exam.sections.some((section) => section.id === id) ? id : null;
  }

  function firstPracticeSection() {
    return exam.sections.find((section) => section.questions.length) || exam.sections[0];
  }

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
    } catch (_) {
      return {};
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function normalize(value) {
    return String(value || "")
      .normalize("NFKC")
      .trim()
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/\s+/g, " ");
  }

  function allQuestions() {
    return exam.sections.flatMap((section) => section.questions);
  }

  function answerableQuestions() {
    return allQuestions().filter((question) => question.type !== "self");
  }

  function isComplete(question) {
    const record = state[question.id];
    return question.type === "self" ? Boolean(record?.selfChecked) : Boolean(record?.graded);
  }

  function isCorrect(question) {
    const record = state[question.id];
    return question.type === "self" ? record?.selfResult === "ok" : record?.correct === true;
  }

  function sectionStats(section) {
    const total = section.questions.length;
    const complete = section.questions.filter(isComplete).length;
    const correct = section.questions.filter(isCorrect).length;
    return { total, complete, correct };
  }

  function renderProgress() {
    const questions = allQuestions();
    const complete = questions.filter(isComplete).length;
    const total = questions.length;
    const wrong = questions.filter((question) => isComplete(question) && !isCorrect(question));
    $("#progressText").textContent = `${complete} / ${total} 完了`;
    $("#progressFill").style.width = total ? `${Math.round(complete / total * 100)}%` : "0%";
    $("#reviewBtn").disabled = !reviewOnly && wrong.length === 0;
    $("#reviewBtn").title = wrong.length ? `${wrong.length}問の間違いを表示` : "間違えた問題はありません";
    renderPrimaryAction();
  }

  function nextStudySection() {
    return exam.sections.find((section) => section.questions.some((question) => !isComplete(question)))
      || exam.sections.find((section) => section.questions.some((question) => !isCorrect(question)))
      || firstPracticeSection();
  }

  function renderPrimaryAction() {
    const questions = allQuestions();
    const incomplete = questions.filter((question) => !isComplete(question));
    const wrong = questions.filter((question) => isComplete(question) && !isCorrect(question));
    const next = nextStudySection();
    const label = $("#continueBtn .cta-label");
    const target = $("#continueTarget");
    if (incomplete.length) {
      label.textContent = "つづきから解く";
      target.textContent = `${next.label} ${next.title}・残り${incomplete.length}問`;
    } else if (wrong.length) {
      label.textContent = "間違えた問題を復習";
      target.textContent = `${wrong.length}問をもう一度確認`;
    } else {
      label.textContent = "最初から見直す";
      target.textContent = `全${questions.length}問の演習は完了しています`;
    }
  }

  function renderSectionList() {
    const root = $("#sectionList");
    root.innerHTML = sectionGroups.map((group) => {
      const sections = group.sectionIds.map((id) => exam.sections.find((section) => section.id === id)).filter(Boolean);
      const totals = sections.reduce((sum, section) => {
        const stats = sectionStats(section);
        return { complete: sum.complete + stats.complete, total: sum.total + stats.total };
      }, { complete: 0, total: 0 });
      const isActiveGroup = group.sectionIds.includes(currentSectionId);
      const items = sections.map((section) => {
        const stats = sectionStats(section);
        const isActive = section.id === currentSectionId;
        return `<button type="button" class="section-item${isActive ? " active" : ""}" data-section="${section.id}">
          <span><small>${section.label}</small><strong>${section.title}</strong></span>
          <em>${stats.complete}/${stats.total}</em>
        </button>`;
      }).join("");
      return `<details class="section-group" data-group="${group.id}"${isActiveGroup ? " open" : ""}>
        <summary>
          <span><small>${group.step}</small><strong>${group.label}</strong></span>
          <em>${totals.complete}/${totals.total}</em>
        </summary>
        <div class="section-group-items">${items}</div>
      </details>`;
    }).join("");

    $$(".section-item", root).forEach((button) => {
      button.addEventListener("click", () => openSection(button.dataset.section));
    });
    $$(".section-group", root).forEach((details) => {
      details.addEventListener("toggle", () => {
        if (!details.open) return;
        $$(".section-group", root).forEach((other) => {
          if (other !== details) other.open = false;
        });
      });
    });
  }

  function sourceImagesHtml(section) {
    if (!section.sourceImages?.length) return "";
    return `<details class="source-images">
      <summary>問題冊子の画像を開く（${section.sourceImages.length}枚）</summary>
      <div class="image-buttons">
        ${section.sourceImages.map((name, index) => `<button class="ghost image-button" type="button" data-image="${name}" data-image-index="${index + 1}">原画像 ${index + 1}</button>`).join("")}
      </div>
    </details>`;
  }

  function audioPlayerHtml(section) {
    if (!section.audio?.file) return "";
    return `<section class="audio-panel panel" aria-label="リスニング音声">
      <div class="audio-copy">
        <p class="eyebrow">LISTENING AUDIO</p>
        <h3>第I問 音声</h3>
        <p>全編 ${escapeHtml(section.audio.duration || "")}。必要に応じて一時停止・聞き直しができます。</p>
      </div>
      <audio id="sectionAudio" controls preload="metadata" src="./data/${escapeAttr(section.audio.file)}">
        お使いのブラウザは音声再生に対応していません。
      </audio>
    </section>`;
  }

  function orderingSelection(question, record) {
    const available = new Set(question.tokens.map((token) => token.key));
    const raw = Array.isArray(record.draft) ? record.draft : (Array.isArray(record.answer) ? record.answer : []);
    return raw.filter((key, index) => available.has(key) && raw.indexOf(key) === index);
  }

  function orderingHtml(question, selected) {
    const tokenByKey = Object.fromEntries(question.tokens.map((token) => [token.key, token]));
    const selectedHtml = selected.length
      ? selected.map((key, index) => `<button type="button" class="order-chip order-selected" data-key="${key}" data-order-index="${index}" aria-label="${index + 1}番目の ${escapeAttr(tokenByKey[key].text)} を語群へ戻す"><small>${index + 1}</small>${escapeHtml(tokenByKey[key].text)}</button>`).join("")
      : `<span class="order-placeholder">下の語群を順番にタップしてください</span>`;
    const bankHtml = question.tokens.map((token) => {
      const used = selected.includes(token.key);
      return `<button type="button" class="order-chip order-add${used ? " used" : ""}" data-key="${token.key}"${used ? " disabled" : ""}><small>${token.key}</small>${escapeHtml(token.text)}</button>`;
    }).join("");
    return `<div class="ordering-builder">
      <div class="ordering-label"><span>解答</span><span>${selected.length} / ${question.tokens.length}語</span></div>
      <div class="ordering-sentence">
        ${question.lead ? `<span class="fixed-words">${escapeHtml(question.lead)}</span>` : ""}
        <div class="order-answer" aria-label="並べた語句">${selectedHtml}</div>
        ${question.tail ? `<span class="fixed-words">${escapeHtml(question.tail)}</span>` : ""}
      </div>
      <div class="order-bank" aria-label="語群">${bankHtml}</div>
      <button type="button" class="order-clear text-button"${selected.length ? "" : " disabled"}>並びをクリア</button>
    </div>`;
  }

  function formatPassageText(section, paragraph) {
    let text = escapeHtml(paragraph);
    if (section.passageType === "dialogue") {
      text = text
        .replace(/\s+(?=(?:Akira|Mika):)/g, "<br><br>")
        .replace(/\b(Akira|Mika):/g, '<strong class="speaker">$1</strong>');
    }
    return text
      .replace(/\{\{w\|([^}]+)\}\}/g, '<span class="passage-wave">$1</span>')
      .replace(/\{\{u(\d+)\|([^}]+)\}\}/g, '<span class="passage-mark"><span class="mark-no">($1)</span><span class="mark-text">$2</span></span>')
      .replace(/\{\{b(\d+)\}\}/g, '<span class="passage-blank">（<span class="blank-no">$1</span>）</span>');
  }

  function passagePanelHtml(section) {
    if (!section.passage?.length) return "";
    const blocks = section.passage.map((paragraph, index) => {
      const label = section.passageLabels?.[index] || (section.passageType === "dialogue" ? `DIALOGUE ${String(index + 1).padStart(2, "0")}` : `PARAGRAPH ${index + 1}`);
      return `<article class="passage-block">
        <p class="passage-label">${escapeHtml(label)}</p>
        <p class="passage-text">${formatPassageText(section, paragraph)}</p>
      </article>`;
    }).join("");
    return `<section class="passage-panel" aria-label="英文本文">
      <header class="passage-head">
        <div><p class="eyebrow">READING PASSAGE</p><h3>英文本文</h3></div>
        <p>右の設問と行き来しながら読めます</p>
      </header>
      <div class="passage-body">${blocks}</div>
    </section>`;
  }

  function questionHtml(question, number) {
    const record = state[question.id] || {};
    const orderedKeys = question.type === "ordering" ? orderingSelection(question, record) : [];
    const resultClass = record.graded ? (record.correct ? " correct" : " wrong") : "";
    const support = question.support ? `<p class="support">${question.support}</p>` : "";
    let control = "";

    if (!question.type || question.type === "choice") {
      const selected = record.draft ?? record.answer;
      control = `<div class="choices">${question.options.map((option, index) => {
        const checked = Number(selected) === index ? " checked" : "";
        return `<label class="choice"><input type="radio" name="${question.id}" value="${index}"${checked}><span class="choice-mark">${choiceLabels[index] || index + 1}</span><span>${option}</span></label>`;
      }).join("")}</div>`;
    } else if (question.type === "text") {
      control = `<label class="text-answer"><span>解答</span><input type="text" value="${escapeAttr(record.draft ?? record.answer ?? "")}" autocomplete="off" spellcheck="false"></label>`;
    } else if (question.type === "fields") {
      const values = record.draft || record.answer || [];
      control = `<div class="field-row">${question.fields.map((field, index) => `<label class="text-answer"><span>${field.label}</span><input type="text" data-field="${index}" value="${escapeAttr(values[index] || "")}" autocomplete="off" spellcheck="false"></label>`).join("")}</div>`;
    } else if (question.type === "ordering") {
      control = orderingHtml(question, orderedKeys);
    } else if (question.type === "self") {
      control = `<label class="writing-answer"><span>自分の解答</span><textarea rows="5">${escapeHtml(record.draft ?? record.answer ?? "")}</textarea></label>`;
    }

    const result = renderResult(question, record);
    const buttonLabel = question.type === "self"
      ? "採点基準を確認"
      : question.type === "ordering" && !record.graded
        ? `完成した英文を採点（${orderedKeys.length}/${question.tokens.length}）`
        : (record.graded ? "この問題をもう一度採点" : "この問題を採点");
    const gradeDisabled = question.type === "ordering" && orderedKeys.length < question.tokens.length ? " disabled" : "";
    return `<article class="question-card${resultClass}" data-question="${question.id}">
      <div class="question-head"><span>問${number}</span>${record.graded ? `<em>${record.correct ? "正解" : "要復習"}</em>` : ""}</div>
      <p class="question-prompt">${question.prompt}</p>
      ${support}
      ${control}
      <div class="question-actions"><button type="button" class="grade-question"${gradeDisabled}>${buttonLabel}</button></div>
      ${result}
    </article>`;
  }

  function renderResult(question, record) {
    if (question.type === "self") {
      if (!record.reveal) return "";
      const checks = question.rubric.map((item, index) => {
        const checked = record.rubric?.[index] ? " checked" : "";
        return `<label class="rubric-item"><input type="checkbox" data-rubric="${index}"${checked}><span>${item}</span></label>`;
      }).join("");
      return `<div class="result-box neutral">
        <p class="result-label">採点基準</p>${checks}
        <p class="model-answer"><strong>解答例</strong>${question.model}</p>
        <div class="self-actions"><button type="button" class="ghost self-grade" data-result="retry">要復習</button><button type="button" class="self-grade" data-result="ok">基準を満たした</button></div>
      </div>`;
    }
    if (!record.graded) return "";
    return `<div class="result-box ${record.correct ? "ok" : "ng"}">
      <p class="result-label">${record.correct ? "正解" : "不正解"}</p>
      <p>${question.explanation}</p>
    </div>`;
  }

  function renderSection() {
    const section = exam.sections.find((item) => item.id === currentSectionId) || firstPracticeSection();
    currentSectionId = section.id;
    const visibleQuestions = reviewOnly
      ? section.questions.filter((question) => isComplete(question) && !isCorrect(question))
      : section.questions;
    const passage = passagePanelHtml(section);
    let body = "";
    if (!section.questions.length) {
      body = `<div class="empty-state"><strong>音源待ち</strong><p>${section.description}</p><p>放送原稿または音声ファイルを追加すれば、この章も通常の演習にできます。</p></div>`;
    } else if (!visibleQuestions.length) {
      body = `<div class="empty-state"><strong>この章に要復習問題はありません</strong><p>静かな章です。通常表示へ戻すと全問を確認できます。</p></div>`;
    } else {
      body = `<div class="question-list">${visibleQuestions.map((question) => questionHtml(question, section.questions.indexOf(question) + 1)).join("")}</div>`;
    }

    $("#sectionView").innerHTML = `<section class="section-header panel">
      <div><p class="eyebrow">${section.label}</p><h2>${section.title}</h2><p>${section.description}</p></div>
      ${sourceImagesHtml(section)}
    </section>
    ${audioPlayerHtml(section)}
    <div class="practice-layout${passage ? " has-passage" : ""}">${passage}${body}</div>
    ${section.questions.length ? `<nav class="section-nav" aria-label="大問の移動"><button id="prevSectionBtn" class="ghost" type="button">← 前の大問へ</button><button id="nextSectionBtn" class="next-section-action" type="button">次の大問へ →</button></nav>` : ""}`;

    bindSection(section, visibleQuestions);
  }

  function bindSection(section, visibleQuestions) {
    $$(".question-card").forEach((card) => {
      const question = section.questions.find((item) => item.id === card.dataset.question);
      card.addEventListener("input", () => saveDraft(question, card));
      $(".grade-question", card).addEventListener("click", () => gradeQuestion(question, card));
      $$(".order-add", card).forEach((button) => button.addEventListener("click", () => addOrderingToken(question, button.dataset.key)));
      $$(".order-selected", card).forEach((button) => button.addEventListener("click", () => removeOrderingToken(question, Number(button.dataset.orderIndex))));
      $(".order-clear", card)?.addEventListener("click", () => setOrderingSelection(question, []));
      $$(".self-grade", card).forEach((button) => button.addEventListener("click", () => selfGrade(question, button.dataset.result)));
      $$("[data-rubric]", card).forEach((checkbox) => checkbox.addEventListener("change", () => saveRubric(question, card)));
    });

    $$(".image-button").forEach((button) => button.addEventListener("click", () => showImage(section, button.dataset.image, button.dataset.imageIndex)));
    $("#prevSectionBtn")?.addEventListener("click", () => moveSection(-1));
    $("#nextSectionBtn")?.addEventListener("click", () => moveSection(1));
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[character]);
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }

  function readAnswer(question, card) {
    if (!question.type || question.type === "choice") {
      const checked = $("input[type=radio]:checked", card);
      return checked ? Number(checked.value) : null;
    }
    if (question.type === "text") return $("input[type=text]", card).value;
    if (question.type === "fields") return question.fields.map((_, index) => $(`[data-field="${index}"]`, card).value);
    if (question.type === "ordering") return $$(".order-selected", card).map((button) => button.dataset.key);
    if (question.type === "self") return $("textarea", card).value;
    return null;
  }

  function saveDraft(question, card) {
    state[question.id] = { ...(state[question.id] || {}), draft: readAnswer(question, card) };
    saveState();
  }

  function hasAnswer(question, answer) {
    if (!question.type || question.type === "choice") return answer !== null;
    if (question.type === "fields") return answer.every((value) => normalize(value));
    if (question.type === "ordering") return answer.length === question.tokens.length;
    return Boolean(normalize(answer));
  }

  function checkAnswer(question, answer) {
    if (!question.type || question.type === "choice") return answer === question.answer;
    if (question.type === "text") return question.answers.map(normalize).includes(normalize(answer));
    if (question.type === "fields") return question.fields.every((field, index) => field.answers.map(normalize).includes(normalize(answer[index])));
    if (question.type === "ordering") return question.answerOrder.every((key, index) => answer[index] === key);
    return false;
  }

  function setOrderingSelection(question, selection) {
    const record = { ...(state[question.id] || {}), draft: selection };
    delete record.answer;
    delete record.graded;
    delete record.correct;
    delete record.at;
    state[question.id] = record;
    saveState();
    rerender();
  }

  function addOrderingToken(question, key) {
    const selected = orderingSelection(question, state[question.id] || {});
    if (!selected.includes(key)) selected.push(key);
    setOrderingSelection(question, selected);
  }

  function removeOrderingToken(question, index) {
    const selected = orderingSelection(question, state[question.id] || {});
    selected.splice(index, 1);
    setOrderingSelection(question, selected);
  }

  function gradeQuestion(question, card, shouldRender = true) {
    const answer = readAnswer(question, card);
    if (question.type === "self") {
      state[question.id] = { ...(state[question.id] || {}), answer, draft: answer, reveal: true };
    } else if (hasAnswer(question, answer)) {
      state[question.id] = { ...(state[question.id] || {}), answer, draft: answer, graded: true, correct: checkAnswer(question, answer), at: new Date().toISOString() };
    }
    saveState();
    if (shouldRender) rerender();
  }

  function saveRubric(question, card) {
    const record = state[question.id] || {};
    record.rubric = $$('[data-rubric]', card).map((checkbox) => checkbox.checked);
    state[question.id] = record;
    saveState();
  }

  function selfGrade(question, result) {
    const record = state[question.id] || {};
    record.selfChecked = true;
    record.selfResult = result;
    state[question.id] = record;
    saveState();
    rerender();
  }

  function openSection(id) {
    currentSectionId = id;
    localStorage.setItem(LAST_SECTION_KEY, id);
    rerender();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function moveSection(delta) {
    const index = exam.sections.findIndex((section) => section.id === currentSectionId);
    const next = exam.sections[(index + delta + exam.sections.length) % exam.sections.length];
    openSection(next.id);
  }

  function continueStudy() {
    const questions = allQuestions();
    const hasIncomplete = questions.some((question) => !isComplete(question));
    const hasWrong = questions.some((question) => isComplete(question) && !isCorrect(question));
    if (!hasIncomplete && hasWrong) reviewOnly = true;
    openSection(nextStudySection().id);
  }

  function showImage(section, filename, index) {
    $("#imageTitle").textContent = `${section.label}・原画像 ${index}`;
    $("#imagePreview").src = `./data/${filename}`;
    $("#imageDialog").showModal();
  }

  function rerender() {
    renderProgress();
    renderSectionList();
    renderSection();
    $("#reviewBtn").textContent = reviewOnly ? "すべての問題に戻る" : "間違えた問題を復習";
  }

  $("#continueBtn").addEventListener("click", continueStudy);
  $("#reviewBtn").addEventListener("click", () => { reviewOnly = !reviewOnly; rerender(); });
  $("#printBtn").addEventListener("click", () => window.print());
  $("#resetBtn").addEventListener("click", () => {
    if (!window.confirm("この端末に保存した解答と進捗をすべて削除します。よろしいですか？")) return;
    state = {};
    saveState();
    rerender();
  });
  $("#closeImageBtn").addEventListener("click", () => $("#imageDialog").close());
  $("#imageDialog").addEventListener("click", (event) => {
    if (event.target === $("#imageDialog")) $("#imageDialog").close();
  });

  rerender();
})();
