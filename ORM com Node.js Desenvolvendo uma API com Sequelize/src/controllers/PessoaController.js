const database = require('../models');

class PessoaController {
    static async pegaTodas(req, res) {
        try {
            const listaDePessoas = await database.Pessoa.findAll();
            return res.status(200).json(listaDePessoas);
        } catch (error) {
           return res.status(500).json(error);
        };
    };
};

module.exports = PessoaController;