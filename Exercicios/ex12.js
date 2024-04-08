const pessoa = {
  nome: "Dev",
  sobrenome: "smart",
  idade: "26",
  cargo: "analista de sistemas",
  documento: "123.345.678-90",
};

function formatObject(obj) {
  const object = obj;
  delete object.documento;

  return object;
}

console.log(formatObject(pessoa));
