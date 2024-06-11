import RequisicaoIncorreta from "../error/RequisicaoIncorreta.js";

async function paginar (req, res, next) {
    let { limite = 5, pagina = 1, ordenacao = "_id:-1"} = req.query;

    let [campoOrdenacao, ordem] = ordenacao.split(":");

    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    const resultado = req.resultado;

    if(pagina > 0 && limite > 0) {
        const livrosResultado = await resultado.find()
            .sort({ [campoOrdenacao]: ordem })
            .skip((pagina - 1) * limite)
            .limit(limite)
            .exec();

        res.status(200).json(livrosResultado);				
    } else {
        next(new RequisicaoIncorreta());
    };
};

export default paginar;