let newlocation: any;
const root: any = '/';
function redirect(input: string): void {
	if (input.includes('/' || '.')) {
		newlocation = input;
	} else {
		console.error(`requested location '${input}' is not a url.`);
		window.location = root;
	}
	window.location = newlocation;
}