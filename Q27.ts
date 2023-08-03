const alienColor1 = "green";
if (alienColor1 === "green") {
    const pointsEarned = 5;
    const message = `You just earned ${pointsEarned} points for shooting the alien.`;
    console.log(message);
}

else if (alienColor1 === "yellow") {
    const pointsEarned = 10;
    const message = `You just earned ${pointsEarned} points for shooting the alien.`;
    console.log(message);
}
else if (alienColor1 === "red") {
    const pointsEarned = 15;
    const message = `You just earned ${pointsEarned} points for shooting the alien.`;
    console.log(message);
}
else {
    const message = `The alien is not green, yellow, or red.`;
    console.log(message);
}
