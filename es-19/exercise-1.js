const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// DOMANDA:
// Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche l'oggetto `person1`?
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// RISPOSTA:
// Gli oggetti si comportano in modo diverso rispetto alle variabili, vengono assegnati per rifermento e non per valore.
// Nel nostro caso, l'oggetto `person2` non è stato copiato/clonato, ha solo preso lo stesso puntatore nello spazio di memoria che occupa l'oggetto `person1`.
// Se invece volessimo copiare/clonare un oggetto, dovremmo usare alcuni metodi offerti da JavaScript, come ad esempio `Object.assign()`,
// questo metodo ci permette di creare una copia "superficiale" del nostro oggetto di partenza. `let person2 = Object.assign({}, person1);`
//------------------------------------------------------------------------------------------------------------------------------------------------------------