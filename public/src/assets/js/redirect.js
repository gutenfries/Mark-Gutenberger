/*
pretty starightforward stuff, call this in an ext file with
the redirect(x) function, making `x` arg the desired new location.
newlocation is allowef to be a hyperlink or a rel ('/' or '/home')
make sure you url (aka percent) encode anything and put it in single quotes ''.
*/
function redirect(newlocation) {
	window.location = newlocation;
}