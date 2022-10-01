function make_sandwich(...sandwishes) {
    document.writeln(`<b>Make a sandwich with the given</b> ` + "<br/>");
    document.writeln(`I will make you a prefect sandwich:` + "<br/>");
    for (let i = 0; i < sandwishes.length; i++) {
        document.writeln(`Adding ${sandwishes[i]} to your sandwish` + "<br/>");
    }
    document.writeln("Your sandwish is ready! <br/>");
}
make_sandwich("Chicken Sandwich", "Egg Sandwich", "Roast Beef Sandwich.", "Nutella Sandwich") // insert as you want
make_sandwich("Seafood Sandwich", "Grilled Cheese.");
