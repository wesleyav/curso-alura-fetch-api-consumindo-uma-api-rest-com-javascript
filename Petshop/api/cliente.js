const listarClientes = () => {
    return fetch("http://localhost:4000/clientes", {
        method: "GET"
    })
        .then (resposta => {
            return resposta.json();
        })
        .then(json => {
            return json;
        });
};

const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch("http://localhost:4000/clientes/cliente", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: json
    })
        .then(resp => {
            return resp.body
        });
}

// const listarClientes = () => {
//     return fetch("http:localhost:4000/clientes", {
//       method: "get"
//     })
//       .then(resp => {
//         return resp.json();
//       })
//       .then(json => {
//         return json;
//       });
//   };

