var kategorie = Array();
kategorie[1] = "Słodycze"
kategorie[2] = "Napoje"
kategorie[3] = "Przekąski"
kategorie[4] = "Produkty śniadaniowe"
kategorie[5] = "Dania gotowe (w tym te w proszku)"
kategorie[6] = "Przyprawy i sosy"
kategorie[7] = "Lody i mrożonki"
kategorie[8] = "Soki i syropy"
kategorie[9] = "Nabiał"
kategorie[10] = "Inne"
kategorie[11] = "Recenzje BadOmena"
kategorie[12] = "Limitowane"
 
var lista = [
	{
		id: 1,
		nazwa: 'Lay\'s Kabanostrrre',
		obrazek: 'Kabanostrrre-70112-big.jpg',
		opis: 'Chipsy o smaku podwędzanego i dobrze przyprawionego kabanosa.',
		sklad: 'Brak danych',
		ean: 'Brak danych',
		kategoria: 3
	},
	{
		id: 2,
		nazwa: 'Snickers Cruncher',
		obrazek: '76976897.jpg',
		opis: 'Baton ze świeżo prażonymi orzeszkami ziemnymi i chrupkami ryżowymi w karmelu oblanymi mleczną czekoladą.',
		sklad: 'cukier, orzeszki ziemne, mąka ryżowa, cukier inwertowany, tłuszzc roślinny, odtłuszczone mleko w proszku, tłuszcz kakaowy, miazga kakaowa, serwatka w proszku, syrop glukozowy, tłuszcz mleczny, substancja utrzymująca wilgotność (glicerol), laktoza, jęczmienny ekstrakt słodowy, sól, emulgatory (lecytyna sojowa, E471), cukier gronowy, aromat.',
		ean: '5000159314732',
		kategoria: 1		
	},
	{
		id: 3,
		nazwa: 'Nestle Aero',
		obrazek: '70522167.jpg	',
		opis: 'Aero to aksamitny mleczny baton z tysiącami czekoladowych bąbelków rozpływających się w ustach. Idealna przekąska kiedy tylko masz na nią ochotę! Baton mleczny Aero to niespotykana przyjemność, jaką zapewnia delikatna, rozpływająca się w ustach czekolada w połączeniu z ciekawą strukturą wnętrza, wypełnioną tysiącami pęcherzyków powietrza. Zapewnia prawdziwą przyjemność jedzenia i zarazem niezapomnianą bąbelkową przygodę. Nestlé Aero: - oryginalna napowietrzana czekolada mleczna - przyjemne doznanie lekkości płynące ze smaku prawdziwej mlecznej czekolady i roztapiających się bąbelków - ekspert od napowietrzanej czekolady od 1935 roku - unikalna receptura wysokiej jakości - wyłącznie naturalne składniki - kakao pochodzące z odpowiedzialnych upraw od zaufanych dostawców',
		sklad: 'cukier, tłuszcz kakaowy, śmietanka w proszku, miazga kakaowa, odtłuszczone mleko w proszku, emulgatory: lecytyna sojowa, E 476, sól, aromaty, śladowe ilości orzechów ziemnych i laskowych oraz glutenu, masa kakaowa min. 33,8%',
		ean: 'Brak danych',
		kategoria: 1
	},
	{
		id: 4,
		nazwa: 'Pepsi Light',
		obrazek: 'pepsi-light.png',
		opis: 'Pepsi Light to prawdziwe orzeźwienie w lekkim wydaniu. Z każdym łykiem odkrywaj pełnię smaku i intensywność doznań.',
		sklad: 'woda, dwutlenek węgla, barwnik: karmel E 150d, regulator kwasowości: kwas fosforowy, substancja słodząca: aspartam, regulator kwasowości: cytryniany sodu, aromaty: w tym kofeina (0,012 g/100 ml produktu), substancja słodząca: acesulfam K, kwas: kwas cytrynowy',
		ean: 'Brak danych',
		kategoria: 2
	},
	{
		id: 5,
		nazwa: 'Pepsi Twist',
		obrazek: '0005681_pepsi-twist-napoj-gazowany-1-l_550.jpeg',
		opis: 'Pepsi Twist Napój gazowany, który gasi pragnienie w ciepłe dni. Lekka cytrynowa nuta daje pełnię orzeźwienia.',
		sklad: 'woda, cukier, dwutlenek węgla, barwnik (E150d), aromat, w tym kofeina, kwasy (kwas fosforowy, kwas cytrynowy), regulator kwasowości (cytryniany sodu), substancja konserwująca (benzoesan sodu)',
		ean: 'Brak danych',
		kategoria: 2
	},
	{
		id: 6,
		nazwa: 'Mountain Dew Adrenaline',
		obrazek: 'Adrenaline-64001-big.jpg',
		opis: 'Mountain Dew Adrenaline zawiera specjalne składniki dostarczające energii Twojemu organizmowi, takie jak: naturalna kofeina, ekstrakt guarany i żeń-szeń. W jego skład wchodzą również aktywne dodatki (tauryna) oraz witaminy.',
		sklad: 'Brak informacji',
		ean: '5900497012461',
		kategoria: 2
	},
	{
		id: 7,
		nazwa: 'Pepsi Gold',
		obrazek: '50700L.jpg',
		opis: 'Napój stworzony z okazji mistrzostw świata w piłce nożnej w roku 2006 <br />(źródło zdjęcia: https://canmuseum.com/Detail.aspx?CanID=50700)',
		sklad: 'Woda, cukier, dwutlenek węgla, aromat, regulatory kwasowości: kwas fosforowy, cytrynian sodu, Kwas: kwas cytrynowy, Aromat: kofeina (0.012g / 100ml produktu), Stabilizator: guma arabska, Barwnik: karmel E150d, Barwnik: żółcień pomarańczowa',
		ean: '5900497444330',
		kategoria: 2
	},
	{
		id: 8,
		nazwa: 'Pepsi Cino',
		obrazek: '5900497113304.jpg',
		opis: 'Napój Pepsi o smaku cappuccino',
		sklad: 'Brak informacji',
		ean: 'Brak informacji',
		kategoria: 2
	},
	{
		id: 9,
		nazwa: 'Mars Delight',
		obrazek: '72275482.jpg',
		opis: 'Chrupiący wafelek z kremem karmelowy, z nadzieniem kakaowym oblany mleczą czekoladą.',
		sklad: 'cukier, tłuszcz roślinny, składniki mleczne (odtłuszczone mleko w proszku, tłuszcz mleczny, pełne mleko w proszku), tłuszcz kakaowy, mąka pszenna, laktoza, miazga kakaowa, maltodekstryna, serwatka w proszku, jęczmienny ekstrakt słodowy, cukier gronowy, emulgatory (lecytyna sojowa, E471), kakao o obniżonej zawartości tłuszczu, sól, aromat.',
		ean: 'Brak informacji',
		kategoria: 1
	},
	{
		id: 10,
		nazwa: ' Crunchips Wow Grubo krojone chipsy ziemniaczane o smaku kremowego wasabi',
		obrazek: 'crunchips-wow-grubo-krojone-chipsy-ziemniaczane-o-smaku-kremowego-wasabi-110-g.jpg',
		opis: 'Crunchips Wow Grubo krojone chipsy ziemniaczane o smaku kremowego wasabi.<br />Źródło: https://leclercdrive.lublin.pl/chipsy-i-snacki/1060602332-crunchips-wow-grubo-krojone-chipsy-ziemniaczane-o-smaku-kremowego-wasabi-110-g-5905187117501.html',
		sklad: 'ziemniaki, olej słonecznikowy (33%), sól, cukier, dekstroza,śmietanka w proszku,cebula w proszku,wasabi w proszku,aromat (zawiera produkty mleczne),ekstrakt drożdżowy,barwnik: kompleksy miedziowe chlorofili i chlorofilin',
		ean: 'Brak informacji',
		kategoria: 3
	},
	{
		id: 11,
		nazwa: 'Princessa CarmeLove',
		obrazek: '311_01_1212.jpg',
		opis: 'To kruchy, okrągły wafelek z pysznym, ciągnącym się karmelem. Pogrzana na kubku z gorącym napojem smakuje jeszcze lepiej! To prawdziwa karmelowa przyjemność!',
		sklad: 'Brak informacji',
		ean: '7613032621230',
		kategoria: 1
	},
	{
		id: 12,
		nazwa: 'Lift (różne smaki)',
		obrazek: '263_01_2556.jpg',
		opis: 'Napój gazowany na bazie naturalnej wody mineralnej w różnych smakach',
		sklad: 'Brak informacji',
		ean: 'Brak informacji',
		kategoria: 2
	},
	{
		id: 13,
		nazwa: 'Cheetos Piłki o smaku zielonej cebulki',
		obrazek: 'ccecccb60e1e4fd305616df6949baedc.jpg',
		opis: 'Chrupki o smaku zielonej cebulki',
		sklad: 'Brak informacji',
		ean: 'Brak informacji',
		kategoria: 3
	},
	{
		id: 14,
		nazwa: 'Chio Taccos (original)',
		obrazek: '00050400.jpg',
		opis: 'Chrupki ziemniaczane o smaku bekonu',
		sklad: 'Brak informacji',
		ean: '5905187801271',
		kategoria: 3
	},
	{
		id: 15,
		nazwa: 'Chio Master Croc - Pizza',
		obrazek: 'thumb_page_1602447854ShotType1_540x540_1_.jpg',
		opis: 'Chrupki kukurydziane o smaku pizzy',
		sklad: 'Kasza kukurydziana (67%), Olej słonecznikowy, Naturalny aromat (produkty mleczne ), Sól jadalna, Suszone pomidory, Ekstrakt drożdżowy, Suszona cebula, Cukier, Odtłuszczone mleko w proszku , Emulgator (mono- i diglicerydy kwasów tłuszczowych), Suszony czosnek, Pietruszka, Barwnik (ekstrakt z pieprzu), przyprawy, ekstrakty przypraw',
		ean: 'Brak informacji',
		kategoria: 3
	},
	{
		id: 16,
		nazwa: 'Chio Master Croc - Ser',
		obrazek: 'thumb_page_1602447717ShotType1_540x540.jpg',
		opis: 'Chrupki kukurydziane o smaku sera',
		sklad: 'Kasza kukurydziana (68%), Olej słonecznikowy, Aromat, Sól spożywcza, Suszona słodka serwatka , Suszony ser (0,8%), Emulgator (mono- i diglicerydy kwasów tłuszczowych), Ekstrakt drożdżowy, Barwnik (ekstrakt z pieprzu), Suszony czosnek',
		ean: 'Brak informacji',
		kategoria: 3
	},
	{
		id: 17,
		nazwa: 'Knor Pizza',
		obrazek: 'knorr-pizza.jpg',
		opis: 'W zestawie: Ciasto do pizzy oraz Pomidorowy sos do pizzy z kompozycją ziół i przypraw',
		sklad: 'ciasto do pizzy: mąka pszenna, olej roślinny, drożdże w proszku, cukeir, sól, białko jaja kurzego w proszku, substancje spulchaniające: lakton kwasu glukonowego i wodorowęglan sodu. Sos do pizzy: pomidory suszone, cukier, sól, substancja wzmacniająca smak i zapach: glutaminian sodu; skrobia modyfikowana, bazylia, cebula, tymianek, czosnek, olej roślinny, papryka słodka, aromaty, pieprz',
		ean: 'Brak informacji',
		kategoria: 5
	},
	{
		id: 18,
		nazwa: 'Łowicz Kociołek do syta (tradycyjny)',
		obrazek: '00032524.jpg',
		opis: 'Produkt garmażeryjny. Sterylizowany firmy Łowicz',
		sklad: 'woda, kasza jęczmienna (25%), mięso wieprzowe (12%), cebula (11%), ogórki kiszone (3%), marchew (3%), papryka (2%), pieczarki, olej rzepakowy, skrobia kukurydziana modyfikowana, zioła, przyprawy aromatyczno-smakowe, koncentrat pomidorowy (1%), mąka pszenna (zawiera gluten), smalec wieprzowy, sól, cukier, aromaty, wzmacniacze smaku: guanylan disodowy, inozynian disodowy i glutaminian monosodowy, stabilizatory: trifosforany, białko zwierzęce, maltodekstryna, koncentrat białka sojowego, suszone warzywa (marchew, pietruszka, ziemniak płatek, cebula, por), suszone pieczarki, glukoza, laktoza z mleka, serwatka z mleka, soja, seler, suszony ekstrakt drożdżowy, suszone koncentraty warzywne (cebuli, marchwi, ogórka), suszone ekstrakty warzywne (pora, pietruszki), dekstroza, olej roślinny, tłuszcz wieprzowy, tłuszcz wieprzowy wędzony, skrobia modyfikowana tapiokowa, regulatory kwasowości: kwas cytrynowy i cytryniany sodu',
		ean: 'Brak informacji',
		kategoria: 5
	},
	{
		id: 19,
		nazwa: 'DR.OETKER Pizza Rigga wiejska',
		obrazek: '60042048.jpg',
		opis: 'W Pizzy Rigga Wiejska aromatyczne kabanosy nadają charakterystyczny smak podkreślony dodatkowo ogórkiem konserwowym. Plasterek gotowanego jajka przyciąga wzrok i jest doskonałym dodatkiem swojskości. Całość tworzy niezwykle atrakcyjną i smakowitą pizzęo niezapomnianym smaku. Pizza Rigga Wiejska to jedyna taka pizza na rynku. Pizza Rigga Wiejska smakuje jak domowa.',
		sklad: 'Mąka pszenna, woda, ser, tłuszcz roślinny, ogórki konserwowe, koncentrat pomidorowy, kabanos 4%, jajo gotowane, cukier, drożdże, sól, przyprawy, skrobia modyfikowana, aromaty.',
		ean: 'Brak informacji',
		kategoria: 5
	},
	{
		id: 20,
		nazwa: 'DR.OETKER Paula Budyń o smaku czekoladowym w łaty waniliowe',
		obrazek: '91755853.jpg',
		opis: 'Dr. Oetker podbija serca łasuchów swoim nowym produktem - budyniem o smaku waniliowym w łatki, które mają smak czekoladowy. Porcja budyniu Paula to 100g doskonałego deseru pełnego mleka w praktycznym, podwójnym opakowaniu. Paula to idealny, mały, smaczny i pożywny posiłek. Polecany na drugie śniadnie do szkoły, czy przekąską w ciągu dnia intensywnej pracy. I zawsze wtedy, gdy masz ochotę na małe, mleczne co nie co.',
		sklad: 'mleko (85%), syrop cukru inwertowanego, cukier, skrobia modyfikowana, odtłuszczone kakao (0,6%), odtłuszczone mleko w proszku, substancja zagęszczająca (karagen), sól, barwnik (beta-karoten), aromaty',
		ean: '4023600002836',
		kategoria: 9
	},
	{
		id: 21,
		nazwa: 'Dżemy Sorella do wyciskania',
		obrazek: 'sorella.png',
		opis: 'Dżemy marki Sorella dla dzieci do wyciskania w różnych smakach (truskawka, brzoskwinia, porzeczka)',
		sklad: 'Brak informacji',
		ean: 'Brak informacji',
		kategoria: 4
	},
	{
		id: 22,
		nazwa: "ŁOWICZ Kociołek do syta Danie meksykańskie z warzywami, ryżem i pikantną kiełbasą",
		obrazek: '66389645.jpg',
		opis: 'Danie meksykańskie z warzywami, ryżem i pikantną kiełbasą',
		sklad: 'fasola czerwona 20%, kiełbasa wędzona wieprzowa 12%, ryż 10%, koncentrat pomidorowy 7%, cebula 7%, papryka 6%, woda, sól, olej roślinny, cukier, skrobia kukurydziana, naturalne zioła, przyprawy aromatyczno - smakowe, śladowe ilości glutaminianu sodu pochodzące z przypraw',
		ean: 'Brak informacji',
		kategoria: 5
	},
	{
		id: 23,
		nazwa: "COCA COLA Light",
		obrazek: '78321294.jpg',
		opis: 'Napój gazowany słodzony aspartamem i acesulfamem K E-2. Bez cukru. Zawiera kofeinę.',
		sklad: 'woda, dwutlenek węgla, karmel, substancje słodzące: cyklaminian sodu, acesulfam K, aspartam, kwas ortofosforowy, kwas cytrynowy, aromaty, kofeina, zawiera źródło fenyloalaniny',
		ean: 'Brak informacji',
		kategoria: 2
	},
	{
		id: 25,
		nazwa: "HELLMANNS Ketchup ognisty",
		obrazek: '10469294.jpg',
		opis: 'Ketchup ognisty - bardzo pikantny ketchup ze świeżych pomidorów, bez konserwantów.',
		sklad: 'koncentrat pomidorowy (63%), cukier, woda, ocet, skrobia modyfikowana, sól, pieprz cayenne, cebula, czosnek, pieprz czarny, liść laurowy.',
		ean: 'Brak informacji',
		kategoria: 6		
	},
	{
		id: 26,
		nazwa: "HELLMANNS Ketchup Sicilia",
		obrazek: '53085079.jpg',
		opis: 'Ketchup z dodatkiem czosnku i pietruszki.',
		sklad: 'koncentrat pomidorowy, woda, cukier, ocet, skrobia modyfikowana, sól, czosnek, cebula, pieprz czarny, aromaty, natka pietruszki.',
		ean: 'Brak informacji',
		kategoria: 6
	},
	{
		id: 27,
		nazwa: 'Fasola po bretońsku z kiełbasą i boczkiem',
		obrazek: '17583956.jpg',
		opis: 'Fasola z mięsem w sosie z warzywami. Polecamy podawać na gorąco z dodatkiem pieczywa. Produkt bez konserwantów.',
		sklad: 'woda, fasola (45%), boczek z kiełbasą (8%), cebula (7,5%), koncentrat pomidorowy (7,2%), mąka pszenna (zawiera gluten), acetylowany adypinian diskrobiowy - zagęstnik, cukier, sól, papryka (0,11%), mieszanka przypraw, glutaminian sodu -substancja wzmacniająca smak, aromat',
		ean: 'Brak informacji',
		kategoria: 5
	},
	{
		id: 28,
		nazwa: 'DR.OETKER Pizza Rigga serowa ',
		obrazek: '91558218.jpg',
		opis: 'Pizza serowa to nowość w ofercie będąca doskonałym uzupełnieniem popularnej linii. Ten wariant smakowy to prawdziwy rarytas przygotowany specjalnie z myślą o miłośnikach serowych wariacji. Nikt nie oprze się połączeniu różnych gatunków sera i widokowi dużych plastrów delikatnej mozzarelli. Pizza Rigga serowa smakuje jak domowa.',
		sklad: 'mąka pszenna, woda, ser mozzarella, tłuszcz roślinny, ser edamski, pomidory, koncentrat pomidorowy, cukier, drożdże, sól, przyprawy, skrobia modyfikowana',
		ean: 'Brak informacji',
		kategoria: 5
	},
	{
		id: 29,
		nazwa: 'AVIKO Knedle z truskawkami 500g',
		obrazek: '54581138.jpg',
		opis: 'Pyszne, delikatne ciasto, wypełnione kawałkami truskawek pozwala tworzyć urozmaicone dania z wieloma dodatkami: tradycyjnie ze śmietanką lub podane jako deser z lodami. Wykorzystanie tradycyjnych receptur sprawia, że smakują one jak knedle robione w domu i zachwycają smakiem nie tylko najmłodszych, ale także dorosłych. Gotowe już po 7 minutach od wypłynięcia na powierzchnię.',
		sklad: 'Truskawki (18%), skrobia ziemniaczana (16%), płatki ziemniaczane (15%), cukier, zagęstnik: skrobia modyfikowana, mąka pszenna, sól, woda.',
		ean: 'Brak informacji',
		kategoria: 5
	},
	{
		id: 30,
		nazwa: 'KOTLIN Ketchup mexican',
		obrazek: '28457287.jpg',
		opis: 'Sztandarowym produktem firmy Kotlin jest ketchup. Na potrzeby jego produkcji w zakładzie znajdują się dwie linie produkcyjne: jedna przeznaczona do produkcji ketchupu w plastikowej butelce, druga - do produkcji ketchupu w opakowaniach szklanych. Ketchup Kotlin produkujemy z dużej ilości starannie wyselekcjonowanych, dojrzewających w słońcu pomidorów i oryginalnych dodatków.',
		sklad: 'Brak informacji',
		ean: 'Brak informacji',
		kategoria: 6
	},
	{
		id: 31,
		nazwa: 'Hortex Fresz się owocami Winogrona jabłko limonka',
		obrazek: 'hortex-fresz-sie-owocami-winogrona-jablko-limonka-napoj-1-l-o75fcd.webp',
		opis: 'Fantazyjne połączenie klasycznych winogron, jabłek i orzeźwiającej limonki - doskonałe nawet na największe upały.',
		sklad: 'woda, soki owocowe z soków zagęszczonych z: winogron (9%), jabłek (9%), limonek (2%), cukier, regulator kwasowości - kwas cytrynowy, aromaty',
		ean: 'Brak informacji',
		kategoria: 2
	},
	{
		id: 32,
		nazwa: 'Star Chips grubo ciachane ser i cebula',
		obrazek: '00030338.jpg',
		opis: 'Grubo ciachane chipsy ziemniaczane o smaku sera i cebuli',
		sklad: 'Brak informacji',
		ean: '5900259027993',
		kategoria: 3
	},
	{
		id: 33,
		nazwa: 'Winiary Galaretka o smaku Mojito',
		obrazek: 'galaretka-o-smaku-mojito-winiary.jpg',
		opis: 'Galaretka o smaku Moijto',
		sklad: 'aromaty, błękit brylantowy FCF (E 133), cukier. koncentrat krokosza, kwas cytrynowy (E 330). żelatyna wieprzowa (E 441)',
		ean: 'Brak informacji',
		kategoria: 5
	},
	{
		id: 34,
		nazwa: 'Batonik MilkyWay Minute czekoladowy',
		obrazek: 'mwminute.jpg',
		opis: 'Ciasteczko z kremem mlecznym, truskawkami i mleczną czekoladą.',
		sklad: 'Brak informacji',
		ean: 'Brak informacji',
		kategoria: 1
	},
	{
		id: 35,
		nazwa: 'Batonik MilkyWay Truskawkowy',
		obrazek: 'mwtruskawka.jpg',
		opis: 'Milky Way - marka batonu czekoladowego. W sprzedaży w Polsce są batoniki Milky Way z nadzieniem o smaku truskawkowym i mlecznym.',
		sklad: 'Brak informacji',
		ean: 'Brak informacji',
		kategoria: 1
	},
	{
		id: 36,
		nazwa: 'Danone CHOCHO',
		obrazek: '420_01_7771.jpg',
		opis: 'CHOCHO to nowy wyjątkowo orzechowy deser mleczno-czekoladowy. Czy uwielbiasz smak mlecznej czekolady? A może jeszcze bardziej odpowiada Ci, gdy czekoladowy smak podkręcony jest orzechami? I być może lubisz wszystko, co ma dwie warstwy? Jeżeli Twoja odpowiedź na wszystkie trzy pytania jest twierdząca, to nowe wyjątkowo orzechowe CHOCHO jest stworzone dla Ciebie! Przekonaj się sam. ',
		sklad: 'Brak informacji',
		ean: 'Brak informacji',
		kategoria: 9
	},
	{
		id: 37,
		nazwa: 'Bakoma Satino deser Panna Cotta z sosem karmelowym',
		obrazek: '00043513.jpg',
		opis: 'Deser Panna Cotta z sosem karmelowym',
		sklad: 'śmietanka , sos smakowy 14,5% [syrop karmelowy 35% (cukier inwertowany, mleko w proszku, cukier, masło), cukier, syrop glukozowo-fruktozowy, stabilizatory: skrobia modyfikowana, pektyna, guma ksantanowa; karmel, aromat] , cukier , żelatyna , aromat , kultury mleczne',
		ean: '5900197018978',
		kategoria: 9
	},
	{
		id: 38,
		nazwa: 'Fisiel - marchewka / brzoskwinia',
		obrazek: 'i-delecta-kisiel-fisiel-marchewka-brzoskwnia-33g.jpg',
		opis: 'Kisiel o smaku marchewkowo-brzoskwiniowym',
		sklad: 'Brak informacji',
		ean: '5900983000958',
		kategoria: 5
	},
	{
		id: 39,
		nazwa: 'Knorr Fix Chrupery z kurczaka z dipem serowym',
		obrazek: 'knorr-fix-chrupery-z-kurczaka-z-dipem-serowym-50-g.jpg',
		opis: 'Chrupery z kurczaka z dipem serowym Wyjątkowa panierka, która nada twojemu kurczakowi smak i chrupkość. Dopełnieniem dania jest sos serowy. Skrzydełka kurczaka to nie lada przysmak. Delikatne mięso, zamknięte w chrupiącej skórce. Wiem, jak trudno jest czasem je przygotować tak, aby z jednej strony skórka była chrupiąca, a z drugiej mięso soczyste. Właśnie, dlatego stworzyłem Fix Chrupery z kurczaka z dipem serowym. Doskonała kompozycja przypraw pozwala na przygotowanie idealnego kurczaka, którego smak świetnie komponuje się z dipem serowym.',
		sklad: 'Brak informacji',
		ean: 'Brak informacji',
		kategoria: 5
	},
	{
		id: 40,
		nazwa: 'Kitkat Chunky - Salted Carmel Popcorn',
		obrazek: '9122138.png',
		opis: 'Paluszek waflowy pokryty kremem o smaku solonego karmelu i popcornu, z soloną i prażoną kukurydzą (2,1%) w mlecznej czekoladzie (59%). Mleczna czekolada oprócz tłuszczu kakaowego zawiera tłuszcze roślinne.',
		sklad: 'cukier, odtłuszczone mleko w proszku, tłuszcze roślinne (palmowy,shea), mąka przenna, miazga kakaowa 1, tłuszcz kakaowy 1, preparat serwatkowy w proszku (z mleka), tłuszcz mleczny, solona i prażona kukurydza 2,1 % (kukurydza, olej słonecznikowy, sól, przeciwutleniacz, (ekstrakty z rozmarynu)), kakao w proszku o obniżonej zawartości tłuszczu 1, emulgator (lecytyny), masło (z mleka), substancja spulchniająca (węglany sodu), naturalne aromaty, sól, barwnik (ekstrakt z papryki). Może zawierać orzechy ziemne i orzechy.',
		ean: '3800020472712',
		recenzja: 'Nestle ostatnio rozpieszcza nasz kraj jeśli chodzi o limitowane smaki batonów Kit Kat. Tym razem mamy wariant o smaku popcornu z dodatkiem słonego karmelu. <br />Połączenie dość intrygujące, bo jak połączyć smak popcornu z wafelkiem? <br />Udało się w połowie. Z jednej strony smak słonego karmelu fajnie łączy się z smakiem (stanowczo zbyt przesłodzonej) mlecznej czekolady, ale popcorn tu nie pasuje. Nie polecam tego smaku dla osób o słabych(osłabionych) zębach, gdyż kawałki prażonej kukurydzy są dość twarde. Mówiąc krótko nie podszedł mi ten wariant smakowy, więc nie zajmie wysokiej pozycji w moim rankingu "kitkatowym"<br /><b>Podsumowanie:<br />Jeśli uwielbiasz smak kit kata i popcornu ten wariant powienien ci smakować, jednak mi nie podpasował, producent mógł ten smak odpuścić.<br />Skład: Tu producent się nie popisał - ocenę zaniża długi skład, oraz w szczególności olej palmowy i shea. Duża ilość cukru 45,8g/100g<br /><br />SMAK: 5/10<br />SKŁAD: 5/10<br />Ocena końcowa 4/10</b>',
		kategoria: [1,11,12]
	},
	{
		id: 41,
		nazwa: 'Twix Ginger Cookie',
		obrazek: '9122139.png',
		opis: 'Baton o smaku ciastek z imbirem',
		sklad: 'Ciasteczka (26%) o smaku imbirowym z przyprawami i karmelem (32%) oblane mleczną czekoladą (35%). Składniki: cukier, syrop  glukozowy, mąka pszenna (16%), tłuszcz palmowy, odtłuszczone mleko w proszku, tłuszcz kakaowy, miazga kakaowa, tłuszcz mleczny, laktoza, permeat serwatki (z mleka), mieszanka przypraw (cynamon, kolendra, goździki, gałka muszkatołowa, imbir, kardamon), kakao o obniżonej zawartości tłuszczu, sól, emulgator (lecytyna sojowa), substancja spulchniająca (E500), skórka pomarańczowa, ekstrakt wanilii (Może zawierać orzech laksowy, migdał, jęczmień, owies)',
		ean: '5000159512459',
		recenzja: 'Batony TWIX cieszą się w Polsce dużą popularpawelpiernik.pngnością, jednakże ciężko kupić w Polsce inne odmiany tego batona poza klasycznym i białym. Bardzo ucieszy fanów fakt, że na czas Świąt Bożego Narodzenia producent MARS wypuścił jedną z rzadko spotykanych limitowanych edycji - Twix O smaku ciasteczka piernikowego (a raczej korzennego). O ile ciężko sobie wyobrazić połączenie karmelu z takim ciasteczkiem, muszę stwierdzić, że to się naprawdę udało! Moim zdaniem ta edycja przebija smakiem klasycznego Twixa. Mleczna czekolada jest jak zawsze smaczna, karmel jest "klasyczny", a główna zmiana to ciasteczko które tym razem zawiera aromatyczne przyprawy, dzięki czemu zawdzięcza korzenny smak. <br /><b>Podsumowanie: Jeśli jesteś fanem ciasteczek korzennych i TWIXa to ten produkt naprawdę ci się spodoba, w przeciwnym wypadku można sobie odpuścić ten wariant smakowy. <br /> Każdy produkt ma jednak ma wady: tu niestety jak w każdych słodyczach - skład - nie jest najgorszy z najgorszych, ale mógł być lepszy. <br />Obecność syropu glukozowego, tłuszczu palmowego i innych drobnych zbędnych dodatków nie pozwalają mi dać maksymalnej oceny końcowej. Uwaga: duża ilość cukru: 49g/100g<br /><br />SMAK: 10/10<br />Skład: 7/10<br />Ocena końcowa: 9/10<br /><br />Ocena końcowa nie jest średnią - w słodyczach najważniejszy jest smak, bo zwykle skład i tak nie jest dobry.</b>',
		kategoria: [1,11,12]
	},
	{
		id: 42,
		nazwa: 'Pawełek Piernik',
		obrazek: 'pawelpiernik.png',
		opis: 'BATONIK Z NADZIENIEM PIERNIKOWYM W MLECZNEJ CZEKOLADZIE',
		sklad: 'Składniki: Czekolada mleczna 50 % (Cukier, Tłuszcz kakaowy, Mleko pełne w proszku, Miazga kakaowa, Serwatka w proszku (z mleka), Tłuszcz mleczny, Emulgatory: lecytyny sojowe i E 476, Aromat), Cukier, Mleko zagęszczone słodzone, Syrop glukozowy, Spirytus (2,3 %), Tłuszcz roślinny (palmowy), Mleko pełne w proszku, Serwatka w proszku (z mleka), Substancja utrzymująca wilgoć (inwertaza), Barwnik (E 150d), Emulgator (lecytyny sojowe), Naturalny aromat cynamonowy, Aromat naturalny, Przyprawa piernikowa 0,01 % (Cynamon, Goździki, Kolendra, Gałka muszkatołowa, Imbir, Kardamon, Pieprz czarny). Czekolada mleczna: masa kakaowa minimum 29 %, masa mleczna minimum 14 %. Może zawierać orzeszki arachidowe, orzechy, zboża (gluten), jaja. Produkt zawiera alkohol – nieodpowiedni dla dzieci i kobiet w ciąży.',
		ean: '590094241',
		recenzja: 'Recenzja BadOmena: Z okazji Świąt Bożego Narodzenia producenci słodyczy rozpieszczają nas świątęcznymi wariantami produktów - tym razem mamy Pawełka o smaku piernikowym - całkiem smaczny, - wedlowska mleczna czekolada jest smaczna, choć wydaje się  być lekko przesłodzona, nadzienie też jest słodkie - smakuje jak zwykłe czekoladowe z dodatkiem przypraw piernikowych - połączenie dość ciekawe i udane, choć spodziewałem się czegoś lepszego. Podsumowanie: Niezły smak nadzienia, ale ogólnie baton wydaje się zbyt słodki.  Powinien smakować fanom smaków piernikowych - pozostali mogą odpuścić ten wariant smakowy. Skład dość długi, i niestety niezbyt udany - obecność syropu glukozowego, oleju palmowego oraz bardzo wysoka ilość cukru (ponad 64g na 100g produktu!) zmusza mnie do obniżenia oceny końcowej. Smak: 7,5/10 Skład: 6/10 Ocena końcowa 7/10',
		kategoria: [1,11,12]
	},	
	{
		id: 43,
		nazwa: 'Prince Polo Black',
		obrazek: 'unknown55.png',
		opis: 'BATONIK MOCNO CZEKOLADOWY',
		sklad: 'Składniki: Kruchy kakaowy wafelek z kremem kakaowym (48%) oblany czekoladą (38%). Składniki: cukier, mąka pszenna, olej palmowy, miazga kakaowa, kakao w proszku o obniżonej  zawartości tłuszczu (5%), skrobia pszenna, tłuszcz kakaowy, tłuszcz mleczny, skrobia ziemniaczana, emulgatory (lecytyny sojowe, E476), olej rzepakowy, substancje spulchniające (E503, E500) regulator kwasowości (E524), sól, aromat, odtłuszczone mleko w proszku. Oprócz tłuszczu kakaowego zawiera tłuszcze roślinne. Może zawierać orzechy.',
		ean: '7622201144586',
		recenzja: 'Recenzja BadOmena: Nareszcie pojawił się nowy wariant smakowy Prince Polo (od lat był brak nowych smaków). Tym razem mamy odmianę mocno czekoladową. Muszę stwierdzić, że to bardzo dobry wariant! Oby został na długo! (ciężko stwierdzić czy ten smak jest limitowany czy zostanie na dłużej). Podobnie jak w TWIX pierniczkowym, od doskonałej oceny dzieli średni skład (obecność oleju palmowego), choć broni się niezbyt dużą ilością cukru i brakiem shea. Uwaga: Ilość cukru wynosi 36g/100g. SMAK: 10/10 SKŁAD: 8/10 Ocena końcowa: 9/10',
		kategoria: [1,11,12]
	},	
	{
		id: 44,
		nazwa: 'Twix Salted Carmel',
		obrazek: 'twix666.png',
		opis: 'BATONIK 3Bit o smaku orzechowym',
		sklad: 'Ciasteczka (26%) oblane słonym karmelem (32%) i mleczną czekoladą (35%) ze szczyptą soli. Składniki:  cukier, syrop glukozowy, mąka pszenna, tłuszcz palmowy, odtłuszczone mleko w proszku, tłuszcz kakaowy, miazga kakaowa, miazga kakaowa, tłuszcz mleczny, laktoza, permeat serwatki (z mleka), sól, kakao o obniżonej zawartości tłuszczu, emulgator (lecytyna sojowa), substancja spulchniająca (E500), ekstrakt z wanilii. (Może zawierać orzech laskowy, migdał, jęczmień, owies)',
		ean: '5000159528986',
		recenzja: 'Recenzja BadOmena: Mars coraz częściej dostarcza nowe warianty smakowe swoich produktów. Tym razem mamy Twix o smaku słonego karmelu. O ile jestem fanem zwykej wersji, to ten wariant jest... niewypałem. Uwielbiam słony karmel, ale tu jest słabo - mamy tu zwykły karmel z dodatkiem kryształów soli, która jest bardzo twarda! Spodziewałem się jednolitej masy. Obecnie jest dostępny w limitowanej liczbie w 4 pakach. Skład też niestety nie jest dobry. Uwaga, duża ilość cukru 49g/100g produktu. Ocena: Smak: 5/10, skład 5/10 Ocena końcowa 5/10.',
		kategoria: [1,11,12]
	},	{
		id: 45,
		nazwa: 'Toffifee Double Chocolate (Podwójna czekolada)',
		obrazek: 'unknown69.png',
		opis: 'Toffiefee o smaku czekoladowym',
		sklad: 'Orzech laskowy (10%) w karmelu (41%), kremie czekoladowo-orzechowym (37%) i czekoladzie (12%). Składniki: cukier, tłuszcze roślinne (palmowy, shea), orzechy laskowe (12,4%), syrop glukozowy, kakao (6,7%), odtłuszczone mleko w proszku, substancja utrzymująca wilgoć: sorbitole, miazga kakaowa, mleko zagęszczone odtłuszczone, zgęszczona serwatka (z mleka), tłuszcz kakaowy, tłuszcz mleczny, syrop sacharozowy, produkt z serwatki (z mleka), emulgator: lecytyny (soja), sól, aromaty. Może zawierać także migdały, orzeszki ziemne i inne orzechy.',
		ean: 'Brak informacji',
		recenzja: 'Recenzja BadOmena: Nowe limitowane wersje znanych produktów są zawsze mile widziane. Dziś mamy Toffifee z podwójną czekoladą. Zwiększona ilość czekolady znacząco zmienia znany smak. Miłe zaskoczenie, udany wariant. Skład niestety nie powala obecność kilku rodzajów cukrów i tłuszczy roślinnych obniża ocenę produktu. Uwaga duża ilość cukru (44,9g/100g). Smak: 9/10, Skład: 6/10 Ocena końcowa: 7/10.',
		kategoria: [1,11,12]
	},	{
		id: 46,
		nazwa: 'Toffifee Double Chocolate (Podwójna czekolada)',
		obrazek: 'monster-energy-nitro.jpg',
		opis: 'Toffiefee o smaku czekoladowym',
		sklad: 'Woda gazowana, glukoza, kwas cytrynowy, naturalne aromaty, tauryna, cytrynian sodu, barwniki, ekstrakt z żenszenia, L-karnityna, kofeina, kwas sorbowy, kwas benzoesowy, witamina B3, chlorek sodu, Glukuronolakton, inozytol, ekstrakt z nasion guarany, witamina B6, sukraloza, ryboflawina, maltodekstryna, cyjanokobalamina.',
		ean: '5060751218920',
		recenzja: 'Energy Nitro to nowy smak napoju energetycznego Monster, który opanował rynek, od zwykłego napoju tej marki wyróżnia go to, że nasycony jest podtlenkiem azotu co ma nadawać mu gładszą teksturę, w praktyce czuć to gdyż napój nie ma tych uderzających w jamę ustną bąbelków. W smaku nowy Monster przypomina oranżadkę, wiem czy to tylko u mnie ale czuć pewien posmak, ogółem smak taki średni.  Smak: 6/10, Skład: 3/10 Ocena końcowa: 4/10. ',
		kategoria: [2,12]
	}
]

