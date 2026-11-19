    /* Etapa 1: todos os dados, na ordem fixa do enunciado e do quiz. */
    const palavras = [
      {
        resposta: "CPU", nome: "CPU", linha: 9, coluna: 5, direcao: "V",
        pista: "Chip que busca, interpreta e executa as instruções dos programas.",
        explicacao: "A CPU (Unidade Central de Processamento) é o \"cérebro\" do computador: busca instruções na memória, decodifica e executa. É formada por UC, ULA e registradores.",
        pergunta: "Qual componente busca, decodifica e executa instruções, reunindo UC, ULA e registradores?",
        erradas: ["RAM", "DMA", "Memória de massa"]
      },
      {
        resposta: "ULA", nome: "ULA", linha: 0, coluna: 6, direcao: "V",
        pista: "Parte da CPU que faz as contas e as operações lógicas.",
        explicacao: "A ULA (Unidade Lógica e Aritmética) realiza as operações aritméticas (soma, subtração...) e lógicas (AND, OR, NOT) dentro da CPU.",
        pergunta: "Qual unidade da CPU executa somas, subtrações e operações AND/OR?",
        erradas: ["UC", "Registradores", "Cache"]
      },
      {
        resposta: "UC", nome: "UC", linha: 11, coluna: 12, direcao: "H",
        pista: "Parte da CPU que interpreta cada instrução e comanda os outros componentes.",
        explicacao: "A UC (Unidade de Controle) decodifica a instrução e envia sinais de controle que coordenam a ULA, os registradores, a memória e a entrada/saída.",
        pergunta: "Qual parte da CPU decodifica as instruções e envia sinais de controle às demais partes?",
        erradas: ["ULA", "Registradores", "Cache"]
      },
      {
        resposta: "REGISTRADORES", nome: "Registradores", linha: 4, coluna: 0, direcao: "H",
        pista: "Memórias minúsculas dentro da CPU, as mais rápidas, que guardam dados temporários.",
        explicacao: "Os registradores ficam dentro da CPU e são as memórias mais rápidas da hierarquia. Guardam temporariamente dados, instruções e endereços em uso.",
        pergunta: "Qual conjunto de pequenas memórias internas à CPU é o mais rápido da hierarquia?",
        erradas: ["Cache", "RAM", "Flash"]
      },
      {
        resposta: "RAM", nome: "RAM", linha: 11, coluna: 7, direcao: "H",
        pista: "Memória principal, de leitura e escrita, que perde o conteúdo sem energia.",
        explicacao: "A RAM é a memória principal: permite leitura e escrita, é volátil (perde tudo ao desligar) e guarda os programas e dados em execução.",
        pergunta: "Qual é a memória principal, volátil, que guarda programas e dados em execução?",
        erradas: ["ROM", "Flash", "Memória de massa"]
      },
      {
        resposta: "ROM", nome: "ROM", linha: 9, coluna: 15, direcao: "V",
        pista: "Memória gravada na fábrica, não volátil, que normalmente só pode ser lida.",
        explicacao: "A ROM (Read-Only Memory) tem o conteúdo gravado na fabricação e não o perde sem energia. Guarda código de inicialização (firmware).",
        pergunta: "Qual memória é gravada na fabricação, não volátil e usada apenas para leitura?",
        erradas: ["RAM", "EEPROM", "Flash"]
      },
      {
        resposta: "EEPROM", nome: "EEPROM", linha: 6, coluna: 9, direcao: "V",
        pista: "Memória não volátil que pode ser apagada e regravada por sinais elétricos, byte a byte.",
        explicacao: "A EEPROM é uma ROM apagável e regravável eletricamente, byte a byte, sem retirar o chip. É usada, por exemplo, para guardar configurações em microcontroladores.",
        pergunta: "Qual memória não volátil é apagada e regravada eletricamente, byte a byte?",
        erradas: ["ROM", "Flash", "RAM"]
      },
      {
        resposta: "FLASH", nome: "Flash", linha: 3, coluna: 14, direcao: "V",
        pista: "Memória não volátil apagada em blocos, usada em pen drives e SSDs.",
        explicacao: "A Flash é uma evolução da EEPROM: o apagamento é feito em blocos, o que a torna mais barata e densa. Está em pen drives, cartões de memória e SSDs.",
        pergunta: "Qual memória não volátil, apagada em blocos, é usada em pen drives e SSDs?",
        erradas: ["EEPROM", "ROM", "RAM"]
      },
      {
        resposta: "CACHE", nome: "Cache", linha: 7, coluna: 11, direcao: "H",
        pista: "Memória pequena e rápida entre CPU e RAM que guarda dados usados com frequência.",
        explicacao: "A cache guarda cópias das instruções e dados mais usados, reduzindo os acessos à RAM, que é mais lenta. Costuma ter níveis (L1, L2, L3).",
        pergunta: "Qual memória rápida fica entre a CPU e a RAM guardando cópias dos dados mais usados?",
        erradas: ["Registradores", "ROM", "Memória de massa"]
      },
      {
        resposta: "MEMORIADEMASSA", nome: "Memória de massa", linha: 0, coluna: 0, direcao: "V",
        pista: "Armazenamento permanente de grande capacidade, como HD e SSD, mais lento que a RAM.",
        explicacao: "A memória de massa (armazenamento) guarda arquivos e programas de forma permanente. Tem grande capacidade e baixo custo por GB, mas acesso mais lento (HD, SSD, pen drive).",
        pergunta: "Qual memória guarda arquivos de forma permanente, com grande capacidade e acesso mais lento?",
        erradas: ["RAM", "Cache", "ROM"]
      },
      {
        resposta: "DMA", nome: "DMA", linha: 2, coluna: 7, direcao: "V",
        pista: "Recurso que permite periféricos trocarem dados com a memória sem ocupar a CPU.",
        explicacao: "O DMA (Acesso Direto à Memória) permite que um controlador transfira blocos de dados entre periférico e memória sem que a CPU copie cada byte, deixando-a livre.",
        pergunta: "Qual recurso transfere dados entre periférico e memória sem que a CPU copie cada byte?",
        erradas: ["Cache", "Data bus", "UC"]
      },
      {
        resposta: "ADDRESSBUS", nome: "Address bus", linha: 13, coluna: 0, direcao: "H",
        pista: "Caminho de um só sentido que indica à memória qual posição será acessada.",
        explicacao: "O barramento de endereço é unidirecional (CPU para memória/E-S) e transporta o endereço da posição a acessar. Com n bits, endereça 2^n posições.",
        pergunta: "Qual barramento é unidirecional e leva, a partir da CPU, o endereço da posição a acessar?",
        erradas: ["Data bus", "DMA", "UC"]
      },
      {
        resposta: "DATABUS", nome: "Data bus", linha: 6, coluna: 12, direcao: "V",
        pista: "Caminho bidirecional por onde trafegam os valores lidos e escritos entre CPU e memória.",
        explicacao: "O barramento de dados é bidirecional e transporta os dados (e instruções) entre CPU, memória e E/S. Sua largura (8, 16, 32, 64 bits) define quantos bits trafegam por vez.",
        pergunta: "Qual barramento é bidirecional e transporta os dados lidos e escritos?",
        erradas: ["Address bus", "Registradores", "DMA"]
      },
      {
        resposta: "MICROCONTROLADOR", nome: "Microcontrolador", linha: 9, coluna: 0, direcao: "H",
        pista: "Chip único que reúne processador, memória e portas de entrada e saída.",
        explicacao: "O microcontrolador é um computador completo em um só chip (processador, memória e portas de E/S), usado em sistemas embarcados como Arduino e eletrodomésticos.",
        pergunta: "Qual chip reúne processador, memória e portas de E/S para sistemas embarcados?",
        erradas: ["CPU", "DMA", "Cache"]
      },
      {
        resposta: "DUALCORE", nome: "Dual core", linha: 6, coluna: 2, direcao: "H",
        pista: "Processador com dois núcleos independentes no mesmo chip.",
        explicacao: "Um processador dual core tem dois núcleos que executam instruções ao mesmo tempo. O ganho de desempenho depende de o software usar vários threads.",
        pergunta: "Qual termo designa um processador com exatamente dois núcleos no mesmo chip?",
        erradas: ["Quad core", "Microcontrolador", "CPU"]
      },
      {
        resposta: "QUADCORE", nome: "Quad core", linha: 2, coluna: 4, direcao: "H",
        pista: "Processador com quatro núcleos independentes no mesmo chip.",
        explicacao: "Um processador quad core tem quatro núcleos, podendo executar quatro fluxos de instruções em paralelo, desde que o software aproveite essa capacidade.",
        pergunta: "Qual termo designa um processador com exatamente quatro núcleos no mesmo chip?",
        erradas: ["Dual core", "Microcontrolador", "CPU"]
      }
    ];

    const TOTAL_LINHAS = 14;
    const TOTAL_COLUNAS = 16;
    const CHAVE_SALVAMENTO = "arqcomp-cruzadinha-v1";
    const casas = {};
    const elementosPistas = [];
    const ordemPalavras = [];
    let estadoCruzadinha;
    let estadoQuiz;
    let estadoMemoria;
    let abaAtiva = "cruzadinha";
    let temaAtual = "claro";
    let tecladoAberto = false;
    let intervaloRelogio = null;
    let inicioRelogio = 0;
    let segundosBase = 0;
    let intervaloMemoria = null;
    let inicioMemoria = 0;
    let segundosBaseMemoria = 0;
    let bloqueioMemoria = false;
    let temporizadorMemoria = null;
    let proximoTotalPares = 8;
    let alvoReinicio = "cruzadinha";
    let focoAntesDoModal = null;
    let salvamentoBloqueado = false;

    function chaveDaCasa(linha, coluna) {
      return linha + "-" + coluna;
    }

    function normalizarTexto(texto) {
      return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    }

    function normalizarLetra(tecla) {
      const letra = normalizarTexto(tecla);
      if (/^[A-Z]$/.test(letra)) return letra;
      return "";
    }

    function prepararDados() {
      for (let indice = 0; indice < palavras.length; indice++) {
        const palavra = palavras[indice];
        palavra.casas = [];
        ordemPalavras.push(indice);
        for (let posicao = 0; posicao < palavra.resposta.length; posicao++) {
          let linha = palavra.linha;
          let coluna = palavra.coluna;
          if (palavra.direcao === "H") coluna += posicao;
          else linha += posicao;
          if (linha < 0 || linha >= TOTAL_LINHAS || coluna < 0 || coluna >= TOTAL_COLUNAS) {
            throw new Error("Uma palavra ultrapassa os limites do tabuleiro.");
          }
          const chave = chaveDaCasa(linha, coluna);
          if (!casas[chave]) {
            casas[chave] = { linha: linha, coluna: coluna, letra: palavra.resposta[posicao], palavras: [], numero: null };
          }
          if (casas[chave].letra !== palavra.resposta[posicao]) {
            throw new Error("Há letras incompatíveis em um cruzamento.");
          }
          casas[chave].palavras.push(indice);
          palavra.casas.push(chave);
        }
      }
      let numero = 0;
      for (let linha = 0; linha < TOTAL_LINHAS; linha++) {
        for (let coluna = 0; coluna < TOTAL_COLUNAS; coluna++) {
          let inicioEncontrado = false;
          for (let indice = 0; indice < palavras.length; indice++) {
            if (palavras[indice].linha === linha && palavras[indice].coluna === coluna) {
              if (!inicioEncontrado) {
                numero++;
                inicioEncontrado = true;
              }
              palavras[indice].numero = numero;
              casas[chaveDaCasa(linha, coluna)].numero = numero;
            }
          }
        }
      }
      ordemPalavras.sort(function (primeiro, segundo) {
        const diferenca = palavras[primeiro].numero - palavras[segundo].numero;
        if (diferenca !== 0) return diferenca;
        if (palavras[primeiro].direcao === "H") return -1;
        return 1;
      });
    }

    function compartilhamPalavra(primeiraCasa, segundaCasa, direcao) {
      for (let indice = 0; indice < primeiraCasa.palavras.length; indice++) {
        const numeroPalavra = primeiraCasa.palavras[indice];
        if (palavras[numeroPalavra].direcao === direcao && segundaCasa.palavras.includes(numeroPalavra)) return true;
      }
      return false;
    }

    /* A validação também impede adjacências que criariam palavras não previstas. */
    function validarDados() {
      if (palavras.length !== 16) throw new Error("O jogo deve conter exatamente 16 palavras.");
      let quantidadeCasas = 0;
      let cruzamentos = 0;
      for (const chave in casas) {
        const casa = casas[chave];
        quantidadeCasas++;
        if (casa.palavras.length > 2) throw new Error("Uma casa pertence a mais de duas palavras.");
        if (casa.palavras.length === 2) {
          cruzamentos++;
          if (palavras[casa.palavras[0]].direcao === palavras[casa.palavras[1]].direcao) {
            throw new Error("Duas palavras do mesmo sentido se sobrepõem.");
          }
        }
        const direita = casas[chaveDaCasa(casa.linha, casa.coluna + 1)];
        const abaixo = casas[chaveDaCasa(casa.linha + 1, casa.coluna)];
        if (direita && !compartilhamPalavra(casa, direita, "H")) throw new Error("Adjacência horizontal indevida.");
        if (abaixo && !compartilhamPalavra(casa, abaixo, "V")) throw new Error("Adjacência vertical indevida.");
      }
      for (let indice = 0; indice < palavras.length; indice++) {
        const palavra = palavras[indice];
        if (!/^[A-Z]+$/.test(palavra.resposta)) throw new Error("As respostas precisam conter apenas A-Z.");
        if (palavra.direcao !== "H" && palavra.direcao !== "V") throw new Error("Sentido de palavra inválido.");
        if (palavra.pista.trim().split(/\s+/).length > 15) throw new Error("Uma pista ultrapassa 15 palavras.");
        const respostaNaPista = new RegExp("\\b" + normalizarTexto(palavra.nome) + "\\b");
        if (respostaNaPista.test(normalizarTexto(palavra.pista))) throw new Error("Uma pista contém sua resposta.");
        let temCruzamento = false;
        for (let posicao = 0; posicao < palavra.casas.length; posicao++) {
          if (casas[palavra.casas[posicao]].palavras.length === 2) temCruzamento = true;
        }
        if (!temCruzamento) throw new Error("Uma palavra não cruza com nenhuma outra.");
        if (palavra.erradas.length !== 3) throw new Error("Cada pergunta precisa de três alternativas incorretas.");
        const alternativas = [palavra.nome];
        for (let posicao = 0; posicao < palavra.erradas.length; posicao++) {
          if (alternativas.includes(palavra.erradas[posicao])) throw new Error("Há alternativas repetidas.");
          alternativas.push(palavra.erradas[posicao]);
        }
      }
      const visitadas = [0];
      for (let posicao = 0; posicao < visitadas.length; posicao++) {
        const palavra = palavras[visitadas[posicao]];
        for (let letra = 0; letra < palavra.casas.length; letra++) {
          const vizinhas = casas[palavra.casas[letra]].palavras;
          for (let vizinha = 0; vizinha < vizinhas.length; vizinha++) {
            if (!visitadas.includes(vizinhas[vizinha])) visitadas.push(vizinhas[vizinha]);
          }
        }
      }
      if (visitadas.length !== palavras.length) throw new Error("O tabuleiro não forma um único conjunto conectado.");
      if (quantidadeCasas !== 94 || cruzamentos !== 15) throw new Error("A grade difere das coordenadas fornecidas.");
      return { quantidadeCasas: quantidadeCasas, cruzamentos: cruzamentos, conectadas: visitadas.length };
    }

    function criarEstadoCruzadinha() {
      const estado = {
        letras: {}, marcas: {}, resultados: [], dicas: [], reveladas: [], explicacoes: [],
        segundos: 0, iniciada: false, terminada: false,
        palavraAtiva: ordemPalavras[0], casaAtual: palavras[ordemPalavras[0]].casas[0]
      };
      for (const chave in casas) {
        estado.letras[chave] = "";
        estado.marcas[chave] = null;
      }
      for (let indice = 0; indice < palavras.length; indice++) {
        estado.resultados.push(null);
        estado.dicas.push(false);
        estado.reveladas.push(false);
        estado.explicacoes.push(false);
      }
      return estado;
    }

    /* Etapa 2: criação das casas e das pistas clicáveis, sem inputs. */
    function montarTabuleiro() {
      const tabuleiro = document.getElementById("tabuleiro");
      for (let linha = 0; linha < TOTAL_LINHAS; linha++) {
        for (let coluna = 0; coluna < TOTAL_COLUNAS; coluna++) {
          const chave = chaveDaCasa(linha, coluna);
          const elemento = document.createElement("div");
          if (casas[chave]) {
            elemento.className = "casa";
            elemento.dataset.chave = chave;
            elemento.setAttribute("role", "gridcell");
            elemento.setAttribute("aria-rowindex", linha + 1);
            elemento.setAttribute("aria-colindex", coluna + 1);
            elemento.tabIndex = -1;
            if (casas[chave].numero !== null) {
              const numero = document.createElement("span");
              numero.className = "numero-casa";
              numero.textContent = casas[chave].numero;
              elemento.appendChild(numero);
            }
            const letra = document.createElement("span");
            letra.className = "letra-casa";
            letra.setAttribute("aria-hidden", "true");
            elemento.appendChild(letra);
            casas[chave].elemento = elemento;
            casas[chave].elementoLetra = letra;
            elemento.addEventListener("click", aoClicarCasa);
          } else {
            elemento.className = "espaco";
            elemento.setAttribute("aria-hidden", "true");
          }
          tabuleiro.appendChild(elemento);
        }
      }
    }

    function montarPistas() {
      for (let posicao = 0; posicao < ordemPalavras.length; posicao++) {
        const indice = ordemPalavras[posicao];
        const palavra = palavras[indice];
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "pista";
        botao.dataset.indice = indice;
        const numero = document.createElement("span");
        numero.className = "numero-pista";
        numero.textContent = palavra.numero;
        const texto = document.createElement("span");
        texto.textContent = palavra.pista;
        const resultado = document.createElement("span");
        resultado.className = "resultado-pista";
        resultado.setAttribute("aria-hidden", "true");
        botao.appendChild(numero);
        botao.appendChild(texto);
        botao.appendChild(resultado);
        botao.addEventListener("click", aoClicarPista);
        const destino = palavra.direcao === "H" ? "pistas-horizontais" : "pistas-verticais";
        document.getElementById(destino).appendChild(botao);
        elementosPistas[indice] = { botao: botao, resultado: resultado };
      }
    }

    function montarTeclado() {
      const linhas = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
      for (let indice = 0; indice < linhas.length; indice++) {
        const linha = document.createElement("div");
        linha.className = "linha-teclado";
        for (let posicao = 0; posicao < linhas[indice].length; posicao++) {
          const botao = document.createElement("button");
          botao.type = "button";
          botao.className = "tecla";
          botao.textContent = linhas[indice][posicao];
          botao.dataset.letra = linhas[indice][posicao];
          botao.addEventListener("click", function () { inserirLetra(this.dataset.letra); });
          linha.appendChild(botao);
        }
        document.getElementById("teclas-letras").appendChild(linha);
      }
      const setas = document.querySelectorAll("[data-seta]");
      for (let indice = 0; indice < setas.length; indice++) {
        setas[indice].addEventListener("click", function () { moverComSeta(this.dataset.seta); });
      }
    }

    function primeiraCasaVazia(indice, letras) {
      const posicoes = palavras[indice].casas;
      for (let posicao = 0; posicao < posicoes.length; posicao++) {
        if (!letras[posicoes[posicao]]) return posicoes[posicao];
      }
      return posicoes[0];
    }

    function focarCasaAtual() {
      const elemento = casas[estadoCruzadinha.casaAtual].elemento;
      elemento.focus({ preventScroll: true });
      const rolagem = document.getElementById("rolagem-tabuleiro");
      const limite = rolagem.getBoundingClientRect();
      const posicao = elemento.getBoundingClientRect();
      if (posicao.left < limite.left + 5) rolagem.scrollLeft -= limite.left - posicao.left + 9;
      else if (posicao.right > limite.right - 5) rolagem.scrollLeft += posicao.right - limite.right + 9;
    }

    function selecionarPalavra(indice) {
      estadoCruzadinha.palavraAtiva = indice;
      estadoCruzadinha.casaAtual = primeiraCasaVazia(indice, estadoCruzadinha.letras);
      atualizarCruzadinha();
      focarCasaAtual();
      salvarProgresso();
    }

    function aoClicarPista() { selecionarPalavra(Number(this.dataset.indice)); }

    function palavraNaCasa(chave, direcaoPreferida, indiceAtual) {
      const indices = casas[chave].palavras;
      for (let posicao = 0; posicao < indices.length; posicao++) {
        if (palavras[indices[posicao]].direcao === direcaoPreferida) return indices[posicao];
      }
      if (indices.includes(indiceAtual)) return indiceAtual;
      return indices[0];
    }

    function aoClicarCasa() {
      const chave = this.dataset.chave;
      const indices = casas[chave].palavras;
      if (chave === estadoCruzadinha.casaAtual && indices.length === 2) {
        if (indices[0] === estadoCruzadinha.palavraAtiva) estadoCruzadinha.palavraAtiva = indices[1];
        else estadoCruzadinha.palavraAtiva = indices[0];
      } else {
        const direcao = palavras[estadoCruzadinha.palavraAtiva].direcao;
        estadoCruzadinha.palavraAtiva = palavraNaCasa(chave, direcao, estadoCruzadinha.palavraAtiva);
      }
      estadoCruzadinha.casaAtual = chave;
      atualizarCruzadinha();
      focarCasaAtual();
      salvarProgresso();
    }

    function proximaCasaNoEixo(chave, direcao, passo) {
      let linha = casas[chave].linha;
      let coluna = casas[chave].coluna;
      while (true) {
        if (direcao === "H") coluna += passo;
        else linha += passo;
        if (linha < 0 || linha >= TOTAL_LINHAS || coluna < 0 || coluna >= TOTAL_COLUNAS) return chave;
        const proxima = chaveDaCasa(linha, coluna);
        if (casas[proxima]) return proxima;
      }
    }

    function moverComSeta(seta) {
      let direcao = "H";
      let passo = 1;
      if (seta === "cima" || seta === "baixo") direcao = "V";
      if (seta === "cima" || seta === "esquerda") passo = -1;
      const proxima = proximaCasaNoEixo(estadoCruzadinha.casaAtual, direcao, passo);
      estadoCruzadinha.palavraAtiva = palavraNaCasa(proxima, direcao, estadoCruzadinha.palavraAtiva);
      estadoCruzadinha.casaAtual = proxima;
      atualizarCruzadinha();
      focarCasaAtual();
      salvarProgresso();
    }

    function palavraSeguinte(indice, passo) {
      const posicao = ordemPalavras.indexOf(indice);
      const proxima = (posicao + passo + ordemPalavras.length) % ordemPalavras.length;
      return ordemPalavras[proxima];
    }

    /* Etapa 3: teclado e invalidação apenas das casas e palavras editadas. */
    function escreverNaCasa(estado, chave, letra) {
      estado.letras[chave] = letra;
      estado.marcas[chave] = null;
      const indices = casas[chave].palavras;
      for (let posicao = 0; posicao < indices.length; posicao++) estado.resultados[indices[posicao]] = null;
    }

    function avancarNaPalavra(estado) {
      const posicoes = palavras[estado.palavraAtiva].casas;
      const posicao = posicoes.indexOf(estado.casaAtual);
      if (posicao < posicoes.length - 1) estado.casaAtual = posicoes[posicao + 1];
    }

    function processarApagamento(estado) {
      const posicoes = palavras[estado.palavraAtiva].casas;
      const posicao = posicoes.indexOf(estado.casaAtual);
      if (!estado.letras[estado.casaAtual] && posicao > 0) estado.casaAtual = posicoes[posicao - 1];
      escreverNaCasa(estado, estado.casaAtual, "");
    }

    function inserirLetra(tecla) {
      const letra = normalizarLetra(tecla);
      if (!letra) return;
      iniciarCronometro();
      escreverNaCasa(estadoCruzadinha, estadoCruzadinha.casaAtual, letra);
      avancarNaPalavra(estadoCruzadinha);
      concluirEdicao();
    }

    function apagarLetra() {
      processarApagamento(estadoCruzadinha);
      concluirEdicao();
    }

    function concluirEdicao() {
      document.getElementById("mensagem-tabuleiro").textContent = "";
      verificarTermino();
      atualizarCruzadinha();
      focarCasaAtual();
      salvarProgresso();
    }

    function aoPressionarTecla(evento) {
      if (abaAtiva !== "cruzadinha" || document.getElementById("modal-reinicio").open) return;
      if (evento.ctrlKey || evento.metaKey || evento.altKey) return;
      if (!document.activeElement.classList.contains("casa")) return;
      const setas = { ArrowLeft: "esquerda", ArrowRight: "direita", ArrowUp: "cima", ArrowDown: "baixo" };
      if (setas[evento.key]) {
        evento.preventDefault();
        moverComSeta(setas[evento.key]);
      } else if (evento.key === "Backspace") {
        evento.preventDefault();
        apagarLetra();
      } else if (evento.key === "Tab") {
        evento.preventDefault();
        let passo = 1;
        if (evento.shiftKey) passo = -1;
        selecionarPalavra(palavraSeguinte(estadoCruzadinha.palavraAtiva, passo));
      } else {
        const letra = normalizarLetra(evento.key);
        if (letra) {
          evento.preventDefault();
          inserirLetra(letra);
        }
      }
    }

    function atualizarTabuleiro() {
      const ativas = palavras[estadoCruzadinha.palavraAtiva].casas;
      for (const chave in casas) {
        const casa = casas[chave];
        const elemento = casa.elemento;
        const atual = chave === estadoCruzadinha.casaAtual;
        elemento.classList.toggle("ativa", ativas.includes(chave));
        elemento.classList.toggle("atual", atual);
        elemento.classList.toggle("certa", estadoCruzadinha.marcas[chave] === "certa");
        elemento.classList.toggle("errada", estadoCruzadinha.marcas[chave] === "errada");
        elemento.setAttribute("aria-selected", atual ? "true" : "false");
        elemento.tabIndex = atual ? 0 : -1;
        casa.elementoLetra.textContent = estadoCruzadinha.letras[chave];
        let descricao = "Linha " + (casa.linha + 1) + ", coluna " + (casa.coluna + 1) + ": ";
        descricao += estadoCruzadinha.letras[chave] || "vazia";
        if (casa.numero !== null) descricao = "Casa " + casa.numero + ". " + descricao;
        elemento.setAttribute("aria-label", descricao);
      }
    }

    function atualizarPistas() {
      for (let indice = 0; indice < palavras.length; indice++) {
        const elemento = elementosPistas[indice];
        const resultado = estadoCruzadinha.resultados[indice];
        elemento.botao.classList.toggle("pista-ativa", indice === estadoCruzadinha.palavraAtiva);
        elemento.botao.classList.toggle("pista-certa", resultado === "certa");
        elemento.botao.classList.toggle("pista-errada", resultado === "errada");
        elemento.resultado.textContent = resultado === "certa" ? "✓" : resultado === "errada" ? "✗" : "";
        let descricao = palavras[indice].numero + ", " + (palavras[indice].direcao === "H" ? "horizontal" : "vertical") + ". " + palavras[indice].pista;
        if (resultado) descricao += resultado === "certa" ? " Correta." : " Incorreta ou incompleta.";
        if (estadoCruzadinha.reveladas[indice]) descricao += " Resposta revelada, zero ponto.";
        elemento.botao.setAttribute("aria-label", descricao);
      }
    }

    function atualizarPainel() {
      const indice = estadoCruzadinha.palavraAtiva;
      const palavra = palavras[indice];
      document.getElementById("identificador-pista").textContent = palavra.numero + " · " + (palavra.direcao === "H" ? "HORIZONTAL" : "VERTICAL");
      document.querySelector("#sentido-pista use").setAttribute("href", palavra.direcao === "H" ? "#icone-direita" : "#icone-baixo");
      document.getElementById("quantidade-letras").textContent = palavra.resposta.length + " letras";
      document.getElementById("pista-destaque").textContent = palavra.pista;
      document.getElementById("botao-dica").disabled = estadoCruzadinha.dicas[indice] || estadoCruzadinha.reveladas[indice];
      document.getElementById("texto-botao-dica").textContent = estadoCruzadinha.dicas[indice] ? "Dica usada" : "Dica";
      document.getElementById("botao-revelar").disabled = estadoCruzadinha.reveladas[indice];
      document.getElementById("texto-botao-revelar").textContent = estadoCruzadinha.reveladas[indice] ? "Revelada" : "Revelar resposta";
      const dica = document.getElementById("dica-usada");
      dica.hidden = !estadoCruzadinha.dicas[indice];
      dica.textContent = estadoCruzadinha.dicas[indice] ? "A resposta começa com " + palavra.resposta[0] + ". Esta palavra vale até 0,5 ponto." : "";
      const situacao = document.getElementById("situacao-palavra");
      situacao.hidden = !estadoCruzadinha.reveladas[indice];
      situacao.textContent = estadoCruzadinha.reveladas[indice] ? "Resposta revelada: conta como erro e vale 0 ponto." : "";
      const liberada = estadoCruzadinha.explicacoes[indice] || estadoCruzadinha.reveladas[indice];
      document.getElementById("aviso-explicacao").hidden = liberada;
      document.getElementById("explicacao").hidden = !liberada;
      document.getElementById("nome-termo").textContent = liberada ? palavra.nome : "";
      document.getElementById("texto-explicacao").textContent = liberada ? palavra.explicacao : "";
    }

    /* Etapa 4: conferência, dicas, respostas reveladas e pontuação ao vivo. */
    function palavraEstaCorreta(indice, letras) {
      const palavra = palavras[indice];
      for (let posicao = 0; posicao < palavra.casas.length; posicao++) {
        if (letras[palavra.casas[posicao]] !== palavra.resposta[posicao]) return false;
      }
      return true;
    }

    function calcularPontuacao(estado) {
      let pontos = 0;
      for (let indice = 0; indice < palavras.length; indice++) {
        if (!estado.reveladas[indice] && palavraEstaCorreta(indice, estado.letras)) {
          if (estado.dicas[indice]) pontos += 0.5;
          else pontos++;
        }
      }
      return pontos;
    }

    function todasPalavrasCorretas(estado) {
      for (let indice = 0; indice < palavras.length; indice++) {
        if (!palavraEstaCorreta(indice, estado.letras)) return false;
      }
      return true;
    }

    function formatarPontos(pontos) { return String(pontos).replace(".", ","); }

    function conferirRespostas(estado) {
      for (const chave in casas) {
        estado.marcas[chave] = null;
        if (estado.letras[chave]) estado.marcas[chave] = estado.letras[chave] === casas[chave].letra ? "certa" : "errada";
      }
      for (let indice = 0; indice < palavras.length; indice++) {
        estado.resultados[indice] = "errada";
        if (palavraEstaCorreta(indice, estado.letras) && !estado.reveladas[indice]) estado.resultados[indice] = "certa";
        estado.explicacoes[indice] = true;
      }
    }

    function conferir() {
      conferirRespostas(estadoCruzadinha);
      verificarTermino();
      atualizarCruzadinha();
      document.getElementById("mensagem-tabuleiro").textContent = "Conferência concluída. Consulte os sinais nas pistas e as explicações no painel.";
      anunciar("Conferência concluída. Pontuação: " + formatarPontos(calcularPontuacao(estadoCruzadinha)) + " de 16 palavras.");
      salvarProgresso();
    }

    function usarDica() {
      const indice = estadoCruzadinha.palavraAtiva;
      if (estadoCruzadinha.dicas[indice] || estadoCruzadinha.reveladas[indice]) return;
      estadoCruzadinha.dicas[indice] = true;
      atualizarCruzadinha();
      anunciar("A resposta começa com " + palavras[indice].resposta[0] + ". Esta palavra passa a valer 0,5 ponto.");
      salvarProgresso();
    }

    function preencherResposta(estado, indice) {
      const palavra = palavras[indice];
      for (let posicao = 0; posicao < palavra.casas.length; posicao++) escreverNaCasa(estado, palavra.casas[posicao], palavra.resposta[posicao]);
    }

    function revelarPalavra() {
      const indice = estadoCruzadinha.palavraAtiva;
      if (estadoCruzadinha.reveladas[indice]) return;
      preencherResposta(estadoCruzadinha, indice);
      estadoCruzadinha.reveladas[indice] = true;
      estadoCruzadinha.explicacoes[indice] = true;
      estadoCruzadinha.resultados[indice] = "errada";
      verificarTermino();
      atualizarCruzadinha();
      anunciar("Resposta revelada: " + palavras[indice].nome + ". Esta palavra vale zero ponto.");
      salvarProgresso();
    }

    function atualizarCruzadinha() {
      atualizarTabuleiro();
      atualizarPistas();
      atualizarPainel();
      const pontuacao = formatarPontos(calcularPontuacao(estadoCruzadinha)) + " de 16 palavras";
      document.getElementById("pontuacao").textContent = pontuacao;
      document.getElementById("tempo").textContent = formatarTempo(estadoCruzadinha.segundos);
      document.getElementById("vitoria").hidden = !estadoCruzadinha.terminada;
      document.getElementById("resumo-vitoria").textContent = "Você completou o tabuleiro em " + formatarTempo(estadoCruzadinha.segundos) + ". Pontuação: " + pontuacao + ".";
    }

    /* Etapa 5: o relógio usa o tempo real, sem acumular atrasos do intervalo. */
    function formatarTempo(segundos) {
      const horas = Math.floor(segundos / 3600);
      const minutos = Math.floor((segundos % 3600) / 60);
      const resto = segundos % 60;
      const parte = String(minutos).padStart(2, "0") + ":" + String(resto).padStart(2, "0");
      if (horas > 0) return String(horas).padStart(2, "0") + ":" + parte;
      return parte;
    }

    function atualizarSegundos() {
      if (intervaloRelogio !== null) estadoCruzadinha.segundos = segundosBase + Math.floor((Date.now() - inicioRelogio) / 1000);
    }

    function tiqueRelogio() {
      atualizarSegundos();
      document.getElementById("tempo").textContent = formatarTempo(estadoCruzadinha.segundos);
      salvarProgresso();
    }

    function retomarCronometro() {
      if (intervaloRelogio !== null || !estadoCruzadinha.iniciada || estadoCruzadinha.terminada) return;
      segundosBase = estadoCruzadinha.segundos;
      inicioRelogio = Date.now();
      intervaloRelogio = window.setInterval(tiqueRelogio, 1000);
    }

    function iniciarCronometro() {
      if (!estadoCruzadinha.iniciada) estadoCruzadinha.iniciada = true;
      retomarCronometro();
    }

    function pararCronometro() {
      atualizarSegundos();
      if (intervaloRelogio !== null) window.clearInterval(intervaloRelogio);
      intervaloRelogio = null;
      segundosBase = estadoCruzadinha.segundos;
    }

    function verificarTermino() {
      const completa = todasPalavrasCorretas(estadoCruzadinha);
      if (completa && !estadoCruzadinha.terminada) {
        pararCronometro();
        estadoCruzadinha.terminada = true;
        anunciar("Todas as palavras foram completadas! Tempo: " + formatarTempo(estadoCruzadinha.segundos) + ". Pontuação: " + formatarPontos(calcularPontuacao(estadoCruzadinha)) + " de 16.");
      } else if (!completa && estadoCruzadinha.terminada) {
        estadoCruzadinha.terminada = false;
        retomarCronometro();
      }
    }

    /* Etapa 6: quiz em ordem fixa; Fisher-Yates apenas nas alternativas. */
    function embaralhar(alternativas) {
      const copia = alternativas.slice();
      for (let indice = copia.length - 1; indice > 0; indice--) {
        const sorteado = Math.floor(Math.random() * (indice + 1));
        const temporaria = copia[indice];
        copia[indice] = copia[sorteado];
        copia[sorteado] = temporaria;
      }
      return copia;
    }

    function criarEstadoQuiz() {
      const estado = { indice: 0, alternativas: [], respostas: [], encerrado: false };
      for (let indice = 0; indice < palavras.length; indice++) {
        const alternativas = [palavras[indice].nome];
        for (let posicao = 0; posicao < palavras[indice].erradas.length; posicao++) alternativas.push(palavras[indice].erradas[posicao]);
        estado.alternativas.push(embaralhar(alternativas));
        estado.respostas.push(null);
      }
      return estado;
    }

    function calcularAcertosQuiz(estado) {
      let acertos = 0;
      for (let indice = 0; indice < palavras.length; indice++) {
        const resposta = estado.respostas[indice];
        if (resposta !== null && estado.alternativas[indice][resposta] === palavras[indice].nome) acertos++;
      }
      return acertos;
    }

    function responderQuiz(posicao) {
      const indice = estadoQuiz.indice;
      if (estadoQuiz.encerrado || estadoQuiz.respostas[indice] !== null) return;
      if (!Number.isInteger(posicao) || posicao < 0 || posicao > 3) return;
      estadoQuiz.respostas[indice] = posicao;
      atualizarQuiz();
      const correta = estadoQuiz.alternativas[indice][posicao] === palavras[indice].nome;
      anunciar((correta ? "Correto! " : "Incorreto. ") + palavras[indice].nome + ". " + palavras[indice].explicacao);
      document.getElementById("proxima-pergunta").focus({ preventScroll: true });
      salvarProgresso();
    }

    function avancarQuiz() {
      if (estadoQuiz.respostas[estadoQuiz.indice] === null || estadoQuiz.encerrado) return;
      if (estadoQuiz.indice === palavras.length - 1) estadoQuiz.encerrado = true;
      else estadoQuiz.indice++;
      atualizarQuiz();
      salvarProgresso();
      if (estadoQuiz.encerrado) {
        anunciar("Quiz concluído. Acertos: " + calcularAcertosQuiz(estadoQuiz) + " de 16.");
        document.getElementById("novo-quiz").focus({ preventScroll: true });
      } else document.getElementById("texto-pergunta").focus();
    }

    function atualizarQuiz() {
      const acertos = calcularAcertosQuiz(estadoQuiz);
      document.getElementById("placar-quiz").textContent = "Acertos: " + acertos + " de 16";
      document.getElementById("resultado-quiz").hidden = !estadoQuiz.encerrado;
      document.getElementById("pergunta-quiz").hidden = estadoQuiz.encerrado;
      const indice = estadoQuiz.indice;
      const respondida = estadoQuiz.respostas[indice] !== null;
      let feitas = indice;
      if (respondida) feitas++;
      document.getElementById("progresso-quiz").style.width = (feitas / palavras.length * 100) + "%";
      if (estadoQuiz.encerrado) {
        document.getElementById("total-quiz").textContent = acertos;
        document.getElementById("resumo-quiz").textContent = "Você acertou " + acertos + " de 16 perguntas. Cada tentativa ajuda a construir uma base mais sólida em Arquitetura Computacional.";
        return;
      }
      const palavra = palavras[indice];
      document.getElementById("numero-pergunta").textContent = "PERGUNTA " + String(indice + 1).padStart(2, "0") + " DE 16";
      document.getElementById("texto-pergunta").textContent = palavra.pergunta;
      const alternativas = document.getElementById("alternativas");
      alternativas.replaceChildren();
      for (let posicao = 0; posicao < 4; posicao++) {
        const texto = estadoQuiz.alternativas[indice][posicao];
        const correta = texto === palavra.nome;
        const escolhida = estadoQuiz.respostas[indice] === posicao;
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "alternativa";
        botao.disabled = respondida;
        botao.dataset.posicao = posicao;
        if (respondida && correta) botao.classList.add("certa");
        else if (respondida && escolhida) botao.classList.add("errada");
        const letra = document.createElement("span");
        letra.className = "letra-alternativa";
        letra.textContent = String.fromCharCode(65 + posicao);
        const nome = document.createElement("span");
        nome.className = "texto-alternativa";
        nome.textContent = texto;
        const marca = document.createElement("span");
        marca.className = "marca-alternativa";
        marca.setAttribute("aria-hidden", "true");
        if (respondida && correta) marca.textContent = "✓";
        else if (respondida && escolhida) marca.textContent = "✗";
        botao.appendChild(letra);
        botao.appendChild(nome);
        botao.appendChild(marca);
        botao.addEventListener("click", function () { responderQuiz(Number(this.dataset.posicao)); });
        alternativas.appendChild(botao);
      }
      const retorno = document.getElementById("retorno-quiz");
      retorno.hidden = !respondida;
      retorno.classList.remove("correto", "incorreto");
      if (respondida) {
        const correta = estadoQuiz.alternativas[indice][estadoQuiz.respostas[indice]] === palavra.nome;
        retorno.classList.add(correta ? "correto" : "incorreto");
        document.getElementById("titulo-retorno").textContent = correta ? "Correto!" : "Incorreto.";
        document.getElementById("termo-retorno").textContent = palavra.nome + ".";
        document.getElementById("explicacao-retorno").textContent = palavra.explicacao;
      } else {
        document.getElementById("titulo-retorno").textContent = "";
        document.getElementById("termo-retorno").textContent = "";
        document.getElementById("explicacao-retorno").textContent = "";
      }
      document.getElementById("texto-proxima").textContent = indice === palavras.length - 1 ? "Ver resultado" : "Próxima pergunta";
    }

    /* Etapa 6.5: jogo da memória (8 ou 16 pares) e alternância entre modo claro e escuro. */
    function obterTemaPadrao() {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "escuro";
      return "claro";
    }

    function aplicarTema(tema) {
      temaAtual = tema === "escuro" ? "escuro" : "claro";
      document.documentElement.setAttribute("data-tema", temaAtual);
      const escuro = temaAtual === "escuro";
      const icone = document.querySelector("#icone-tema use");
      if (icone) icone.setAttribute("href", escuro ? "#icone-sol" : "#icone-lua");
      const texto = document.getElementById("texto-tema");
      if (texto) texto.textContent = escuro ? "Modo claro" : "Modo escuro";
      const botao = document.getElementById("alternar-tema");
      if (botao) {
        botao.setAttribute("aria-pressed", escuro ? "true" : "false");
        botao.title = escuro ? "Mudar para o modo claro" : "Mudar para o modo escuro";
      }
      const corTema = document.querySelector('meta[name="theme-color"]');
      if (corTema) corTema.setAttribute("content", escuro ? "#101a2b" : "#172a4e");
    }

    function alternarTema() {
      aplicarTema(temaAtual === "escuro" ? "claro" : "escuro");
      anunciar(temaAtual === "escuro" ? "Modo escuro ativado." : "Modo claro ativado.");
      salvarProgresso();
    }

    function criarEstadoMemoria(quantidadePares) {
      const totalPares = quantidadePares === 16 ? 16 : 8;
      const todosIndices = [];
      for (let indice = 0; indice < palavras.length; indice++) todosIndices.push(indice);
      const escolhidos = totalPares === 16 ? todosIndices : embaralhar(todosIndices).slice(0, 8);
      const cartas = [];
      for (let posicao = 0; posicao < escolhidos.length; posicao++) {
        const indicePalavra = escolhidos[posicao];
        cartas.push({ indicePalavra: indicePalavra, tipo: "termo", encontrada: false });
        cartas.push({ indicePalavra: indicePalavra, tipo: "pista", encontrada: false });
      }
      return {
        totalPares: totalPares,
        cartas: embaralhar(cartas),
        abertas: [],
        tentativas: 0,
        segundos: 0,
        iniciada: false,
        terminada: false,
        ultimoPar: null
      };
    }

    function paresEncontradosMemoria(estado) {
      let encontrados = 0;
      for (let indice = 0; indice < estado.cartas.length; indice++) {
        if (estado.cartas[indice].encontrada) encontrados++;
      }
      return encontrados / 2;
    }

    function atualizarSegundosMemoria() {
      if (intervaloMemoria !== null) estadoMemoria.segundos = segundosBaseMemoria + Math.floor((Date.now() - inicioMemoria) / 1000);
    }

    function tiqueRelogioMemoria() {
      atualizarSegundosMemoria();
      document.getElementById("tempo-memoria").textContent = formatarTempo(estadoMemoria.segundos);
      salvarProgresso();
    }

    function retomarCronometroMemoria() {
      if (intervaloMemoria !== null || !estadoMemoria.iniciada || estadoMemoria.terminada) return;
      segundosBaseMemoria = estadoMemoria.segundos;
      inicioMemoria = Date.now();
      intervaloMemoria = window.setInterval(tiqueRelogioMemoria, 1000);
    }

    function iniciarCronometroMemoria() {
      if (!estadoMemoria.iniciada) estadoMemoria.iniciada = true;
      retomarCronometroMemoria();
    }

    function pararCronometroMemoria() {
      atualizarSegundosMemoria();
      if (intervaloMemoria !== null) window.clearInterval(intervaloMemoria);
      intervaloMemoria = null;
      segundosBaseMemoria = estadoMemoria.segundos;
    }

    function limparTemporizadorMemoria() {
      if (temporizadorMemoria !== null) {
        window.clearTimeout(temporizadorMemoria);
        temporizadorMemoria = null;
      }
      bloqueioMemoria = false;
    }

    function virarCartaMemoria(posicao) {
      if (bloqueioMemoria || estadoMemoria.terminada) return;
      if (!Number.isInteger(posicao) || posicao < 0 || posicao >= estadoMemoria.cartas.length) return;
      if (estadoMemoria.cartas[posicao].encontrada || estadoMemoria.abertas.includes(posicao)) return;
      if (estadoMemoria.abertas.length >= 2) return;
      iniciarCronometroMemoria();
      estadoMemoria.abertas.push(posicao);
      if (estadoMemoria.abertas.length < 2) {
        atualizarMemoria();
        salvarProgresso();
        return;
      }
      estadoMemoria.tentativas++;
      const primeira = estadoMemoria.cartas[estadoMemoria.abertas[0]];
      const segunda = estadoMemoria.cartas[estadoMemoria.abertas[1]];
      if (primeira.indicePalavra === segunda.indicePalavra) {
        primeira.encontrada = true;
        segunda.encontrada = true;
        estadoMemoria.ultimoPar = primeira.indicePalavra;
        estadoMemoria.abertas = [];
        const encontrados = paresEncontradosMemoria(estadoMemoria);
        if (encontrados === estadoMemoria.totalPares) {
          pararCronometroMemoria();
          estadoMemoria.terminada = true;
          anunciar("Jogo da memória concluído em " + estadoMemoria.tentativas + " tentativas e " + formatarTempo(estadoMemoria.segundos) + ".");
        } else {
          anunciar("Par encontrado: " + palavras[primeira.indicePalavra].nome + ".");
        }
        atualizarMemoria();
        salvarProgresso();
      } else {
        bloqueioMemoria = true;
        atualizarMemoria();
        anunciar("As cartas não formam um par.");
        temporizadorMemoria = window.setTimeout(function () {
          estadoMemoria.abertas = [];
          bloqueioMemoria = false;
          temporizadorMemoria = null;
          atualizarMemoria();
          salvarProgresso();
        }, 850);
      }
    }

    function trocarParesMemoria(quantidade) {
      if (estadoMemoria.totalPares === quantidade) return;
      proximoTotalPares = quantidade;
      if (estadoMemoria.iniciada && !estadoMemoria.terminada) {
        abrirReinicio("memoria");
        return;
      }
      limparTemporizadorMemoria();
      pararCronometroMemoria();
      estadoMemoria = criarEstadoMemoria(quantidade);
      segundosBaseMemoria = 0;
      inicioMemoria = 0;
      atualizarMemoria();
      salvarProgresso();
    }

    function atualizarMemoria() {
      const encontrados = paresEncontradosMemoria(estadoMemoria);
      document.getElementById("memoria-8-pares").classList.toggle("ativo", estadoMemoria.totalPares === 8);
      document.getElementById("memoria-16-pares").classList.toggle("ativo", estadoMemoria.totalPares === 16);
      document.getElementById("pares-memoria").textContent = encontrados + " de " + estadoMemoria.totalPares;
      document.getElementById("tentativas-memoria").textContent = String(estadoMemoria.tentativas);
      document.getElementById("tempo-memoria").textContent = formatarTempo(estadoMemoria.segundos);
      const grade = document.getElementById("grade-memoria");
      grade.replaceChildren();
      const erroAtivo = estadoMemoria.abertas.length === 2;
      for (let posicao = 0; posicao < estadoMemoria.cartas.length; posicao++) {
        const carta = estadoMemoria.cartas[posicao];
        const aberta = estadoMemoria.abertas.includes(posicao);
        const visivel = aberta || carta.encontrada;
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "carta-memoria " + (carta.tipo === "termo" ? "carta-termo" : "carta-pista");
        botao.dataset.posicao = posicao;
        if (carta.encontrada) botao.classList.add("encontrada");
        else if (aberta && erroAtivo) botao.classList.add("errada");
        else if (aberta) botao.classList.add("aberta");
        else botao.classList.add("fechada");
        botao.disabled = carta.encontrada;
        if (visivel) {
          const tipo = document.createElement("span");
          tipo.className = "tipo-carta";
          tipo.textContent = carta.tipo === "termo" ? "TERMO" : "CONCEITO";
          const conteudo = document.createElement("span");
          conteudo.className = "conteudo-carta";
          conteudo.textContent = carta.tipo === "termo" ? palavras[carta.indicePalavra].nome : palavras[carta.indicePalavra].pista;
          botao.appendChild(tipo);
          botao.appendChild(conteudo);
          botao.setAttribute("aria-label", "Carta " + (posicao + 1) + ": " + tipo.textContent + " - " + conteudo.textContent);
        } else {
          const verso = document.createElement("div");
          verso.className = "verso-carta";
          const icone = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          icone.setAttribute("aria-hidden", "true");
          const uso = document.createElementNS("http://www.w3.org/2000/svg", "use");
          uso.setAttribute("href", "#icone-marca");
          icone.appendChild(uso);
          const numero = document.createElement("span");
          numero.className = "numero-carta";
          numero.textContent = "CARTA " + String(posicao + 1).padStart(2, "0");
          verso.appendChild(icone);
          verso.appendChild(numero);
          botao.appendChild(verso);
          botao.setAttribute("aria-label", "Carta " + (posicao + 1) + " virada para baixo");
        }
        botao.addEventListener("click", function () { virarCartaMemoria(Number(this.dataset.posicao)); });
        grade.appendChild(botao);
      }
      if (estadoMemoria.ultimoPar !== null && palavras[estadoMemoria.ultimoPar]) {
        const palavra = palavras[estadoMemoria.ultimoPar];
        document.getElementById("rotulo-memoria").textContent = "ÚLTIMO PAR ENCONTRADO";
        document.getElementById("termo-memoria").textContent = palavra.nome;
        document.getElementById("explicacao-memoria").textContent = palavra.explicacao;
      } else {
        document.getElementById("rotulo-memoria").textContent = "COMO JOGAR";
        document.getElementById("termo-memoria").textContent = "Vire duas cartas para conectar um conceito à sua pista.";
        document.getElementById("explicacao-memoria").textContent = "Ao encontrar um par correto, a explicação completa do termo aparece aqui.";
      }
      document.getElementById("vitoria-memoria").hidden = !estadoMemoria.terminada;
      document.getElementById("resumo-vitoria-memoria").textContent = "Você encontrou os " + estadoMemoria.totalPares + " pares em " + estadoMemoria.tentativas + " tentativas e " + formatarTempo(estadoMemoria.segundos) + ".";
    }

    function validarEstadoMemoria(memoria) {
      if (!memoria || (memoria.totalPares !== 8 && memoria.totalPares !== 16)) return false;
      if (!Array.isArray(memoria.cartas) || memoria.cartas.length !== memoria.totalPares * 2) return false;
      if (!Array.isArray(memoria.abertas) || memoria.abertas.length > 2) return false;
      if (!Number.isSafeInteger(memoria.tentativas) || memoria.tentativas < 0) return false;
      if (!Number.isSafeInteger(memoria.segundos) || memoria.segundos < 0) return false;
      if (typeof memoria.iniciada !== "boolean" || typeof memoria.terminada !== "boolean") return false;
      if (memoria.ultimoPar !== null && (!Number.isInteger(memoria.ultimoPar) || !palavras[memoria.ultimoPar])) return false;
      for (let indice = 0; indice < memoria.cartas.length; indice++) {
        const carta = memoria.cartas[indice];
        if (!carta || !Number.isInteger(carta.indicePalavra) || !palavras[carta.indicePalavra]) return false;
        if (carta.tipo !== "termo" && carta.tipo !== "pista") return false;
        if (typeof carta.encontrada !== "boolean") return false;
      }
      return true;
    }

    /* Etapa 7: salvar e carregar sem apagar o progresso em falhas de armazenamento. */
    function validarEstadoSalvo(dados) {
      if (!dados || dados.versao !== 1 || !dados.cruzadinha || !dados.quiz) return false;
      const jogo = dados.cruzadinha;
      const quiz = dados.quiz;
      if (!jogo.letras || !jogo.marcas || !Number.isSafeInteger(jogo.segundos) || jogo.segundos < 0) return false;
      if (typeof jogo.iniciada !== "boolean" || typeof jogo.terminada !== "boolean") return false;
      if (!Number.isInteger(jogo.palavraAtiva) || !palavras[jogo.palavraAtiva]) return false;
      if (!casas[jogo.casaAtual] || !palavras[jogo.palavraAtiva].casas.includes(jogo.casaAtual)) return false;
      const listas = [jogo.resultados, jogo.dicas, jogo.reveladas, jogo.explicacoes];
      for (let indice = 0; indice < listas.length; indice++) {
        if (!Array.isArray(listas[indice]) || listas[indice].length !== palavras.length) return false;
      }
      for (const chave in casas) {
        if (typeof jogo.letras[chave] !== "string" || !/^[A-Z]?$/.test(jogo.letras[chave])) return false;
        if (jogo.marcas[chave] !== null && jogo.marcas[chave] !== "certa" && jogo.marcas[chave] !== "errada") return false;
      }
      for (let indice = 0; indice < palavras.length; indice++) {
        if (jogo.resultados[indice] !== null && jogo.resultados[indice] !== "certa" && jogo.resultados[indice] !== "errada") return false;
        if (typeof jogo.dicas[indice] !== "boolean" || typeof jogo.reveladas[indice] !== "boolean" || typeof jogo.explicacoes[indice] !== "boolean") return false;
      }
      if (jogo.terminada !== todasPalavrasCorretas(jogo)) return false;
      if (!Number.isInteger(quiz.indice) || quiz.indice < 0 || quiz.indice >= palavras.length || typeof quiz.encerrado !== "boolean") return false;
      if (!Array.isArray(quiz.respostas) || quiz.respostas.length !== palavras.length) return false;
      if (!Array.isArray(quiz.alternativas) || quiz.alternativas.length !== palavras.length) return false;
      for (let indice = 0; indice < palavras.length; indice++) {
        const alternativas = quiz.alternativas[indice];
        if (!Array.isArray(alternativas) || alternativas.length !== 4) return false;
        const permitidas = [palavras[indice].nome];
        for (let posicao = 0; posicao < 3; posicao++) permitidas.push(palavras[indice].erradas[posicao]);
        for (let posicao = 0; posicao < 4; posicao++) {
          if (!permitidas.includes(alternativas[posicao])) return false;
          if (alternativas.indexOf(alternativas[posicao]) !== posicao) return false;
        }
        const resposta = quiz.respostas[indice];
        if (resposta !== null && (!Number.isInteger(resposta) || resposta < 0 || resposta > 3)) return false;
        if (indice < quiz.indice && resposta === null) return false;
        if (indice > quiz.indice && resposta !== null) return false;
      }
      if (quiz.encerrado && (quiz.indice !== palavras.length - 1 || quiz.respostas[quiz.indice] === null)) return false;
      if (dados.abaAtiva !== "cruzadinha" && dados.abaAtiva !== "quiz" && dados.abaAtiva !== "memoria") return false;
      if (dados.tema !== undefined && dados.tema !== "claro" && dados.tema !== "escuro") return false;
      if (dados.memoria !== undefined && !validarEstadoMemoria(dados.memoria)) return false;
      return true;
    }

    function informarFalhaSalvamento(mensagem) {
      document.getElementById("status-salvamento").textContent = mensagem;
      const indicador = document.getElementById("indicador-salvamento");
      indicador.classList.add("falhou");
      indicador.title = mensagem;
      document.getElementById("aviso-armazenamento").textContent = mensagem;
      document.getElementById("aviso-armazenamento").hidden = false;
    }

    function salvarProgresso() {
      if (salvamentoBloqueado) return;
      const memoriaParaSalvar = {
        totalPares: estadoMemoria.totalPares,
        cartas: estadoMemoria.cartas,
        abertas: estadoMemoria.abertas.length === 2 ? [] : estadoMemoria.abertas,
        tentativas: estadoMemoria.tentativas,
        segundos: estadoMemoria.segundos,
        iniciada: estadoMemoria.iniciada,
        terminada: estadoMemoria.terminada,
        ultimoPar: estadoMemoria.ultimoPar
      };
      const dados = {
        versao: 1,
        cruzadinha: estadoCruzadinha,
        quiz: estadoQuiz,
        memoria: memoriaParaSalvar,
        abaAtiva: abaAtiva,
        tema: temaAtual,
        tecladoAberto: tecladoAberto
      };
      try {
        localStorage.setItem(CHAVE_SALVAMENTO, JSON.stringify(dados));
        document.getElementById("indicador-salvamento").classList.remove("falhou");
        document.getElementById("indicador-salvamento").title = "Seu progresso fica salvo neste navegador.";
        document.getElementById("status-salvamento").textContent = "Seu progresso fica salvo neste navegador";
        document.getElementById("aviso-armazenamento").hidden = true;
      } catch (erro) {
        informarFalhaSalvamento("Não foi possível salvar. O progresso fica apenas nesta página.");
      }
    }

    function carregarProgresso() {
      let salvo;
      try {
        salvo = localStorage.getItem(CHAVE_SALVAMENTO);
      } catch (erro) {
        informarFalhaSalvamento("Não foi possível ler o progresso salvo neste navegador.");
        return;
      }
      if (!salvo) return;
      try {
        const dados = JSON.parse(salvo);
        if (!validarEstadoSalvo(dados)) throw new Error("Estado incompatível.");
        estadoCruzadinha = dados.cruzadinha;
        estadoQuiz = dados.quiz;
        if (dados.memoria) {
          estadoMemoria = dados.memoria;
          proximoTotalPares = estadoMemoria.totalPares;
        }
        if (dados.tema) temaAtual = dados.tema;
        abaAtiva = dados.abaAtiva;
        tecladoAberto = dados.tecladoAberto === true;
      } catch (erro) {
        salvamentoBloqueado = true;
        informarFalhaSalvamento("Progresso incompatível. Reinicie para autorizar um novo salvamento.");
      }
    }

    function atualizarAbas() {
      const cruzadinha = abaAtiva === "cruzadinha";
      const quiz = abaAtiva === "quiz";
      const memoria = abaAtiva === "memoria";
      document.getElementById("aba-cruzadinha").setAttribute("aria-selected", cruzadinha ? "true" : "false");
      document.getElementById("aba-quiz").setAttribute("aria-selected", quiz ? "true" : "false");
      document.getElementById("aba-memoria").setAttribute("aria-selected", memoria ? "true" : "false");
      document.getElementById("secao-cruzadinha").hidden = !cruzadinha;
      document.getElementById("secao-quiz").hidden = !quiz;
      document.getElementById("secao-memoria").hidden = !memoria;
    }

    function trocarAba(aba) {
      abaAtiva = aba;
      atualizarAbas();
      salvarProgresso();
    }

    function atualizarTeclado() {
      document.getElementById("teclado").hidden = !tecladoAberto;
      document.getElementById("alternar-teclado").setAttribute("aria-expanded", tecladoAberto ? "true" : "false");
    }

    function abrirReinicio(alvo) {
      alvoReinicio = alvo;
      if (alvo === "memoria") proximoTotalPares = proximoTotalPares || estadoMemoria.totalPares;
      focoAntesDoModal = document.activeElement;
      if (alvo === "quiz") {
        document.getElementById("titulo-modal").textContent = "Recomeçar o quiz?";
        document.getElementById("descricao-modal").textContent = "As respostas e os acertos serão apagados, e as alternativas serão embaralhadas novamente. Os outros jogos serão mantidos.";
      } else if (alvo === "memoria") {
        document.getElementById("titulo-modal").textContent = "Recomeçar o jogo da memória?";
        document.getElementById("descricao-modal").textContent = "Os pares encontrados, as tentativas e o tempo serão apagados, e as cartas serão embaralhadas novamente. Os outros jogos serão mantidos.";
      } else {
        document.getElementById("titulo-modal").textContent = "Recomeçar a cruzadinha?";
        document.getElementById("descricao-modal").textContent = "As letras, as dicas, as respostas reveladas, a pontuação e o tempo serão apagados. Os outros jogos serão mantidos.";
      }
      document.getElementById("modal-reinicio").showModal();
      document.getElementById("cancelar-reinicio").focus();
    }

    function confirmarReinicio() {
      if (alvoReinicio === "quiz") {
        estadoQuiz = criarEstadoQuiz();
        atualizarQuiz();
      } else if (alvoReinicio === "memoria") {
        limparTemporizadorMemoria();
        pararCronometroMemoria();
        estadoMemoria = criarEstadoMemoria(proximoTotalPares);
        segundosBaseMemoria = 0;
        inicioMemoria = 0;
        atualizarMemoria();
      } else {
        pararCronometro();
        estadoCruzadinha = criarEstadoCruzadinha();
        segundosBase = 0;
        inicioRelogio = 0;
        document.getElementById("mensagem-tabuleiro").textContent = "";
        document.getElementById("rolagem-tabuleiro").scrollLeft = 0;
        atualizarCruzadinha();
      }
      salvamentoBloqueado = false;
      salvarProgresso();
      document.getElementById("modal-reinicio").close();
      anunciar(alvoReinicio === "quiz" ? "Quiz reiniciado." : alvoReinicio === "memoria" ? "Jogo da memória reiniciado." : "Cruzadinha reiniciada.");
    }

    function anunciar(mensagem) { document.getElementById("anuncio").textContent = mensagem; }

    function registrarEventos() {
      document.getElementById("aba-cruzadinha").addEventListener("click", function () { trocarAba("cruzadinha"); });
      document.getElementById("aba-quiz").addEventListener("click", function () { trocarAba("quiz"); });
      document.getElementById("aba-memoria").addEventListener("click", function () { trocarAba("memoria"); });
      document.getElementById("alternar-tema").addEventListener("click", alternarTema);
      document.getElementById("botao-conferir").addEventListener("click", conferir);
      document.getElementById("botao-dica").addEventListener("click", usarDica);
      document.getElementById("botao-revelar").addEventListener("click", revelarPalavra);
      document.getElementById("reiniciar-cruzadinha").addEventListener("click", function () { abrirReinicio("cruzadinha"); });
      document.getElementById("reiniciar-quiz").addEventListener("click", function () { abrirReinicio("quiz"); });
      document.getElementById("novo-quiz").addEventListener("click", function () { abrirReinicio("quiz"); });
      document.getElementById("reiniciar-memoria").addEventListener("click", function () {
        proximoTotalPares = estadoMemoria.totalPares;
        abrirReinicio("memoria");
      });
      document.getElementById("novo-memoria").addEventListener("click", function () {
        proximoTotalPares = estadoMemoria.totalPares;
        abrirReinicio("memoria");
      });
      document.getElementById("memoria-8-pares").addEventListener("click", function () { trocarParesMemoria(8); });
      document.getElementById("memoria-16-pares").addEventListener("click", function () { trocarParesMemoria(16); });
      document.getElementById("cancelar-reinicio").addEventListener("click", function () {
        proximoTotalPares = estadoMemoria.totalPares;
        document.getElementById("modal-reinicio").close();
      });
      document.getElementById("confirmar-reinicio").addEventListener("click", confirmarReinicio);
      document.getElementById("modal-reinicio").addEventListener("close", function () {
        if (focoAntesDoModal && focoAntesDoModal.isConnected && focoAntesDoModal.getClientRects().length > 0) {
          focoAntesDoModal.focus({ preventScroll: true });
        } else document.getElementById("reiniciar-" + alvoReinicio).focus({ preventScroll: true });
      });
      document.getElementById("modal-reinicio").addEventListener("click", function (evento) {
        if (evento.target !== this) return;
        const limite = this.getBoundingClientRect();
        if (evento.clientX < limite.left || evento.clientX > limite.right || evento.clientY < limite.top || evento.clientY > limite.bottom) this.close();
      });
      document.getElementById("alternar-teclado").addEventListener("click", function () {
        tecladoAberto = !tecladoAberto;
        atualizarTeclado();
        salvarProgresso();
      });
      document.getElementById("tecla-apagar").addEventListener("click", apagarLetra);
      document.getElementById("proxima-pergunta").addEventListener("click", avancarQuiz);
      document.addEventListener("keydown", aoPressionarTecla);
      window.addEventListener("pagehide", function () {
        pararCronometro();
        pararCronometroMemoria();
        salvarProgresso();
      });
      window.addEventListener("pageshow", function () {
        retomarCronometro();
        retomarCronometroMemoria();
      });
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          atualizarSegundos();
          atualizarSegundosMemoria();
          salvarProgresso();
        }
      });
    }

    /* Verificações locais: use ?testes=1. Não alteram a partida nem o localStorage. */
    function adicionarTeste(resultados, nome, passou) { resultados.push({ nome: nome, passou: Boolean(passou) }); }

    function executarVerificacoes() {
      const resultados = [];
      const grade = validarDados();
      adicionarTeste(resultados, "Grade original: 16 palavras, 94 casas, 15 cruzamentos e um conjunto conectado", grade.quantidadeCasas === 94 && grade.cruzamentos === 15 && grade.conectadas === 16);
      adicionarTeste(resultados, "Numeração de leitura: Memória de massa 1, ULA 2, Quad core 3 e Address bus 16", palavras[9].numero === 1 && palavras[1].numero === 2 && palavras[15].numero === 3 && palavras[11].numero === 16);
      adicionarTeste(resultados, "Normalização: ç, á, Ê e z resultam em C, A, E e Z", normalizarLetra("ç") === "C" && normalizarLetra("á") === "A" && normalizarLetra("Ê") === "E" && normalizarLetra("z") === "Z");
      adicionarTeste(resultados, "Números, espaços e teclas de função são ignorados", normalizarLetra("1") === "" && normalizarLetra(" ") === "" && normalizarLetra("Enter") === "");
      const jogo = criarEstadoCruzadinha();
      adicionarTeste(resultados, "Partida nova: vazia, sem pontos e sem cronômetro iniciado", calcularPontuacao(jogo) === 0 && !jogo.iniciada && !jogo.terminada && jogo.segundos === 0);
      conferirRespostas(jogo);
      adicionarTeste(resultados, "Conferir vazio: palavra errada, casa sem marca e explicação liberada", jogo.resultados[0] === "errada" && jogo.marcas["9-5"] === null && jogo.explicacoes[0]);
      escreverNaCasa(jogo, "9-5", "Z");
      conferirRespostas(jogo);
      adicionarTeste(resultados, "Conferir uma letra incorreta marca a casa em vermelho", jogo.marcas["9-5"] === "errada" && jogo.resultados[0] === "errada");
      escreverNaCasa(jogo, "9-5", "C");
      adicionarTeste(resultados, "Editar um cruzamento limpa sua marca e os dois resultados, mantendo a explicação", jogo.marcas["9-5"] === null && jogo.resultados[0] === null && jogo.resultados[13] === null && jogo.explicacoes[0]);
      conferirRespostas(jogo);
      adicionarTeste(resultados, "Conferir uma letra correta marca a casa em verde", jogo.marcas["9-5"] === "certa");
      for (let indice = 0; indice < palavras.length; indice++) preencherResposta(jogo, indice);
      adicionarTeste(resultados, "Tabuleiro completo sem ajuda vale 16 pontos", todasPalavrasCorretas(jogo) && calcularPontuacao(jogo) === 16);
      jogo.dicas[0] = true;
      adicionarTeste(resultados, "Uma dica reduz a pontuação correta para 15,5", calcularPontuacao(jogo) === 15.5 && formatarPontos(15.5) === "15,5");
      const parcial = criarEstadoCruzadinha();
      for (let indice = 0; indice < 8; indice++) preencherResposta(parcial, indice);
      parcial.dicas[0] = true;
      adicionarTeste(resultados, "Oito palavras corretas, uma com dica, resultam em 7,5", calcularPontuacao(parcial) === 7.5 && formatarPontos(calcularPontuacao(parcial)) === "7,5");
      jogo.reveladas[1] = true;
      conferirRespostas(jogo);
      adicionarTeste(resultados, "Revelada tem letras corretas, resultado errado e vale zero", palavraEstaCorreta(1, jogo.letras) && jogo.resultados[1] === "errada" && calcularPontuacao(jogo) === 14.5);
      for (let indice = 0; indice < palavras.length; indice++) jogo.reveladas[indice] = true;
      adicionarTeste(resultados, "Todas reveladas completam o tabuleiro com zero ponto", todasPalavrasCorretas(jogo) && calcularPontuacao(jogo) === 0);
      const navegacao = criarEstadoCruzadinha();
      escreverNaCasa(navegacao, "0-0", "M");
      avancarNaPalavra(navegacao);
      adicionarTeste(resultados, "Digitação avança na mesma palavra", navegacao.casaAtual === "1-0");
      processarApagamento(navegacao);
      adicionarTeste(resultados, "Backspace na casa vazia volta e apaga a anterior", navegacao.casaAtual === "0-0" && navegacao.letras["0-0"] === "");
      escreverNaCasa(navegacao, "0-0", "M");
      processarApagamento(navegacao);
      adicionarTeste(resultados, "Backspace na casa preenchida apaga sem voltar", navegacao.casaAtual === "0-0" && navegacao.letras["0-0"] === "");
      adicionarTeste(resultados, "Setas encontram casas existentes mesmo depois de espaços", proximaCasaNoEixo("0-0", "H", 1) === "0-6" && proximaCasaNoEixo("0-6", "H", -1) === "0-0");
      adicionarTeste(resultados, "No cruzamento, o eixo horizontal escolhe Cache e o vertical escolhe Data bus", palavraNaCasa("7-12", "H", 12) === 8 && palavraNaCasa("7-12", "V", 8) === 12);
      adicionarTeste(resultados, "Tab e Shift+Tab percorrem a numeração com retorno às extremidades", palavraSeguinte(9, 1) === 1 && palavraSeguinte(9, -1) === 11 && palavraSeguinte(11, 1) === 9);
      escreverNaCasa(navegacao, "0-0", "M");
      adicionarTeste(resultados, "Clique na pista escolhe a primeira vazia ou a primeira casa quando completa", primeiraCasaVazia(9, navegacao.letras) === "1-0" && primeiraCasaVazia(9, jogo.letras) === "0-0");
      adicionarTeste(resultados, "Tempo formatado em minutos e, quando necessário, horas", formatarTempo(75) === "01:15" && formatarTempo(3601) === "01:00:01");
      const quiz = criarEstadoQuiz();
      let alternativasValidas = true;
      for (let indice = 0; indice < palavras.length; indice++) {
        const alternativas = quiz.alternativas[indice];
        if (alternativas.length !== 4 || !alternativas.includes(palavras[indice].nome)) alternativasValidas = false;
        for (let posicao = 0; posicao < 3; posicao++) {
          if (!alternativas.includes(palavras[indice].erradas[posicao])) alternativasValidas = false;
        }
        quiz.respostas[indice] = alternativas.indexOf(palavras[indice].nome);
      }
      adicionarTeste(resultados, "Fisher-Yates preserva as quatro alternativas de cada uma das 16 perguntas", alternativasValidas);
      adicionarTeste(resultados, "Quiz com todas as respostas corretas totaliza 16 acertos", calcularAcertosQuiz(quiz) === 16);
      const original = ["A", "B", "C", "D"];
      const sorteio = embaralhar(original);
      adicionarTeste(resultados, "O embaralhamento não modifica a lista original", original.join("") === "ABCD" && sorteio !== original);
      const memoria8 = criarEstadoMemoria(8);
      const memoria16 = criarEstadoMemoria(16);
      adicionarTeste(resultados, "Jogo da memória cria 16 cartas (8 pares) ou 32 cartas (16 pares) válidas", memoria8.cartas.length === 16 && memoria16.cartas.length === 32 && validarEstadoMemoria(memoria8) && validarEstadoMemoria(memoria16));
      const copia = JSON.parse(JSON.stringify({ versao: 1, cruzadinha: criarEstadoCruzadinha(), quiz: criarEstadoQuiz(), memoria: memoria8, tema: "escuro", abaAtiva: "cruzadinha", tecladoAberto: false }));
      adicionarTeste(resultados, "O estado novo pode ser serializado e restaurado sem perder a ordem das alternativas", validarEstadoSalvo(copia) && JSON.stringify(JSON.parse(JSON.stringify(copia)).quiz.alternativas) === JSON.stringify(copia.quiz.alternativas));
      copia.quiz.alternativas[0][1] = copia.quiz.alternativas[0][0];
      adicionarTeste(resultados, "Dados salvos com alternativas duplicadas são recusados", !validarEstadoSalvo(copia));
      let aprovados = 0;
      const lista = document.getElementById("lista-verificacoes");
      for (let indice = 0; indice < resultados.length; indice++) {
        const item = document.createElement("li");
        item.className = resultados[indice].passou ? "passou" : "falhou";
        item.textContent = (resultados[indice].passou ? "✓ " : "✗ ") + resultados[indice].nome;
        lista.appendChild(item);
        if (resultados[indice].passou) aprovados++;
      }
      document.getElementById("resumo-verificacoes").textContent = aprovados + " de " + resultados.length + " verificações passaram neste navegador. Nenhum progresso foi alterado.";
      document.getElementById("verificacoes").hidden = false;
    }

    function inicializar() {
      try {
        prepararDados();
        validarDados();
        temaAtual = obterTemaPadrao();
        estadoCruzadinha = criarEstadoCruzadinha();
        estadoQuiz = criarEstadoQuiz();
        estadoMemoria = criarEstadoMemoria(8);
        carregarProgresso();
        aplicarTema(temaAtual);
        montarTabuleiro();
        montarPistas();
        montarTeclado();
        atualizarCruzadinha();
        atualizarQuiz();
        atualizarMemoria();
        atualizarAbas();
        atualizarTeclado();
        registrarEventos();
        retomarCronometro();
        retomarCronometroMemoria();
        salvarProgresso();
        if (new URLSearchParams(window.location.search).get("testes") === "1") executarVerificacoes();
      } catch (erro) {
        const aviso = document.getElementById("erro-inicializacao");
        aviso.textContent = "Não foi possível preparar o jogo. " + erro.message;
        aviso.hidden = false;
        document.getElementById("secao-cruzadinha").hidden = true;
        document.getElementById("secao-quiz").hidden = true;
        document.getElementById("secao-memoria").hidden = true;
      }
    }

    inicializar();
