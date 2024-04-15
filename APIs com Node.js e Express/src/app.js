import express from "express";

const app = express();

app.use(express.json());

const livros = [
    {
        id: 0,
        title: "Senhor dos Aneis"
    },

    {
        id: 1,
        title: "O Hobbit"
    }
]

app.get("/", (req, res) => {
    res.status(200).send('Hello World');
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});

export default app;