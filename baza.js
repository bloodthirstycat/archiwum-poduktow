var lista = [
	{
		id: 0,
		nazwa: 'Prince Polo',
		obrazek: '/img/00.jpg',
		opis: 'ble ble',
		ean: '123',
	},
	{
		id: 1,
		nazwa: 'Princessa',
		obrazek: '/img/01.jpg',
		opis: 'bla bla',
		ean: '456',
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