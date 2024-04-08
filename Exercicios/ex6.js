async function getData(cep, number) {
  const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
    (response) => {
      return response.json();
    }
  );

  console.log(
    `${data.logradouro} - ${data.bairro} | n° ${number} | ${data.localidade} / ${data.uf}`
  );
}

getData("36091080", 143);
