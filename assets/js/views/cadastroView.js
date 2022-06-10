function buscaObjeto(result){    //faz a busca das propriedades do personagem
    //cep.textContent =`CEP: ${result.cep} `;
    bairro.value = `${result.bairro}`
    rua.value = `${result.logradouro}`;
    municipio.value = `${result.localidade}`;
    estado.value = ` ${result.uf}`;
    //cep.value = `${result.cep}`
    //cep.value = " "
}
