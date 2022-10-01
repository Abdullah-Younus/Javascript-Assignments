function describe_city(city, country = "Pakistan") {
    document.writeln(`Describe a city` + "<br/>");
    document.writeln(`${city} is in  ${country}.` + "<br/>");
}

describe_city("Karachi");
describe_city("San Francisco", "United States");

