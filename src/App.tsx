import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, BookOpen, ListChecks, Languages } from 'lucide-react';
import sentenceData from './sentenceData';
import updatedFlashcardsData from './flashcardsData';

// フラッシュカードの全データ
const legacyFlashcardsData = [
  // --- 第1章 Part 1 ---
  { id: 1, category: "第1章 Part 1: Types of Waves", q: "私たちはその物理学者がノーベル賞を受賞したことを誇りに思う。\nWe are proud of the physicist's (　　) (　　) the Nobel Prize.", a: "having, won", t: "私たちはその物理学者がノーベル賞を受賞したことを誇りに思う。", e: "前置詞 of の目的語として動名詞。誇る時点より受賞が過去なので完了形動名詞(having + 過去分詞)にする。" },
  { id: 2, category: "第1章 Part 1: Types of Waves", q: "その理論はまだ検証中です。\nThe theory (　　) still (　　) (　　).", a: "is, being, examined", t: "その理論はまだ検証中です。", e: "「検証されているところだ」という進行形の受動態(be動詞 + being + 過去分詞)。" },
  { id: 3, category: "第1章 Part 1: Types of Waves", q: "この部屋はとても蒸し暑い。窓を開けてもいいかい。\nIt's so hot and humid here in this room. Do you mind my (　　) the window?", a: "opening", t: "この部屋はとても蒸し暑い。私が窓を開けてもいいですか（気にしますか）。", e: "mind は動名詞を目的語にとる。my は「私が」という動名詞の意味上の主語。" },
  { id: 4, category: "第1章 Part 1: Types of Waves", q: "そのロボットはまるで人間のように流暢に話す。\nThat robot speaks so fluently as if it (　　) human.", a: "were", t: "そのロボットはまるで人間のように流暢に話す。", e: "as if + 仮定法過去。現在の事実に反するため be動詞は were。" },
  { id: 5, category: "第1章 Part 1: Types of Waves", q: "横波についていえば、ロープ上のそれぞれの点は上下に動いているだけだ。\n(　　) (　　) a transverse wave, each point on the rope is just moving (　　) (　　) (　　).", a: "As, for, up, and, down", t: "横波についていえば、ロープ上のそれぞれの点は上下に動いているだけだ。", e: "「〜について言えば」は As for ~。「上下に」は up and down。" },
  { id: 6, category: "第1章 Part 1: Types of Waves", q: "この電線は、大きな電流が流れる回路の一部です。\nThis wire is a part of the circuit (　　) (　　) a large current flows.", a: "through, which", t: "この電線は、大きな電流が流れる回路の一部です。", e: "元の文「a large current flows through the circuit」より、前置詞 through ＋ 関係代名詞 which。" },
  { id: 7, category: "第1章 Part 1: Types of Waves", q: "掛け時計の振り子が行ったり来たりしている。\nThe pendulum of the wall clock is oscillating (　　) (　　) (　　).", a: "back, and, forth", t: "掛け時計の振り子が行ったり来たりしている。", e: "「前後に、行ったり来たり」という熟語 back and forth。" },
  { id: 8, category: "第1章 Part 1: Types of Waves", q: "優勝したとき、私はまるで夢を見ているような気分でした。\nWinning the tournament, I felt (　　) (　　) I (　　) in a dream.", a: "as, if, were", t: "優勝したとき、私はまるで夢を見ているような気分でした。", e: "as if + 仮定法過去。過去の事実に反する感覚を表すため were を使う。" },
  // --- 第1章 Part 2 ---
  { id: 9, category: "第1章 Part 2: Properties of Waves", q: "このスーパーコンピューターがその計算を行うのに1秒もかからない。\nIt (　　) less than one second (　　) this supercomputer (　　) carry out the calculation.", a: "takes, for, to", t: "このスーパーコンピューターがその計算を行うのに1秒もかからない。", e: "It takes [時間] for A to do（Aが〜するのに[時間]がかかる）の構文。" },
  { id: 10, category: "第1章 Part 2: Properties of Waves", q: "人口密度は単位面積に住んでいる人の数と定義される。\nThe population density (　　) (　　) (　　) the (　　) of people living in a unit area.", a: "is, defined, as, number", t: "人口密度は単位面積に住んでいる人の数と定義される。", e: "be defined as ~（〜として定義される）。「人の数」は the number of people。" },
  { id: 11, category: "第1章 Part 2: Properties of Waves", q: "波の周波数は、その波が1秒間に作るサイクルの回数として定義される。\nThe frequency of the wave (　　) (　　) (　　) how (　　) (　　) the (　　) (　　) in one second.", a: "is, defined, as, many, cycles, wave, makes", t: "波の周波数は、その波が1秒間に作るサイクルの回数として定義される。", e: "is defined as に間接疑問文（how many cycles the wave makes）を繋げる。" },
  { id: 12, category: "第1章 Part 2: Properties of Waves", q: "かれらがこの問題を議論するには長い時間がかかるかもしれない。\nIt may take a long time (　　) them (　　) discuss this issue.", a: "for, to", t: "かれらがこの問題を議論するには長い時間がかかるかもしれない。", e: "It takes [時間] for A to do（Aが〜するのに[時間]がかかる）の構文。" },
  { id: 13, category: "第1章 Part 2: Properties of Waves", q: "かれらはその問題について何時間も議論し続けた。\nThey (　　) (　　) (　　) the issue for hours.", a: "continued, to, discuss", t: "かれらはその問題について何時間も議論し続けた。", e: "continue to do (〜し続ける)。discussは他動詞なのでaboutは不要。" },
  { id: 14, category: "第1章 Part 2: Properties of Waves", q: "[並べ替え]\n卒業するために何単位を取得しなければならないかチェックした方がいい。\nYou should check [ how many / take / you / credits / must ] to graduate.", a: "[ how many credits you must take ]", t: "卒業するために何単位を取得しなければならないかチェックした方がいい。", e: "疑問詞＋名詞＋主語＋動詞（how many credits you must take）の間接疑問文。" },
  { id: 15, category: "第1章 Part 2: Properties of Waves", q: "[並べ替え]\n無料でインターネットが使えるホテルはありますか。\nIs there a hotel [ the Internet / where / can / free / I / use / for ]?", a: "[ where I can use the Internet for free ]", t: "無料でインターネットが使えるホテルはありますか。", e: "先行詞 a hotel を修飾する関係副詞 where。for free は「無料で」。" },
  { id: 16, category: "第1章 Part 2: Properties of Waves", q: "[並べ替え]\nその旅行が実施されるかどうかは、参加を希望する人数によって決まる。\nIt depends on [ part in / going / how many / take / are / it / people / to ] if the trip will be carried out or not.", a: "[ how many people are going to take part in it ]", t: "その旅行が実施されるかどうかは、参加を希望する人数によって決まる。", e: "how many people が主語になる間接疑問文。「参加する」は take part in。" },
  { id: 17, category: "第1章 Part 2: Properties of Waves", q: "[並べ替え]\nアスリートにとって、試合の前に何を食べるべきかを学ぶことは大切だ。\nIt is important [ to / for / eat / learn / athletes / what ] before the game.", a: "[ for athletes to learn what to eat ]", t: "アスリートにとって、試合の前に何を食べるべきかを学ぶことは大切だ。", e: "It is ~ for A to do 構文。「何を食べるべきか」は what to eat。" },
  // --- 第1章 Part 3 ---
  { id: 18, category: "第1章 Part 3: Doppler Effect", q: "あなたが今、月にいるとして、そこで体重がどれくらいになるか計算しなさい。\n(　　) you are on the moon and calculate (　　) (　　) you (　　) there.", a: "Suppose, how, much, weigh", t: "あなたが今、月にいるとして、そこで体重がどれくらいになるか計算しなさい。", e: "Suppose (that) SV で「〜と仮定せよ」。「どれくらいの重さがあるか」は how much you weigh。" },
  { id: 19, category: "第1章 Part 3: Doppler Effect", q: "その音は実際よりも高く聞こえるかもしれません。\nYou may hear the sound higher (　　) (　　) really (　　).", a: "than, it, is", t: "その音は実際よりも高く聞こえるかもしれません。", e: "比較級 higher ＋ than it really is（実際よりも）。" },
  { id: 20, category: "第1章 Part 3: Doppler Effect", q: "xに0を代入することでy切片が求められる。\nYou can find the y-intercept (　　) (　　) (　　) 0 for x.", a: "by, plugging, in", t: "xに0を代入することでy切片が求められる。", e: "by ~ing（〜することによって）。plug ~ in (〜を代入する) という熟語を使います。" },
  { id: 21, category: "第1章 Part 3: Doppler Effect", q: "このスマートフォンは以前より使える時間が短くなった。\nThis smartphone works (　　) (　　) before.", a: "shorter, than", t: "このスマートフォンは以前より使える時間が短くなった。", e: "比較級＋than。直訳は「以前より短く働く（動く）」。" },
  { id: 22, category: "第1章 Part 3: Doppler Effect", q: "ドローンの間は3メートルの距離を維持する必要があります。\n(　　) (　　) must be maintained between the drones.", a: "3-meter, distance", t: "ドローンの間は3メートルの距離を維持する必要があります。", e: "ハイフンを使って 3-meter とすることで形容詞の働きをし、名詞 distance（距離）を修飾します。" },
  { id: 23, category: "第1章 Part 3: Doppler Effect", q: "分銅セットは1グラム分銅10個と5グラム分銅5個で販売されています。\nThe weight set comes with (　　) (　　) weights and (　　) (　　) weights.", a: "ten, 1-gram, five, 5-gram", t: "分銅セットは1グラム分銅10個と5グラム分銅5個で販売されています。", e: "個数を表す ten, five と、複合形容詞の 1-gram, 5-gram (ハイフンで繋ぎsはつけない)。" },
  { id: 24, category: "第1章 Part 3: Doppler Effect", q: "[並べ替え]\n波の速度は波長と周波数を掛けることで計算することができる。\nThe velocity of the wave can be calculated [ and / by / frequency / its / multiplying / wavelength ].", a: "[ by multiplying its wavelength and frequency ]", t: "波の速度は波長と周波数を掛けることで計算することができる。", e: "by ~ing に multiply A and B (AとBを掛ける) を組み合わせる。" },
  { id: 25, category: "第1章 Part 3: Doppler Effect", q: "[並べ替え]\nオームの法則V=RIは、I=V/RやR=V/Iと書き換えることができる。\nOhm’s law V=RI [ and / as / be / can / modified / I=V/R / R=V/I ].", a: "[ can be modified as I=V/R and R=V/I ]", t: "オームの法則V=RIは、I=V/RやR=V/Iと書き換えることができる。", e: "modify A as B (AをBとして変形する) の受動態。" },
  // --- 第1章 Part 4 ---
  { id: 26, category: "第1章 Part 4: Light Waves", q: "紫外線は、波長が14ナノメートルから400ナノメートルであるが、皮膚にダメージを与えるといわれている。\nUltraviolet rays, (　　) (　　) are from 14 nm to 400 nm, are said to (　　) our skin.", a: "whose, wavelengths, damage", t: "紫外線は、波長が14ナノメートルから400ナノメートルであるが、皮膚にダメージを与えるといわれている。", e: "所有格の関係代名詞 whose ＋ 名詞。「ダメージを与える」は damage。" },
  { id: 27, category: "第1章 Part 4: Light Waves", q: "物質はある温度で液体から気体に変化するが、その温度は沸点といわれる。\nSubstances change from liquid to gas (　　) a (　　) (　　), (　　) is called the boiling point.", a: "at, certain, temperature, which", t: "物質はある温度で液体から気体に変化するが、その温度は沸点といわれる。", e: "「ある温度で」は at a certain temperature。カンマ＋which で非制限用法の関係代名詞。" },
  { id: 28, category: "第1章 Part 4: Light Waves", q: "真空中を自由落下する2つの物体は同時に着地する。\nTwo objects (　　) freely (　　) a (　　) will reach the ground (　　) (　　) (　　) (　　).", a: "falling, in, vacuum, at, the, same, time", t: "真空中を自由落下する2つの物体は同時に着地する。", e: "現在分詞 falling で修飾。「真空中で」は in a vacuum。「同時に」は at the same time。" },
  { id: 29, category: "第1章 Part 4: Light Waves", q: "[並べ替え]\n波は一般的に(それが)通るための媒体を必要とする。\nWaves generally [ a medium / need / propagate / through / to ].", a: "[ need a medium to propagate through ]", t: "波は一般的に通るための媒体を必要とする。", e: "「〜するための媒体」は a medium to propagate through。" },
  { id: 30, category: "第1章 Part 4: Light Waves", q: "[並べ替え]\nこのタブレット型コンピューターはどこへでも持っていけるほど軽い。\nThis tablet computer is [ anywhere / enough / light / take along / to ].", a: "[ light enough to take along anywhere ]", t: "このタブレット型コンピューターはどこへでも持っていけるほど軽い。", e: "形容詞＋enough to do。「持ち歩く」は take along。" },
  { id: 31, category: "第1章 Part 4: Light Waves", q: "[並べ替え]\npH値が6以下の物質は酸性に分類される。\nA substance [ 6 / classified / equal / is / is / less / or / pH / than / to / whose ] as acid.", a: "[ whose pH is equal to or less than 6 is classified ]", t: "pH値が6以下の物質は酸性に分類される。", e: "whose pH is ~ で主語のカタマリを作る。「6以下」は equal to or less than 6。" },
  { id: 32, category: "第1章 Part 4: Light Waves", q: "[並べ替え]\n時間に正確であることは、日本人が持っている長所の一つだと思う。\nI believe [ being / have / is / Japanese people / punctual / of / one / that / the virtues ].", a: "[ that being punctual is one of the virtues Japanese people have ]", t: "時間に正確であることは、日本人が持っている長所の一つだと思う。", e: "that節の中の主語に、動名詞 being punctual（時間に正確であること）を置く。" },
  // --- 第2章 Part 1 ---
  { id: 33, category: "第2章 Part 1: Measurement of Earthquakes", q: "その地震が発生した直後に、地震情報が発表された。\n(　　) (　　) the earthquake occurred, earthquake information was (　　) to the public.", a: "Just, after, provided", t: "その地震が発生した直後に、地震情報が発表された。", e: "「〜した直後に」は Just after ~。「提供された」は受動態で was provided。" },
  { id: 34, category: "第2章 Part 1: Measurement of Earthquakes", q: "その情報で私たちは、震源地の位置や震源の深さ、地震の規模などを知った。\nThe information let us know the (　　) (　　), the (　　) of the (　　), and the (　　) (　　) of the earthquake.", a: "epicenter, location, depth, focus, seismic, scale", t: "その情報で私たちは、震源地の位置や震源の深さ、地震の規模などを知った。", e: "epicenter location(震央の位置)、depth of the focus(震源の深さ)、seismic scale(地震の規模)。" },
  { id: 35, category: "第2章 Part 1: Measurement of Earthquakes", q: "高価な贈り物が必ずしも子供を喜ばせるとは限らない。\nExpensive gifts (　　) (　　) (　　) make children happy.", a: "do, not, always", t: "高価な贈り物が必ずしも子供を喜ばせるとは限らない。", e: "「必ずしも〜とは限らない」という部分否定の not always。" },
  { id: 36, category: "第2章 Part 1: Measurement of Earthquakes", q: "その有名なスケート選手は、自転車競技にも参加する。\nThe famous skater takes part in cycling races (　　) (　　).", a: "as, well", t: "その有名なスケート選手は、自転車競技にも参加する。", e: "文末に置いて「〜もまた」を表す as well。" },
  { id: 37, category: "第2章 Part 1: Measurement of Earthquakes", q: "同じ国の中でも、場所によって挨拶(のしかた)が異なることはよくある。\nGreetings often vary (　　) (　　) (　　) (　　) even in the same country.", a: "from, place, to, place", t: "同じ国の中でも、場所によって挨拶が異なることはよくある。", e: "vary from place to place で「場所によって異なる」。" },
  { id: 38, category: "第2章 Part 1: Measurement of Earthquakes", q: "[並べ替え]\nシャツのサイズは文字で表され、XLがいちばん大きい。\nShirt sizes are letter-coded, [ being / largest / the / with / XL ].", a: "[ with XL being the largest ]", t: "シャツのサイズは文字で表され、XLがいちばん大きい。", e: "with ＋ 名詞 ＋ 分詞（being） の付帯状況。「XLを最も大きい状態として」。" },
  { id: 39, category: "第2章 Part 1: Measurement of Earthquakes", q: "[並べ替え]\n私は、宇宙の大きさについて考えれば考えるほど、わからなくなる。\n[ about / I / more / the / think ] the size of the universe, [ am / I / less / sure / the ].", a: "[ The more I think about ] ... [ the less sure I am ]", t: "私は、宇宙の大きさについて考えれば考えるほど、わからなくなる。", e: "The 比較級 ~, the 比較級 ...（〜すればするほど、ますます…）の構文。" },
  // --- 第2章 Part 2 ---
  { id: 40, category: "第2章 Part 2: P-waves and S-waves", q: "地震は地震波とよばれる衝撃波を発生させる。\nEarthquakes produce (　　) called (　　) (　　).", a: "shockwaves, seismic, waves", t: "地震は地震波とよばれる衝撃波を発生させる。", e: "衝撃波：shockwaves、地震波：seismic waves。" },
  { id: 41, category: "第2章 Part 2: P-waves and S-waves", q: "P波は縦波で、秒速5キロから7キロもの速度で伝わる。\nP-waves are (　　) waves, (　　) propagate (　　) (　　) (　　) at 5 to 7 kilometers per second.", a: "longitudinal, which, as, fast, as", t: "P波は縦波で、秒速5キロから7キロもの速度で伝わる。", e: "縦波：longitudinal waves。「〜もの速度で」と数値を強調する as fast as。" },
  { id: 42, category: "第2章 Part 2: P-waves and S-waves", q: "S波は横波で、その速度は秒速3キロから4キロまで幅がある。\nS-waves are (　　) waves, (　　) velocity (　　) (　　) 3 (　　) 4 kilometers per second.", a: "transverse, whose, ranges, from, to", t: "S波は横波で、その速度は秒速3キロから4キロまで幅がある。", e: "横波：transverse waves。所有格 whose と、range from A to B（AからBまで幅がある）。" },
  { id: 43, category: "第2章 Part 2: P-waves and S-waves", q: "火災が発生し、大爆発が続いた。\nThere occurred a fire (　　) (　　) a big explosion.", a: "followed, by", t: "火災が発生し、大爆発が続いた。", e: "A followed by B（Aの後にBが続く、Aが発生し続いてBが起きる）。" },
  { id: 44, category: "第2章 Part 2: P-waves and S-waves", q: "[並べ替え]\n無数の小規模な地震の後に、火山が噴火した。\nNumerous small earthquakes [ eruption / of / preceded / the / the / volcano ].", a: "[ preceded the eruption of the volcano ]", t: "無数の小規模な地震の後に、火山が噴火した。", e: "precede は「〜に先行する（〜より前に起きる）」。" },
  { id: 45, category: "第2章 Part 2: P-waves and S-waves", q: "[並べ替え]\n光の屈折率はその波長によって変化する。\nThe refractive index [ depending / its / light / of / on / varies / wavelength ].", a: "[ of light varies depending on its wavelength ]", t: "光の屈折率はその波長によって変化する。", e: "主語 The refractive index of light（光の屈折率）、動詞 varies。depending on ~（〜によって）。" },
  { id: 46, category: "第2章 Part 2: P-waves and S-waves", q: "[並べ替え]\n地震波には2種類あるが、それらは地中をどのように伝わるかが異なる。\nThere are two types of seismic waves, [ are / different / how / in / which / they / through / travel / the earth ].", a: "[ which are different in how they travel through the earth ]", t: "地震波には2種類あるが、それらは地中をどのように伝わるかが異なる。", e: "different in ~ の後ろに、間接疑問文 how they travel を置く。" },
  { id: 47, category: "第2章 Part 2: P-waves and S-waves", q: "[並べ替え]\n連続する地震の中で最大のものは本震と呼ばれる。\nIn a series of earthquakes, [ is / largest / one / the main shock / termed / the ].", a: "[ the largest one is termed the main shock ]", t: "連続する地震の中で最大のものは本震と呼ばれる。", e: "主語 the largest one。「〜と呼ばれる」は受動態 is termed ~。" },
  // --- 第2章 Part 3 ---
  { id: 48, category: "第2章 Part 3: Earthquake Information", q: "最近、私たちの学校にエアコンが設置されました。\nAir conditioners (　　) (　　) (　　) in our school recently.", a: "have, been, installed", t: "最近、私たちの学校にエアコンが設置されました。", e: "現在完了形の受動態 have been + 過去分詞。" },
  { id: 49, category: "第2章 Part 3: Earthquake Information", q: "初期微動の時間は震源地からの距離に比例する。\nThe duration of preliminary tremors (　　) (　　) (　　) the distance from the epicenter.", a: "is, proportional, to", t: "初期微動の時間は震源地からの距離に比例する。", e: "is proportional to ~（〜に比例する）。理系英語の定番表現。" },
  { id: 50, category: "第2章 Part 3: Earthquake Information", q: "どのような非常事態でも常に情報を得ていることがとても重要だ。\nIt is very important to (　　) (　　) during any emergency situation.", a: "stay, informed", t: "どのような非常事態でも常に情報を得ていることがとても重要だ。", e: "stay informed（情報を得た状態を保つ）。" },
  { id: 51, category: "第2章 Part 3: Earthquake Information", q: "その電子顕微鏡を使うには事前に許可を得なければなりません。\nYou must get permission to use the electron microscope (　　) (　　).", a: "in, advance", t: "その電子顕微鏡を使うには事前に許可を得なければなりません。", e: "in advance で「事前に、あらかじめ」。" },
  { id: 52, category: "第2章 Part 3: Earthquake Information", q: "何か質問がございましたらお知らせください。\nPlease (　　) (　　) (　　) if you have any questions.", a: "let, me, know", t: "何か質問がございましたらお知らせください。", e: "使役動詞を用いた定番フレーズ let me(us) know（私に知らせる状態にさせてください）。" },
  { id: 53, category: "第2章 Part 3: Earthquake Information", q: "[並べ替え]\nこの駅の構内と周辺にはコンビニはありません。\n[ around / are / convenience stores / in / no / or / station / there / this ].", a: "[ There are no convenience stores in or around this station ]", t: "この駅の構内と周辺にはコンビニはありません。", e: "in or around ~（〜の中または周辺に）。" },
  { id: 54, category: "第2章 Part 3: Earthquake Information", q: "[並べ替え]\n気象台は県内に大雪警報を発令した。\nThe observatory [ a heavy snowfall / alert / an / for / issued ] in the prefecture.", a: "[ issued an alert for a heavy snowfall ]", t: "気象台は県内に大雪警報を発令した。", e: "「警報を発令する」issue an alert。前置詞 for で繋ぐ。" },
  { id: 55, category: "第2章 Part 3: Earthquake Information", q: "[英作文]\nモチベーションを保ち続けることは容易ではありません。", a: "It is not easy to stay motivated.", t: "モチベーションを保ち続けることは容易ではありません。", e: "stay informed の応用。stay motivated（動機付けられた状態を保つ）。" },
  { id: 56, category: "第2章 Part 3: Earthquake Information", q: "[英作文]\n地球温暖化の問題は長いあいだ議論されている。", a: "The problem of global warming has been discussed for a long time.", t: "地球温暖化の問題は長いあいだ議論されている。", e: "現在完了の受動態。主語が単数形なので has been discussed になる。" },
  
  // --- ★ここから追加：アクセント問題 (全範囲網羅) ---
  // 第1章
  { id: 57, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\ntransfer", a: "trans-FER", t: "伝達する", e: "動詞の場合は第2音節(-fer)にアクセントがきます。（名詞は第1音節）" },
  { id: 58, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\noscillate", a: "OS-cil-late", t: "振動する", e: "第1音節(os-)にアクセントがきます。" },
  { id: 59, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nperpendicular", a: "per-pen-DIC-u-lar", t: "垂直な", e: "第3音節(-dic-)にアクセントがきます。" },
  { id: 60, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\ntransverse", a: "trans-VERSE", t: "横の", e: "第2音節(-verse)にアクセントがきます。" },
  { id: 61, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\ncompress", a: "com-PRESS", t: "圧縮する", e: "動詞の場合は第2音節(-press)にアクセントがきます。" },
  { id: 62, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nlongitudinal", a: "lon-gi-TU-di-nal", t: "縦の", e: "第3音節(-tu-)にアクセントがきます。" },
  { id: 63, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\ndisplacement", a: "dis-PLACE-ment", t: "変位", e: "第2音節(-place-)にアクセントがきます。" },
  { id: 64, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\npropagation", a: "prop-a-GA-tion", t: "伝播", e: "第3音節(-ga-)にアクセントがきます。" },
  { id: 65, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nmedium", a: "ME-di-um", t: "媒体、媒質", e: "第1音節(me-)にアクセントがきます。" },
  { id: 66, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\npropagate", a: "PROP-a-gate", t: "伝播する", e: "第1音節(prop-)にアクセントがきます。" },
  { id: 67, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nperiodically", a: "pe-ri-OD-i-cal-ly", t: "定期的に", e: "第3音節(-od-)にアクセントがきます。" },
  { id: 68, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nvertical", a: "VER-ti-cal", t: "垂直の", e: "第1音節(ver-)にアクセントがきます。" },
  { id: 69, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nlevel", a: "LEV-el", t: "水平、基準面", e: "第1音節(lev-)にアクセントがきます。" },
  { id: 70, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\namplitude", a: "AM-pli-tude", t: "振幅", e: "第1音節(am-)にアクセントがきます。" },
  { id: 71, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nwavelength", a: "WAVE-length", t: "波長", e: "第1音節(wave-)にアクセントがきます。" },
  { id: 72, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\ninverse", a: "in-VERSE", t: "逆数", e: "第2音節(-verse)にアクセントがきます。" },
  { id: 73, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nrepresent", a: "rep-re-SENT", t: "表す", e: "第3音節(-sent)にアクセントがきます。" },
  { id: 74, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nfrequency", a: "FRE-quen-cy", t: "周波数", e: "第1音節(fre-)にアクセントがきます。" },
  { id: 75, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nsuppose", a: "sup-POSE", t: "仮定する", e: "第2音節(-pose)にアクセントがきます。" },
  { id: 76, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nobserve", a: "ob-SERVE", t: "観察する、観測する", e: "第2音節(-serve)にアクセントがきます。" },
  { id: 77, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nmodify", a: "MOD-i-fy", t: "変形する、修正する", e: "第1音節(mod-)にアクセントがきます。" },
  { id: 78, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\ndetermine", a: "de-TER-mine", t: "決定する、判断する", e: "第2音節(-ter-)にアクセントがきます。" },
  { id: 79, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\napparent", a: "ap-PAR-ent", t: "見かけの", e: "第2音節(-par-)にアクセントがきます。" },
  { id: 80, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nretreat", a: "re-TREAT", t: "遠ざかる", e: "第2音節(-treat)にアクセントがきます。" },
  { id: 81, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nphenomenon", a: "phe-NOM-e-non", t: "現象", e: "第2音節(-nom-)にアクセントがきます。" },
  { id: 82, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nelectromagnetic", a: "e-lec-tro-mag-NET-ic", t: "電磁気の", e: "第5音節(-net-)にアクセントがきます。" },
  { id: 83, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nvacuum", a: "VAC-u-um", t: "真空", e: "第1音節(vac-)にアクセントがきます。" },
  { id: 84, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nradio", a: "RA-di-o", t: "電波の", e: "第1音節(ra-)にアクセントがきます。" },
  { id: 85, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nx-ray", a: "X-ray", t: "X線", e: "第1音節(x-)にアクセントがきます。" },
  { id: 86, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nnanometer", a: "NAN-o-me-ter", t: "ナノメートル", e: "第1音節(nan-)にアクセントがきます。" },
  { id: 87, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nvisible", a: "VIS-i-ble", t: "目に見える", e: "第1音節(vis-)にアクセントがきます。" },
  { id: 88, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nrespond", a: "re-SPOND", t: "反応する", e: "第2音節(-spond)にアクセントがきます。" },
  { id: 89, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nrefractive", a: "re-FRAC-tive", t: "屈折の", e: "第2音節(-frac-)にアクセントがきます。" },
  { id: 90, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nindex", a: "IN-dex", t: "指数、率", e: "第1音節(in-)にアクセントがきます。" },
  { id: 91, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\ndepend", a: "de-PEND", t: "依存する", e: "第2音節(-pend)にアクセントがきます。" },
  { id: 92, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nmixture", a: "MIX-ture", t: "混合物", e: "第1音節(mix-)にアクセントがきます。" },
  { id: 93, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nrefract", a: "re-FRACT", t: "屈折する", e: "第2音節(-fract)にアクセントがきます。" },
  { id: 94, category: "単語・アクセント (第1章)", q: "【アクセント・和訳】\nspectrum", a: "SPEC-trum", t: "スペクトル", e: "第1音節(spec-)にアクセントがきます。" },
  
  // 第2章
  { id: 95, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nexperience", a: "ex-PE-ri-ence", t: "経験する", e: "第2音節(-pe-)にアクセントがきます。" },
  { id: 96, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nfrequent", a: "FRE-quent", t: "頻繁な", e: "第1音節(fre-)にアクセントがきます。" },
  { id: 97, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nepicenter", a: "EP-i-cen-ter", t: "震央（震源地）", e: "第1音節(ep-)にアクセントがきます。" },
  { id: 98, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nlocation", a: "lo-CA-tion", t: "位置、場所", e: "第2音節(-ca-)にアクセントがきます。" },
  { id: 99, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nfocus", a: "FO-cus", t: "震源", e: "第1音節(fo-)にアクセントがきます。" },
  { id: 100, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nseismic", a: "SEIS-mic", t: "地震の", e: "第1音節(seis-)にアクセントがきます。" },
  { id: 101, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\ndistribution", a: "dis-tri-BU-tion", t: "分布", e: "第3音節(-bu-)にアクセントがきます。" },
  { id: 102, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nintensity", a: "in-TEN-si-ty", t: "強さ、震度", e: "第2音節(-ten-)にアクセントがきます。" },
  { id: 103, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\npredict", a: "pre-DICT", t: "予測する", e: "第2音節(-dict)にアクセントがきます。" },
  { id: 104, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nwarning", a: "WARN-ing", t: "警報", e: "第1音節(warn-)にアクセントがきます。" },
  { id: 105, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nissue", a: "IS-sue", t: "発令する", e: "第1音節(is-)にアクセントがきます。" },
  { id: 106, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nvary", a: "VAR-y", t: "異なる、変わる", e: "第1音節(var-)にアクセントがきます。" },
  { id: 107, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\naffect", a: "af-FECT", t: "影響を与える", e: "第2音節(-fect)にアクセントがきます。" },
  { id: 108, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\ndisastrous", a: "dis-AS-trous", t: "悲惨な", e: "第2音節(-as-)にアクセントがきます。" },
  { id: 109, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nfurther", a: "FUR-ther", t: "より遠くへ", e: "第1音節(fur-)にアクセントがきます。" },
  { id: 110, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nsuffer", a: "SUF-fer", t: "受ける、苦しむ", e: "第1音節(suf-)にアクセントがきます。" },
  { id: 111, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\ncatastrophic", a: "cat-a-STROPH-ic", t: "壊滅的な", e: "第3音節(-stroph-)にアクセントがきます。" },
  { id: 112, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nshockwave", a: "SHOCK-wave", t: "衝撃波", e: "第1音節(shock-)にアクセントがきます。" },
  { id: 113, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nprimary", a: "PRI-ma-ry", t: "最初の、第一の", e: "第1音節(pri-)にアクセントがきます。" },
  { id: 114, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\ntremor", a: "TREM-or", t: "揺れ、微動", e: "第1音節(trem-)にアクセントがきます。" },
  { id: 115, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nsecondary", a: "SEC-on-dar-y", t: "二次的な", e: "第1音節(sec-)にアクセントがきます。" },
  { id: 116, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\npreliminary", a: "pre-LIM-i-nar-y", t: "予備の、初期の", e: "第2音節(-lim-)にアクセントがきます。" },
  { id: 117, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nprincipal", a: "PRIN-ci-pal", t: "主要な", e: "第1音節(prin-)にアクセントがきます。" },
  { id: 118, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\naftershock", a: "AF-ter-shock", t: "余震", e: "第1音節(af-)にアクセントがきます。" },
  { id: 119, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nprecede", a: "pre-CEDE", t: "先行する", e: "第2音節(-cede)にアクセントがきます。" },
  { id: 120, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nforeshock", a: "FORE-shock", t: "前震", e: "第1音節(fore-)にアクセントがきます。" },
  { id: 121, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\narrival", a: "ar-RI-val", t: "到着", e: "第2音節(-ri-)にアクセントがきます。" },
  { id: 122, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nseismometer", a: "seis-MOM-e-ter", t: "地震計", e: "第2音節(-mom-)にアクセントがきます。" },
  { id: 123, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\ninstall", a: "in-STALL", t: "設置する", e: "第2音節(-stall)にアクセントがきます。" },
  { id: 124, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nmeteorological", a: "me-te-or-o-LOG-i-cal", t: "気象の", e: "第5音節(-log-)にアクセントがきます。" },
  { id: 125, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nagency", a: "A-gen-cy", t: "庁、機関", e: "第1音節(a-)にアクセントがきます。" },
  { id: 126, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nanalyze", a: "AN-a-lyze", t: "分析する", e: "第1音節(an-)にアクセントがきます。" },
  { id: 127, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nalert", a: "a-LERT", t: "警報", e: "第2音節(-lert)にアクセントがきます。" },
  { id: 128, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\npossibility", a: "pos-si-BIL-i-ty", t: "可能性", e: "第3音節(-bil-)にアクセントがきます。" },
  { id: 129, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\ninformed", a: "in-FORMED", t: "情報を得た", e: "第2音節(-formed)にアクセントがきます。" },
  { id: 130, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nemergency", a: "e-MER-gen-cy", t: "緊急の、非常事態", e: "第2音節(-mer-)にアクセントがきます。" },
  { id: 131, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nadvance", a: "ad-VANCE", t: "事前に", e: "第2音節(-vance)にアクセントがきます。" },
  { id: 132, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\ndestructive", a: "de-STRUC-tive", t: "破壊的な", e: "第2音節(-struc-)にアクセントがきます。" },
  { id: 133, category: "単語・アクセント (第2章)", q: "【アクセント・和訳】\nshallow", a: "SHAL-low", t: "浅い", e: "第1音節(shal-)にアクセントがきます。" }
];

const flashcardsData = updatedFlashcardsData;

const orderCards = flashcardsData.filter(card => card.q.includes('[並べ替え]'));

const shuffleArray = (items) => [...items].sort(() => Math.random() - 0.5);

const normalizeText = (text) =>
  text
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[.,!?]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const orderChoicesByAnswer = (choices, answerText) => {
  const normalizedAnswer = normalizeText(answerText);
  const getPhraseIndex = (phrase) => {
    const phrasePattern = normalizeText(phrase)
      .split(' ')
      .map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('\\s+');
    const match = normalizedAnswer.match(new RegExp(`(?:^|\\s)${phrasePattern}(?=\\s|$)`));
    return match?.index ?? Number.MAX_SAFE_INTEGER;
  };

  return [...choices].sort((a, b) => {
    return getPhraseIndex(a) - getPhraseIndex(b);
  });
};

const parseOrderCard = (card) => {
  const rawLines = card.q.split('\n').map(line => line.trim()).filter(Boolean);
  const lines = rawLines.filter(line => line !== '[並べ替え]');
  const englishIndex = lines.findIndex(line => line.includes('[') && line.includes('/'));
  const jpLines = englishIndex >= 0 ? lines.slice(0, englishIndex) : [card.t];
  const englishText = englishIndex >= 0 ? lines.slice(englishIndex).join(' ') : card.q;
  const answerGroups = [...card.a.matchAll(/\[([^\]]+)\]/g)].map(match => match[1].trim());
  const choiceGroups = [...englishText.matchAll(/\[([^\]]+)\]/g)].map((match, index) => {
    const words = match[1].split('/').map(word => word.trim()).filter(Boolean);
    const correctText = answerGroups[index] || '';
    return {
      words,
      correct: orderChoicesByAnswer(words, correctText),
      correctText,
    };
  });

  return {
    jpLines,
    templateParts: englishText.split(/\[[^\]]+\]/g),
    groups: choiceGroups,
  };
};

const areArraysEqual = (left, right) =>
  left.length === right.length && left.every((item, index) => item === right[index]);

export default function App() {
  const [studyMode, setStudyMode] = useState("flashcard");
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  
  const [cards, setCards] = useState(flashcardsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [availableGroups, setAvailableGroups] = useState([]);
  const [orderResult, setOrderResult] = useState(null);
  const [revealedSentences, setRevealedSentences] = useState([]);
  const [sentenceDirection, setSentenceDirection] = useState("enToJp");
  
  // スワイプ操作用の状態
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const activeBaseCards = studyMode === "order"
    ? orderCards
    : studyMode === "sentences"
      ? sentenceData
      : flashcardsData;
  const categories = ["すべて", ...new Set(activeBaseCards.map(c => c.category))];

  // カードを切り替えたら表面に戻す
  useEffect(() => {
    setIsFlipped(false);
    setOrderResult(null);
    if (studyMode === "order") {
      setupOrderQuestion(cards[currentIndex]);
    }
  }, [currentIndex, cards, studyMode]);

  const getCardsFor = (category, mode = studyMode) => {
    const base = mode === "order"
      ? orderCards
      : mode === "sentences"
        ? sentenceData
        : flashcardsData;
    return category === "すべて" ? [...base] : base.filter(c => c.category === category);
  };

  const setupOrderQuestion = (card) => {
    if (!card) return;
    const parsed = parseOrderCard(card);
    setSelectedGroups(parsed.groups.map(() => []));
    setAvailableGroups(parsed.groups.map(group => shuffleArray(group.words)));
    setOrderResult(null);
  };

  const handleModeChange = (mode) => {
    setStudyMode(mode);
    setSelectedCategory("すべて");
    const nextCards = getCardsFor("すべて", mode);
    setCards(nextCards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setRevealedSentences([]);
    if (mode === "order") setupOrderQuestion(nextCards[0]);
  };

  // ★追加: タブがクリックされた時の処理
  const handleTabChange = (category) => {
    setSelectedCategory(category);
    const newCards = getCardsFor(category);
    setCards(newCards);
    setCurrentIndex(0);
    setRevealedSentences([]);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // ★修正: 選択中のカテゴリ内でシャッフルするように変更
  const handleShuffle = () => {
    const currentPool = getCardsFor(selectedCategory);
    const shuffled = shuffleArray(currentPool);
    setCards(shuffled);
    setCurrentIndex(0);
    setRevealedSentences([]);
  };

  // ★修正: 選択中のカテゴリ内でリセットするように変更
  const handleReset = () => {
    const currentPool = getCardsFor(selectedCategory);
    setCards(currentPool);
    setCurrentIndex(0);
    setRevealedSentences([]);
  };

  // スワイプ処理
  const onTouchStartHandler = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleOrderWordClick = (groupIndex, word, fromAvailable, index) => {
    if (orderResult) return;

    if (fromAvailable) {
      setSelectedGroups(selectedGroups.map((group, i) => (
        i === groupIndex ? [...group, word] : group
      )));
      setAvailableGroups(availableGroups.map((group, i) => (
        i === groupIndex ? group.filter((_, wordIndex) => wordIndex !== index) : group
      )));
    } else {
      setAvailableGroups(availableGroups.map((group, i) => (
        i === groupIndex ? [...group, word] : group
      )));
      setSelectedGroups(selectedGroups.map((group, i) => (
        i === groupIndex ? group.filter((_, wordIndex) => wordIndex !== index) : group
      )));
    }
  };

  const checkOrderAnswer = () => {
    const parsed = parseOrderCard(currentCard);
    const isCorrect = parsed.groups.every((group, index) =>
      areArraysEqual(selectedGroups[index] || [], group.correct)
    );
    setOrderResult(isCorrect ? "correct" : "incorrect");
  };

  const showOrderAnswer = () => {
    const parsed = parseOrderCard(currentCard);
    setSelectedGroups(parsed.groups.map(group => group.correct));
    setAvailableGroups(parsed.groups.map(() => []));
    setOrderResult("shown");
  };

  const toggleSentence = (id) => {
    setRevealedSentences(
      revealedSentences.includes(id)
        ? revealedSentences.filter(sentenceId => sentenceId !== id)
        : [...revealedSentences, id]
    );
  };

  const revealAllSentences = () => {
    setRevealedSentences(cards.map(sentence => sentence.id));
  };

  const currentCard = cards[currentIndex];
  // カードが存在しない場合（安全対策）
  if (!currentCard) return null;

  const progress = studyMode === "sentences" ? 100 : ((currentIndex + 1) / cards.length) * 100;
  const currentOrder = studyMode === "order" ? parseOrderCard(currentCard) : null;
  const isOrderComplete = currentOrder
    ? currentOrder.groups.every((_, index) => (availableGroups[index] || []).length === 0)
    : false;
  const isEnglishToJapanese = sentenceDirection === "enToJp";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-8 px-4 font-sans text-slate-800">
      
      {/* ヘッダー */}
      <div className="w-full max-w-md mb-4 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="text-indigo-600 w-6 h-6" />
          <h1 className="text-xl font-bold text-slate-800">工業英語 フラッシュカード</h1>
        </div>
      </div>

      <div className="w-full max-w-md mb-4 grid grid-cols-3 gap-2 rounded-2xl bg-white p-1 shadow-sm border border-slate-200">
        <button
          onClick={() => handleModeChange("flashcard")}
          className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-colors ${
            studyMode === "flashcard"
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-4 h-4" /> カード
        </button>
        <button
          onClick={() => handleModeChange("order")}
          className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-colors ${
            studyMode === "order"
              ? 'bg-amber-500 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <ListChecks className="w-4 h-4" /> 並べ替え
        </button>
        <button
          onClick={() => handleModeChange("sentences")}
          className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-colors ${
            studyMode === "sentences"
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Languages className="w-4 h-4" /> 対訳
        </button>
      </div>

      {/* ★追加: カテゴリ選択用のスクロール可能なタブ */}
      <div className="w-full max-w-md mb-6 overflow-x-auto whitespace-nowrap pb-2 flex gap-2" style={{ scrollbarWidth: 'none' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleTabChange(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors flex-shrink-0 ${
              selectedCategory === cat 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="w-full max-w-md mb-4 flex flex-col items-center">
        {/* 操作ボタン（シャッフル等） */}
        <div className="flex gap-4 mb-4">
          <button 
            onClick={handleShuffle}
            className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-sm"
          >
            <Shuffle className="w-4 h-4" /> シャッフル
          </button>
          <button 
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" /> 最初から
          </button>
        </div>

        {/* プログレスバー */}
        <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="w-full flex justify-between text-xs text-slate-500 font-medium">
          <span>{studyMode === "sentences" ? '表示中' : `Q. ${currentIndex + 1}`}</span>
          <span>{cards.length} {studyMode === "sentences" ? '文' : '問中'}</span>
        </div>
      </div>

      {studyMode === "sentences" ? (
        <div className="w-full max-w-2xl">
          <div className="mb-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold tracking-widest text-emerald-600">TRANSLATION</span>
                <h2 className="mt-1 text-lg font-bold text-slate-800">
                  {isEnglishToJapanese ? '英文から和訳を確認' : '和訳から英文を確認'}
                </h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                {revealedSentences.length}/{cards.length}
              </span>
            </div>
            <div className="mb-3 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
              <button
                onClick={() => {
                  setSentenceDirection("enToJp");
                  setRevealedSentences([]);
                }}
                className={`rounded-lg py-2 text-sm font-bold transition-colors ${
                  isEnglishToJapanese
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white'
                }`}
              >
                英語 → 日本語
              </button>
              <button
                onClick={() => {
                  setSentenceDirection("jpToEn");
                  setRevealedSentences([]);
                }}
                className={`rounded-lg py-2 text-sm font-bold transition-colors ${
                  !isEnglishToJapanese
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white'
                }`}
              >
                日本語 → 英語
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={revealAllSentences}
                disabled={revealedSentences.length === cards.length}
                className={`rounded-xl py-3 text-sm font-bold shadow-sm transition-colors ${
                  revealedSentences.length === cards.length
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                全て表示
              </button>
              <button
                onClick={() => setRevealedSentences([])}
                disabled={revealedSentences.length === 0}
                className={`rounded-xl py-3 text-sm font-bold shadow-sm transition-colors ${
                  revealedSentences.length === 0
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                隠す
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {cards.map(sentence => {
              const isRevealed = revealedSentences.includes(sentence.id);
              const promptText = isEnglishToJapanese ? sentence.en : sentence.jp;
              const answerText = isEnglishToJapanese ? sentence.jp : sentence.en;

              return (
                <button
                  key={sentence.id}
                  onClick={() => toggleSentence(sentence.id)}
                  className={`w-full rounded-2xl border p-4 text-left shadow-sm transition-colors ${
                    isRevealed
                      ? 'border-emerald-200 bg-emerald-50'
                      : 'border-slate-200 bg-white hover:border-emerald-200 hover:bg-emerald-50/50'
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-emerald-700 shadow-sm">
                      {sentence.no}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {isRevealed
                        ? (isEnglishToJapanese ? '和訳表示中' : '英文表示中')
                        : (isEnglishToJapanese ? 'タップで和訳' : 'タップで英文')}
                    </span>
                  </div>
                  <p className="text-base font-bold leading-relaxed text-slate-800">{promptText}</p>
                  {isRevealed && (
                    <p className="mt-4 rounded-xl bg-white p-3 text-base font-semibold leading-relaxed text-emerald-800 shadow-inner">
                      {answerText}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ) : studyMode === "order" && currentOrder ? (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-100 min-h-[430px] relative">
          <div className="absolute top-4 left-4 right-4 flex justify-center">
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-center">
              {currentCard.category}
            </span>
          </div>

          <div className="p-5 pt-16">
            <span className="block text-sm font-bold text-slate-400 mb-3 tracking-widest text-center">ORDER</span>
            <div className="mb-4 rounded-xl bg-amber-50/70 p-3 text-sm font-medium leading-relaxed text-slate-700">
              {currentOrder.jpLines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-base font-medium leading-9 text-slate-800">
              {currentOrder.templateParts.map((part, partIndex) => (
                <React.Fragment key={partIndex}>
                  <span>{part}</span>
                  {partIndex < currentOrder.groups.length && (
                    <span className="my-1 inline-flex min-h-10 min-w-[9rem] flex-wrap items-center gap-2 rounded-xl border-2 border-dashed border-amber-300 bg-white px-2 py-1 align-middle">
                      {(selectedGroups[partIndex] || []).length > 0 ? (
                        selectedGroups[partIndex].map((word, wordIndex) => (
                          <button
                            key={`${word}-${wordIndex}`}
                            onClick={() => handleOrderWordClick(partIndex, word, false, wordIndex)}
                            disabled={Boolean(orderResult)}
                            className="rounded-lg bg-blue-100 px-2 py-1 text-sm font-bold text-blue-800 shadow-sm disabled:cursor-default"
                          >
                            {word}
                          </button>
                        ))
                      ) : (
                        <span className="px-2 text-xs font-bold text-amber-500">空欄</span>
                      )}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {currentOrder.groups.map((group, groupIndex) => (
                <div key={groupIndex} className="rounded-2xl border border-slate-200 bg-white p-3">
                  {currentOrder.groups.length > 1 && (
                    <p className="mb-2 text-xs font-bold text-slate-400">選択肢 {groupIndex + 1}</p>
                  )}
                  <div className="flex flex-wrap justify-center gap-2">
                    {(availableGroups[groupIndex] || []).length > 0 ? (
                      (availableGroups[groupIndex] || []).map((word, wordIndex) => (
                        <button
                          key={`${word}-${wordIndex}`}
                          onClick={() => handleOrderWordClick(groupIndex, word, true, wordIndex)}
                          disabled={Boolean(orderResult)}
                          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-amber-400 hover:bg-amber-50 active:scale-95 disabled:cursor-default disabled:opacity-60"
                        >
                          {word}
                        </button>
                      ))
                    ) : (
                      <span className="text-sm font-medium text-slate-400">配置済み</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <button
                onClick={checkOrderAnswer}
                disabled={!isOrderComplete || Boolean(orderResult)}
                className={`rounded-xl py-3 text-sm font-bold shadow-sm transition-colors ${
                  isOrderComplete && !orderResult
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                判定
              </button>
              <button
                onClick={() => setupOrderQuestion(currentCard)}
                className="rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                やり直し
              </button>
              <button
                onClick={showOrderAnswer}
                className="rounded-xl bg-slate-800 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-slate-700"
              >
                答え
              </button>
            </div>

            {orderResult && (
              <div className={`mt-5 rounded-2xl border p-4 text-left ${
                orderResult === "correct"
                  ? 'border-emerald-200 bg-emerald-50'
                  : orderResult === "incorrect"
                    ? 'border-rose-200 bg-rose-50'
                    : 'border-blue-200 bg-blue-50'
              }`}>
                <p className={`mb-3 text-sm font-bold ${
                  orderResult === "correct"
                    ? 'text-emerald-700'
                    : orderResult === "incorrect"
                      ? 'text-rose-700'
                      : 'text-blue-700'
                }`}>
                  {orderResult === "correct" ? '正解' : orderResult === "incorrect" ? 'もう一度確認' : '答え表示'}
                </p>
                <p className="mb-3 rounded-xl bg-white p-3 text-base font-bold leading-relaxed text-slate-800">
                  {currentCard.a}
                </p>
                <p className="text-sm font-medium leading-relaxed text-slate-700">{currentCard.e}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div 
          className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-100 min-h-[320px] cursor-pointer relative transition-transform duration-300 transform hover:scale-[1.01]"
          onClick={handleFlip}
          onTouchStart={onTouchStartHandler}
          onTouchMove={onTouchMoveHandler}
          onTouchEnd={onTouchEndHandler}
        >
          <div className="absolute top-4 left-4 right-4 flex justify-center">
             <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full text-center">
               {currentCard.category}
             </span>
          </div>

          <div className="p-6 pt-16 h-full flex flex-col justify-center items-center text-center">
            {!isFlipped ? (
              // 表面（問題）
              <div className="w-full animate-in fade-in zoom-in-95 duration-200">
                <span className="block text-sm font-bold text-slate-400 mb-4 tracking-widest">QUESTION</span>
                {currentCard.q.split('\n').map((line, idx) => (
                  <p key={idx} className={`text-lg font-medium text-slate-700 leading-relaxed ${idx === 0 ? 'mb-4' : ''}`}>
                    {line}
                  </p>
                ))}
                <p className="text-slate-400 text-sm mt-8 animate-pulse">タップして解答を見る</p>
              </div>
            ) : (
              // 裏面（解答・解説）
              <div className="w-full animate-in fade-in zoom-in-95 duration-200">
                <span className="block text-sm font-bold text-emerald-500 mb-2 tracking-widest">ANSWER</span>
                <p className="text-2xl font-bold text-slate-800 mb-6 bg-emerald-50 py-2 px-4 rounded-lg inline-block">
                  {currentCard.a}
                </p>
                
                <div className="text-left w-full space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase mb-1 border-b pb-1">和訳</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{currentCard.t}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase mb-1 border-b pb-1">解説</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{currentCard.e}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {studyMode !== "sentences" && (
        <>
          {/* ナビゲーションボタン */}
          <div className="w-full max-w-md mt-8 flex justify-between items-center gap-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors w-full justify-center"
            >
              <ChevronLeft className="w-5 h-5" /> 前へ
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
              className="flex items-center gap-2 px-4 py-3 bg-indigo-600 border border-indigo-600 rounded-xl text-white font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors w-full justify-center"
            >
              次へ <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-8 text-xs text-slate-400 text-center">
            ※パソコンはクリック、スマホはタップでカードが裏返ります。<br/>スマホの場合は左右にスワイプして移動も可能です。
          </p>
        </>
      )}

    </div>
  );
}
