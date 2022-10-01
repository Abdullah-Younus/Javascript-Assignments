var magician = ["David Copperfield", "K Lal", "Gopinath Muthukad."];

function show_magician(magician) {
    document.writeln(`<b>Magician List</b>` + "<hr/>");
    for (let i = 0; i < magician.length; i++) {
        document.writeln(`${magician[i]}` + "<br/>");
    }
}


function make(magician) {
    document.writeln("<hr/>");
    document.writeln(`<b> Great Magician List Name</b>` + "<hr/>");
    for (let i = 0; i < magician.length; i++) {
        document.writeln(`${magician[i]} the Great` + "<br />");
    }
}
show_magician(magician);
make(magician.reverse());
