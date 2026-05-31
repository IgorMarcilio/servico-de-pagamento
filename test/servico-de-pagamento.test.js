import assert from "node:assert";
import ServicoDePagamento from "../src/servico-de-pagamento.js";

describe("Classe de Servico de Pagamento", () => {
  it("Validar pagamento retornando categoria cara", () => {
    const servico = new ServicoDePagamento();

    servico.realizarPagamento("0102-0304-0506", "Amazon", 100.01);
    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.equal(ultimoPagamento.categoria, "cara");
  });

  it("Validar pagamento retornando categoria padrao", () => {
    const servico = new ServicoDePagamento();

    servico.realizarPagamento("0102-0304-0506", "Amazon", 99.99);
    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.equal(ultimoPagamento.categoria, "padrao");
  });
  it("Validar consulta do ultimo pagamento", () => {
    const servico = new ServicoDePagamento();

    servico.realizarPagamento("0102-0304-0506", "Amazon", 99.99);

    const ultimoPagamento = servico.consultarUltimoPagamento();
    assert.equal(ultimoPagamento.codigoBarras, "0102-0304-0506");
    assert.equal(ultimoPagamento.empresa, "Amazon");
    assert.equal(ultimoPagamento.valor, "99.99");
  });
});
