type SentencePair = [english: string, japanese: string];

const circledNumbers = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬"];
let nextSentenceId = 1;

const makeSentenceGroup = (category: string, pairs: SentencePair[]) =>
  pairs.map(([en, jp], index) => ({
    id: nextSentenceId++,
    category,
    no: circledNumbers[index] || String(index + 1),
    en,
    jp,
  }));

const sentenceData = [
  ...makeSentenceGroup("Lesson 6: Earthquake Information（地震情報）", [
    [
      "When an earthquake occurs, the distance from the epicenter can be determined by the time lag between the arrival of the P- and S-waves.",
      "地震が発生すると、震央からの距離は、P波とS波の到着のタイムラグ（時間差）によって決定することができます。",
    ],
    [
      "This time lag is proportional to the distance from the epicenter.",
      "このタイムラグは震央からの距離に比例します。",
    ],
    [
      "Thousands of seismometers have been installed in many locations all over Japan.",
      "何千もの地震計が日本中の多くの場所に設置されています。",
    ],
    [
      "When an earthquake occurs somewhere in or around Japan, the Japan Meteorological Agency analyzes the data from the seismometers near the focus in order to issue an alert called the earthquake early warning.",
      "日本国内やその周辺のどこかで地震が発生すると、気象庁は「緊急地震速報」と呼ばれる警報を発令するために、震源近くの地震計からのデータを分析します。",
    ],
    [
      "This warning lets us know the possibility of strong tremors caused by the secondary wave.",
      "この警報は、S波（第二波）によって引き起こされる強い揺れの可能性を私たちに知らせてくれます。",
    ],
    [
      "However, if you are very close to the epicenter, the strong tremors will arrive before the warning.",
      "しかし、もし震央に非常に近い場所にいる場合、強い揺れは警報よりも前に到達してしまいます。",
    ],
    [
      "So, if you are inside of a building and feel a strong earthquake, you should immediately get under a table or desk to protect yourself from falling objects.",
      "そのため、もし建物の中にいて強い地震を感じたら、落下物から身を守るために、すぐにテーブルや机の下に隠れるべきです。",
    ],
    [
      "It is very important to stay informed during any emergency situation.",
      "どのような緊急事態においても、常に情報を得ておくことが非常に重要です。",
    ],
    [
      "In addition, we have to learn in advance about the underground conditions of the site we live in.",
      "さらに、私たちが住んでいる場所の地下の状態について、事前に学んでおかなければなりません。",
    ],
    [
      "We already know how destructive an earthquake can be when it has a shallow inland focus and occurs along an active fault.",
      "浅い直下型の震源を持ち、活断層に沿って地震が発生した場合、それがどれほど破壊的なものになり得るかを私たちはすでに知っているのです。",
    ],
  ]),

  ...makeSentenceGroup("Lesson 6 Part 4: The Ring of Fire（環太平洋火山帯）", [
    [
      "The earth has a layered structure, including the core, mantle and crust.",
      "地球は、コア（核）、マントル、地殻を含む多層構造を持っています。",
    ],
    [
      "The crust, which is the closest to the earth's surface, is not a single solid shell but rather broken up into huge, thick plates called tectonic plates.",
      "地球の表面に最も近い地殻は、一つの硬い殻ではなく、テクトニック・プレートと呼ばれる巨大で厚いプレートに分かれています。",
    ],
    [
      "So, what is it that makes Japan so seismically active?",
      "では、日本をこれほど地震が活発な国にしているのは何なのでしょうか。",
    ],
    [
      "Japan is located along the Pacific Ring of Fire.",
      "日本は環太平洋火山帯（リング・オブ・ファイア）に沿って位置しています。",
    ],
    [
      "According to scientists, the Ring of Fire includes about 75 percent of the world's active volcanoes and is also responsible for 90 percent of the world's earthquakes.",
      "科学者たちによると、この火山帯には世界の活火山の約75パーセントが含まれており、また世界の地震の90パーセントの原因でもあります。",
    ],
    [
      "This is because the Ring is the location of most of the earth's subduction zones, where one plate bends and slides underneath the other, curving down into the mantle.",
      "これは、この火山帯が地球の沈み込み帯の大部分を占めており、そこで一方のプレートが曲がり、もう一方のプレートの下に滑り込んでマントルへと沈み込んでいるからです。",
    ],
    [
      "Around the Japanese archipelago, the plates on the Pacific side are sinking under the plates on the continental side.",
      "日本列島の周辺では、太平洋側のプレートが大陸側のプレートの下に沈み込んでいます。",
    ],
    [
      "This causes the plate on the continental side to warp.",
      "これによって大陸側のプレートにゆがみが生じます。",
    ],
    [
      "When the warping reaches its limit, the plate breaks and rebounds to produce faults and cause earthquakes.",
      "ゆがみが限界に達すると、プレートが壊れて反発し、断層を生じさせて地震を引き起こすのです。",
    ],
    [
      "Although major faults mainly form at the plate boundaries between tectonic plates, earthquakes occur not only at the boundaries but also inside the plates.",
      "主要な断層は主にテクトニック・プレート間の境界に形成されますが、地震は境界だけでなくプレートの内部でも発生します。",
    ],
  ]),

  ...makeSentenceGroup("Lesson 9 Part 1: Combination and Decomposition（結合と分解）", [
    [
      "A chemical reaction is a process in which one or more substances are converted to one or more different substances.",
      "化学反応とは、一つまたは複数の物質が、異なる物質に変換されるプロセスのことです。",
    ],
    [
      "The substances that react together are called the reactants, and the substances that are formed as a result of the reaction are called the products.",
      "互いに反応する物質は反応物と呼ばれ、反応の結果として作られる物質は生成物と呼ばれます。",
    ],
    [
      "Reactants and products are either chemical elements or compounds.",
      "反応物と生成物は、化学的な元素か化合物のいずれかです。",
    ],
    [
      "The atoms in a compound are chemically combined by strong forces called bonds.",
      "化合物の中の原子は、結合と呼ばれる強い力によって化学的に結びついています。",
    ],
    [
      "This makes the properties of a compound different from the elements it contains.",
      "このため、化合物の性質は、そこに含まれる元素の性質とは異なります。",
    ],
    [
      "One of the major chemical reactions is a combination reaction, where two or more reactants combine to form a single product.",
      "主要な化学反応の一つに結合（化合）反応があり、そこでは2つ以上の反応物が結合して単一の生成物を作ります。",
    ],
    [
      "When a combination reaction is used to produce a desired product, that process is called the synthesis of that product.",
      "目的の生成物を作るために結合反応が用いられる場合、そのプロセスはその生成物の合成と呼ばれます。",
    ],
    [
      "Synthesis can result in the formation of more than one product.",
      "合成によって複数の生成物が形成される場合もあります。",
    ],
    [
      "Many materials are synthesized from chemicals derived from various sources.",
      "多くの物質は、さまざまな原料に由来する化学物質から合成されています。",
    ],
    [
      "Another major chemical reaction is decomposition, where a substance splits into two or more simpler substances.",
      "もう一つの主要な化学反応は分解であり、そこでは物質が2つ以上のより単純な物質に分かれます。",
    ],
    [
      "In some cases, the reactant breaks down into its component elements, and in other cases, they may break down into smaller molecules.",
      "反応物が構成元素に分解される場合もあれば、より小さな分子に分解される場合もあります。",
    ],
  ]),

  ...makeSentenceGroup("Lesson 9 Part 2: Oxidation and Reduction（酸化と還元）", [
    [
      "Oxidation is the reaction of a substance with oxygen or the addition of oxygen to a substance in a reaction.",
      "酸化とは、物質が酸素と反応すること、あるいは反応において物質に酸素が付加されることです。",
    ],
    [
      "Reduction, on the other hand, is the reaction of the removal of oxygen from a substance.",
      "一方、還元とは、物質から酸素を取り除く反応のことです。",
    ],
    [
      "Oxidation and reduction always occur at the same time.",
      "酸化と還元は常に同時に起こります。",
    ],
    [
      "The set of these reactions is called the oxidation-reduction reaction, or redox reaction for short.",
      "これらの反応のセットは酸化還元反応、略してレドックス（redox）反応と呼ばれます。",
    ],
    ["Let's take an example.", "例を挙げてみましょう。"],
    [
      "When you heat copper in air at around 300 to 800°C, the copper reacts with oxygen and a black material called copper(II) oxide is formed.",
      "空気中で約300〜800℃で銅を加熱すると、銅は酸素と反応し、酸化銅(II)と呼ばれる黒い物質が形成されます。",
    ],
    ["This is an oxidation reaction.", "これが酸化反応です。"],
    [
      "Then when you heat the copper(II) oxide in hydrogen gas, the hydrogen combines with the oxygen of the copper(II) oxide and produces water, with copper metal remaining.",
      "次に、その酸化銅(II)を水素ガス中で加熱すると、水素が酸化銅(II)の酸素と結びついて水を生成し、金属の銅が残ります。",
    ],
    ["This process is reduction.", "このプロセスが還元です。"],
    [
      "Oxidation and reduction can also be explained in terms of electrons.",
      "酸化と還元は、電子の観点からも説明することができます。",
    ],
    [
      "In case of the redox reaction of copper(II) oxide in terms of electron transfer, copper loses electrons and the electrons that copper loses are accepted by the oxygen.",
      "電子移動の観点から酸化銅(II)の酸化還元反応を見た場合、銅は電子を失い、その銅が失った電子を酸素が受け取ります。",
    ],
    [
      "In this case, the copper is oxidized, and the oxygen is reduced.",
      "この場合、銅は酸化され、酸素は還元されたことになります。",
    ],
    [
      "In other words, oxidation is a loss of electrons and reduction is a gain of electrons.",
      "言い換えれば、酸化とは電子を失うことであり、還元とは電子を得ることなのです。",
    ],
  ]),

  ...makeSentenceGroup("Lesson 9 Part 3: Oxidizing and Reducing Agents（酸化剤と還元剤）", [
    [
      "Oxidation and reduction as loss and gain of electrons between the substances can explain reactions in which oxygen is not involved.",
      "物質間での電子の喪失と獲得としての酸化と還元は、酸素が関与しない反応を説明することができます。",
    ],
    [
      "Let's look at the example of the redox reaction of copper(II) sulfate, which consists of copper and sulfate instead of oxygen.",
      "酸素の代わりに銅と硫酸塩（硫酸イオン）から構成される、硫酸銅(II)の酸化還元反応の例を見てみましょう。",
    ],
    [
      "When we place a zinc plate into a solution of copper(II) sulfate, both copper and sulfate exist as ions.",
      "硫酸銅(II)の水溶液の中に亜鉛板を入れると、銅も硫酸塩もイオンとして存在しています。",
    ],
    [
      "Then, zinc metal displaces copper ions, producing copper metal and a solution of zinc sulfate.",
      "その後、金属の亜鉛が銅イオンと置き換わり、金属の銅と硫酸亜鉛の水溶液を作り出します。",
    ],
    [
      "You see that the zinc atoms have lost electrons and have formed positively charged zinc ions.",
      "亜鉛原子が電子を失って、プラスに帯電した亜鉛イオンを形成しているのがわかるでしょう。",
    ],
    [
      "At the same time, when the zinc atoms have been oxidized, the zinc atoms have reduced the copper ions.",
      "同時に、亜鉛原子が酸化されたとき、その亜鉛原子は銅イオンを還元しているのです。",
    ],
    [
      "In a redox reaction, the substance which donates the electrons to another element or ions is called a reducing agent.",
      "酸化還元反応において、他の元素やイオンに電子を与える物質は還元剤と呼ばれます。",
    ],
    [
      "Alkali metals are the strongest reducing agents because they lose electrons very easily.",
      "アルカリ金属は非常に容易に電子を失うため、最強の還元剤となります。",
    ],
    [
      "The substance which accepts the electrons is called an oxidizing agent.",
      "電子を受け取る物質は酸化剤と呼ばれます。",
    ],
    [
      "Common oxidizing agents are oxygen, hydrogen peroxide and the halogens.",
      "一般的な酸化剤には、酸素、過酸化水素、およびハロゲンがあります。",
    ],
    [
      "In the example of the redox reaction of copper(II) sulfate above, zinc is the reducing agent and copper is the oxidizing agent.",
      "上記の硫酸銅(II)の酸化還元反応の例では、亜鉛が還元剤であり、銅が酸化剤です。",
    ],
  ]),
];

export default sentenceData;
