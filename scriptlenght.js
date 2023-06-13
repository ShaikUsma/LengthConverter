function convert(fromUnit, toUnit) {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var result;

    // Conversion logic
    if (fromUnit === "cm" && toUnit === "m") {
        result = inputValue / 100;
    } else if (fromUnit === "cm" && toUnit === "km") {
        result = inputValue / 100000;
    } else if (fromUnit === "cm" && toUnit === "in") {
        result = inputValue / 2.54;
    } else if (fromUnit === "cm" && toUnit === "ft") {
        result = inputValue / 30.48;
    } else if (fromUnit === "cm" && toUnit === "yd") {
        result = inputValue / 91.44;
    } else if (fromUnit === "cm" && toUnit === "mi") {
        result = inputValue / 160934.4;
    } else if (fromUnit === "m" && toUnit === "cm") {
        result = inputValue * 100;
    } else if (fromUnit === "m" && toUnit === "km") {
        result = inputValue / 1000;
    } else if (fromUnit === "m" && toUnit === "in") {
        result = inputValue * 39.37;
    } else if (fromUnit === "m" && toUnit === "ft") {
        result = inputValue * 3.281;
    } else if (fromUnit === "m" && toUnit === "yd") {
        result = inputValue * 1.094;
    } else if (fromUnit === "m" && toUnit === "mi") {
        result = inputValue / 1609.344;
    } else if (fromUnit === "km" && toUnit === "cm") {
        result = inputValue * 100000;
    } else if (fromUnit === "km" && toUnit === "m") {
        result = inputValue * 1000;
    } else if (fromUnit === "km" && toUnit === "in") {
        result = inputValue * 39370.08;
    } else if (fromUnit === "km" && toUnit === "ft") {
        result = inputValue * 3280.84;
    } else if (fromUnit === "km" && toUnit === "yd") {
        result = inputValue * 1093.613;
    } else if (fromUnit === "km" && toUnit === "mi") {
        result = inputValue * 0.6213712;
    } else {
        result = inputValue;
    }

    var resultElement = document.getElementById("result");
    resultElement.textContent = result.toFixed(2) + " " + toUnit;
}
