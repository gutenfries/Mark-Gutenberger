var newlocation;
var root = '/';
function redirect(input) {
    if (input.includes('/' || '.')) {
        newlocation = input;
    }
    else {
        console.error("requested location '" + input + "' is not a url.");
        window.location = root;
    }
    window.location = newlocation;
}
