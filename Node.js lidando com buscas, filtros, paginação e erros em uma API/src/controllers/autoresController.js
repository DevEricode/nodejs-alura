import autores from '../models/Autor.js';

class AutorController {
	static listarAutores = async (req, res, next) => {
		try {
			const autoresResultado = await autores.find();

			res.status(200).json(autoresResultado);
		} catch (erro) {
			next(erro);
		}
	};

	static listarAutorPorId = async (req, res, next) => {
		try {
			const {id} = req.params;

			const autorResultado = await autores.findById(id);

			if(autorResultado !== null) {
				res.status(200).json(autorResultado);
			} else {
				res.status(404).json({ message: "ID do Autor não encontrado." })
			}

		} catch (erro) {
			next(erro);
		}
	};

	static cadastrarAutor = async (req, res, next) => {
		try {
			const autor = await autores.create(req.body);

			const autorResultado = await autor.save();

			res.status(201).send(autorResultado.toJSON());
		} catch (erro) {
			next(erro);
		}
	};

	static atualizarAutor = async (req, res, next) => {
		try {
			const {id} = req.params;

			await autores.findByIdAndUpdate(id, {$set: req.body});

			res.status(200).send({message: 'Autor atualizado com sucesso'});
		} catch (erro) {
			next(erro);
		}
	};

	static excluirAutor = async (req, res, next) => {
		try {
			const {id} = req.params;

			await autores.findByIdAndDelete(id);

			res.status(200).send({message: 'Autor removido com sucesso'});
		} catch (erro) {
			next(erro);
		}
	};
}

export default AutorController;
