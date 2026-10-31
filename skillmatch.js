/**
 * SkillMatch JS - Simulador de Compatibilidade com Vagas Front-End Júnior
 * Autora: Luiza Piculo Martins
 *
 * Execução: node skillmatch.js
 */

// ============================================================
// 1. CLASSES, CONSTRUTORES E HERANÇA
// ============================================================

class Vaga {
  constructor(titulo, empresa, habilidades, descricao) {
    this.titulo = titulo;
    this.empresa = empresa;
    this.habilidades = habilidades;
    this.descricao = descricao;
  }
}

class VagaTecnologia extends Vaga {
  constructor(titulo, empresa, habilidades, descricao, nivel) {
    super(titulo, empresa, habilidades, descricao);
    this.nivel = nivel;
  }
}

// ============================================================
// 2. PERFIL DO CANDIDATO E VAGAS
// ============================================================

const candidato = {
  nome: "Candidato(a) de exemplo",
  habilidades: [
    "HTML",
    "CSS",
    "JavaScript",
    "Git"
  ]
};

const vagas = [
  new VagaTecnologia(
    "Desenvolvedor(a) Front-End Júnior",
    "Tech Solutions",
    ["HTML", "CSS", "JavaScript", "Git", "React"],
    "Desenvolvimento de interfaces para aplicações web.",
    "Júnior"
  ),
  new VagaTecnologia(
    "Pessoa Desenvolvedora Web Júnior",
    "Inova Digital",
    ["HTML", "CSS", "JavaScript", "Git", "APIs REST"],
    "Criação e manutenção de páginas e integrações web.",
    "Júnior"
  ),
  new VagaTecnologia(
    "Estágio em Desenvolvimento Front-End",
    "CodeLab",
    ["HTML", "CSS", "JavaScript"],
    "Apoio ao time no desenvolvimento de interfaces.",
    "Estágio"
  ),
  new VagaTecnologia(
    "Desenvolvedor(a) de Interfaces Júnior",
    "WebMais",
    ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    "Implementação de componentes e interfaces responsivas.",
    "Júnior"
  )
];

// ============================================================
// 3. CLASSIFICAÇÃO E CÁLCULO DE COMPATIBILIDADE
// ============================================================

function classificarPercentual(percentual) {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Compatibilidade média";
  } else {
    return "Baixa compatibilidade";
  }
}

function analisarVaga(perfil, vaga) {
  const habilidadesEncontradas = vaga.habilidades.filter((habilidade) =>
    perfil.habilidades.includes(habilidade)
  );

  const habilidadesFaltantes = vaga.habilidades.filter((habilidade) =>
    !perfil.habilidades.includes(habilidade)
  );

  const percentual = Math.round(
    (habilidadesEncontradas.length / vaga.habilidades.length) * 100
  );

  return {
    vaga,
    habilidadesEncontradas,
    habilidadesFaltantes,
    percentual,
    classificacao: classificarPercentual(percentual),
    prioridadeEstudo: habilidadesFaltantes[0] || "Nenhuma: todos os requisitos foram atendidos"
  };
}

// ============================================================
// 4. CALLBACK
// ============================================================

function emitirLogSucesso(mensagem) {
  console.log(`\n[SUCESSO] ${mensagem}`);
}

function executarComCallback(callback, mensagem) {
  callback(mensagem);
}

// ============================================================
// 5. CLOSURE: GUARDA A MELHOR PONTUAÇÃO ENCONTRADA
// ============================================================

function criarGerenciadorVagas() {
  let melhorResultado = null;

  return {
    atualizar(resultado) {
      if (
        melhorResultado === null ||
        resultado.percentual > melhorResultado.percentual
      ) {
        melhorResultado = resultado;
      }
    },

    obterMelhorResultado() {
      return melhorResultado;
    }
  };
}

// ============================================================
// 6. SIMULAÇÃO ASSÍNCRONA DE CARREGAMENTO DO SERVIDOR
// ============================================================

