/*jshint esversion: 6 */
const formCadastroCliente = document.querySelector("[data-form]");

formCadastroCliente.addEventListener("submit", 
event => {
    event.preventDefault();

    const nome = event.target.querySelector("[data-nome]").value;
    const cpf = event.target.querySelector("[data-cpf]").value;

    if (validaCPf(cpf) && cpf.length === 11){
        cadastrarClientes(nome, cpf);
    } else {
        alert('O CPF informado não é valido!');
    }
});

