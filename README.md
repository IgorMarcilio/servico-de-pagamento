# Trabalho de Integração Contínua (CI) — Serviço de Pagamento

Este projeto foi desenvolvido como trabalho de conclusão de disciplina. O objetivo é criar uma pipeline de integração contínua usando o GitHub Actions para uma aplicação Node.js que possui testes automatizados.

## O Projeto
A aplicação é um serviço de pagamento bem simples em Node.js. Os testes foram escritos utilizando o framework **Mocha** e fazem asserções básicas sobre a realização e consulta de pagamentos.

---

## Conceitos de Integração Contínua (CI)

A Integração Contínua (CI) é uma prática de desenvolvimento de software onde os desenvolvedores sobem suas alterações de código para a branch principal com frequência. Cada envio é validado automaticamente por meio de scripts de build e testes.

Os principais benefícios são:
* **Feedback rápido:** O desenvolvedor sabe se quebrou algo logo após fazer o commit.
* **Segurança na entrega:** Evita que código com bugs ou erros de sintaxe vá para produção.
* **Histórico confiável:** Garante que a branch principal (`main`) esteja sempre estável e testada.

---

## Estrutura da Pipeline (GitHub Actions)

A pipeline foi estruturada no arquivo `.github/workflows/01-manual-exec.yaml` (e suas etapas adicionais) usando o GitHub Actions. Ela está dividida em:

* **Runner:** O ambiente virtual que executa as etapas (no caso, `ubuntu-latest`).
* **Jobs e Steps:** Passos lógicos executados sequencialmente (fazer o checkout do código, configurar o Node.js, instalar dependências e rodar os testes).

### Gatilhos de Execução (Triggers)
Para atender aos requisitos, a pipeline suporta três formas de disparo:

1. **Push (Automático):** Executa os testes automaticamente sempre que um commit é enviado para a branch principal (`main`).
2. **Manual (workflow_dispatch):** Permite disparar os testes manualmente com um clique na aba "Actions" do GitHub.
3. **Agendado (Schedule/Cron):** Configurado para executar os testes de forma periódica sem intervenção humana (ex: toda segunda-feira de manhã), garantindo que nada quebrou devido a atualizações externas de dependências.

---

## Relatório de Testes e Artefatos (Mochawesome)

Em vez de apenas ler os logs de texto puro no terminal do GitHub, integramos o **Mochawesome** ao Mocha. 

* Ele gera um relatório visual em HTML dentro da pasta `mochawesome-report/`.
* Na pipeline, usamos o passo de upload de artefatos (`actions/upload-artifact`) para salvar essa pasta. Assim, quem gerencia o projeto pode baixar o relatório visual direto da interface do GitHub para auditar os testes de cada execução.

---

## Como rodar o projeto localmente

### Pré-requisitos
Ter o Node.js e o Yarn instalados.

### 1. Instalar as dependências
Abra o terminal na pasta do projeto e execute:
```bash
yarn install
```

### 2. Rodar os testes no terminal
Para rodar os testes simples exibidos direto no terminal:
```bash
yarn test
```

### 3. Gerar o relatório HTML localmente
Para rodar os testes e criar o relatório interativo na pasta `mochawesome-report/`:
```bash
yarn test:report
```
Depois é só abrir o arquivo `mochawesome-report/index.html` em qualquer navegador.
