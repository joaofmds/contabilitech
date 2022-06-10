let btnCep = document.querySelector("#btn-cep"); 
let cep = document.querySelector("#cep");
let bairro = document.querySelector("#bairro_cad");
let rua = document.querySelector("#rua_cad");
let estado = document.querySelector("#estado_cad");
let municipio = document.querySelector("#municipio_cad")

function buscaObjeto(result){    //faz a busca das propriedades do personagem
    //cep.textContent =`CEP: ${result.cep} `;
    bairro.value = `${result.bairro}`
    rua.value = `${result.logradouro}`;
    municipio.value = `${result.localidade}`;
    estado.value = ` ${result.uf}`;
    //cep.value = `${result.cep}`
    //cep.value = " "
}
