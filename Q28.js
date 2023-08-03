var age = 12;
if (age < 2) {
    var message = "You are a baby.";
    console.log(message);
}
else if (age >= 2 && age < 4) {
    var message = "You are a toddler.";
    console.log(message);
}
else if (age >= 4 && age < 13) {
    var message = "You are a kid.";
    console.log(message);
}
else if (age >= 13 && age < 20) {
    var message = "You are a teenager.";
    console.log(message);
}
else if (age >= 20 && age < 65) {
    var message = "You are an adult.";
    console.log(message);
}
else {
    var message = "You are an elder.";
    console.log(message);
}
