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
		nazwa: 'Nestle Aero czekolada mleczna bąbelkowa',
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
		opis: 'Napój stworzony z okazji mistrzostw świata w piłce nożnej w roku 2006 (źródło zdjęcia: https://canmuseum.com/Detail.aspx?CanID=50700)',
		sklad: 'Woda, cukier, dwutlenek węgla, aromat, regulatory kwasowości: kwas fosforowy, cytrynian sodu, Kwas: kwas cytrynowy, Aromat: kofeina (0.012g / 100ML rpduktu), Stabilizator: guma arabska, Barwnik: karmel E150d, Barwnik: żółcień pomarańczowa',
		ean: '5900497444330'
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