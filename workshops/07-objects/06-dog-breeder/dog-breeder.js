// YOUR CODE BELOW
function dogBreeder(name, age) {
  let dogInfo = {};
  if (age === undefined) {
    if (typeof name === "number") {
      age = name;
      name = null;
    } else {
      name = name;
      age = 0;
    }
  }
  if (!name) {
    name = "Steve";
  }
  dogInfo["name"] = name;
  dogInfo["age"] = age;
  return dogInfo;
}
console.log(dogBreeder("Marlo", 9));

// can also be used with default parameters

// function dogBreeder(name = "Steve", age = 0) {
//   if (typeof name === "number") {
//     age = name;
//     name = "Steve";
//   }
//   let dogInfo = { name: name, age: age };
//   return dogInfo;
// }
