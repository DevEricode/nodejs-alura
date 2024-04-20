import express from "express";
import connectionDB from "./config/dbConnect.js";

const app = express();

<<<<<<< HEAD
const connection = await connectionDB();

connection.on("error", (error) => {
    console.error("Houve um erro de conexão com o banco de dados!" + error);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
});
=======
app.use(express.json());

const livros = [
    {
        id: 1,
        title: "Senhor dos Aneis"
    },

    {
        id: 2,
        title: "O Hobbit"
    }
];

function buscaLivro(id){
    return livros.findIndex(livros => {
        return livros.id === Number(id);
    })
}
>>>>>>> 27e9ee599ff2b8522c4590466d54a518ee7184d2

app.get("/", (req, res) => {
    res.status(200).send('Hello World');
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].title = req.body.title;

    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);

    res.status(201).send("Livro deletado com sucesso!");

});

export default app;