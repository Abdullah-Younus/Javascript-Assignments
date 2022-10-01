function make_shirt(size = 'small', message = 'It Very Comfotable') {
    document.writeln("Summarize the shirt" + "<br/>");
    document.writeln(`I'm going to make a ${size} t-shirt.` + "<br/>");
    document.writeln(`It will say ${message} ` + "<br/>");
}

make_shirt();
make_shirt(size = "Medium");
make_shirt('Large', "It's Very Cheap");