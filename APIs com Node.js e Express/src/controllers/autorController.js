import { autor } from "../models/Autor.js";


class AutorController {

    static async getAllAutor(req, res) {
        try {

            const autores = await autor.find({});
            res.status(200).json(autores);

        } catch (error) {
            es.status(500).json({ message: `${error.message} - falha na requisição.` });
        }
    };

    static async getAutorById(req, res) {
        try {

            const id =  req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json({ message: "Autor encontrado com sucesso!", Autor: autorEncontrado});

        } catch (error) {
            es.status(500).json({ message: `${error.message} - falha na requisição.` });
        }
    };


    static async createAutor(req, res) {
        try {
            const createAutor = await autor.create(req.body);

            res.status(201).json({ message: "Criado com sucesso!", autor: createAutor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao criar Autor.` });
        }
    };

    static async updateAutorById(req, res) {
        try {

            const id =  req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado com sucesso!" });

        } catch (error) {
            es.status(500).json({ message: `${error.message} - falha na atualização do Autor.` });
        }
    };

    static async deleteAutorById(req, res) {
        try {

            const id =  req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(204).json({ message: "Autor deletado com sucesso!" });

        } catch (error) {
            es.status(500).json({ message: `${error.message} - falha na requisição para deletar o livro.` });
        }
    };

};

export default AutorController;