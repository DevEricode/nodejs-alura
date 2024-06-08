import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId },
		titulo: {
			type: String, 
			required: [true, "O título do livro é obrigatório!"]
		},
		autor: {
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'autores', 
			required: [true, "O(A) autor(a) é obrigatório!"]
		},
		editora: {type: String, 
			required: [true, "A editora é obrigatório!"]
		},
		numeroPaginas: {
			type: Number,
			min: [10, "O número de páginas permitido deve estar entre 10 e 5000. O valor digitado: {VALUE}."],
			max: [5000, "O número de páginas permitido deve estar entre 10 e 5000. O valor digitado: {VALUE}."],
		  },
	},
);

const livros = mongoose.model('livros', livroSchema);

export default livros;
