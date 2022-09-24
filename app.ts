let izac: string = "Izac Aqsha Ghifari";

function helloThere(person: Person) {
  console.log(`Hello ${person.firstname} ${person.lastName}`);
}

interface Person {
  firstname: string;
  lastName: string;
}

helloThere({
  firstname: "Izac",
  lastName: "Aqsha Ghifari",
});
