
# SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior

Este projeto é um mini-projeto avaliativo desenvolvido para o módulo de **Fundamentos da Programação com JavaScript** do SENAI (SCTEC). O sistema consiste em um motor de triagem assíncrono que automatiza o cruzamento de dados entre o perfil técnico de uma pessoa candidata e os requisitos de vagas de tecnologia fictícias.

## 🚀 Como Executar o Projeto

O sistema foi construído em JavaScript puro e roda diretamente no ambiente do terminal utilizando o Node.js.

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
2. Abra o terminal na pasta raiz do projeto.
3. Execute o comando abaixo para iniciar a aplicação:
   ```bash
   node skillmatch.js
   ```

---

## 📊 Regra de Cálculo de Compatibilidade (RF03)

O percentual de aderência do candidato para cada vaga é calculado de forma consistente através da seguinte fórmula matemática:

$$\text{Percentual} = \left( \frac{\text{Total de Requisitos da Vaga} - \text{Habilidades Faltantes}}{\text{Total de Requisitos da Vaga}} \right) \times 100$$

* O sistema varre a lista de competências obrigatórias da vaga e verifica quais delas o candidato não possui.
* O resultado é arredondado para o número inteiro mais próximo usando a função `Math.round()`, garantindo uma classificação justa com base nas faixas de 0% a 100% estipuladas no regulamento.

---

## 💡 Fundamentos Teóricos Obrigatórios

### 1. Declaração de Variáveis: `var`, `let` e `const`
No desenvolvimento deste projeto, priorizou-se o uso de `let` e `const` em conformidade com as boas práticas do ECMAScript 6 (ES6):
* **`const`**: Utilizada para declarar variáveis cujo valor ou referência de objeto não deve ser alterado ao longo da execução (ex: instâncias de classes e definições de vagas).
* **`let`**: Utilizada para variáveis que precisam ser reatribuídas dentro do seu contexto de execução (ex: variáveis de controle do laço `for` e acumuladores de classificação).
* **`var` (Por que foi evitada?)**: O uso de `var` foi descontinuado em projetos modernos porque ela possui escopo de função (ou global) e sofre *hoisting* (elevação). Isso significa que uma variável `var` pode ser acessada antes de sua declaração ou vazar de dentro de blocos como `if` e `for`, gerando bugs ocultos no código. O `let` e o `const` corrigem isso aplicando o escopo de bloco.

### 2. Como a Internet Funciona (Breve Explicação)
A internet funciona como uma infraestrutura global descentralizada baseada no protocolo TCP/IP. Quando acessamos um serviço, os dados são divididos em pequenos pacotes e roteados por redes físicas (cabos e satélites) até o destino, garantindo que as informações cheguem de forma íntegra e ordenada.

### 3. Arquitetura Cliente-Servidor e Simulação Assíncrona
O modelo Cliente-Servidor divide as tarefas entre os fornecedores de recursos (Servidores) e os requerentes de serviços (Clientes):
* No ecossistema web real, o navegador (Cliente) faz requisições HTTP para uma API (Servidor) solicitando dados.
* Como essa comunicação depende da rede e não acontece instantaneamente, o JavaScript utiliza o conceito de **Assincronismo**.
* Neste projeto, o comportamento foi demonstrado no método `buscarVagasDoServidor()`, que utiliza uma **`Promise`** encapsulada com um atraso de tempo (`setTimeout`) para simular o tempo de resposta de uma rede. A leitura e execução fluida desses dados foi gerenciada de forma elegante através das palavras-chave **`async`** e **`await`**.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **Linguagem Principal:** JavaScript Puro (ES6+)
* **Ambiente de Execução:** Node.js v20+
* **Editor de Código:** Visual Studio Code (VS Code)
* **Extensões Recomendadas no VS Code:**
  * *Prettier - Code formatter* (Padronização e formatação visual do código).
  * *JavaScript (ES6) code snippets* (Agilidade na escrita de estruturas modernas).
* **Versionamento:** Git & GitHub (Fluxo de trabalho estruturado em branches de desenvolvimento).
* **Gestão de Tarefas:** Quadro Kanban (Organizado nas colunas: Backlog, A Fazer, Em Andamento e Concluído).
* 
