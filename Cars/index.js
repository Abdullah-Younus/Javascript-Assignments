function make_car(manufacturer, model, ...options) {
    document.writeln(`Make a explain car.`);
    car_parts = {
        "manfacturer": manufacturer,
        "model": model,
        "moreOptions": options
    }
    return car_parts;
}

cars = make_car('subaru', 'outback', color = 'blue', tow_package = "chck");
console.log(cars);
// make_car('subaru', 'outback', color = 'blue', tow_package = "chck");
