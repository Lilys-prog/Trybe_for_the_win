const people = [
  { name: 'João', age: 25 },
  { name: 'Maria', age: 30 },
  { name: 'Pedro', age: 20 },
  { name: 'Ana', age: 35 },
];

// filtrar as pessoas que têm a idade igual ou superior a 30

const olderThan30 = () => {
  return people.filter((person) => {
    return person.age >= 30;
  })
}
console.log(olderThan30());