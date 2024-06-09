import NaoEncontrado from '../error/NaoEncontrado.js';
import { livros } from '../models/index.js';

class LivroController {
	static listarLivros = async (req, res, next) => {
		try {
			const livrosResultado = await livros.find()
				.populate('autor')
				.exec();

			res.status(200).json(livrosResultado);
		} catch (erro) {
			next(erro);
		}
	};

	static listarLivroPorId = async (req, res, next) => {
		try {
			const {id} = req.params;

			const livroResultados = await livros.findById(id)
				.populate('autor', 'nome')
				.exec();

				if(livroResultados !== null) {
					res.status(200).send(livroResultados);

				} else {
					next(new NaoEncontrado("ID do livro não encontrado."));
				}

		} catch (erro) {
			next(erro);
		}
	};

	static cadastrarLivro = async (req, res, next) => {
		try {
			const livro = new livros(req.body);

			const livroResultado = await livro.save();

			res.status(201).send(livroResultado.toJSON());
		} catch (erro) {
			next(erro);
		}
	};

	static atualizarLivro = async (req, res, next) => {
		try {
			const {id} = req.params;

			const livroAtualizado = await livros.findByIdAndUpdate(id, {$set: req.body});

			if(livroAtualizado !== null) {
				res.status(200).send({message: 'Livro atualizado com sucesso'});
			} else {
				next(new NaoEncontrado("ID do livro não encontrado."));
			}

		} catch (erro) {
			next(erro);
		}
	};

	static excluirLivro = async (req, res, next) => {
		try {
			const {id} = req.params;

			const deletarLivro = await livros.findByIdAndDelete(id);

			if(deletarLivro !== null) {
				res.status(200).send({message: 'Livro removido com sucesso'});
			} else {
				next(new NaoEncontrado(new NaoEncontrado("ID do livro não encontrado.")));
			}

		} catch (erro) {
			next(erro);
		}
	};

	static listarLivroPorFiltro = async (req, res, next) => {
		try {
			const { editora, titulo, minPaginas, maxPaginas  } = req.query;

			const busca = {};

			if (editora) busca.editora = { $regex: editora, $options: "i" };
			if (titulo) busca.titulo = { $regex: titulo, $options: "i" };
			if (minPaginas || maxPaginas) busca.numeroPaginas = {};

			if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
			if (maxPaginas) busca.numeroPaginas.$lte = maxPaginas;

			const livrosResultado = await livros.find(busca);

			if(livrosResultado !== null) {
				res.status(200).send(livrosResultado);
			} else {
				next(new NaoEncontrado("Livro não encontrado."));
			}

		} catch (erro) {
			next(erro);
		}
	};
}

export default LivroController;
