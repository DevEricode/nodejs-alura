import mongoose from "mongoose";
import ErroBase from "../error/Errobase.js";
import RequisicaoIncorreta from "../error/RequisicaoIncorreta.js";
import ErroValidacao from "../error/ErroValidacao.js";

function manipuladorDeErros (erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
       new RequisicaoIncorreta().enviarResposta(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).enviarResposta(res);
    } else if (erro instanceof ErroBase) {
        erro.enviarResposta(res);
    } else { 
        new ErroBase().enviarResposta(res);
    }
};

export default manipuladorDeErros;