// Exam coverage from Izpit.docx – extends TOPICS at runtime
const EXAM_TOPIC_EXTENSIONS = {
  "creativity": [
    {
      "type": "mcq",
      "q": "Sposobnosti ustvarjalnih ljudi vključujejo:",
      "options": [
        "Produciranje idej, zaznavanje problemov, reševanje ko drugim zmanjka idej",
        "Samo kopiranje tujih rešitev",
        "Izogibanje problemom",
        "Samo analizo podatkov"
      ],
      "correct": 0,
      "explain": "Ustvarjalni ljudje proizvajajo ideje, vidijo probleme, rešujejo tudi ko drugim zmanjka idej."
    },
    {
      "type": "mcq",
      "q": "Kdaj je ustvarjalnost NAJVEČJA glede na izkušenost?",
      "options": [
        "Pri srednji stopnji izkušenosti",
        "Pri majhni izkušenosti",
        "Pri zelo visoki izkušenosti",
        "Brez izkušenosti vedno največ"
      ],
      "correct": 0,
      "explain": "Majhna izkušenost = šibka. Srednja = največja. Zelo visoka = upade."
    },
    {
      "type": "input",
      "q": "Kaj pomeni IZKUŠENOST za ustvarjalnost? (majhna, srednja, visoka)",
      "keywords": [
        "majhna",
        "srednj",
        "visoka",
        "šibk",
        "upade",
        "največ"
      ],
      "minMatches": 3,
      "explain": "Majhna = šibka, srednja = največja, visoka = upade."
    },
    {
      "type": "mcq",
      "q": "Kaj je IDEJA po definiciji iz gradiva?",
      "options": [
        "Rezultat najvišje umske dejavnosti, osnova za medijske projekte",
        "Samo naključna misel",
        "Kopija tujega projekta",
        "Samo pisni dokument"
      ],
      "correct": 0,
      "explain": "Ideja = rezultat umske dejavnosti, uresničitev zamisli, osnova novega medijskega projekta."
    },
    {
      "type": "input",
      "q": "Kdaj skupina spodbuja NOVE IDEJE?",
      "keywords": [
        "različnost",
        "mišljenj",
        "dopušča"
      ],
      "minMatches": 2,
      "explain": "Kadar dopušča čim večjo različnost v mišljenju."
    },
    {
      "type": "mcq",
      "q": "V produkcijski ekipi za preživetje na trgu potrebujemo:",
      "options": [
        "Nove ideje in spremembo vsebine, ne le oblike",
        "Samo spremembo oblike",
        "Brez novih idej",
        "Samo kopiranje konkurence"
      ],
      "correct": 0,
      "explain": "Ni dovolj sprememba oblike – spremeniti se mora vsebina."
    },
    {
      "type": "input",
      "q": "Naštej 4 pravila za DO IDEJE V SKUPINI:",
      "keywords": [
        "vzdušje",
        "vsiljujejo",
        "vodja",
        "član",
        "odkrito",
        "vzpodbudno"
      ],
      "minMatches": 4,
      "explain": "Posebno vzdušje, brez vsiljevanja mnenj, vodja kot član, odkrito pogovarjanje."
    },
    {
      "type": "mcq",
      "q": "Ustvarjalno mišljenje je:",
      "options": [
        "Duševni proces z originalnimi in uporabnimi dosežki",
        "Samo logično sklepanje",
        "Pomnjenje na pamet",
        "Samo intuicija brez rezultata"
      ],
      "correct": 0,
      "explain": "Ustvarjalno mišljenje = duševni proces → originalni in uporabni dosežki."
    },
    {
      "type": "mcq",
      "q": "Glavna značilnost ustvarjalnega mišljenja je:",
      "options": [
        "Izvirnost / originalnost",
        "Hitrost",
        "Pomnjenje",
        "Konsenz skupine"
      ],
      "correct": 0,
      "explain": "Originalnost = nove, nenavadne, neponovljive rešitve."
    },
    {
      "type": "input",
      "q": "Kaj pomeni IZVIRNOST pri ustvarjalnosti?",
      "keywords": [
        "nov",
        "nenavadn",
        "redk",
        "enkratn",
        "neponovljiv"
      ],
      "minMatches": 2,
      "explain": "Nove, nenavadne, redke, enkratne, neponovljive rešitve."
    },
    {
      "type": "mcq",
      "q": "V fazi FRUSTRACIJE človek pogosto občuti:",
      "options": [
        "Jezo, pobitost, dvom vase",
        "Čisto zadovoljstvo",
        "Brez emocij",
        "Samo navdušenje"
      ],
      "correct": 0,
      "explain": "Frustracija = jeza, pobitost, dvom zaradi težav pri reševanju."
    },
    {
      "type": "mcq",
      "q": "Inkubacija pomeni:",
      "options": [
        "Problem odložimo – podzavestno ostane prisoten",
        "Problem dokončno pozabimo",
        "Takojšnjo rešitev",
        "Samo zbiranje podatkov"
      ],
      "correct": 0,
      "explain": "Inkubacija = navidezna odlaganje, podzavestno delo nadaljuje."
    },
    {
      "type": "input",
      "q": "Pomembno pri ustvarjalnosti: najdemo nove ___ med obstoječimi podatki",
      "keywords": [
        "povezav",
        "povezave"
      ],
      "minMatches": 1,
      "explain": "Pomembno: najdemo nove povezave med obstoječimi podatki."
    },
    {
      "type": "mcq",
      "q": "Miselna PROŽNOST pomeni:",
      "options": [
        "Kakovost odgovorov – miselni preskok med kategorijami",
        "Samo veliko idej naenkrat",
        "Samo praktičnost",
        "Samo počasnost"
      ],
      "correct": 0,
      "explain": "Prožnost = ali odgovori pomenijo miselni preskok ali eno kategorijo."
    }
  ],
  "brainstorming": [
    {
      "type": "order",
      "q": "Razvrsti 5 KORAKOV poteka viharjenja možganov:",
      "items": [
        "Priprava seznama idej",
        "Združitev podobnih idej",
        "Oštevilčenje idej",
        "Izbira tretjine idej za obdržati",
        "Odstranitev idej z manj glasovi"
      ],
      "correctOrder": [
        0,
        1,
        2,
        3,
        4
      ],
      "explain": "1) Seznam 2) Združitev 3) Oštevilčenje 4) Tretjina 5) Odstranitev slabih."
    },
    {
      "type": "mcq",
      "q": "Pri skupinskem viharjenju možganov:",
      "options": [
        "Nobena ideja ni podvržena kritiziranju",
        "Vsaka ideja se takoj zavrže",
        "Samo vodja govori",
        "Dovoljena je samo ena ideja"
      ],
      "correct": 0,
      "explain": "Maksimalno število idej, brez kritike, člani dograjujajo ideje."
    },
    {
      "type": "mcq",
      "q": "Metoda 635 v 30 minutah da:",
      "options": [
        "108 idej brez da bi kdo spregovoril",
        "6 idej",
        "30 idej z glasnim pogovorom",
        "635 idej"
      ],
      "correct": 0,
      "explain": "6 oseb × 3 ideje × 6 krogov = 108 idej, vse pisno."
    },
    {
      "type": "mcq",
      "q": "RAZPRAVA 66 pomeni:",
      "options": [
        "6 oseb, 6 minut, plenum, ponavljanje krogov",
        "66 oseb v skupini",
        "66 minut brez pogovora",
        "66 idej na list"
      ],
      "correct": 0,
      "explain": "Skupine po 6, 6 minut, plenum, izboljšanje – ponavljamo do rešitve."
    },
    {
      "type": "input",
      "q": "Naštej naloge VODJE viharjenja možganov:",
      "keywords": [
        "sklic",
        "opredel",
        "osredotoč",
        "kritik",
        "dolgovezn",
        "razvijajo"
      ],
      "minMatches": 4,
      "explain": "Sklic, opredelitev problema, osredotočenost, brzdanje kritike, prekinjanje dolgih razprav, razvijanje idej drugih."
    },
    {
      "type": "mcq",
      "q": "Brainwriting poteka z:",
      "options": [
        "4–8 udeleženci, listki na mizi, navezovanje idej",
        "Samo glasnim pogovorom",
        "Eno osebo",
        "Brez zapisa"
      ],
      "correct": 0,
      "explain": "4-8 udeležencev, listki, navezovanje na obstoječe ideje, na koncu ocena."
    },
    {
      "type": "mcq",
      "q": "Šest klobukov kreativnega razmišljanja je:",
      "options": [
        "Tehnika/metoda za pridobivanje idej",
        "Vrsta čelade v trgovini",
        "6 faz ustvarjalnosti",
        "6 temperamentov"
      ],
      "correct": 0,
      "explain": "Šest klobukov = metoda kreativnega razmišljanja."
    },
    {
      "type": "input",
      "q": "Naštej VSE metode iz gradiva:",
      "keywords": [
        "brainstorm",
        "do it",
        "simplex",
        "klobuk",
        "provokac",
        "brainwriting",
        "635",
        "razprava",
        "66"
      ],
      "minMatches": 7,
      "explain": "Brainstorming, DO IT, SIMPLEX, Šest klobukov, Provokacija, Brainwriting, 635, Razprava 66."
    },
    {
      "type": "order",
      "q": "Razvrsti 4 korake metode DO IT:",
      "items": [
        "Opredelitev problema",
        "Ustvarjalno razmišljanje",
        "Označi najboljšo rešitev",
        "Preusmeritev (nadgradnja)"
      ],
      "correctOrder": [
        0,
        1,
        2,
        3
      ],
      "explain": "Opredelitev → Ustvarjalno razmišljanje → Najboljša rešitev → Preusmeritev."
    },
    {
      "type": "mcq",
      "q": "V 2. koraku DO IT (ustvarjalno razmišljanje):",
      "options": [
        "Zapišemo VSE ideje, tudi slabe – ne vrednotimo še",
        "Takoj izberemo najboljšo",
        "Samo eno idejo",
        "Prepovemo slabe ideje"
      ],
      "correct": 0,
      "explain": "Vse ideje, tudi slabe – na tej stopnji jih ne vrednotimo."
    },
    {
      "type": "mcq",
      "q": "Metoda PROVOKACIJE spada med:",
      "options": [
        "Tehnike pridobivanja idej in reševanja problemov",
        "Blokade ustvarjalnosti",
        "Temperamente",
        "Faze stresa"
      ],
      "correct": 0,
      "explain": "Provokacija je ena od tehnik pridobivanja idej poleg brainstorminga, DO IT, SIMPLEX."
    },
    {
      "type": "mcq",
      "q": "Ogrevanje pri brainstormingu so:",
      "options": [
        "Vaje za miselno telovadbo pred glavno sejo",
        "Fizične vaje v telovadnici",
        "Končna faza SIMPLEX",
        "Blokade ustvarjalnosti"
      ],
      "correct": 0,
      "explain": "Ogrevanje = miselna telovadba pred brainstormom."
    }
  ],
  "personality": [
    {
      "type": "mcq",
      "q": "INTROVERTNOST pomeni:",
      "options": [
        "Mirnost, odmaknjenost, malo prijateljev, veliko časa sam",
        "Veliko zabav in prijateljev",
        "Agresivnost",
        "Hitro odločanje"
      ],
      "correct": 0,
      "explain": "Introvert = mirnost, izogibanje novim situacijam, veliko sam."
    },
    {
      "type": "mcq",
      "q": "EKSTRAVERTNOST pomeni:",
      "options": [
        "Družabnost, veliko prijateljev, radi zabave",
        "Pesimizem in zadržanost",
        "Pasivnost",
        "Samo delo v osami"
      ],
      "correct": 0,
      "explain": "Ekstravert = družaben, veliko prijateljev, zabave."
    },
    {
      "type": "mcq",
      "q": "KOLERIK se mora naučiti:",
      "options": [
        "Obvladati samega sebe",
        "Biti še bolj agresiven",
        "Izogibati delu",
        "Samo poslušati"
      ],
      "correct": 0,
      "explain": "Kolerik: energija, odločnost – mora obvladati sebe za uspeh pri delu."
    },
    {
      "type": "mcq",
      "q": "SANGVINIK ima pogosto težavo z:",
      "options": [
        "Površnostjo in pomanjkanjem vztrajnosti",
        "Preveč mirnostjo",
        "Pesimizmom",
        "Počasnim reagiranjem"
      ],
      "correct": 0,
      "explain": "Sangvinik: vesel, a površen, nestanoviten."
    },
    {
      "type": "mcq",
      "q": "FLEGMATIK je:",
      "options": [
        "Počasen, hladnokrven, zanesljiv – nasprotje koleriku",
        "Agresiven in nestanoven",
        "Površen optimist",
        "Globoko melanholičen"
      ],
      "correct": 0,
      "explain": "Flegmatik = nasprotje koleriku, miren, zanesljiv."
    },
    {
      "type": "mcq",
      "q": "MELANHOLIK je značilen po:",
      "options": [
        "Počasnem a globokem reagiranju, občutljivosti, sočutju",
        "Površini in brezskrbnosti",
        "Agresiji",
        "Hitrem površnem optimizmu"
      ],
      "correct": 0,
      "explain": "Melanholik = globoko čustvovanje, občutljiv, sočuten."
    },
    {
      "type": "input",
      "q": "Naštej lastnosti ZNAČAJA (iz docx):",
      "keywords": [
        "pošten",
        "vestnost",
        "delavn"
      ],
      "minMatches": 2,
      "explain": "Značaj = moralne lastnosti: poštenost, vestnost, delavnost... Vpliv vzgoje."
    },
    {
      "type": "mcq",
      "q": "Značaj se kaže predvsem:",
      "options": [
        "V konfliktnih situacijah med vrednotami",
        "Samo na zabavah",
        "Nikoli",
        "Samo v šoli"
      ],
      "correct": 0,
      "explain": "Značaj se pokaže v konfliktih – lastne potrebe vs. pomoč drugim."
    },
    {
      "type": "input",
      "q": "Naštej 5 značajskih lastnosti za uspešno delo v skupini:",
      "keywords": [
        "pošten",
        "prijazn",
        "delavn",
        "solidarn",
        "samozavest"
      ],
      "minMatches": 4,
      "explain": "Poštenost, prijaznost, delavnost, solidarnost, zdrava samozavest."
    },
    {
      "type": "input",
      "q": "Razloži razliko TELESNE in DUŠEVNE sposobnosti:",
      "keywords": [
        "telesn",
        "duševn",
        "inteligent",
        "pljuč",
        "motor"
      ],
      "minMatches": 3,
      "explain": "Telesne (npr. pljuč, motorika) vs duševne (inteligentnost, ustvarjalnost)."
    },
    {
      "type": "mcq",
      "q": "SPRETNOSTI so:",
      "options": [
        "Motorična in specifična znanja na področjih delovanja",
        "Samo dedne lastnosti",
        "Samo telesna moč",
        "Brez učenja"
      ],
      "correct": 0,
      "explain": "Spretnosti = motorična znanja + komunikacija, delo s podatki, idejami, ljudmi..."
    },
    {
      "type": "mcq",
      "q": "Osebnostni razvoj je najhitrejši:",
      "options": [
        "V otroštvu in mladostništvu",
        "Samo po 50. letu",
        "Samo v predšolski dobi",
        "Nikoli se ne spreminja"
      ],
      "correct": 0,
      "explain": "Osebnost se oblikuje vse življenje, najhitreje v otroštvu/mladosti."
    },
    {
      "type": "mcq",
      "q": "Osebnostno zorenje je najbolj vidno med:",
      "options": [
        "12. in 20. letom (mladostništvo)",
        "0 in 3 letom",
        "40. in 50. letom",
        "Samo po upokojitvi"
      ],
      "correct": 0,
      "explain": "Puberteta 12-15, osebnostno zorenje 12-20."
    },
    {
      "type": "input",
      "q": "Naštej vrste OSEBNE ZRELOSTI:",
      "keywords": [
        "telesn",
        "spoznavn",
        "čustven",
        "socialn",
        "moraln"
      ],
      "minMatches": 4,
      "explain": "Telesna, spoznavna, čustvena, socialna, moralna zrelost."
    },
    {
      "type": "mcq",
      "q": "Čustvena zrelost vključuje:",
      "options": [
        "Izražanje čustev, pozitiven odnos do sebe in drugih, kontrola čustev",
        "Brez čustev",
        "Samo jezo",
        "Popolno odsotnost čustev"
      ],
      "correct": 0,
      "explain": "Čustvena zrelost = pestrost čustev, pozitiven odnos, kontrola (konec mladosti+)."
    },
    {
      "type": "mcq",
      "q": "Moralna zrelost je:",
      "options": [
        "Zmožnost zrelega presojanja na podlagi moralnega prepričanja",
        "Samo poslušanje avtoritet",
        "Brez vrednot",
        "Samo strah pred kaznijo"
      ],
      "correct": 0,
      "explain": "Moralna zrelost = rezultat vzgoje in samovzgoje."
    }
  ],
  "group": [
    {
      "type": "mcq",
      "q": "SKUPINA po definiciji je:",
      "options": [
        "Socialna enota s stabilnimi odnosi, normami in skupnim ciljem",
        "Seštevek posameznikov brez odnosov",
        "Vsaka množica na ulici",
        "Samo družina"
      ],
      "correct": 0,
      "explain": "Skupina = socialna enota, odnosi, norme, neposredna interakcija, vzajemni vpliv."
    },
    {
      "type": "mcq",
      "q": "Najpomembnejša lastnost strukture skupine je:",
      "options": [
        "Relativna trajnost razvrstitve",
        "Geografska lokacija",
        "Barva oblačil",
        "Starost članov"
      ],
      "correct": 0,
      "explain": "Struktura = trajna razvrstitev odnosov, vlog, moči, komunikacije."
    },
    {
      "type": "input",
      "q": "Naštej 6 OBLIK MOČI v skupini:",
      "keywords": [
        "legitimn",
        "pritisk",
        "nagrajevanj",
        "strokovn",
        "referenčn",
        "informacijsk"
      ],
      "minMatches": 5,
      "explain": "Legitimna, pritisk, nagrajevanje, strokovna, referenčna, informacijska."
    },
    {
      "type": "mcq",
      "q": "Nosilec socialne moči se imenuje:",
      "options": [
        "Avtoriteta",
        "Konkurent",
        "Opazovalec",
        "Zunanji svetovalec"
      ],
      "correct": 0,
      "explain": "Socialna moč = potencialni vpliv. Nosilec = avtoriteta."
    },
    {
      "type": "mcq",
      "q": "MALE skupine so:",
      "options": [
        "Do 30 ljudi – možen stik vsakega z vsakim",
        "Nad 100 ljudi",
        "Samo 2 osebi",
        "Brez interakcije"
      ],
      "correct": 0,
      "explain": "Male do 30, velike nad 30 – stiki se izgubijo."
    },
    {
      "type": "mcq",
      "q": "KOHEZIVNO-HETEROGENA skupina:",
      "options": [
        "Dopušča različnost ob uniformnosti v bistvenem",
        "Zahteva popolno enakost mišljenja",
        "Ne dopušča individualnosti",
        "Razpada takoj"
      ],
      "correct": 0,
      "explain": "Kohezivno-heterogena = uniformno v bistvenem + individualnost."
    },
    {
      "type": "mcq",
      "q": "KOHEZIVNO-KONFORMNA skupina:",
      "options": [
        "Pretirana uniformnost v mišljenju in vedenju zaradi pritiska",
        "Popolnoma brez pravil",
        "Samo individualnost",
        "Brez vodje"
      ],
      "correct": 0,
      "explain": "Kohezivno-konformna = pretirana enakost zaradi pritiska."
    },
    {
      "type": "order",
      "q": "Razvrsti 4 FAZE RAZVOJA SKUPINE:",
      "items": [
        "Oblikovanje",
        "Nasprotovanje",
        "Pristajanje",
        "Izvajanje"
      ],
      "correctOrder": [
        0,
        1,
        2,
        3
      ],
      "explain": "Oblikovanje → Nasprotovanje → Pristajanje → Izvajanje."
    },
    {
      "type": "mcq",
      "q": "Pri IZVAJANJU (4. faza) skupina:",
      "options": [
        "Dela usklajeno, vodja posluša, zaupa med člani",
        "Se šele spoznava",
        "Je v konfliktu",
        "Se razpade"
      ],
      "correct": 0,
      "explain": "Izvajanje = sodelovanje, zaupanje, vodja prilagaja potrebam članov."
    },
    {
      "type": "input",
      "q": "Naštej 4 OBLIKE delovanja skupin:",
      "keywords": [
        "sodelovan",
        "tekmovan",
        "nadvlad",
        "podrejen"
      ],
      "minMatches": 4,
      "explain": "Sodelovanje, tekmovanje, nadvladje (dominacija), podrejenost."
    },
    {
      "type": "mcq",
      "q": "INDIVIDUALNO delo pomeni:",
      "options": [
        "Posameznik dela sam, neodvisno, lahko zapusti delovno mesto",
        "Skupna odgovornost do konca",
        "Medsebojna odvisnost",
        "Brez možnosti odhoda"
      ],
      "correct": 0,
      "explain": "Individualno = sam, neodvisno, zapusti ko se izteče čas."
    },
    {
      "type": "mcq",
      "q": "SKUPINSKO delo – posameznik:",
      "options": [
        "Lahko zapusti skupino ko opravi svoje, ni nujno povezan z drugimi",
        "Je odvisen od vseh do konca",
        "Ne dela nič",
        "Samo vodja dela"
      ],
      "correct": 0,
      "explain": "Skupinsko = naloge neodvisno, lahko odide po svojem delu."
    },
    {
      "type": "mcq",
      "q": "KONFORMNA skupina pomeni:",
      "options": [
        "Člani sprejmejo pravila delovanja skupine",
        "Popolna razpad skupine",
        "Brez pravil",
        "Samo tekmovanje"
      ],
      "correct": 0,
      "explain": "Konformna = sprejetje pravil. Kohezivno-konformna = pretirana uniformnost."
    },
    {
      "type": "mcq",
      "q": "POLOŽAJ v skupini je:",
      "options": [
        "Mesto posameznika v hierarhiji skupine",
        "Vsota pričakovanih vedenj za vlogo",
        "Samo formalna plača",
        "Brez pomena"
      ],
      "correct": 0,
      "explain": "Položaj = mesto v hierarhiji. Vloga = pričakovana vedenja za položaj."
    },
    {
      "type": "mcq",
      "q": "VLOGA v skupini je:",
      "options": [
        "Vsota pričakovanih vedenj, vezana na določen položaj",
        "Samo fizična lokacija",
        "Nepomembna",
        "Enako kot položaj"
      ],
      "correct": 0,
      "explain": "Vloga = pričakovana vedenja za položaj."
    },
    {
      "type": "input",
      "q": "Kaj strukturo skupine tvori?",
      "keywords": [
        "odnosi",
        "podskupin",
        "vlog",
        "komunikac",
        "moč",
        "trajnost"
      ],
      "minMatches": 4,
      "explain": "Odnosi, podskupine, vloge, komunikacija, moč, norme – trajna razvrstitev."
    }
  ],
  "motivation": [
    {
      "type": "mcq",
      "q": "Motivacija (lat.) motus pomeni:",
      "options": [
        "Gibanje",
        "Hrano",
        "Strah",
        "Spanje"
      ],
      "correct": 0,
      "explain": "Motivacija ← lat. motus = gibanje."
    },
    {
      "type": "mcq",
      "q": "Živali imajo NAGON, človek ima:",
      "options": [
        "Motivacijo",
        "Samo reflekse",
        "Brez razlogov za vedenje",
        "Samo strah"
      ],
      "correct": 0,
      "explain": "Živali – nagon, človek – motivacija."
    },
    {
      "type": "mcq",
      "q": "MOTIV je:",
      "options": [
        "Notranja sila, ki usmerja v akcijo – rezultat napetosti zaradi nezadovoljene potrebe",
        "Samo zunanja nagrada",
        "Brez povezave s potrebami",
        "Samo strah"
      ],
      "correct": 0,
      "explain": "Motiv = notranja sila, napetost → cilj (motivacijski cilj)."
    },
    {
      "type": "mcq",
      "q": "POTREBA je:",
      "options": [
        "Stanje neravnovesja – nelagodnost, napetost, težnja po odpravi",
        "Vedno zadovoljstvo",
        "Samo fizična bolečina",
        "Brez vpliva na vedenje"
      ],
      "correct": 0,
      "explain": "Potreba = neravnovesje, nelagodnost, težnja po odpravi."
    },
    {
      "type": "input",
      "q": "Naštej 5 TEMELJNIH človeških potreb:",
      "keywords": [
        "preživetj",
        "ljubezen",
        "pripadnost",
        "moč",
        "priznan",
        "svobod",
        "zabav"
      ],
      "minMatches": 5,
      "explain": "Preživetje, ljubezen/pripadnost, moč/priznanje, svoboda, zabava."
    },
    {
      "type": "mcq",
      "q": "PLAČA po Herzbergu:",
      "options": [
        "Higienični dejavnik – neposredno ne poveča zavzetosti, manjša plača zmanjša delo",
        "Glavni motivator za več dela",
        "Brez vpliva",
        "Edini motivator"
      ],
      "correct": 0,
      "explain": "Plača = higienik – zadovoljstvo/nezadovoljstvo, ne stimulator za več dela."
    },
    {
      "type": "mcq",
      "q": "POHVALA pri delu:",
      "options": [
        "Pozitivno vpliva; pohvala pred skupino je učinkovita",
        "Ne vpliva",
        "Samo škodi",
        "Enako kot javna grda"
      ],
      "correct": 0,
      "explain": "Pohvale in graje vplivata – pohvala pred skupino, graja na štiri oči."
    },
    {
      "type": "input",
      "q": "Naštej dejavnike motivacije PRI DELU:",
      "keywords": [
        "pohval",
        "rezultat",
        "pričakovan",
        "sodelovan",
        "tekmovan",
        "plač"
      ],
      "minMatches": 4,
      "explain": "Pohvale/graje, poznavanje rezultatov, pričakovanja, sodelovanje, tekmovanje, plača."
    },
    {
      "type": "input",
      "q": "Kako reagirati na FRUSTRACIJO – naštej 3 načine:",
      "keywords": [
        "preusmer",
        "prelož",
        "sprijazn",
        "nadomestil"
      ],
      "minMatches": 3,
      "explain": "Preusmeritev na drug cilj, preložitev želje, sprijaznitev, nadomestilo."
    },
    {
      "type": "mcq",
      "q": "Višje potrebe (Maslow) se razvijejo:",
      "options": [
        "Ko so nižje do neke mere zadovoljene",
        "Neodvisno od nižjih",
        "Samo v otroštvu",
        "Nikoli"
      ],
      "correct": 0,
      "explain": "Višje potrebe šele ko so nižje zadovoljene. Za nas pomembnejše psihološko."
    },
    {
      "type": "mcq",
      "q": "Uspešno zadovoljevanje temeljnih potreb vodi v:",
      "options": [
        "Moč, svobodo, pripadnost timu, zabavo pri delu, višjo kakovost",
        "Samo več stresa",
        "Manj motivacije",
        "Brez vpliva na delo"
      ],
      "correct": 0,
      "explain": "5 potreb skladno zadovoljene → moč, svoboda, pripadnost, zabava, kakovost."
    },
    {
      "type": "input",
      "q": "Naštej Maslowove VIŠJE potrebe (iz gradiva):",
      "keywords": [
        "varnost",
        "pripadnost",
        "spoštovan",
        "kognitiv",
        "estetik",
        "samouresnič"
      ],
      "minMatches": 4,
      "explain": "Varnost, pripadnost/ljubezen, spoštovanje/ugled, kognitivne, estetske, samouresničevanje."
    },
    {
      "type": "mcq",
      "q": "Potreba po SAMOURESNIČEVANJU:",
      "options": [
        "Vrh človekovih potreb – uresničitev talentov",
        "Najnižja potreba",
        "Samo fizična",
        "Brez pomena pri delu"
      ],
      "correct": 0,
      "explain": "Samouresničevanje = vrh piramide, ko so nižje zadovoljene."
    },
    {
      "type": "mcq",
      "q": "KOGNITIVNE potrebe pri delu:",
      "options": [
        "Pridobivanje novih informacij o delovnem področju",
        "Samo plača",
        "Brez učenja",
        "Samo varnost"
      ],
      "correct": 0,
      "explain": "Kognitivne = znanje, spoznavanje, novosti na delovnem mestu."
    }
  ]
};

