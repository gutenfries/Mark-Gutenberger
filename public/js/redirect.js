/*
pretty starightforward stuff, call this in an externl file with
the redirect(x) function, making `x` arg the desired new location.
newlocation is allowed to be a hyperlink or a relatve link ('/' or '/home').
make sure you url (aka percent) encode anything and put it in single quotes ''.
*/
function redirect(newlocation) {
	window.location = newlocation;
}
/*
Example callback (html):
<script href="<...link to this file...>/redirect.js" type="text/javascript">
redirect('./'); //goes up one directory
redirect('https://save418.com'); //goes to hyper link
redirect('pages/about-me/hello.html') //goes to hello.html in pages
*/