import mongoose from "mongoose";
import ErroBase from "../Error/Errobase.js";
import RequisicaoIncorreta from "../Error/RequisicaoIncorreta.js";
import ErroValidacao from "../Error/ErroValidacao.js";
import NaoEncontrado from "../Error/NaoEncontrado.js";

function manipuladorDeErros (erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
       new RequisicaoIncorreta().enviarResposta(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).enviarResposta(res);
    } else if (erro instanceof NaoEncontrado) {
        erro.enviarResposta(res);
    } else { 
        new ErroBase().enviarResposta(res);
    }
};

export default manipuladorDeErros;