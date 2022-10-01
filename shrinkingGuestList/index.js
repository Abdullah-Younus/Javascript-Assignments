var guestList = ["Razzaq", "Ahmed Raza", "Abdullah", "Shan", "Younus", "Shazaib"];

document.writeln(`<b> Sorry, we can only invite two people to dinner. </b> ` + "<hr/> ")

var name = guestList.pop();

document.writeln(`${name} you’re sorry you can’t invite them to dinner.` + "<br/>")

name = guestList.pop();

document.writeln(`${name} you’re sorry you can’t invite them to dinner.` + "<br/>")

name = guestList.pop();

document.writeln(`${name} you’re sorry you can’t invite them to dinner.` + "<br/>")

name = guestList.pop();

document.writeln(`${name} you’re sorry you can’t invite them to dinner.` + "<br/>")


document.writeln("<hr/> " + `<b> Only invite two people For dinner. </b> ` + "<hr/> ")

name = guestList[0];

document.write(`${name} Please Come to The Dinner` + "<br/>");

name = guestList[1];

document.write(`${name} Please Come to The Dinner` + "<br/>");
// document.getElementById("result").innerText = guestList[1];

for (let i = 0; i <= guestList.length; i++) {
    guestList.pop();
}

window.document.write(`${guestList}[ ]`)