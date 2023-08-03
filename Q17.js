var guestnames = ['Chacho', 'Chachi', 'Ammar', 'Faiza Appi', 'Khala Jan', 'Khalo Jan'];
var invitedGuests = guestnames.slice(0, 2);
var uninvitedGuests = guestnames.slice(2);
console.log("The following two people are still invited:");
for (var _i = 0, invitedGuests_1 = invitedGuests; _i < invitedGuests_1.length; _i++) {
    var guest = invitedGuests_1[_i];
    console.log(guest);
}
console.log("The following people are not invited:");
for (var _a = 0, uninvitedGuests_1 = uninvitedGuests; _a < uninvitedGuests_1.length; _a++) {
    var guest = uninvitedGuests_1[_a];
    console.log(guest);
}
