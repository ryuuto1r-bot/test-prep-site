type Card = {
  id: number;
  category: string;
  q: string;
  a: string;
  t: string;
  e: string;
};

type WordEntry = [word: string, meaning: string, note?: string];

const lesson6 = "第2章 Part 3: Earthquake Information";
const lesson6Part4 = "第2章 Part 4: The Ring of Fire";
const lesson9Part1 = "第3章 Part 1: Combination and Decomposition";
const lesson9Part2 = "第3章 Part 2: Oxidation and Reduction";
const lesson9Part3 = "第3章 Part 3: Oxidizing Agents and Reducing Agents";
const workbook9Part1 = "ワークブック (Lesson 9 Part 1)";
const lesson6Words = "単語・アクセント (第2章)";
const lesson9Words = "単語・アクセント (第3章)";

let nextId = 1;

const makeWordCards = (category: string, entries: WordEntry[]): Card[] =>
  entries.map(([word, meaning, note]) => ({
    id: nextId++,
    category,
    q: `【新出単語】\n${word}`,
    a: meaning,
    t: `${word}：${meaning}`,
    e: note || "本文の新出単語。英語を見て意味を言えるように確認します。",
  }));

const makeCard = (
  category: string,
  q: string,
  a: string,
  t: string,
  e: string,
): Card => ({ id: nextId++, category, q, a, t, e });

