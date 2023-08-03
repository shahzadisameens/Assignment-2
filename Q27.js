var alienColor1 = "green";
if (alienColor1 === "green") {
    var pointsEarned = 5;
    var message = "You just earned ".concat(pointsEarned, " points for shooting the alien.");
    console.log(message);
}
else if (alienColor1 === "yellow") {
    var pointsEarned = 10;
    var message = "You just earned ".concat(pointsEarned, " points for shooting the alien.");
    console.log(message);
}
else if (alienColor1 === "red") {
    var pointsEarned = 15;
    var message = "You just earned ".concat(pointsEarned, " points for shooting the alien.");
    console.log(message);
}
else {
    var message = "The alien is not green, yellow, or red.";
    console.log(message);
}
