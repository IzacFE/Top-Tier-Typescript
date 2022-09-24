var izac = "Izac Aqsha Ghifari";
function helloThere(person) {
    console.log("Hello ".concat(person.firstname, " ").concat(person.lastName));
}
helloThere({
    firstname: "Izac",
    lastName: "Aqsha Ghifari"
});
