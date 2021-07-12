//importando os dados de database.js
const livros = require('./database')

// pegar o input

const readline = require('readline-sync')

const busca = readline.question("Deseja buscar um livro? S/N ") //receber perguntas

// Se for sim, mostra as categorias disponíveis, pergunta qual categoria escolhe
if(busca.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis: ');
    console.log('Estudos', '/Saúde', '/Auto-Ajuda', '/Produtividade');

    const entradaCategoria = readline.question('Qual categoria você escolhe: ');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria) //filtrando o livro para retornar conforme digitado

    console.table(retorno);//Exibir em tabela em tabela
    
} else{// Se for não, exibir todos os livros em ordem crescente pela quantidade de páginas
    const livrosOrdenados = livros.sort((a,b)=> a.páginas - b.páginas)//Ordenar os livros por quantidade de páginas
    console.log('Essas são todos os livros disponíveis: ');
    console.table(livrosOrdenados);
}

