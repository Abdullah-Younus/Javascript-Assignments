let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < list.length; i++) {
    if (list[i] === 1) {
        document.writeln("1st" + "<br/>")
    }
    else if (list[i] === 2) {
        document.writeln("2nd" + "<br/>")
    } else if (list[i] === 3) {
        document.writeln("2rd" + "<br/>")
    }
    else {
        document.writeln(`${list[i]}th` + "<br/>")
    }

}