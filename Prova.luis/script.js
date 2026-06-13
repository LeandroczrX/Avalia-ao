// PELÚCIAS

const pelucias = document.querySelectorAll(".pelucias img");
const audioPelucia = document.getElementById("audioPelucia");

pelucias.forEach(pelucia => {

    pelucia.addEventListener("click", () => {

        pelucias.forEach(p => {
            p.classList.remove("selecionada");
        });

        pelucia.classList.add("selecionada");

        audioPelucia.src = pelucia.dataset.som;
        audioPelucia.play();
    });

});


// SOM DO CARRINHO

const botoesCarrinho = document.querySelectorAll(".add-to-cart-btn");
const somCarrinho = document.getElementById("somCarrinho");

botoesCarrinho.forEach(botao => {

    botao.addEventListener("click", () => {

        somCarrinho.currentTime = 0;
        somCarrinho.play();

    });

});


// CARRINHO

const carrinho = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

let total = 0;
let itens = {};

botoesCarrinho.forEach(botao => {

    botao.addEventListener("click", () => {

        const nome = botao.dataset.nome;
        const preco = Number(botao.dataset.preco);

        let nomeFinal = nome;

        if(nome === "X-gorducho (Kids)"){

            const peluciaEscolhida = document.querySelector(".pelucias img.selecionada");

            if(peluciaEscolhida){
                nomeFinal += " - " + peluciaEscolhida.alt;
            }
        }

        if(itens[nomeFinal]){
            itens[nomeFinal].quantidade++;
        }else{
            itens[nomeFinal] = {
                preco: preco,
                quantidade: 1
            };
        }

        total += preco;

        carrinho.innerHTML = "";

        for(let item in itens){

            carrinho.innerHTML += `
                <p>
                    ${item} x${itens[item].quantidade}
                    - R$ ${itens[item].preco * itens[item].quantidade}
                </p>
            `;
        }

        totalSpan.textContent = total.toFixed(2);

    });

});