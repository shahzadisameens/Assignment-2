var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Faisal Masjid", "Tokyo", "Paris", "TMaldives", "The Taj Mahal"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original order:", placesToVisit);
console.log("Reversed order:", placesToVisit.reverse());
console.log("Reversed order again:", placesToVisit.reverse());
console.log("Alphabetical order:", placesToVisit.sort());
console.log("Reverse alphabetical order:", placesToVisit.sort().reverse());
