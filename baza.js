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
		nazwa: 'Chio Taccos',
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
		kategoria: 10
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
		kategoria: 10
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
		obrazek: '420_01_7771.jpg',
		opis: 'Deser Panna Cotta z sosem karmelowym',
		sklad: 'śmietanka , sos smakowy 14,5% [syrop karmelowy 35% (cukier inwertowany, mleko w proszku, cukier, masło), cukier, syrop glukozowo-fruktozowy, stabilizatory: skrobia modyfikowana, pektyna, guma ksantanowa; karmel, aromat] , cukier , żelatyna , aromat , kultury mleczne',
		ean: '5900197018978',
		kategoria: 9
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
