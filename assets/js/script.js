let btnCep = document.querySelector("#btn-cep"); 
let cep = document.querySelector("#cep");
let bairro = document.querySelector("#bairro_cad");
let rua = document.querySelector("#rua_cad");
let estado = document.querySelector("#estado_cad");
let municipio = document.querySelector("#municipio_cad")

btnCep.addEventListener('click', (e)=>{
    e.preventDefault(); 
    validaCep();   
})
function validaCep(){//valida o cep, verificando se foi digitado 8 digitos e faz a requisição
    try{
        const cepProcurado = document.querySelector('#cep').value;
        if (cepProcurado.length == 8   && cepProcurado != '') {
            
            const url = `https://viacep.com.br/ws/${cepProcurado}/json/`;
            requisicao(url); 
        
        }else{
            throw new(`O Cep digitado não possui 8 digitos`)
        }

    }catch(erro){   
        alert(erro);
    }
    cep.value = " ";
    console.log(bairro.value);
}
function requisicao(url){ // faz a requisição
        $.ajax({
            method: "GET",
            url: url,
            success:function(result){
                //console.log(result);
               // nome.textContent =`CEP: ${result.cep} `;
                buscaObjeto(result);
            },
            error: function(err) {
                //console.log(err)
                alert(`O CEP não existe`);
            }
        }); 
}
function buscaObjeto(result){    //faz a busca das propriedades do personagem
    //cep.textContent =`CEP: ${result.cep} `;
    bairro.value = `${result.bairro}`
    rua.value = `${result.logradouro}`;
    municipio.value = `${result.localidade}`;
    estado.value = ` ${result.uf}`;
    //cep.value = `${result.cep}`
    //cep.value = " "
}
