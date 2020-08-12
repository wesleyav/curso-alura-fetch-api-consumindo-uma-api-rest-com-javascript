const formCadastroCliente = document.querySelector("[data-form]");

console.log(formCadastroCliente)

formCadastroCliente.addEventListener("submit", event => {
    event.preventDefault();

    const nome = event.target.querySelector("[data-nome]").value
    const cpf = event.target.querySelector("[data-cpf]").value

    if (validaCPf(cpf)) {
        cadastrarClientes(nome, cpf);
    } else {
        alert('O CPF informado não é valido!')
    }
});

// const formCadastroCliente = document.querySelector('[data-form]');

// formCadastroCliente.addEventListener("submit", event => {
//     event.preventDefault();

//     const nome = event.target.querySelector('[data-nome]');
//     const cpf = event.target.querySelector('[data-cpf]');

//     if (validaCPf(cpf)) {
//         cadastrarClientes(nome.value, cpf.value)
//     } else {
//         alert('O CPF informado não é valido!')
//     }
// });



