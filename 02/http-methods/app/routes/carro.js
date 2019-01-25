/**
 * File: app/models/routes/carro.js
 * Author: Hygor Podgornik
 * Description: Arquivo responsável pelas rotas da API.
 * Date: 24/01/2019
 */

/**
 * ESSE ARQUIVO DEVE CONTER 5 (CINCO) MÉTODOS CONFORME O ARQUIVO "server.js", SENDO ELES:
 * 
 * 1º MÉTODO: selecionarTodosOsCarros
 * 2º MÉTODO: adicionarCarro
 * 3º MÉTODO: selecionarCarroPorId
 * 4º MÉTODO: editarCarro
 * 5º MÉTODO: excluirCarro
 */

var mongoose = require('mongoose');
var Carro = require('../models/carro');

function selecionarTodosOsCarros(req, res) {
}

function adicionarCarro(req, res) {
}

function selecionarCarroPorId(req, res) {
}

function editarCarro(req, res) {
}

function excluirCarro(req, res) {
}

module.exports = { selecionarTodosOsCarros, adicionarCarro, selecionarCarroPorId, editarCarro, excluirCarro };