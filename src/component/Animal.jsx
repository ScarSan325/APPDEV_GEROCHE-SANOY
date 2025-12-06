//classes and constructors
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}

//arrow function
const greet = (name) => `Hello, ${name}`;

//array
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);

const even = nums.filter(n => n % 2 == 0);

//variables
let age = 25;
const name = "Jane";
var city = "Manila"

function AnimalComponent() {
  const animal = new Animal('Dog');
  const sound = animal.speak();

  return(
    <div>
      <h2>Animal Component</h2>
      <p>{sound}</p>
      <p>{greet('Mecah')}</p>
      <p>{doubled}</p>
      <p>{even}</p>
      <p>Her name is {name}. She is {age} yrs old living in {city}.</p>
    </div>
  );
}

export default AnimalComponent;