function make_car(manufacturer, model, ...options) {
    document.writeln(`Make a explain car.`);
    car_parts = {
        "manfacturer": manufacturer,
        "model": model
    }
    options.forEach(element => {
        return car_parts[options] = element
    });
    return car_parts;
}

corola = make_car('subaru', 'outback', color = 'blue', tow_package = "chck");
console.log(corola);
// make_car('subaru', 'outback', color = 'blue', tow_package = "chck");
