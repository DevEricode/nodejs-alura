import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro) {
        // Primeiro, cria a mensagem de erro
        const mensagensErro = Object.values(erro.errors).map(erro => erro.message).join("; ");
        
        // Chama o construtor da classe base com a mensagem de erro
        super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
    }
}

export default ErroValidacao;
