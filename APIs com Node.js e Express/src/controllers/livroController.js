import livro from "../models/Livros.js";


class LivroController {

    static async getAllLivros(req, res) {
        try {

            const livros = await livro.find({});
            res.status(200).json(livros);

        } catch (error) {
            es.status(500).json({ message: `${error.message} - falha na requisição.` });
        }
    };

    static async getLivrosById(req, res) {
        try {

            const id =  req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json({ message: "Livro encontrado com sucesso!", livro: livroEncontrado});

        } catch (error) {
            es.status(500).json({ message: `${error.message} - falha na requisição.` });
        }
    };


    static async createLivro(req, res) {
        try {
            const createBook = await livro.create(req.body);

            res.status(201).json({ message: "Criado com sucesso!", livro: createBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao criar livro.` });
        }
    };

    static async updateLivroById(req, res) {
        try {

            const id =  req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado com sucesso!" });

        } catch (error) {
            es.status(500).json({ message: `${error.message} - falha na atualização do livro.` });
        }
    };

    static async deleteLivroById(req, res) {
        try {

            const id =  req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(204).json({ message: "Livro deletado com sucesso!" });

        } catch (error) {
            es.status(500).json({ message: `${error.message} - falha na requisição para deletar o livro.` });
        }
    };

};

export default LivroController;