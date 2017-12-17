function Contact(firstName, lastName, email, phone) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.phone = phone;
}

Contact.prototype.toHTML = function (element) {
	let htmlString = '<li class="media"><img class="image" src="assets/avatar.png" />';

	htmlString += '<div class="body">';
	htmlString += '<h2 class="name">' + this.firstName + ' ' + this.lastName + '</h2>';
	htmlString += '<div class="email"><a href="mailto:' + this.email + '">' + this.email + '</a></div>';
	htmlString += '<div class="phone">' + this.phone + '</div>';
	htmlString += '</div></li>';

	return htmlString;
}