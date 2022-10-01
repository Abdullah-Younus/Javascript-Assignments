function show_magician(magician) {
    document.writeln(`<b>Magician in the List </b>` + "<hr/>");
    for (let i = 0; i < magician.length; i++) {
        document.writeln(`${magician[i]}` + "<br/>");

    }
}

magician = ["David Copperfield", "K Lal", "Gopinath Muthukad."];
show_magician(magician);