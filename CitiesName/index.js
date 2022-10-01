function city_country(city, country) {
    document.writeln(`Return a string like '${city}, ${country}` + "<br/>");
    return (`${city} , ${country}` + "<br/>");
}

city = city_country("Lahore", "Pakistan");
document.write(`${city}` + "<br/>");

city = city_country("San Franscisco", "United State");
document.writeln(`${city}`);