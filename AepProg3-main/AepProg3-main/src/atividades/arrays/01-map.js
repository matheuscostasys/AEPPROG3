const nums = [1, 2, 3, 4, 5]

const dobro = numero => numero * 2


const nomes = ['joaodograu', 'vi', 'thiago', 'versale', 'ana ']

const letras = nomes.map(nome => nome[0])

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const productNames = carrinho.map(item => item.nome)
console.log(productNames)

const getValue = carrinho.map(item => item.qtde * item.preco)
console.log(getValue)