function simularCarregamentoServidor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 800);
  });
}

// ============================================================
// 7. EXIBIÇÃO DOS RELATÓRIOS
// ============================================================

function exibirResultado(resultado, indice) {
  const { vaga, habilidadesEncontradas, habilidadesFaltantes,
    percentual, classificacao, prioridadeEstudo } = resultado;

  console.log(`\n${"-".repeat(65)}`);
  console.log(`VAGA ${indice + 1}: ${vaga.titulo}`);
  console.log(`Empresa: ${vaga.empresa}`);
  console.log(`Nível: ${vaga.nivel}`);
  console.log(`Descrição: ${vaga.descricao}`);
  console.log(`Compatibilidade: ${percentual}%`);
  console.log(`Classificação: ${classificacao}`);
  console.log(
    `Habilidades compatíveis: ${
      habilidadesEncontradas.length
        ? habilidadesEncontradas.join(", ")
        : "Nenhuma"
    }`
  );
  console.log(
    `Habilidades faltantes: ${
      habilidadesFaltantes.length
        ? habilidadesFaltantes.join(", ")
        : "Nenhuma"
    }`
  );
  console.log(`Prioridade de estudo: ${prioridadeEstudo}`);
}

// ============================================================
// 8. FUNÇÃO PRINCIPAL
// ============================================================

async function iniciarSkillMatch() {
  console.log("============================================================");
  console.log("       SKILLMATCH JS - SIMULADOR DE COMPATIBILIDADE");
  console.log("============================================================");
  console.log(`Perfil analisado: ${candidato.nome}`);
  console.log(`Habilidades: ${candidato.habilidades.join(", ")}`);
  console.log("\nConectando ao servidor para carregar as vagas...");

  try {
    // O cliente aguarda a resposta assíncrona simulada do servidor.
    const vagasCarregadas = await simularCarregamentoServidor();

    executarComCallback(
      emitirLogSucesso,
      `${vagasCarregadas.length} vagas carregadas para análise.`
    );

    const gerenciador = criarGerenciadorVagas();
    const resultados = [];

    // for...of percorre todas as vagas recebidas.
    for (const [indice, vaga] of vagasCarregadas.entries()) {
      const resultado = analisarVaga(candidato, vaga);
      resultados.push(resultado);
      gerenciador.atualizar(resultado);
      exibirResultado(resultado, indice);
    }

    // map cria uma lista de resultados resumidos; sort ordena do maior para o menor.
    const ranking = resultados
      .map((resultado) => ({
        titulo: resultado.vaga.titulo,
        empresa: resultado.vaga.empresa,
        percentual: resultado.percentual
      }))
      .sort((a, b) => b.percentual - a.percentual);

    console.log(`\n${"=".repeat(65)}`);
    console.log("RANKING GERAL DE COMPATIBILIDADE");
    console.log("=".repeat(65));

    ranking.forEach((item, indice) => {
      console.log(
        `${indice + 1}º - ${item.titulo} (${item.empresa}): ${item.percentual}%`
      );
    });

    const melhorResultado = gerenciador.obterMelhorResultado();

    if (melhorResultado) {
      console.log(`\n${"=".repeat(65)}`);
      console.log("MELHOR OPORTUNIDADE IDENTIFICADA");
      console.log("=".repeat(65));
      console.log(
        `${melhorResultado.vaga.titulo} - ${melhorResultado.vaga.empresa}`
      );
      console.log(`Compatibilidade: ${melhorResultado.percentual}%`);
      console.log(
        melhorResultado.habilidadesFaltantes.length === 0
          ? "Destaque: o perfil atende a todas as habilidades exigidas."
          : `Próximo passo: estudar ${melhorResultado.prioridadeEstudo}.`
      );
    }

    console.log("\nAnálise concluída.");
  } catch (erro) {
    console.error("\nNão foi possível concluir a análise:", erro.message);
  }
}

iniciarSkillMatch();
