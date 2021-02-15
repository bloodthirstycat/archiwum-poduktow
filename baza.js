var lista = [
	{
		id: 1,
		nazwa: 'Lay\'s Kabanostrrre',
		obrazek: 'Kabanostrrre-70112-big.jpg',
		opis: 'Chipsy o smaku podwędzanego i dobrze przyprawionego kabanosa.',
		sklad: 'Brak danych',
		ean: 'Brak danych'
	},
	{
		id: 2,
		nazwa: 'Snickers Cruncher',
		obrazek: '76976897.jpg',
		opis: 'Baton ze świeżo prażonymi orzeszkami ziemnymi i chrupkami ryżowymi w karmelu oblanymi mleczną czekoladą.',
		sklad: 'cukier, orzeszki ziemne, mąka ryżowa, cukier inwertowany, tłuszzc roślinny, odtłuszczone mleko w proszku, tłuszcz kakaowy, miazga kakaowa, serwatka w proszku, syrop glukozowy, tłuszcz mleczny, substancja utrzymująca wilgotność (glicerol), laktoza, jęczmienny ekstrakt słodowy, sól, emulgatory (lecytyna sojowa, E471), cukier gronowy, aromat.',
		ean: '5000159314732'		
	},
	{
		id: 3,
		nazwa: 'Nestle Aero',
		obrazek: '70522167.jpg	',
		opis: 'Aero to aksamitny mleczny baton z tysiącami czekoladowych bąbelków rozpływających się w ustach. Idealna przekąska kiedy tylko masz na nią ochotę! Baton mleczny Aero to niespotykana przyjemność, jaką zapewnia delikatna, rozpływająca się w ustach czekolada w połączeniu z ciekawą strukturą wnętrza, wypełnioną tysiącami pęcherzyków powietrza. Zapewnia prawdziwą przyjemność jedzenia i zarazem niezapomnianą bąbelkową przygodę. Nestlé Aero: - oryginalna napowietrzana czekolada mleczna - przyjemne doznanie lekkości płynące ze smaku prawdziwej mlecznej czekolady i roztapiających się bąbelków - ekspert od napowietrzanej czekolady od 1935 roku - unikalna receptura wysokiej jakości - wyłącznie naturalne składniki - kakao pochodzące z odpowiedzialnych upraw od zaufanych dostawców',
		sklad: 'cukier, tłuszcz kakaowy, śmietanka w proszku, miazga kakaowa, odtłuszczone mleko w proszku, emulgatory: lecytyna sojowa, E 476, sól, aromaty, śladowe ilości orzechów ziemnych i laskowych oraz glutenu, masa kakaowa min. 33,8%',
		ean: 'Brak danych'
	},
	{
		id: 4,
		nazwa: 'Pepsi Light',
		obrazek: 'pepsi-light.png',
		opis: 'Pepsi Light to prawdziwe orzeźwienie w lekkim wydaniu. Z każdym łykiem odkrywaj pełnię smaku i intensywność doznań.',
		sklad: 'woda, dwutlenek węgla, barwnik: karmel E 150d, regulator kwasowości: kwas fosforowy, substancja słodząca: aspartam, regulator kwasowości: cytryniany sodu, aromaty: w tym kofeina (0,012 g/100 ml produktu), substancja słodząca: acesulfam K, kwas: kwas cytrynowy',
		ean: 'Brak danych'
	},
	{
		id: 5,
		nazwa: 'Pepsi Twist',
		obrazek: '0005681_pepsi-twist-napoj-gazowany-1-l_550.jpeg',
		opis: 'Pepsi Twist Napój gazowany, który gasi pragnienie w ciepłe dni. Lekka cytrynowa nuta daje pełnię orzeźwienia.',
		sklad: 'woda, cukier, dwutlenek węgla, barwnik (E150d), aromat, w tym kofeina, kwasy (kwas fosforowy, kwas cytrynowy), regulator kwasowości (cytryniany sodu), substancja konserwująca (benzoesan sodu)',
		ean: 'Brak danych'
	},
	{
		id: 6,
		nazwa: 'Mountain Dew Adrenaline',
		obrazek: 'Adrenaline-64001-big.jpg',
		opis: 'Mountain Dew Adrenaline zawiera specjalne składniki dostarczające energii Twojemu organizmowi, takie jak: naturalna kofeina, ekstrakt guarany i żeń-szeń. W jego skład wchodzą również aktywne dodatki (tauryna) oraz witaminy.',
		sklad: 'Brak informacji',
		ean: '5900497012461'
	},
	{
		id: 7,
		nazwa: 'Pepsi Gold',
		obrazek: '50700L.jpg',
		opis: 'Napój stworzony z okazji mistrzostw świata w piłce nożnej w roku 2006 <br />(źródło zdjęcia: https://canmuseum.com/Detail.aspx?CanID=50700)',
		sklad: 'Woda, cukier, dwutlenek węgla, aromat, regulatory kwasowości: kwas fosforowy, cytrynian sodu, Kwas: kwas cytrynowy, Aromat: kofeina (0.012g / 100ml produktu), Stabilizator: guma arabska, Barwnik: karmel E150d, Barwnik: żółcień pomarańczowa',
		ean: '5900497444330'
	},
	{
		id: 8,
		nazwa: 'Pepsi Cino',
		obrazek: '5900497113304.jpg',
		opis: 'Napój Pepsi o smaku cappuccino',
		sklad: 'Brak informacji',
		ean: 'Brak informacji'
	},
	{
		id: 9,
		nazwa: 'Mars Delight',
		obrazek: '72275482.jpg',
		opis: 'Chrupiący wafelek z kremem karmelowy, z nadzieniem kakaowym oblany mleczą czekoladą.',
		sklad: 'cukier, tłuszcz roślinny, składniki mleczne (odtłuszczone mleko w proszku, tłuszcz mleczny, pełne mleko w proszku), tłuszcz kakaowy, mąka pszenna, laktoza, miazga kakaowa, maltodekstryna, serwatka w proszku, jęczmienny ekstrakt słodowy, cukier gronowy, emulgatory (lecytyna sojowa, E471), kakao o obniżonej zawartości tłuszczu, sól, aromat.',
		ean: 'Brak informacji'
	},
	{
		id: 10,
		nazwa: ' Crunchips Wow Grubo krojone chipsy ziemniaczane o smaku kremowego wasabi',
		obrazek: 'crunchips-wow-grubo-krojone-chipsy-ziemniaczane-o-smaku-kremowego-wasabi-110-g.jpg',
		opis: 'Crunchips Wow Grubo krojone chipsy ziemniaczane o smaku kremowego wasabi.<br />Źródło: https://leclercdrive.lublin.pl/chipsy-i-snacki/1060602332-crunchips-wow-grubo-krojone-chipsy-ziemniaczane-o-smaku-kremowego-wasabi-110-g-5905187117501.html',
		sklad: 'ziemniaki, olej słonecznikowy (33%), sól, cukier, dekstroza,śmietanka w proszku,cebula w proszku,wasabi w proszku,aromat (zawiera produkty mleczne),ekstrakt drożdżowy,barwnik: kompleksy miedziowe chlorofili i chlorofilin',
		ean: 'Brak informacji'
	},
	{
		id: 11,
		nazwa: 'Princessa CarmeLove',
		obrazek: '311_01_1212.jpg',
		opis: 'To kruchy, okrągły wafelek z pysznym, ciągnącym się karmelem. Pogrzana na kubku z gorącym napojem smakuje jeszcze lepiej! To prawdziwa karmelowa przyjemność!',
		sklad: 'Brak informacji',
		ean: '7613032621230'
	},
	{
		id: 12,
		nazwa: 'Lift (różne smaki)',
		obrazek: '263_01_2556.jpg',
		opis: 'Napój gazowany na bazie naturalnej wody mineralnej w różnych smakach',
		sklad: 'Brak informacji',
		ean: 'Brak informacji'
	},
	{
		id: 13,
		nazwa: 'Cheetos Piłki o smaku zielonej cebulki',
		obrazek: 'ccecccb60e1e4fd305616df6949baedc.jpg',
		opis: 'Chrupki o smaku zielonej cebulki',
		sklad: 'Brak informacji',
		ean: 'Brak informacji'
	},
	{
		id: 14,
		nazwa: 'Chio Taccos',
		obrazek: '00050400.jpg',
		opis: 'Chrupki ziemniaczane o smaku bekonu',
		sklad: 'Brak informacji',
		ean: '5905187801271'
	},
	{
		id: 15,
		nazwa: 'Chio Master Croc - Pizza',
		obrazek: 'thumb_page_1602447854ShotType1_540x540_1_.jpg',
		opis: 'Chrupki kukurydziane o smaku pizzy',
		sklad: 'Kasza kukurydziana (67%), Olej słonecznikowy, Naturalny aromat (produkty mleczne ), Sól jadalna, Suszone pomidory, Ekstrakt drożdżowy, Suszona cebula, Cukier, Odtłuszczone mleko w proszku , Emulgator (mono- i diglicerydy kwasów tłuszczowych), Suszony czosnek, Pietruszka, Barwnik (ekstrakt z pieprzu), przyprawy, ekstrakty przypraw',
		ean: 'Brak informacji'
	},
	{
		id: 16,
		nazwa: 'Chio Master Croc - Ser',
		obrazek: 'thumb_page_1602447717ShotType1_540x540.jpg',
		opis: 'Chrupki kukurydziane o smaku sera',
		sklad: 'Kasza kukurydziana (68%), Olej słonecznikowy, Aromat, Sól spożywcza, Suszona słodka serwatka , Suszony ser (0,8%), Emulgator (mono- i diglicerydy kwasów tłuszczowych), Ekstrakt drożdżowy, Barwnik (ekstrakt z pieprzu), Suszony czosnek',
		ean: 'Brak informacji'
	},
	{
		id: 17,
		nazwa: 'Knor Pizza',
		obrazek: 'knorr-pizza.jpg',
		opis: 'W zestawie: Ciasto do pizzy oraz Pomidorowy sos do pizzy z kompozycją ziół i przypraw',
		sklad: 'ciasto do pizzy: mąka pszenna, olej roślinny, drożdże w proszku, cukeir, sól, białko jaja kurzego w proszku, substancje spulchaniające: lakton kwasu glukonowego i wodorowęglan sodu. Sos do pizzy: pomidory suszone, cukier, sól, substancja wzmacniająca smak i zapach: glutaminian sodu; skrobia modyfikowana, bazylia, cebula, tymianek, czosnek, olej roślinny, papryka słodka, aromaty, pieprz',
		ean: 'Brak informacji'
	},
	{
		id: 18,
		nazwa: 'Łowicz Kociołek do syta (tradycyjny)',
		obrazek: '00032524.jpg',
		opis: 'Produkt garmażeryjny. Sterylizowany firmy Łowicz',
		sklad: 'woda, kasza jęczmienna (25%), mięso wieprzowe (12%), cebula (11%), ogórki kiszone (3%), marchew (3%), papryka (2%), pieczarki, olej rzepakowy, skrobia kukurydziana modyfikowana, zioła, przyprawy aromatyczno-smakowe, koncentrat pomidorowy (1%), mąka pszenna (zawiera gluten), smalec wieprzowy, sól, cukier, aromaty, wzmacniacze smaku: guanylan disodowy, inozynian disodowy i glutaminian monosodowy, stabilizatory: trifosforany, białko zwierzęce, maltodekstryna, koncentrat białka sojowego, suszone warzywa (marchew, pietruszka, ziemniak płatek, cebula, por), suszone pieczarki, glukoza, laktoza z mleka, serwatka z mleka, soja, seler, suszony ekstrakt drożdżowy, suszone koncentraty warzywne (cebuli, marchwi, ogórka), suszone ekstrakty warzywne (pora, pietruszki), dekstroza, olej roślinny, tłuszcz wieprzowy, tłuszcz wieprzowy wędzony, skrobia modyfikowana tapiokowa, regulatory kwasowości: kwas cytrynowy i cytryniany sodu',
		ean: 'Brak informacji'
	},
	{
		id: 19,
		nazwa: 'DR.OETKER Pizza Rigga wiejska',
		obrazek: '60042048.jpg',
		opis: 'W Pizzy Rigga Wiejska aromatyczne kabanosy nadają charakterystyczny smak podkreślony dodatkowo ogórkiem konserwowym. Plasterek gotowanego jajka przyciąga wzrok i jest doskonałym dodatkiem swojskości. Całość tworzy niezwykle atrakcyjną i smakowitą pizzęo niezapomnianym smaku. Pizza Rigga Wiejska to jedyna taka pizza na rynku. Pizza Rigga Wiejska smakuje jak domowa.',
		sklad: 'Mąka pszenna, woda, ser, tłuszcz roślinny, ogórki konserwowe, koncentrat pomidorowy, kabanos 4%, jajo gotowane, cukier, drożdże, sól, przyprawy, skrobia modyfikowana, aromaty.',
		ean: 'Brak informacji'
	},
	{
		id: 20,
		nazwa: 'DR.OETKER Paula Budyń o smaku czekoladowym w łaty waniliowe',
		obrazek: '91755853.jpg',
		opis: 'Dr. Oetker podbija serca łasuchów swoim nowym produktem - budyniem o smaku waniliowym w łatki, które mają smak czekoladowy. Porcja budyniu Paula to 100g doskonałego deseru pełnego mleka w praktycznym, podwójnym opakowaniu. Paula to idealny, mały, smaczny i pożywny posiłek. Polecany na drugie śniadnie do szkoły, czy przekąską w ciągu dnia intensywnej pracy. I zawsze wtedy, gdy masz ochotę na małe, mleczne co nie co.',
		sklad: 'mleko (85%), syrop cukru inwertowanego, cukier, skrobia modyfikowana, odtłuszczone kakao (0,6%), odtłuszczone mleko w proszku, substancja zagęszczająca (karagen), sól, barwnik (beta-karoten), aromaty',
		ean: '4023600002836'
	},
	{
		id: 21,
		nazwa: 'Sorella',
		obrazek: 'sorella.png',
		opis: 'Dżemy marki Sorella dla dzieci do wyciskania w różnych smakach (truskawka, brzoskwinia, porzeczka)',
		sklad: 'Brak informacji',
		ean: 'Brak informacji'
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

function znajdzProdukt(id){
	var pid = parseInt(id);
	if(isNaN(id) || id < 0) return null;
	var prod = lista.filter(obj => {
		return obj.id === id;
	})
	if(prod.length === 0) return null;
	return prod;
}