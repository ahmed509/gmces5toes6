const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

function getAge({bornOn}) {
  return new Date().getFullYear() - bornOn;
}



const petsWithAge = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  pet.age = getAge(pet);

  petsWithAge.push(pet);
}
console.log(petsWithAge);

const dogs = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}
console.log(dogs);

let jasper;
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.name === "Jasper") {
    jasper = pet;
  }
}
console.log(`Jasper is ${jasper.age} years old`);
