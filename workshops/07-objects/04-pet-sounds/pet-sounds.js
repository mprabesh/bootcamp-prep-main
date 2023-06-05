let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW
const petSounds = (animal, country) => {
  // console.log(animalNoises);
  let animal_voice = "";
  for (let i = 0; i < animalNoises.length; i++) {
    // console.log(animalNoises[i]);
    for (let key in animalNoises[i]) {
      if (key === animal) {
        // console.log(animalNoises[i][key]);
        let v = animalNoises[i][key];
        for (let key in v) {
          if (key === country) {
            // console.log(key);
            // console.log(v[key]);
            animal_voice = v[key];
          }
        }
      }
    }
  }
  animal = animal.charAt(0).toUpperCase() + animal.slice(1) + "s";
  country = country.charAt(0).toUpperCase() + country.slice(1);
  // console.log(animal, country);
  final_string = `${animal} in ${country} say ${animal_voice}`;
  return final_string;
};

// console.log(petSounds("dog", "Korea"));
