const data = [
  { id: 1, nome: "juca", sobrenome: "da silva", idade: 42 },
  { id: 2, nome: "daniel", sobrenome: "gonçalves", idade: 21 },
  { id: 3, nome: "matheus", sobrenome: "garcia", idade: 28 },
  { id: 4, nome: "gabriel", sobrenome: "pinheiro", idade: 21 },
];

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

data.forEach((person) => {
  console.log(`Olá, ${capitalize(person.nome)} ${person.sobrenome}`);
});
