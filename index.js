var fs = require('fs');

const localDaTabelaQuestionarios = './banco_de_dados/questionarios.json'
const localDaTabelaPerguntas = './banco_de_dados/perguntas.json'

const questionarios = require(localDaTabelaQuestionarios)
const perguntas = require(localDaTabelaPerguntas);

questionarios.forEach((questionario) => {
    console.log(questionario.titulo)
    perguntas.forEach((pergunta) => {
        if(questionario.id === pergunta.id_questionario) {
            console.log(pergunta.enunciado)
        }
    })
    console.log("------------")
})