const EXAM_NEW_TOPICS = [
  {
    "id": "simplex",
    "name": "SIMPLEX & metode",
    "emoji": "⚙️",
    "color": "#4ecdc4",
    "questions": [
      {
        "type": "order",
        "q": "Razvrsti VSE 8 korakov SIMPLEX:",
        "items": [
          "Poišči problem",
          "Poišči podatke",
          "Definiraj problem",
          "Poišči idejo",
          "Izbiranje in ovrednotenje",
          "Načrtovanje",
          "Prodaj idejo",
          "Akcija"
        ],
        "correctOrder": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "explain": "1-8: Problem, podatki, definicija, ideja, izbira, načrtovanje, prodaja, akcija."
      },
      {
        "type": "mcq",
        "q": "SIMPLEX temelji na:",
        "options": [
          "Integraciji zaključenih postopkov – iz kroga v krog izboljšav",
          "Samo enkratnem brainstormingu",
          "Kopiranju konkurence",
          "Brez načrtovanja"
        ],
        "correct": 0,
        "explain": "SIMPLEX = nadgradnja DO IT, krožno izboljševanje."
      },
      {
        "type": "input",
        "q": "Kaj počne 3. korak SIMPLEX – DEFINIRAJ PROBLEM?",
        "keywords": [
          "zakaj",
          "omejuje",
          "razšir"
        ],
        "minMatches": 2,
        "explain": "Razširitev z 'Zakaj?', zoženje z 'Kaj me omejuje?'"
      },
      {
        "type": "input",
        "q": "Kaj počne 7. korak SIMPLEX – PRODAJ IDEJO?",
        "keywords": [
          "predstav",
          "podpor",
          "nadrejen",
          "bank"
        ],
        "minMatches": 2,
        "explain": "Predstavi idejo, pridobi podporo nadrejenih, bank (posojilo)."
      },
      {
        "type": "mcq",
        "q": "8. korak SIMPLEX – AKCIJA pomeni:",
        "options": [
          "Vodi v naslednji ustvarjalni krog, izvedba ideje",
          "Konec brez izvedbe",
          "Samo analizo",
          "Opustitev projekta"
        ],
        "correct": 0,
        "explain": "Akcija = izvedba, vračamo se na izhodišče za nov krog."
      },
      {
        "type": "mcq",
        "q": "6. korak SIMPLEX – NAČRTOVANJE vključuje:",
        "options": [
          "Dan, trajanje, prostor, ekipo, opremo, logistiko",
          "Samo brainstorm",
          "Brez izvedbe",
          "Samo prodajo"
        ],
        "correct": 0,
        "explain": "Načrtovanje = čas, prostor, ekipa, oprema, logistika."
      }
    ]
  },
  {
    "id": "blocks",
    "name": "Blokade ustvarjalnosti",
    "emoji": "🚧",
    "color": "#f44b7f",
    "questions": [
      {
        "type": "mcq",
        "q": "Največja ovira ustvarjalnosti je:",
        "options": [
          "Prepričanje, da nismo ustvarjalni",
          "Preveč idej",
          "Preveč pohvale",
          "Preveč izkušenosti"
        ],
        "correct": 0,
        "explain": "Prepričanje da nismo ustvarjalni = pasivnost. Odpravimo sami – verjeti v zmožnosti."
      },
      {
        "type": "input",
        "q": "Naštej VSAJ 5 BLOKAD ustvarjalnosti:",
        "keywords": [
          "negativen",
          "strah",
          "neuspeh",
          "stres",
          "pravil",
          "domnev",
          "logik",
          "ustvarjaln"
        ],
        "minMatches": 5,
        "explain": "Negativen odnos, strah pred neuspehom, stres, slepo pravila, domneve, logika, nismo ustvarjalni."
      },
      {
        "type": "mcq",
        "q": "Strah pred neuspehom – neuspeh je:",
        "options": [
          "Stranski proizvod ustvarjalnosti",
          "Končni poraz življenja",
          "Razlog za prenehanje ustvarjanja",
          "Vedno slabo"
        ],
        "correct": 0,
        "explain": "Neuspeh = stranski proizvod ustvarjalnosti, ne končni poraz."
      },
      {
        "type": "mcq",
        "q": "Pretirano zanašanje na LOGIKO – nasproti logiki so:",
        "options": [
          "Domišljija, intuicija, čustva, humor",
          "Samo še več logike",
          "Pravila in kazni",
          "Stres"
        ],
        "correct": 0,
        "explain": "Nasproje logiki: domišljija, intuicija, čustva, humor."
      },
      {
        "type": "input",
        "q": "Kako odpraviti NEGATIVEN ODOS do novosti?",
        "keywords": [
          "spoznamo",
          "črnogled",
          "pot"
        ],
        "minMatches": 2,
        "explain": "Ko spoznamo da smo črnogledi brez potrebe, smo na dobri poti."
      },
      {
        "type": "mcq",
        "q": "SLEPO upoštevanje pravil pomeni:",
        "options": [
          "Določimo samo cilj, ne kako in kaj naj ljudje delajo",
          "Več pravil za vse",
          "Prepoved vseh idej",
          "Samo logiko"
        ],
        "correct": 0,
        "explain": "Ne določajmo kako delati – samo cilj."
      },
      {
        "type": "mcq",
        "q": "ČEZMERNI STRES pri delu:",
        "options": [
          "Povzroči togost in hromi ustvarjalnost",
          "Poveča ustvarjalnost",
          "Brez vpliva",
          "Samo fizično škodo"
        ],
        "correct": 0,
        "explain": "Več pritiskov, pomanjkanje časa → togost, hromi ustvarjalnost."
      },
      {
        "type": "mcq",
        "q": "DOMNEVE IN SUMI:",
        "options": [
          "Če drugim ne zaupamo, se čutimo ogrožene",
          "Povečajo ustvarjalnost",
          "Brez vpliva",
          "Samo pri vodji"
        ],
        "correct": 0,
        "explain": "Nezaupanje = občutek ogroženosti, blokada."
      }
    ]
  },
  {
    "id": "team",
    "name": "Tim & Belbin",
    "emoji": "🏆",
    "color": "#f8961e",
    "questions": [
      {
        "type": "mcq",
        "q": "Najprimernejša velikost TIMA je:",
        "options": [
          "5–12 članov",
          "2–3 člani",
          "30–50 članov",
          "100+ članov"
        ],
        "correct": 0,
        "explain": "Idealno 5-12. Nad 12 vsak vlaga ~10% manj napora (vrv experiment)."
      },
      {
        "type": "mcq",
        "q": "TIMSKO delo pomeni:",
        "options": [
          "Medsebojna odvisnost, skupna odgovornost od začetka do konca",
          "Vsak dela sam brez povezave",
          "Lahko zapustiš pred koncem",
          "Brez komunikacije"
        ],
        "correct": 0,
        "explain": "Tim = odvisnost, skupna odgovornost, nihče ne zapusti pred koncem."
      },
      {
        "type": "mcq",
        "q": "Če vodja izbere samo sebi podobne ljudi:",
        "options": [
          "Tim ne bo uspešen (orkester potrebuje različnosti)",
          "Tim bo najboljši",
          "Ni pomembno",
          "Samo strokovnost šteje"
        ],
        "correct": 0,
        "explain": "Belbin: mešanica osebnosti je ključna – ne samo strokovnost."
      },
      {
        "type": "input",
        "q": "Naštej VSAJ 4 naloge VODJE TIMA:",
        "keywords": [
          "informac",
          "koordin",
          "mnenj",
          "nesoglas",
          "čas",
          "vzdušje"
        ],
        "minMatches": 4,
        "explain": "Zbira informacije, koordinira, spodbuja mnenja, rešuje nesoglasja, čas, vzdušje."
      },
      {
        "type": "input",
        "q": "Naštej VSE 8 Belbinovih timskih vlog:",
        "keywords": [
          "garač",
          "uskajevalec",
          "izzivalec",
          "inovator",
          "iskalec",
          "ocenjevalec",
          "timski",
          "zaključevalec"
        ],
        "minMatches": 6,
        "explain": "Garač, Usklajevalec, Izzivalec, Inovator, Iskalec virov, Ocenjevalec, Timski delavec, Zaključevalec."
      },
      {
        "type": "mcq",
        "q": "Belbin INOVATOR je:",
        "options": [
          "Pospešuje nove ideje, zanima ga bistvo, introvertiran",
          "Samo izvaja načrte",
          "Ne mara idej",
          "Samo vodja brez idej"
        ],
        "correct": 0,
        "explain": "Inovator = nove ideje/strategije, bistvo, introvertiran."
      },
      {
        "type": "mcq",
        "q": "Belbin GARAČ:",
        "options": [
          "Zamisli spreminja v načrte in jih izvaja, stalen in zadržan",
          "Samo kritizira",
          "Ne izvaja nič",
          "Samo išče vire zunaj"
        ],
        "correct": 0,
        "explain": "Garač = načrti + izvedba, stalen."
      },
      {
        "type": "mcq",
        "q": "Belbin USKLAJEVALEC:",
        "options": [
          "Nadzira pot do cilja, skrbi da člani uporabljajo potenciale",
          "Samo išče vire",
          "Ne komunicira",
          "Samo zaključuje naloge"
        ],
        "correct": 0,
        "explain": "Usklajevalec = pot do cilja, potencial članov, ekstravertiran."
      },
      {
        "type": "mcq",
        "q": "Belbin IZZIVALEC:",
        "options": [
          "Poskuša vsiliti vzorec razpravi, nestrpen, ekstravertiran",
          "Miren in pasiven",
          "Samo analizira",
          "Ne mara razprave"
        ],
        "correct": 0,
        "explain": "Izzivalec = vzorec razpravi/rezultatom, nestrpen."
      },
      {
        "type": "mcq",
        "q": "Belbin ISKALEC VIROV:",
        "options": [
          "Raziskuje ideje in vire zunaj skupine, ekstravertiran",
          "Samo notranje ideje",
          "Introvert brez komunikacije",
          "Ne išče nič"
        ],
        "correct": 0,
        "explain": "Iskalec virov = zunanje ideje/viri, ekstravertiran."
      },
      {
        "type": "mcq",
        "q": "Belbin OCENJEVALEC:",
        "options": [
          "Analizira probleme in vrednosti idej, introvertiran",
          "Samo izvaja brez analize",
          "Ne mara idej",
          "Vedno ekstravert"
        ],
        "correct": 0,
        "explain": "Ocenjevalec = analiza, uravnotežene odločitve, introvert."
      },
      {
        "type": "mcq",
        "q": "Belbin TIMSKI DELAVEC:",
        "options": [
          "Podpira člane, izboljšuje komunikacijo, senzitiven",
          "Samo dela sam",
          "Ne pomaga drugim",
          "Samo kritizira"
        ],
        "correct": 0,
        "explain": "Timski delavec = podpora, komunikacija, senzitivnost."
      },
      {
        "type": "mcq",
        "q": "Belbin ZAKLJUČEVALEC:",
        "options": [
          "Ščiti tim pred napakami, skrbi za podrobnost in nujnost",
          "Ne mara podrobnosti",
          "Samo nove ideje",
          "Vedno ekstravert"
        ],
        "correct": 0,
        "explain": "Zaključevalec = podrobnosti, nujnost, introvertiran."
      },
      {
        "type": "mcq",
        "q": "V timu mora komunikacija temeljiti na:",
        "options": [
          "Opisovanju, ne ocenjevanju; zaupanju; odkritosti",
          "Ocenjevanju ljudi",
          "Pripravljenih rešitvah vnaprej",
          "Sprenevedanju"
        ],
        "correct": 0,
        "explain": "Odprta komunikacija, opis ne ocena, brez podtikanj."
      },
      {
        "type": "mcq",
        "q": "SINERGIJA v timu pomeni:",
        "options": [
          "Uspešnost celote večja od vsote posameznikov",
          "Vsak dela sam",
          "Manjša produktivnost",
          "Samo tekmovanje"
        ],
        "correct": 0,
        "explain": "Sinergija = celota > vsota delov."
      },
      {
        "type": "input",
        "q": "Zakaj je RAZLIČNA starostna zastopanost v timu dobra?",
        "keywords": [
          "zrelost",
          "izkušnj",
          "drznost",
          "energij",
          "mlajš"
        ],
        "minMatches": 3,
        "explain": "Starejši: zrelost, izkušnje. Mlajši: drznost, energija, prožnost."
      },
      {
        "type": "mcq",
        "q": "SPOLNA zastopanost v timu (film):",
        "options": [
          "Dopolnjevanje racionalnega (moški) in čustvenega/intuitivnega (ženski) = uspešen tim",
          "Samo moški v timu",
          "Brez pomena",
          "Samo en spol vedno boljši"
        ],
        "correct": 0,
        "explain": "Dopolnjevanje racionalnega s čustvi = uspešen tim."
      },
      {
        "type": "order",
        "q": "Razvrsti 3 korake USPOSABLJANJA TIMA:",
        "items": [
          "Navodila / inštrukcije o uspešnem timu",
          "Prehod k nalogi – člani sami odkrivajo",
          "Vaja spretnosti, pregled lastnega razvoja"
        ],
        "correctOrder": [
          0,
          1,
          2
        ],
        "explain": "1) Navodila 2) Samo odkrivanje 3) Vaja + pregled."
      },
      {
        "type": "mcq",
        "q": "Belbin: vsak član ima DVOJNO vlogo:",
        "options": [
          "Funkcionalno (strokovnost) + timsko (osebnostne lastnosti)",
          "Samo strokovno",
          "Samo vodilno",
          "Brez vlog"
        ],
        "correct": 0,
        "explain": "Funkcionalno = ekspertiza. Timsko = inteligentnost, dominantnost, ekstra/introvert."
      }
    ]
  },
  {
    "id": "stress",
    "name": "Stres & konflikti",
    "emoji": "🧠",
    "color": "#a78bfa",
    "questions": [
      {
        "type": "mcq",
        "q": "EUSTRES nastane kadar:",
        "options": [
          "Naše sposobnosti so večje od zahtev okolja",
          "Zahteve presegajo sposobnosti",
          "Ni nobenega stresa",
          "Samo pri bolezni"
        ],
        "correct": 0,
        "explain": "Eustres = sposobnosti > zahteve. Distres = zahteve > sposobnosti."
      },
      {
        "type": "mcq",
        "q": "DISTRES nastane kadar:",
        "options": [
          "Zahteve okolja so večje od naših sposobnosti",
          "Imamo preveč prostega časa",
          "Samo pozitivni dogodki",
          "Vedno je dober"
        ],
        "correct": 0,
        "explain": "Distres = stiska, ko zahteve presegajo sposobnosti."
      },
      {
        "type": "order",
        "q": "Razvrsti 3 FAZE dolgotrajnega stresa:",
        "items": [
          "Alarm (šok/protišok)",
          "Odpor (prilagoditev)",
          "Izčrpanost"
        ],
        "correctOrder": [
          0,
          1,
          2
        ],
        "explain": "Alarm → Odpor → Izčrpanost."
      },
      {
        "type": "mcq",
        "q": "V fazi ALARM stresa:",
        "options": [
          "Zavemo se stresorja, šok nato protišok – mobilizacija energije",
          "Popolno ravnovesje",
          "Brez reakcije",
          "Samo spanje"
        ],
        "correct": 0,
        "explain": "Alarm = šok (upad) → protišok (mobilizacija)."
      },
      {
        "type": "mcq",
        "q": "Osebnostna ČVRSTOST visoka pomeni:",
        "options": [
          "Ovire jemljemo kot izzive, hitro prebolimo",
          "Vsaka situacija je grožnja",
          "Ne prenesemo stresa",
          "Življenje usmerjajo zunanji"
        ],
        "correct": 0,
        "explain": "Visoka čvrstost = izzivi, angažiranost, hitro prebolevanje."
      },
      {
        "type": "mcq",
        "q": "Nizka osebnostna čvrstost:",
        "options": [
          "Manjši stresi puščajo hujše posledice, težko prebolimo",
          "Brez posledic",
          "Vedno optimizem",
          "Hitro prebolevanje"
        ],
        "correct": 0,
        "explain": "Nizka = grožnje, zunanji dejavniki usmerjajo življenje."
      },
      {
        "type": "mcq",
        "q": "ZAČARANI KROG izčrpanosti:",
        "options": [
          "Več napor = manjša učinkovitost, utrujenost raste",
          "Več dela = več energije za vedno",
          "Ne obstaja",
          "Samo pri športu"
        ],
        "correct": 0,
        "explain": "Začarani krog = pri dodatnem naporu učinkovitost pada."
      },
      {
        "type": "input",
        "q": "Naštej strategije SPROŠČANJA od stresa:",
        "keywords": [
          "sproščanj",
          "giban",
          "prehrana",
          "življenjsk"
        ],
        "minMatches": 3,
        "explain": "Vaje sproščanja, gibanje, zdrav življenjski slog, prehrana."
      },
      {
        "type": "mcq",
        "q": "DUŠEVNA KRIZA je:",
        "options": [
          "Dalj časa porušeno duševno ravnovesje zaradi ovir pri ciljih",
          "Samo kratka utrujenost",
          "Vedno bolezen",
          "Brez čustev"
        ],
        "correct": 0,
        "explain": "Kriza = stiska, negotovost – adolescenca, srednja leta, upokojitev."
      },
      {
        "type": "mcq",
        "q": "Konflikt v skupini je:",
        "options": [
          "Priložnost za razvoj – soočenje različnosti",
          "Vedno uničujoč in brez vrednosti",
          "Samo fizični napad",
          "Prepovedan"
        ],
        "correct": 0,
        "explain": "Konflikt = nestrinjanje, a priložnost za razvoj in spremembe."
      },
      {
        "type": "mcq",
        "q": "PRIKRITI konflikt:",
        "options": [
          "Napaden ne ve ozadja, čuti pritisk, odzove se agresivno v napačno smer",
          "Vedno konstruktiven",
          "Brez vpliva",
          "Odprt in jasen"
        ],
        "correct": 0,
        "explain": "Prikriti = pritisk brez jasnosti → agresija v napačno smer."
      },
      {
        "type": "order",
        "q": "Razvrsti 5 STRATEGIJ reševanja sporov:",
        "items": [
          "Izogibanje / nevtralnost",
          "Prevladovanje",
          "Kompromis",
          "Prilagajanje",
          "Dogovarjanje / reševanje problema"
        ],
        "correctOrder": [
          0,
          1,
          2,
          3,
          4
        ],
        "explain": "1) Izogibanje 2) Prevladovanje 3) Kompromis 4) Prilagajanje 5) Dogovarjanje."
      },
      {
        "type": "mcq",
        "q": "DOGOVARJANJE pri konfliktu:",
        "options": [
          "Enaka skrb za obe strani – najbolj kulturen način, brez zmagovalca",
          "Zmaga ene strani",
          "Umik brez rešitve",
          "Samo pritisk"
        ],
        "correct": 0,
        "explain": "Dogovarjanje = enaka skrb za cilje obeh, rešitev izvornega problema."
      },
      {
        "type": "mcq",
        "q": "PREVLADOVANJE pri konfliktu:",
        "options": [
          "Visoka skrb za lastne cilje, nizka za soudeleženca",
          "Nizka za obe strani",
          "Najboljša strategija vedno",
          "Enako kot dogovarjanje"
        ],
        "correct": 0,
        "explain": "Prevladovanje = zmaga-poraz, pritisk na drugega."
      },
      {
        "type": "mcq",
        "q": "KOMPROMIS pri konfliktu:",
        "options": [
          "Nekoliko žrtvujemo oboje – začasna pomiritev",
          "Popolna zmaga",
          "Popoln umik",
          "Brez rešitve"
        ],
        "correct": 0,
        "explain": "Kompromis = delna žrtvev obeh, začasna pomiritev."
      },
      {
        "type": "mcq",
        "q": "PRILAGAJANJE pri konfliktu:",
        "options": [
          "Podreditev lastnih potreb interesom drugega – iz strahu",
          "Zmaga obeh",
          "Samo prevladovanje",
          "Brez strahu"
        ],
        "correct": 0,
        "explain": "Prilagajanje = podreditev, dobro pri osebnih dolgotrajnih konfliktih."
      },
      {
        "type": "input",
        "q": "Naštej vrste NAPADOV v konfliktu:",
        "keywords": [
          "besedn",
          "fizičn",
          "žalitv",
          "sarkazem"
        ],
        "minMatches": 3,
        "explain": "Besedni (žalitve, sarkazem) in fizični (oviranje, slabe naloge) napad."
      },
      {
        "type": "input",
        "q": "Kaj prispeva USPEŠNO reševanje konfliktov?",
        "keywords": [
          "priznamo",
          "ozadje",
          "argument",
          "konstruktivn"
        ],
        "minMatches": 3,
        "explain": "Priznamo konflikt, odkrijemo ozadje, razumski argumenti, konstruktiven cilj."
      },
      {
        "type": "mcq",
        "q": "KRATKOTRAJNI stres na telesni ravni:",
        "options": [
          "Beg in boj – prilagoditvena vloga",
          "Samo izčrpanost",
          "Brez telesne reakcije",
          "Samo duševna kriza"
        ],
        "correct": 0,
        "explain": "Kratkotrajen = beg/boj, povečana telesna dejavnost."
      },
      {
        "type": "input",
        "q": "Naštej najpogostejše STRESORJE:",
        "keywords": [
          "okolje",
          "delovno",
          "življenjsk",
          "sprememb",
          "skrb"
        ],
        "minMatches": 3,
        "explain": "Okolje, delovno mesto, življenjske spremembe, vsakodnevne skrbi."
      }
    ]
  }
];

function applyExamTopics() {
  EXAM_NEW_TOPICS.forEach(t => TOPICS.push(t));
  Object.entries(EXAM_TOPIC_EXTENSIONS).forEach(([id, qs]) => {
    const topic = TOPICS.find(x => x.id === id);
    if (topic) topic.questions.push(...qs);
  });
}
