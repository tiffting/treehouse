/* Set up initial address book */
let jasonBourne = new Contact(
	'Jason', 'Bourne', 'jbourne@identity.com', '+1 (866) 418-3920'
);
let aliceLiddell = new Contact(
	'Alice', 'Liddell', 'alice@wonderland.com', '+1 (703) 217-0910'
);

let rolodex = new AddressBook([jasonBourne, aliceLiddell]);

const contactsElement = document.querySelector('.contacts');
rolodex.renderInElement(contactsElement);

/* Add new contact */
const newContactForm = document.querySelector('form');

newContactForm.addEventListener('submit', function (event) {
	event.preventDefault();

	const newContactInputs = newContactForm.querySelectorAll('input');
	const newContactInfo = [];

	newContactInputs.forEach(function (input) {
		newContactInfo.push(input.value);
		input.value = '';
	});

	let newContact = new Contact(newContactInfo[0], newContactInfo[1], newContactInfo[2], newContactInfo[3]);

	rolodex.add(newContact);
	rolodex.renderInElement(contactsElement);
});