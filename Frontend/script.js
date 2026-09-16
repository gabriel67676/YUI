async function carregarDados() {

    const resposta = await fetch("https://effective-enigma-6vg55wx944g9c4gw7-3000.app.github.dev/");

    const dados = await resposta.json();

    const lista = document.getElementById("lista-produtos");

    lista.innerHTML = `
        <div>
            <h2>${dados.nome}</h2>
            <p>Categoria: ${dados.categoria}</p>
            <p>Preço: R$ ${dados.preco}</p>
        </div>
    `;
}

carregarDados();