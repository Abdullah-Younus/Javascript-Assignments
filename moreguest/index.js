var guestList = ["Razzaq", "Ahmed Raza", "Abdullah"];
// var name = guestList[0];
// document.write(`${name} please come to dinner` + "<br/>");
// name = guestList[1];
// document.write(`${name} please come to dinner` + "<br/>");
// name = guestList[2];
// document.write(`${name} please come to dinner` + "<hr/>");
// document.write(` <b>Who Can't Make Dinner</b> :` + "<hr/>");

for (let i = 0; i < guestList.length; i++) {
    document.writeln(`${guestList[i]} please come to dinner.` + "<br/>");
}

document.writeln("<hr/>" + ` <b>We Got a Bigger Table</b> :` + "<hr/>");

guestList.unshift("Sara");

document.writeln(guestList + "<br/>");


guestList.push("Tanzila");


document.writeln(guestList + "<br/>");



guestList.splice(2,0,"Bisma");

document.writeln(guestList + "<br/>" + "<hr/>");


for (let i = 0; i < guestList.length; i++) {
    document.writeln(`${guestList[i]} please come to dinner.` + "<br/>");
}
