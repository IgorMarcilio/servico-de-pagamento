export default class ServicoDePagamento {
#pagamentos
  constructor() {
    this.#pagamentos = [];
  }
  realizarPagamento(codigoBarras, empresa, valor) {
    this.#pagamentos.push({
      codigoBarras,
      empresa,
      valor,
      categoria: valor > 100 ? "cara" : "padrao",
    });
  }
  consultarUltimoPagamento() {
    return this.#pagamentos[this.#pagamentos.length - 1];
  }
}
