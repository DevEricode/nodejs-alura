import ErroBase from "./Errobase.js";

class RequisicaoIncorreta extends ErroBase {
    constructor(mensagem = "Um ou mais dados fornecidos estão incorretos!") {
        super(mensagem, 400);
    }
};

export default RequisicaoIncorreta;