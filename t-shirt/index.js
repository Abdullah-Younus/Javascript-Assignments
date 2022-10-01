function make_shirt(size, message) {
    document.writeln("Summarize the shirt" + "<br/>");
    document.writeln(`I'm going to make a ${size} t-shirt.` + "<br/>");
    document.writeln(`It will say ${message} ` + "<br/>");
}

make_shirt('small', 'Favourite T-Shirt');