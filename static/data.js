window.ENGLISH_EXAM = {
  id: "exam-1",
  title: "高校2年生 2026年度 7月8月 理解度確認テスト",
  note: "高校2年生対象・2026年度7月8月実施の理解度確認テスト。",
  sections: [
    {
      id: "I",
      label: "第I問",
      title: "リスニング",
      kind: "listening",
      description: "音声を聞き、A〜Cの設問に答えます。冊子の指示どおり、英語は各2回読まれます。",
      audio: { file: "2026-16-1020.mp3", duration: "8分34秒" },
      sourceImages: ["PXL_20260716_094557609.jpg", "PXL_20260716_094645080.jpg"],
      questions: [
        { id: "I-A-1", type: "fields", prompt: "【A 問1】He stood [　　 ] [　　 ] his car.", support: "各空所には1単語ずつ入ります。", fields: [{label:"1語目",answers:["next"]},{label:"2語目",answers:["to"]}], explanation: "He stood next to his car.（彼は車の隣に立っていた。）" },
        { id: "I-A-2", type: "fields", prompt: "【A 問2】Did you [　　 ] [　　 ] [　　 ] today?", support: "各空所には1単語ずつ入ります。", fields: [{label:"1語目",answers:["get"]},{label:"2語目",answers:["up"]},{label:"3語目",answers:["early"]}], explanation: "Did you get up early today?（今日は早起きしましたか。）" },
        { id: "I-B-1", prompt: "【B 問1】読み上げられる英語の内容として最も適切なものを選びなさい。", options: ["The speaker asks the other person to talk more slowly.", "The speaker tells the other person to stop speaking.", "The speaker understands everything the other person says.", "The speaker wants the other person to speak faster."], answer: 0, explanation: "相手にもっとゆっくり話してほしいと頼む内容です。" },
        { id: "I-B-2", prompt: "【B 問2】読み上げられる英語の内容として最も適切なものを選びなさい。", options: ["Friday isn’t the last day for Hanako’s homework.", "Hanako can’t finish her homework by Friday.", "Hanako finished her homework last Friday.", "The deadline for Hanako’s homework is Friday."], answer: 3, explanation: "花子の宿題の締切が金曜日である、という内容です。" },
        { id: "I-B-3", prompt: "【B 問3】読み上げられる英語の内容として最も適切なものを選びなさい。", options: ["Ken left home earlier than usual because the train was late.", "Ken left home early because he wanted to catch the train.", "Ken left home early, but he missed the train.", "Ken missed the train because he left home too late."], answer: 2, explanation: "ケンは早く家を出たものの、電車に乗り遅れたという内容です。" },
        { id: "I-C-1", prompt: "【C 問1】What is Jack worried about?", options: ["He is going to lose his next tennis match.", "His little brother walks faster than Kenta.", "Kenta is angry with him because of his joke.", "Kenta wants to quit the tennis club."], answer: 2, explanation: "ジャックは、自分の冗談のせいでケンタが怒っていることを心配しています。" },
        { id: "I-C-2", prompt: "【C 問2】Which of the following is true about Kenta’s behavior today?", options: ["He didn’t come to school today because he was tired.", "He didn’t have lunch with Jack, and didn’t talk to him.", "He didn’t talk to Jack or anyone else today.", "He sat with Jack at lunch, but didn’t talk to him."], answer: 3, explanation: "ケンタは昼食時にジャックと一緒に座りましたが、彼とは話しませんでした。" },
        { id: "I-C-3", prompt: "【C 問3】What is Jack going to do after school?", options: ["He will apologize to Kenta by text message.", "He will apologize to Kenta in person for what he said yesterday.", "He will ask Kenta to apologize for what Kenta said yesterday.", "He will ask Rina to apologize to Kenta face-to-face."], answer: 1, explanation: "放課後、昨日言ったことをケンタに直接謝る予定です。" }
      ]
    },
    {
      id: "II-A",
      label: "第II問 A",
      title: "文法・語法",
      description: "空所に入る最も適切な語句を選びます。",
      sourceImages: ["PXL_20260716_094715343.jpg", "PXL_20260716_094732889.jpg"],
      questions: [
        { id: "II-A-1", prompt: "Andrew (　　) in the hospital for ten days when I visited him.", options: ["had been", "has been", "is", "were"], answer: 0, explanation: "訪問した時点より前から10日間入院していたので、過去完了 had been。" },
        { id: "II-A-2", prompt: "About thirty scientists (　　) that meeting.", options: ["attended", "attended at", "attended in", "attended with"], answer: 0, explanation: "attend は他動詞なので前置詞を置かず、attend the meeting とします。" },
        { id: "II-A-3", prompt: "(　　) you tell me where the elevator is? — Sure.", options: ["Could", "Might", "Should", "Were"], answer: 0, explanation: "丁寧な依頼は Could you ...?。" },
        { id: "II-A-4", prompt: "An elderly person (　　) in the traffic accident.", options: ["killed", "killing", "was killed", "was killing"], answer: 2, explanation: "人が事故で『亡くなった』ので受動態 was killed。" },
        { id: "II-A-5", prompt: "The Paralympic Games (　　) in just one month.", options: ["began", "beginning", "have begun", "will begin"], answer: 3, explanation: "in just one month は未来を示すため will begin。" },
        { id: "II-A-6", prompt: "Mr. Sasaki didn’t blame Bob (　　) the accident.", options: ["for", "of", "under", "with"], answer: 0, explanation: "blame A for B で『BのことでAを責める』。" },
        { id: "II-A-7", prompt: "This work must (　　) by next Wednesday.", options: ["be doing", "be done", "do", "is done"], answer: 1, explanation: "must の後で受動態にするため must be done。" },
        { id: "II-A-8", prompt: "Cheese is made (　　) milk.", options: ["by", "from", "into", "of"], answer: 1, explanation: "原料の形が変わる場合は be made from。" },
        { id: "II-A-9", prompt: "My mother (　　) at the museum since she was thirty.", options: ["had worked", "has been working", "is working", "worked"], answer: 1, explanation: "since と現在までの継続から現在完了進行形。" },
        { id: "II-A-10", prompt: "That bag doesn’t (　　) your skirt.", options: ["come", "get", "match", "suit"], answer: 2, explanation: "物どうしが『合う』は match。suit は主に服装などが人に似合う場合に使います。" },
        { id: "II-A-11", prompt: "Kevin saw two boys (　　) soccer in the park.", options: ["practiced", "practicing", "to be practiced", "to practice"], answer: 1, explanation: "see O doing で、動作の途中を見たことを表します。" },
        { id: "II-A-12", prompt: "The dog was (　　) my mother.", options: ["taken care by", "taken care of", "taken care of by", "taking care of by"], answer: 2, explanation: "take care of を受動態にして was taken care of by。" },
        { id: "II-A-13", prompt: "You (　　) speak ill of others.", options: ["don’t ought to", "not ought to", "ought not to", "ought to not"], answer: 2, explanation: "ought to の否定は ought not to。" },
        { id: "II-A-14", prompt: "Becky will (　　) on the stage around this time tomorrow.", options: ["be danced", "be dancing", "dances", "have been danced"], answer: 1, explanation: "未来のある時点で進行中なので will be dancing。" },
        { id: "II-A-15", prompt: "I would rather cook for myself than (　　) out.", options: ["eat", "eaten", "eating", "to eat"], answer: 0, explanation: "would rather A than B では A と B の動詞の形をそろえます。" }
      ]
    },
    {
      id: "II-B",
      label: "第II問 B",
      title: "語句整序",
      description: "語群をタップし、正しい英文になるようにすべての語句を並べます。",
      sourceImages: ["PXL_20260716_094748690.jpg"],
      questions: [
        { id: "II-B-1", type: "ordering", prompt: "約2週間、雪が降っていません。", lead: "", tail: "about two weeks.", tokens: [{key:"ア",text:"been"},{key:"イ",text:"for"},{key:"ウ",text:"has"},{key:"エ",text:"no"},{key:"オ",text:"snow"},{key:"カ",text:"there"}], answerOrder: ["カ","ウ","ア","エ","オ","イ"], explanation: "There has been no snow for about two weeks.（X＝ウ、Y＝エ）" },
        { id: "II-B-2", type: "ordering", prompt: "この曲を聴くと、いつも幸せな気分になる。", lead: "", tail: ".", tokens: [{key:"ア",text:"always"},{key:"イ",text:"happy"},{key:"ウ",text:"makes"},{key:"エ",text:"me"},{key:"オ",text:"song"},{key:"カ",text:"this"}], answerOrder: ["カ","オ","ア","ウ","エ","イ"], explanation: "This song always makes me happy.（X＝オ、Y＝エ）" },
        { id: "II-B-3", type: "ordering", prompt: "彼は7時に家を出たので、8時までにオフィスに着いたはずです。", lead: "He left home at seven, so he", tail: "eight.", tokens: [{key:"ア",text:"arrived"},{key:"イ",text:"at"},{key:"ウ",text:"by"},{key:"エ",text:"have"},{key:"オ",text:"should"},{key:"カ",text:"the office"}], answerOrder: ["オ","エ","ア","イ","カ","ウ"], explanation: "He left home at seven, so he should have arrived at the office by eight.（X＝ア、Y＝ウ）" },
        { id: "II-B-4", type: "ordering", prompt: "あなたの娘さんはすぐにスキーが上手にできるようになるでしょう。", lead: "", tail: "well soon.", tokens: [{key:"ア",text:"able"},{key:"イ",text:"be"},{key:"ウ",text:"ski"},{key:"エ",text:"to"},{key:"オ",text:"will"},{key:"カ",text:"your daughter"}], answerOrder: ["カ","オ","イ","ア","エ","ウ"], explanation: "Your daughter will be able to ski well soon.（X＝オ、Y＝ア）" },
        { id: "II-B-5", type: "ordering", prompt: "その本は、エマの誕生日に祖父が贈ったものです。", lead: "", tail: "her grandfather on her birthday.", tokens: [{key:"ア",text:"by"},{key:"イ",text:"Emma"},{key:"ウ",text:"given"},{key:"エ",text:"that book"},{key:"オ",text:"to"},{key:"カ",text:"was"}], answerOrder: ["エ","カ","ウ","オ","イ","ア"], explanation: "That book was given to Emma by her grandfather on her birthday.（X＝ウ、Y＝イ）" }
      ]
    },
    {
      id: "II-C",
      label: "第II問 C",
      title: "同意文完成",
      description: "示された最初の文字を省略せず、空所に入る1語を入力します。",
      sourceImages: ["PXL_20260716_094755241.jpg"],
      questions: [
        { id: "II-C-1", type: "text", prompt: "Mike is a member of the computer club. → Mike [ b　　 ] to the computer club.", answers: ["belongs"], explanation: "belong to ... で『…に所属している』。" },
        { id: "II-C-2", type: "text", prompt: "How about going shopping in Ikebukuro? → [ S　　 ] we go shopping in Ikebukuro?", answers: ["shall"], explanation: "Shall we ...? で提案を表します。" },
        { id: "II-C-3", type: "text", prompt: "What is the English name for that bird? → What is that bird [ c　　 ] in English?", answers: ["called"], explanation: "be called ... で『…と呼ばれる』。" },
        { id: "II-C-4", type: "text", prompt: "All you have to do is submit this document. → You [ o　　 ] have to submit this document.", answers: ["only"], explanation: "all ... have to do is ... は only have to ... と言い換えられます。" },
        { id: "II-C-5", type: "text", prompt: "I hope you have a wonderful time in Japan! → [ M　　 ] you have a wonderful time in Japan!", answers: ["may"], explanation: "May S V ...! で願望・祈願を表します。" }
      ]
    },
    {
      id: "III-A",
      label: "第III問 A",
      title: "長文読解：Slovakia’s Car Industry",
      description: "本文を読み、最も適切な選択肢を選びます。",
      passageType: "dialogue",
      sourceImages: ["PXL_20260716_094811328.jpg", "PXL_20260716_094818544.jpg", "PXL_20260716_094832292.jpg", "PXL_20260716_094847793.jpg"],
      passage: [
        "Akira: Did you know {{u1|Slovakia}} makes a huge number of cars? Mika: Slovakia? I only know it’s in Europe. Is it big? Akira: Not really. It’s a small country in Central Europe, with about 5.4 million people. But it produces close to one million cars every year.",
        "Mika: One million? That sounds impossible for such a small country. Akira: It surprised me too. The key point is “per capita.” Slovakia makes more cars per person than any other country in the world.",
        "Mika: Why does Slovakia produce so many cars? Akira: Several major global car companies have large {{u2|plants}} in Slovakia—Volkswagen, Kia, Stellantis, and Jaguar Land Rover. They choose Slovakia for a few reasons. First, its {{b3}}. Slovakia is in the center of Europe, so it’s easier to send cars and parts to nearby countries. Second, its skilled workers. Many people there are good at manufacturing and technical work.",
        "Mika: But if the workers are skilled, wouldn’t it be expensive? Akira: Compared to Western Europe, labor costs are still lower. So for companies, it can be a good balance: quality work at a lower cost.",
        "Mika: Does the government do anything to support this? Akira: Yes. That’s another reason. The Slovak government has offered incentives to attract investment, like support for building factories or training workers. That helped create a strong ‘car {{u4|ecosystem}},’ not just the factories themselves.",
        "Mika: What do you mean by ‘ecosystem’? Akira: I mean related businesses. If car companies come, parts makers and logistics companies also come. More companies need more services—transportation, maintenance, and even food businesses around the factories. Mika: {{w|つまり、自動車産業は、間接的にもたくさんの仕事を生み出しているのね。}} Akira: Exactly. And salaries in car manufacturing are often higher than the national average, so for some people, it improves their living standards.",
        "Mika: That sounds like a success story. Akira: Yeah, it does. But there are {{u5|challenges}} too. The global car industry is changing fast. Electric cars are becoming more popular, and new technologies like automation and self-driving systems are developing quickly.",
        "Mika: If cars change, factories must change too, right? Akira: Exactly. Slovakia needs to adapt—training workers for electric vehicle production, improving infrastructure, and making sure the country stays attractive for new investments. Mika: So their strength could become a weakness if they don’t adapt.",
        "Akira: That’s a good way to put it. Slovakia can be proud of being the world’s top car producer per capita, but to keep that position, it has to keep learning and updating its industry. Mika: Interesting. It shows that size isn’t everything—strategy, skills, and good planning can make a country {{b6}}."
      ],
      questions: [
        { id: "III-A-1", prompt: "下線部(1)に関して、スロバキアの説明として最も適切なものを選べ。", options: ["Roughly one million people live in Slovakia.", "Slovakia produces nearly 5.4 million cars every year.", "The annual number of cars bought in Slovakia is close to one million.", "The population of Slovakia is approximately 5.4 million."], answer: 3, explanation: "本文に人口は約540万人とあります。約100万台は年間の自動車生産台数です。" },
        { id: "III-A-2", prompt: "下線部(2) plants の意味に最も近いものを選べ。", options: ["cars", "factories", "gardens", "trees"], answer: 1, explanation: "自動車会社が持つ large plants は『大規模な工場』です。" },
        { id: "III-A-3", prompt: "空所(3)に入るのに最も適切なものを選べ。", options: ["education", "generation", "location", "tradition"], answer: 2, explanation: "直後に『ヨーロッパの中心にある』という地理的利点が説明されています。" },
        { id: "III-A-4", prompt: "下線部(4) ecosystem の意味に最も近いものを選べ。", options: ["a government program that directly pays workers in car factories", "a group of related businesses that compete with car companies", "a natural environment where many kinds of plants and animals live together", "a network of related businesses and services that support the car industry"], answer: 3, explanation: "部品・物流・運輸・整備など、自動車産業を支える関連企業のネットワークを指します。" },
        { id: "III-A-5", prompt: "下線部(5) challenges の具体的内容として最も適切なものを選べ。", options: ["Salaries in car manufacturing are above the national average.", "Slovakia must keep pace with rapid changes in the global car industry.", "Slovakia needs to resist new trends in the global car industry.", "The government has difficulty attracting enough skilled workers."], answer: 1, explanation: "EV・自動化・自動運転などの急速な変化への適応が課題です。" },
        { id: "III-A-6", prompt: "空所(6)に入るのに最も適切なものを選べ。", options: ["stand by", "stand for", "stand out", "stand up"], answer: 2, explanation: "stand out は『際立つ、目立つ』。" },
        { id: "III-A-7", prompt: "本文の内容と一致するものを選べ。", options: ["High wages in car manufacturing help improve people’s living standards.", "Labor costs are higher than in Western Europe.", "Slovakia makes more cars in total than any other country.", "Government incentives are offered exclusively to domestic companies."], answer: 0, explanation: "自動車製造の賃金は国内平均より高く、生活水準の改善につながるとあります。" }
      ]
    },
    {
      id: "III-B",
      label: "第III問 B",
      title: "長文読解：記述",
      description: "第III問Aの本文を使う記述問題です。",
      sourceImages: ["PXL_20260716_094914936.jpg", "PXL_20260716_095149090.jpg"],
      questions: [
        { id: "III-B-1", type: "fields", prompt: "So, the car industry has [ c　　 ] many jobs [ i　　 ] as well.", support: "第III問Aの本文中の波線部「つまり、自動車産業は、間接的にもたくさんの仕事を生み出しているのね。」に、ほぼ相当する意味になるようにします。与えられた文字で始まる語を、各空所に1語ずつ入れてください。", fields: [{label:"c...",answers:["created"]},{label:"i...",answers:["indirectly"]}], explanation: "『自動車産業は間接的にも多くの仕事を生み出した』なので created / indirectly。" },
        { id: "III-B-2", type: "fields", prompt: "『さまざまな要因により、日本の1人当たりのGDPは比較的低い。』", support: "Japan’s GDP [ 2語 ] is relatively low, [ 1語 ] to a variety of factors.", fields: [{label:"2語",answers:["per capita"]},{label:"1語",answers:["due"]}], explanation: "本文中の per capita と、due to を用います。" }
      ]
    },
    {
      id: "IV-A",
      label: "第IV問 A",
      title: "長文読解：Time Perception",
      description: "子どもと大人で時間の感じ方が異なる理由を扱う文章です。",
      passageLabels: ["INTRO", "MEMORY", "ATTENTION", "EMOTION", "CONCLUSION"],
      sourceImages: ["PXL_20260716_094947375.jpg", "PXL_20260716_094954633.jpg", "PXL_20260716_095111710.jpg"],
      passage: [
        "Children often say that summer vacation feels like it lasts forever, while adults feel that the same amount of time disappears in a flash. Research in cognitive psychology and neuroscience suggests that children and adults perceive the passage of time in different ways.",
        "One major factor is memory. Children have less life experience, so many daily events feel new to them: a first school trip, a new sport, a new friend group, or even a new route home. When experiences are novel, the brain tends to store them with more detail. Later, when children look back, the period feels ‘long’ because it contains many distinct memories. Adults, however, often have more routine in their lives. If many days are similar, fewer clear memory ‘markers’ are created, and time can feel shorter in hindsight.",
        "Attention matters in how time feels in the moment. Children usually focus more on what is happening right now. They notice small changes around them and react strongly to immediate experiences. Adults often split their attention between the present and the future, such as when thinking about schedules, work responsibilities, and plans. When attention is scattered or set on ‘what’s next,’ the brain processes fewer details of the current moment. As a result, time can feel like it is moving faster.",
        "Studies also show that emotional states can affect time perception. When people feel bored or anxious, time may seem to drag. When they are excited or deeply engaged, time can feel quicker. Children’s emotional reactions are often more intense and direct than adults’, so this effect can be stronger for children. For example, ( A ) may feel painfully slow for children, while ( B ) can make an hour disappear.",
        "These ideas suggest that time perception is not controlled by a single ‘clock’ in the brain. Instead, it is shaped by how richly we store experiences, how much we notice, and how strongly we feel. Understanding this can help teachers and parents: giving students more meaningful, varied experiences may not only improve learning but also make their school life feel fuller and more memorable."
      ],
      questions: [
        { id: "IV-A-1", prompt: "Why does the period feel ‘long’ when children look back?", options: ["Because children have many clear, separate memories of novel experiences.", "Because children have more free time than adults.", "Because children have rich life experiences.", "Because repeated routines create fewer memory markers."], answer: 0, explanation: "新しい経験は詳細に保存され、区別できる記憶が多く残るためです。" },
        { id: "IV-A-2", prompt: "What is the result of adults splitting their attention between the present and the future?", options: ["They focus on schedules and time passes more slowly.", "They focus more on the present and time passes faster.", "They notice fewer details of the present and time may seem to pass faster.", "They split attention among fewer things and time passes quickly."], answer: 2, explanation: "現在の細部を処理する量が減り、時間が速く進むように感じます。" },
        { id: "IV-A-3", prompt: "Choose the best pair for blanks A and B.", options: ["A: doing dull homework / B: watching a boring film", "A: playing a sport you love / B: waiting in a long line", "A: reading a favorite comic / B: watching a funny cartoon", "A: sitting through a boring lesson / B: playing an exciting game"], answer: 3, explanation: "退屈な時間は遅く、夢中になる時間は速く感じます。" },
        { id: "IV-A-4", prompt: "Which best describes the main topic?", options: ["How adults manage time effectively", "How children and adults spend summer vacations", "Why adults feel time pass more slowly than children", "Why children and adults experience the passage of time differently"], answer: 3, explanation: "記憶・注意・感情の三点から、子どもと大人の時間感覚の違いを説明しています。" },
        { id: "IV-A-5", prompt: "本文と一致する文はいくつあるか。", support: "A 子どもの強い感情は大人以上に時間感覚へ影響しうる。 B 認知心理学と神経科学の研究は中止された。 C 時間感覚は年齢を通じほぼ変わらない。 D 夏休みが長く感じるのは子どもの自由時間が多いからだ。 E 時間感覚は記憶・注意・感情・性格で形づくられる。", options: ["0", "1", "2", "3", "4", "5"], answer: 1, explanation: "一致するのはAのみ。Eには本文にない personality が加わっています。" }
      ]
    },
    {
      id: "IV-B",
      label: "第IV問 B",
      title: "長文読解：内容説明",
      description: "最終段落の下線部を日本語で説明します。採点基準と解答例を見て自己採点します。",
      sourceImages: ["PXL_20260716_095026343.jpg"],
      questions: [
        { id: "IV-B-1", type: "self", prompt: "『これを理解することは、教師や保護者の助けになるだろう』の『これ』の内容を日本語で説明しなさい。", rubric: ["経験をどれだけ豊かに記憶するか", "現在の出来事にどれだけ注意を向けるか", "どれだけ強く感情を抱くか", "これらにより時間の感じ方が形づくられること"], model: "私たちが経験をどれだけ豊かに記憶し、現在にどれだけ注意を向け、どれだけ強く感情を抱くかによって、時間の感じ方が形づくられるということ。" }
      ]
    }
  ]
};
