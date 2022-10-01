let locations = ["canada", "austrila", "germany", "london", "japan"];

document.writeln("<hr/>"+" <b>Original List </b>" + "<hr/>");
document.writeln(`${locations}` + "<br/>");


document.writeln("<hr/>"+" <b>Alphabetical </b>" + "<hr/>");
document.writeln(`${locations.sort()}`);

document.writeln("<hr/>"+" <b>Original List </b>" + "<hr/>");
document.writeln(`${locations}` + "<br/>");

document.writeln("<hr/>"+" <b>Reverse Alphabetical </b>" + "<hr/>");
document.writeln(`${locations.reverse()}`)



document.writeln("<hr/>"+" <b>Original List </b>" + "<hr/>");
document.writeln(`${locations}` + "<br/>");

document.writeln("<hr/>"+" <b>Reversed </b>" + "<hr/>");
document.writeln(`${locations.reverse()}` + "<br/>");


document.writeln("<hr/>"+" <b>Original List </b>" + "<hr/>");
document.writeln(`${locations}` + "<br/>");

document.writeln("<hr/>"+" <b>Alphabetical </b>" + "<hr/>");
document.writeln(`${locations.sort()}`);

document.writeln("<hr/>"+" <b>Reverse Alphabetical </b>" + "<hr/>");
document.writeln(`${locations.reverse()}`)