function listujNazwy(elem){
	lista.forEach(function(x){
		var li_elem = document.createElement("li");
		var a_elem = document.createElement("a");
		a_elem.href = '/archiwum-poduktow/produkt.html?id=' + x.id;
		a_elem.innerText = x.nazwa;
		li_elem.appendChild(a_elem);
		elem.appendChild(li_elem);
	});
}

function listujNazwyA(){
	lista.forEach(function(x){
		if(Array.isArray(x.kategoria)){
			x.kategoria.forEach(function(z){
				var katEl = document.getElementById('kat' + z);
				var li_elem = document.createElement("li");
				var a_elem = document.createElement("a");
				a_elem.href = '/archiwum-poduktow/produkt.html?id=' + x.id;
				a_elem.innerText = x.nazwa;
				li_elem.appendChild(a_elem);
				katEl.appendChild(li_elem);
			})
		}else{
		var katEl = document.getElementById('kat' + x.kategoria);
		var li_elem = document.createElement("li");
		var a_elem = document.createElement("a");
		a_elem.href = '/archiwum-poduktow/produkt.html?id=' + x.id;
		a_elem.innerText = x.nazwa;
		li_elem.appendChild(a_elem);
		katEl.appendChild(li_elem);
		}
	});
}

function listujKategorie(elem){
		kategorie.forEach(function(kat,id){
			if(kat == undefined){
				return
			}
			var h_elem = document.createElement("h3");
			h_elem.innerText = kat
			var div_elem = document.createElement("div");
			var ul_elem = document.createElement("ul");
			ul_elem.id = 'kat' + id;
			div_elem.appendChild(ul_elem);
			elem.appendChild(h_elem);
			elem.appendChild(div_elem);
		})
}

function getMinMax(){
	var min = 0
	var max = lista.length - 1;
	return [min,max];
}

function znajdzProdukt(id){
	var pid = parseInt(id);
	if(isNaN(id) || id < 0) return null;
	var prod = lista.filter(obj => {
		return obj.id === id;
	})
	if(prod.length === 0) return null;
	return prod;
}
