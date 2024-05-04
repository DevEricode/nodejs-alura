import { autor } from "../models/Autor.js";
import livro from "../models/Livros.js";


class LivroController {

    static async getAllLivros(req, res) {
        try {

            const livros = await livro.find({});
            res.status(200).json(livros);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição.` });
        }
    };

    static async getLivrosById(req, res) {
        try {

            const id =  req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json({ message: "Livro encontrado com sucesso!", livro: livroEncontrado});

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição.` });
        }
    };


    static async createLivro(req, res) {

        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const criarLivro = await livro.create(livroCompleto);

            res.status(201).json({ message: "Criado com sucesso!", livro: criarLivro });
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
            res.status(500).json({ message: `${error.message} - falha na atualização do livro.` });
        }
    };

    static async deleteLivroById(req, res) {
        try {

            const id =  req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(204).json({ message: "Livro deletado com sucesso!" });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição para deletar o livro.` });
        }
    };

    static async getLivroByPublishing(req, res) {

        const publishing = req.query.publishing;

        try {
            
            const buscarLivro = await livro.find({ publishing: publishing });
            res.status(200).json({ livro: buscarLivro });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição de busca!` });
        }

    };

};

export default LivroController;