function sanitizeString(string) {
  return string.replace(/\d+/g, "[removido]");
}

console.log(sanitizeString("teste 1 de 2 string 3"));
