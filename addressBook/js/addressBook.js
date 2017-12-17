function AddressBook(contacts) {
	this.contacts = contacts;
}

AddressBook.prototype.add = function (contact) {
	this.contacts.push(contact);
};
AddressBook.prototype.find = function (string) {
	// body...
};
AddressBook.prototype.remove = function (contact) {

};
AddressBook.prototype.sortByFirstName = function () {
	this.contacts = this.contacts.sort(function (a, b) {
		let nameA = a.firstName.toUpperCase();
		let nameB = b.firstName.toUpperCase();
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	});
}
AddressBook.prototype.renderInElement = function(element) {
	this.sortByFirstName();
	let htmlString = '';
	for (let i = 0; i < this.contacts.length; i++) {
		htmlString += this.contacts[i].toHTML();
	}
	element.innerHTML = htmlString;
};