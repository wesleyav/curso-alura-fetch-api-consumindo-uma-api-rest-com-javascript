const informacoesClientes = [
    {
        cpf: 66809433023,
        nome: "Jairo"
    }
]

const conteudoLInha = `
<tr>
        <td>${informacoesClientes[0].cpf}</td>
        <td>${informacoesClientes[0].nome}</td>
      </tr>
      `


const corpoTabela = document.querySelector("[data-conteudo-tabela]")

corpoTabela.innerHTML = conteudoLInha