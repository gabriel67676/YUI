async function carregarDados() {

    const resposta = await fetch("https://effective-enigma-6vg55wx944g9c4gw7-3000.app.github.dev/");

    const dados = await resposta.json();

    const lista = document.getElementById("lista-produtos");

    lista.innerHTML = "";

    dados.forEach(produto => {

        lista.innerHTML += `
            <div>
               <img src="${produto.imagem}" alt="${produto.nome}" class="card-img">
                <h2>${produto.nome}</h2>
                <p>Categoria: ${produto.categoria}</p>
                <p>Preço: R$ ${produto.preco}</p>
            </div>
        `;

    });
}

carregarDados();