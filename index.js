var marks = Number(prompt("Enter your maths marks"));
var message;
if (marks >= 90 && marks <= 100) {
    message = "Grade A+";
}
else if (marks >= 80 && marks < 90) {
    message = "Grade A";
}
else if (marks >= 70 && marks < 80) {
    message = "Grade B";
}
else if (marks < 70) {
    message = "Fail";
}
else {
    message = "Invalid Input";
}
alert(message);
//////////////////////////
var marks1 = Number(prompt("Enter your physics marks"));
var message1;
if (marks1 >= 90 && marks1 <= 100) {
    message1 = "Grade A+";
}
else if (marks1 >= 80 && marks1 < 90) {
    message1 = "Grade A";
}
else if (marks1 >= 70 && marks1 < 80) {
    message1 = "Grade B";
}
else if (marks1 < 70) {
    message1 = "Fail";
}
else {
    message1 = "Invalid Input";
}
alert(message1);
