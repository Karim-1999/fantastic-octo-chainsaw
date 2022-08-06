const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys
for (let value of Object.keys(person)) {
  console.log(`${value}: ${person[value]}`);
}