const unsortedFlashcardsData: Card[] = [
  ...makeWordCards(lesson6Words, [
    ["lag", "遅れ、タイムラグ"],
    ["arrival", "到着"],
    ["seismometer", "地震計"],
    ["install", "～を設置する"],
    ["meteorological", "気象の", "Japan Meteorological Agency は「気象庁」。"],
    ["agency", "機関、庁", "Japan Meteorological Agency は「気象庁」。"],
    ["analyze", "～を分析する"],
    ["alert", "警報"],
    ["possibility", "可能性"],
    ["informed", "情報に通じた", "stay informed で「情報を得続ける」。"],
    ["emergency", "緊急事態"],
    ["site", "場所、敷地"],
    ["advance", "前進", "in advance で「事前に」。"],
    ["destructive", "破壊的な"],
    ["shallow", "浅い"],
    ["fault", "断層"],
  ]),
  makeCard(
    lesson6,
    "【穴埋め】\n最近、私たちの学校にエアコンが設置されました。\nAir conditioners ( ) ( ) ( ) in our school recently.",
    "have been installed",
    "最近、私たちの学校にエアコンが設置されました。",
    "現在完了の受動態 have been installed を使います。",
  ),
  makeCard(
    lesson6,
    "【穴埋め】\n初期微動の時間は震源地からの距離に比例する。\nThe duration of preliminary tremors ( ) ( ) ( ) the distance from the epicenter.",
    "is proportional to",
    "初期微動の時間は震源地からの距離に比例する。",
    "be proportional to ～ で「～に比例する」。",
  ),
  makeCard(
    lesson6,
    "【穴埋め】\nどのような非常事態でも常に情報を得ていることがとても重要だ。\nIt is very important to ( ) ( ) during any emergency situation.",
    "stay informed",
    "どのような非常事態でも常に情報を得ていることがとても重要だ。",
    "stay informed で「情報を得続ける」。",
  ),
  makeCard(
    lesson6,
    "【穴埋め】\nその電子顕微鏡を使うには事前に許可を得なければなりません。\nYou must get permission to use the electron microscope ( ) ( ).",
    "in advance",
    "その電子顕微鏡を使うには事前に許可を得なければなりません。",
    "in advance で「事前に、あらかじめ」。",
  ),
  makeCard(
    lesson6,
    "【穴埋め】\n何か質問がございましたらお知らせください。\nPlease ( ) ( ) ( ) if you have any questions.",
    "let us know",
    "何か質問がございましたらお知らせください。",
    "let + 人 + 動詞の原形で「人に～させる」。",
  ),
  makeCard(
    lesson6,
    "[並べ替え]\nこの駅の構内と周辺にはコンビニはありません。\n[ are / around / convenience stores / in / no / or / there / this station ].",
    "[ There are no convenience stores in or around this station ]",
    "この駅の構内と周辺にはコンビニはありません。",
    "There are no ... と in or around this station を組み合わせます。",
  ),
  makeCard(
    lesson6,
    "[並べ替え]\n気象台は県内に大雪警報を発令した。\n[ a / an alert / for / heavy / issued / snowfall / the observatory ] in the prefecture.",
    "[ The observatory issued an alert for a heavy snowfall ]",
    "気象台は県内に大雪警報を発令した。",
    "issue an alert for ～ で「～の警報を発令する」。",
  ),
  makeCard(
    lesson6,
    "【英作文】\nモチベーションを保ち続けることは容易ではありません。",
    "It is not easy to stay motivated.",
    "モチベーションを保ち続けることは容易ではありません。",
    "It is not easy to do と stay motivated を使います。",
  ),
  makeCard(
    lesson6,
    "【英作文】\n地球温暖化の問題は長いあいだ議論されている。",
    "The problem of global warming has been discussed for a long time.",
    "地球温暖化の問題は長いあいだ議論されている。",
    "現在完了の受動態 has been discussed を使います。",
  ),

  ...makeWordCards(lesson6Words, [
    ["layer", "層"],
    ["structure", "構造"],
    ["mantle", "マントル"],
    ["crust", "地殻"],
    ["shell", "殻"],
    ["thick", "厚い"],
    ["tectonic", "構造上の", "tectonic plates は「プレート」。"],
    ["locate", "位置する"],
    ["volcano", "火山"],
    ["responsible", "原因となっている、責任がある"],
    ["subduction", "沈み込み"],
    ["zone", "地帯、区域"],
    ["underneath", "～の下に"],
    ["bend", "曲がる"],
    ["archipelago", "群島、列島"],
    ["warp", "ゆがむ、反る"],
    ["rebound", "反発する、跳ね返る"],
    ["boundary", "境界"],
  ]),
  makeCard(
    lesson6Part4,
    "【穴埋め】\n地球は多層構造を持ち、それにはコア、マントル、そして地殻が含まれる。\nThe earth has a ( ) ( ), ( ) the core, mantle and crust.",
    "layered structure, including",
    "地球は多層構造を持ち、それにはコア、マントル、そして地殻が含まれる。",
    "layered structure と、例示を加える including を使います。",
  ),
  makeCard(
    lesson6Part4,
    "【穴埋め】\n環太平洋火山帯では世界中の地震の90パーセントが起きている。\nThe Pacific Ring of Fire ( ) ( ) ( ) 90 percent of the world's earthquakes.",
    "is responsible for",
    "環太平洋火山帯では世界中の地震の90パーセントが起きている。",
    "be responsible for ～ で「～の原因である」。",
  ),
  makeCard(
    lesson6Part4,
    "【穴埋め】\n地球上のすべてのものをその中心方向に引っ張るのが地球の重力である。\n( ) ( ) the earth's gravity ( ) pulls everything on the earth to the center of it.",
    "It is, that",
    "地球上のすべてのものをその中心方向に引っ張るのが地球の重力である。",
    "It is A that ... の強調構文です。",
  ),
  makeCard(
    lesson6Part4,
    "【穴埋め】\n電磁ノイズはしばしば装置の異常動作を引き起こす。\nElectro-magnetic noise often ( ) the device ( ) operate incorrectly.",
    "causes, to",
    "電磁ノイズはしばしば装置の異常動作を引き起こす。",
    "cause + 目的語 + to do で「～に…させる」。",
  ),
  makeCard(
    lesson6Part4,
    "[並べ替え]\nゆがみが限界に達すると、プレートははね返り、亀裂を生む。\nWhen the warping reaches its limit, [ and / breaks / faults / produce / rebounds / the plate / to ].",
    "[ the plate breaks and rebounds to produce faults ]",
    "ゆがみが限界に達すると、プレートははね返り、亀裂を生む。",
    "breaks and rebounds のあとに、目的を表す to produce faults が続きます。",
  ),
  makeCard(
    lesson6Part4,
    "[並べ替え]\n消化システムの最終段階は大腸で、そこでは食物の水分が吸収される。\nThe last part of the digestive system is the large intestine, [ absorbed / from / is / the food / water / where ].",
    "[ where water from the food is absorbed ]",
    "消化システムの最終段階は大腸で、そこでは食物の水分が吸収される。",
    "場所を補足する関係副詞 where と受動態 is absorbed を使います。",
  ),
  makeCard(
    lesson6Part4,
    "[並べ替え]\n地球の大気層にはオゾン層があり、そこでは紫外線が吸収される。\nThe earth's atmospheric layer has the ozone layer, [ absorbed / are / rays / the / ultraviolet / where ].",
    "[ where the ultraviolet rays are absorbed ]",
    "地球の大気層にはオゾン層があり、そこでは紫外線が吸収される。",
    "where のあとを the ultraviolet rays are absorbed の語順にします。",
  ),
  makeCard(
    lesson6Part4,
    "[並べ替え]\nプラスチックの定規を頭でこすると髪が定規にくっつく。これは静電気が引き起こされているからだ。\n[ a plastic ruler / head / on / rub / you / your / when ], your hair sticks to the ruler. [ a / because / been / created / electricity / has / is / static / this ].",
    "[ When you rub a plastic ruler on your head ] ... [ This is because a static electricity has been created ]",
    "プラスチックの定規を頭でこすると髪が定規にくっつく。これは静電気が引き起こされているからだ。",
    "2つの語群を順番に完成させます。解答は原稿の模範解答に準拠しています。",
  ),

  ...makeWordCards(lesson9Words, [
    ["combination", "結合、化合"],
    ["decomposition", "分解"],
    ["reactant", "反応物"],
    ["desire", "～を強く望む", "desired は「目的の、望ましい」。"],
    ["synthesis", "合成"],
    ["formation", "形成"],
    ["synthesize", "～を合成する"],
    ["derive", "～を引き出す、由来する"],
  ]),
  makeCard(
    lesson9Part1,
    "【読解・穴埋め】\n( ) are substances that change into other substances through chemical reaction.",
    "Reactants",
    "反応物とは、化学反応によって別の物質に変化する物質である。",
    "本文の reactants の定義を確認する問題です。",
  ),
  makeCard(
    lesson9Part1,
    "【読解・穴埋め】\n( ) are substances that are formed as a result of chemical reaction.",
    "Products",
    "生成物とは、化学反応の結果として作られる物質である。",
    "本文の products の定義を確認する問題です。",
  ),
  makeCard(
    lesson9Part1,
    "【読解・穴埋め】\nThe ( ) of a compound are different from those of the elements it contains.",
    "properties",
    "化合物の性質は、その化合物に含まれる元素の性質とは異なる。",
    "those は前にある properties を指します。",
  ),
  makeCard(
    lesson9Part1,
    "【読解・穴埋め】\nCombination and ( ) are examples of major chemical reactions.",
    "decomposition",
    "結合反応と分解反応は主要な化学反応の例である。",
    "本文で対比される2種類の反応を確認します。",
  ),
  makeCard(
    lesson9Part1,
    "【読解・穴埋め】\nThe process of chemical reactions to produce a desirable material is called ( ).",
    "synthesis",
    "目的の物質を作る化学反応のプロセスは合成と呼ばれる。",
    "synthesis は「合成」。",
  ),
  makeCard(
    lesson9Part1,
    "【穴埋め】\n化学反応とは、そこで一つあるいは複数の物質が他の物質に変換されるプロセスである。\nA chemical reaction is a process ( ) ( ) one or more substances are converted ( ) different substances.",
    "in which, into",
    "化学反応とは、そこで一つあるいは複数の物質が他の物質に変換されるプロセスである。",
    "process in which ... と convert A into B を使います。",
  ),
  makeCard(
    lesson9Part1,
    "【穴埋め】\n反応物と生成物は化学的な元素か化合物のどちらかである。\nReactants and products are either chemical ( ) ( ) ( ).",
    "elements or compounds",
    "反応物と生成物は化学的な元素か化合物のどちらかである。",
    "either A or B で「AかBのどちらか」。",
  ),
  makeCard(
    lesson9Part1,
    "【穴埋め】\n様々な原料に由来する化学物質から多くの物質が合成される。\nMany materials are ( ) from chemicals ( ) from various sources.",
    "synthesized, derived",
    "様々な原料に由来する化学物質から多くの物質が合成される。",
    "are synthesized と、chemicals を修飾する derived from を使います。",
  ),
  makeCard(
    lesson9Part1,
    "【穴埋め】\n分解反応によって、物質は二つ以上のより単純な物質に分かれる。\nThrough ( ) reaction, a substance splits into ( ) ( ) ( ) simpler substances.",
    "decomposition, two or more",
    "分解反応によって、物質は二つ以上のより単純な物質に分かれる。",
    "decomposition reaction と two or more を使います。",
  ),
  makeCard(
    lesson9Part1,
    "[並べ替え]\n元素を互いに違うものにしているのは何ですか。\n[ different / each / elements / from / makes / other / what ]?",
    "[ What makes elements different from each other ]",
    "元素を互いに違うものにしているのは何ですか。",
    "疑問詞 What が主語になり、makes elements different と続きます。",
  ),
  makeCard(
    lesson9Part1,
    "[並べ替え]\nどの酵素がデンプンを糖に分解するのに使われるのですか。\nWhich enzyme is used to [ break / down / into / starch / sugar ]?",
    "[ break down starch into sugar ]",
    "どの酵素がデンプンを糖に分解するのに使われるのですか。",
    "break down A into B で「AをBに分解する」。",
  ),
  makeCard(
    lesson9Part1,
    "[並べ替え]\n整備不良は重大な事故を引き起こす故障につながる場合があります。\nImproper maintenance may [ trouble / accidents / causing / in / result / serious ].",
    "[ result in trouble causing serious accidents ]",
    "整備不良は重大な事故を引き起こす故障につながる場合があります。",
    "result in ～ で「～につながる」。causing serious accidents が trouble を説明します。",
  ),

  ...makeWordCards(lesson9Words, [
    ["oxidation", "酸化"],
    ["reduction", "還元"],
    ["removal", "除去、取り除くこと"],
    ["redox", "酸化還元", "redox reaction は「酸化還元反応」。"],
    ["oxide", "酸化物"],
    ["explain", "～を説明する"],
    ["accept", "～を受け取る"],
    ["oxidize", "～を酸化する"],
    ["reduce", "～を還元する、減らす"],
    ["loss", "喪失、失うこと"],
  ]),
  makeCard(
    lesson9Part2,
    "【読解・穴埋め】\nOxidation can be explained as ( ) of oxygen to a substance as well as a ( ) of electrons.",
    "addition, loss",
    "酸化は、物質への酸素の付加および電子の喪失として説明できる。",
    "酸素では addition、電子では loss が酸化を表します。",
  ),
  makeCard(
    lesson9Part2,
    "【読解・穴埋め】\nReduction can be explained as ( ) of oxygen from a substance as well as a ( ) of electrons.",
    "removal, gain",
    "還元は、物質からの酸素の除去および電子の獲得として説明できる。",
    "酸素では removal、電子では gain が還元を表します。",
  ),
  makeCard(
    lesson9Part2,
    "【読解・穴埋め】\nThe set of oxidation reaction and reduction reaction is called ( ) ( ) for short.",
    "redox reaction",
    "酸化反応と還元反応の組み合わせは、略してレドックス反応と呼ばれる。",
    "redox は reduction と oxidation を組み合わせた短縮語です。",
  ),
  makeCard(
    lesson9Part2,
    "【読解・穴埋め】\nCopper(II) oxide is formed when the copper is heated in ( ) at ( ) temperature.",
    "air, high",
    "銅を空気中で高温に加熱すると酸化銅(II)が形成される。",
    "原稿の模範解答は air, high。本文では at around 300 to 800°C と説明されています。",
  ),
  makeCard(
    lesson9Part2,
    "【読解・穴埋め】\nWhen the copper(II) oxide is heated in ( ) gas, ( ) copper and water are produced.",
    "hydrogen, metal",
    "酸化銅(II)を水素ガス中で加熱すると、金属の銅と水が生成される。",
    "本文の hydrogen gas と copper metal に対応します。",
  ),
  makeCard(
    lesson9Part2,
    "【選択】\nA body above the ground has potential energy. ( ), it has stored energy due to its position.\n選択肢：In other words / In terms of / In case of / On the contrary / or",
    "In other words",
    "地面より上にある物体は位置エネルギーを持つ。言い換えれば、位置によって蓄えられたエネルギーを持つ。",
    "前文を言い換えるので In other words。",
  ),
  makeCard(
    lesson9Part2,
    "【選択】\n( ) culture, European countries are completely different from America.\n選択肢：In other words / In terms of / In case of / On the contrary / or",
    "In terms of",
    "文化の観点では、ヨーロッパ諸国はアメリカとは完全に異なる。",
    "In terms of ～ で「～の観点では」。",
  ),
  makeCard(
    lesson9Part2,
    "【選択】\n( ) nuclear accident, large numbers of people will have to migrate to other places.\n選択肢：In other words / In terms of / In case of / On the contrary / or",
    "In case of",
    "原子力事故の場合、多数の人々が別の場所へ移住しなければならない。",
    "In case of ～ で「～の場合」。",
  ),
  makeCard(
    lesson9Part2,
    "【選択】\nLearning is not boring. ( ), learning something new can be one of the most enjoyable activities.\n選択肢：In other words / In terms of / In case of / On the contrary / or",
    "On the contrary",
    "学ぶことは退屈ではない。それどころか、新しいことを学ぶのは最も楽しい活動の一つになり得る。",
    "反対内容を強める On the contrary を使います。",
  ),
  makeCard(
    lesson9Part2,
    "【選択】\nNatto, ( ) fermented whole soybeans is a traditional food of Japan.\n選択肢：In other words / In terms of / In case of / On the contrary / or",
    "or",
    "納豆、すなわち発酵させた丸大豆は、日本の伝統食である。",
    "or はここで「すなわち」という言い換えを表します。",
  ),
  makeCard(
    lesson9Part2,
    "【withを使って1文にする】\n次の2文を、付帯状況を表す with を使って1文にしましょう。\n\nOur district still has five teams that could win the title.\nFour games remain.\n\n和訳：4試合を残し、当地区には優勝する可能性のあるチームがまだ5つある。",
    "Our district still has five teams that could win the title with four games remaining.",
    "4試合を残し、当地区には優勝する可能性のあるチームがまだ5つある。",
    "Four games remain. の four games を with の後ろに置き、remain を現在分詞 remaining に変えます。",
  ),
  makeCard(
    lesson9Part2,
    "【withを使って1文にする】\n次の2文を、付帯状況を表す with を使って1文にしましょう。\n\nThe city's growth has been accelerating.\nIts population has increased 20 percent in the last decade.\n\n和訳：その都市の成長は加速し続けており、この10年間に20パーセント人口が増えた。",
    "The city's growth has been accelerating with its population increasing 20 percent in the last decade.",
    "その都市の成長は加速し続けており、この10年間に20パーセント人口が増えた。",
    "Its population has increased ... の its population を with の後ろに置き、動詞を increasing に変えます。",
  ),

  ...makeWordCards(lesson9Words, [
    ["zinc", "亜鉛"],
    ["displace", "～を置き換える、置換する"],
    ["donate", "～を与える、供与する"],
    ["agent", "物質、剤", "reducing agent は「還元剤」、oxidizing agent は「酸化剤」。"],
    ["peroxide", "過酸化物", "hydrogen peroxide は「過酸化水素」。"],
    ["halogen", "ハロゲン"],
  ]),
  makeCard(
    lesson9Part3,
    "【読解・穴埋め】\n( ) ( ) can explain reactions between substances which do not involve oxygen.",
    "Electron transfer / Loss and gain of electrons",
    "電子移動、または電子の喪失と獲得によって、酸素が関与しない物質間の反応を説明できる。",
    "原稿では Electron transfer または Loss and gain of electrons が模範解答です。",
  ),
  makeCard(
    lesson9Part3,
    "【読解・穴埋め】\nA ( ) agent is a substance that ( ) an electron to another substance in a redox reaction.",
    "reducing, donates",
    "還元剤とは、酸化還元反応で別の物質に電子を与える物質である。",
    "電子を与える側が reducing agent。動詞は donates。",
  ),
  makeCard(
    lesson9Part3,
    "【読解・穴埋め】\nAn ( ) agent is a substance that ( ) an electron from another substance in a redox reaction.",
    "oxidizing, accepts",
    "酸化剤とは、酸化還元反応で別の物質から電子を受け取る物質である。",
    "電子を受け取る側が oxidizing agent。動詞は accepts。",
  ),
  makeCard(
    lesson9Part3,
    "【読解・穴埋め】\nIn a copper(II) sulfate solution with a zinc plate in it, the zinc becomes ( ) charged ( ) and the copper becomes the ( ) ( ), respectively.",
    "positively, ions, oxidizing, agent",
    "亜鉛板を入れた硫酸銅(II)水溶液では、亜鉛は正に帯電したイオンになり、銅は酸化剤になる。",
    "原稿の模範解答の順番は positively, ions, oxidizing, agent。",
  ),
  makeCard(
    lesson9Part3,
    "【長文穴埋め】\nThe reason (1) the alkali metals have high (2) power is that they have one electron in their outermost shell. The only one electron in the outermost shell is very easy to (3) to atoms of another substance. This means that the alkaline metals (4) themselves easily, (5) means that they are highly reactive.",
    "(1) why / (2) reducing / (3) be donated / (4) oxidize / (5) which",
    "アルカリ金属が強い還元力を持つ理由を説明する文章です。",
    "原稿の模範解答を番号順に表示しています。",
  ),
  makeCard(
    lesson9Part3,
    "[並べ替え]\n約0.9パーセントの塩化ナトリウム水溶液は生理食塩水と呼ばれる。\n[ 0.9 percent / an / approximately / called / is / of / sodium chloride / solution ] physiological saline solution.",
    "[ An approximately 0.9 percent solution of sodium chloride is called ]",
    "約0.9パーセントの塩化ナトリウム水溶液は生理食塩水と呼ばれる。",
    "An approximately 0.9 percent solution of ... を主語にし、is called と続けます。",
  ),
  makeCard(
    lesson9Part3,
    "[並べ替え]\n二酸化硫黄や窒素酸化物のような化合物が空気中に放出されると、酸性雨の原因となる。\nAcid rain is caused when [ and / are / into / like / compounds / sulfur dioxide / nitrogen oxides / released / the air ].",
    "[ compounds like sulfur dioxide and nitrogen oxides are released into the air ]",
    "二酸化硫黄や窒素酸化物のような化合物が空気中に放出されると、酸性雨の原因となる。",
    "compounds like A and B を主語にして、are released into the air と続けます。",
  ),

  makeCard(lesson9Words, "【アクセント】\nreactant", "re-AC-tant", "reactant：反応物", "大文字部分 AC を最も強く読みます。"),
  makeCard(lesson9Words, "【アクセント】\nproduct", "PROD-uct", "product：生成物", "大文字部分 PROD を最も強く読みます。"),
  makeCard(lesson9Words, "【アクセント】\ncombination", "com-bi-NA-tion", "combination：結合、化合", "大文字部分 NA を最も強く読みます。"),
  makeCard(lesson9Words, "【アクセント】\ndecomposition", "de-com-po-SI-tion", "decomposition：分解", "大文字部分 SI を最も強く読みます。"),
  makeCard(lesson9Words, "【アクセント】\nsynthesize", "SYN-the-size", "synthesize：～を合成する", "大文字部分 SYN を最も強く読みます。"),
  makeCard(lesson9Words, "【アクセント】\nderive", "de-RIVE", "derive：～を引き出す、由来する", "大文字部分 RIVE を最も強く読みます。"),
  makeCard(workbook9Part1, "【単語選択】\nIn a ( ) reaction, substances combine to form a compound.", "combination", "結合反応では、物質が結合して化合物を作る。", "combination reaction は「結合反応」。"),
  makeCard(workbook9Part1, "【単語選択】\nIn a ( ) reaction, a compound separates into the simpler substances.", "decomposition", "分解反応では、化合物がより単純な物質に分かれる。", "decomposition reaction は「分解反応」。"),
  makeCard(workbook9Part1, "【単語選択】\nA ( ) is a substance that participates in a chemical reaction.", "reactant", "反応物とは、化学反応に参加する物質である。", "reactant は「反応物」。"),
  makeCard(workbook9Part1, "【単語選択】\nA ( ) is a substance formed in a chemical reaction.", "product", "生成物とは、化学反応で形成される物質である。", "product は「生成物」。"),
  makeCard(workbook9Part1, "【単語選択】\n( ) is the natural or artificial production of a substance by a chemical or biological reaction.", "Synthesis", "合成とは、化学反応または生物学的反応による物質の自然または人工的な生成である。", "Synthesis は文頭なので大文字で始めます。"),
  makeCard(
    workbook9Part1,
    "【Grammar】\n融点は固体の物質が液体に変わる温度である。\nThe melting point is the temperature ( ) ( ) a solid substance changes into liquid.\n= The melting point is the temperature ( ) a solid substance changes into liquid.\n= The melting point is ( ) a solid substance changes into liquid.",
    "at which / where (or when) / when (or where)",
    "融点は固体の物質が液体に変わる温度である。",
    "場所・時を表す先行詞 temperature を at which、where、when で説明します。",
  ),
  makeCard(
    workbook9Part1,
    "【Grammar】\n血液が循環する道筋の一つは肺循環で、そこで血液は酸素を取り入れ二酸化炭素を放出する。\nOne of the routes ( ) blood ( ) is through the lungs, ( ) it takes in oxygen and releases carbon dioxide.",
    "through which, circulates, where",
    "血液が循環する道筋の一つは肺循環で、そこで血液は酸素を取り入れ二酸化炭素を放出する。",
    "routes through which blood circulates と、lungs を受ける where を使います。",
  ),
  makeCard(workbook9Part1, "【和訳】\nThe origin is the point where x-axis and y-axis cross.", "原点はX軸とY軸が交差する点である。", "原点はX軸とY軸が交差する点である。", "where 以下が the point を説明します。"),
  makeCard(workbook9Part1, "【和訳】\nPaper and rubber are insulators, through which electricity doesn't flow.", "紙とゴムは絶縁体であり、それらを通して電気は流れない。", "紙とゴムは絶縁体であり、それらを通して電気は流れない。", "through which は「それらを通して」。"),
  makeCard(workbook9Part1, "【和訳】\nSodium chloride, which is known as table salt, is an ionic compound with the chemical formula NaCl.", "塩化ナトリウムは食塩として知られており、化学式NaClで表されるイオン化合物である。", "塩化ナトリウムは食塩として知られており、化学式NaClで表されるイオン化合物である。", "which is known as table salt が Sodium chloride を補足説明します。"),
  makeCard(workbook9Part1, "【Composition ①】\n化学反応：( ) ( )", "chemical reaction", "化学反応", "chemical reaction をひとかたまりで覚えます。"),
  makeCard(workbook9Part1, "【Composition ②】\nよく知られている化学反応のひとつに結合反応がある。\nOne of the major ( ) ( ) ( ) a ( ) ( ).", "chemical reactions is, combination reaction", "よく知られている化学反応のひとつに結合反応がある。", "One of the major chemical reactions is a combination reaction. の形です。"),
  makeCard(workbook9Part1, "【Composition ③】\n結合して1つの生成物を作る：( ) to ( ) a product", "combine, form", "結合して1つの生成物を作る。", "combine to form a product を覚えます。"),
  makeCard(workbook9Part1, "【Composition ④】\n2つ以上の反応物が結びついて1つの生成物になる。\nTwo or more ( ) ( ) to ( ) a ( ).", "reactants combine, form, product", "2つ以上の反応物が結びついて1つの生成物になる。", "Two or more reactants combine to form a product. の形です。"),
  makeCard(workbook9Part1, "【Composition ⑤】\nよく知られている化学反応のひとつに結合反応があり、そこでは2つ以上の反応物が結合して、1つの生成物を作る。\nOne of ( ) ( ) ( ) ( ) a ( ) ( ), ( ) two or more ( ) ( ) to ( ) a ( ).", "the major chemical reactions is, combination reaction, where, reactants combine, form, product", "よく知られている化学反応のひとつに結合反応があり、そこでは2つ以上の反応物が結合して、1つの生成物を作る。", "where 以下で combination reaction の内容を説明します。"),
  makeCard(workbook9Part1, "【Expressions】\n反応の結果作られる物質は生成物と呼ばれる。\nThe substances that are formed ( ) ( ) ( ) ( ) the reaction are called the products.", "as a result of", "反応の結果作られる物質は生成物と呼ばれる。", "as a result of ～ で「～の結果として」。"),
  makeCard(workbook9Part1, "【Expressions】\n様々な原料に由来する化学物質から合成される物質は多数ある。\nMany materials are synthesized from chemicals ( ) ( ) various sources.", "derived from", "様々な原料に由来する化学物質から合成される物質は多数ある。", "derived from ～ が chemicals を後ろから修飾します。"),
];

const categoryOrder = [
  lesson6,
  lesson6Part4,
  lesson9Part1,
  lesson9Part2,
  lesson9Part3,
  workbook9Part1,
  lesson6Words,
  lesson9Words,
];
const categoryPosition = new Map(categoryOrder.map((category, index) => [category, index]));

const flashcardsData = [...unsortedFlashcardsData].sort(
  (left, right) =>
    (categoryPosition.get(left.category) ?? Number.MAX_SAFE_INTEGER) -
    (categoryPosition.get(right.category) ?? Number.MAX_SAFE_INTEGER),
);

export default flashcardsData;
