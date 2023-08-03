var guestnames = ['Chacho','Chachi','Ammar','Faiza Appi','Khala Jan','Khalo Jan'];
const invitedGuests = guestnames.slice(0, 2);
const uninvitedGuests = guestnames.slice(2);
console.log("The following two people are still invited:");
for (const guest of invitedGuests) {console.log(guest);}
console.log("The following people are not invited:");
for (const guest of uninvitedGuests) {console.log(guest);}