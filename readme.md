# Quiz Arq. Comp.

Jogo de Arquitetura Computacional com três modalidades: uma cruzadinha conectada com 16 palavras, um quiz de 16 perguntas e um jogo da memória de termos e conceitos. Interface em português do Brasil, com opção de modo claro ou escuro e progresso salvo no navegador.

**Publicação:** https://SEU-USUARIO.github.io/arqcomp-cruzadinha/

## Arquivos E Execução

```text
index.html   # Estrutura da página; carrega style.css e script.js
style.css    # Paleta, layout, responsividade e modo escuro
script.js    # Dados das 16 palavras, cruzadinha, quiz e salvamento
README.md    # Regras, pistas, fontes, verificações e publicação
```

Abra `index.html` em um navegador atual, ou publique os quatro arquivos na raiz do GitHub Pages. Os três arquivos precisam estar juntos, pois `index.html` referencia `style.css` e `script.js`. Não é necessário instalar programas, usar npm ou fazer build. Para compactar, selecione os arquivos e use a opção de criar arquivo ZIP do seu sistema.

### Diferenças Em Relação À Especificação

O projeto usa a estrutura pedida (`index.html`, `style.css`, `script.js` e `README.md`), com estilos e JavaScript puros em arquivos separados e sem classes do Tailwind.

## Como Jogar A Cruzadinha

1. Clique em uma casa ou em uma pista. A palavra selecionada fica turquesa; a casa atual fica azul-marinho com contorno rosa.
2. Digite diretamente nas casas. As letras são convertidas para maiúsculas e os acentos são removidos com `normalize("NFD")`. Não use espaços.
3. Uma letra digitada avança uma casa na mesma palavra. No final da palavra, o cursor permanece na última casa.
4. As setas encontram a próxima casa existente no eixo indicado, pulando espaços vazios, e selecionam o sentido correspondente quando disponível.
5. `Backspace` apaga a letra atual. Se a casa estiver vazia, volta uma casa da palavra e apaga a anterior.
6. `Tab` e `Shift+Tab`, com foco no tabuleiro, percorrem as palavras na ordem numérica. Nas extremidades, a navegação retorna ao outro extremo.
7. Clicar novamente na mesma casa de cruzamento alterna o sentido. Clicar em uma pista leva à primeira casa vazia dela; se estiver completa, leva à primeira casa.
8. Use **Conferir** para marcar casas preenchidas em verde ou vermelho e mostrar ✓ ou ✗ nas pistas. Casas vazias não recebem marca. Palavras incompletas contam como erradas.
9. Depois de conferir, clique em qualquer pista para consultar o termo e sua explicação, mesmo se a resposta estiver errada. Antes de conferir ou revelar, esses textos não são mostrados no painel.
10. Em telas pequenas, deslize apenas a área do tabuleiro horizontalmente. **Teclado na tela** abre um teclado próprio opcional. As casas são `div`, sem `input` e sem `contenteditable`, para não solicitar o teclado do sistema.

### Pontuação E Ajudas

- Palavra correta sem dica: **1 ponto**.
- Palavra correta com **Dica**: **0,5 ponto**. A dica mostra somente a primeira letra e só pode ser usada uma vez naquela palavra.
- Palavra errada, incompleta ou com **Revelar resposta**: **0 ponto**.
- Revelar preenche a palavra inteira e libera a explicação. A penalidade permanece até reiniciar, mesmo após editar suas letras.
- A pontuação aparece em tempo real, por exemplo, `7,5 de 16 palavras`.
- Editar uma casa remove a marca daquela casa e os resultados de todas as palavras que passam por ela. Não remove a penalidade de uma ajuda já utilizada.
- O cronômetro começa na primeira letra digitada, não em um clique, dica, conferência ou revelação.
- Quando todas as letras estiverem corretas, inclusive nas palavras reveladas, o cronômetro para e aparece a mensagem com tempo e pontuação.

### Reiniciar E Salvar

**Reiniciar** abre um modal próprio, com **Cancelar** e **Reiniciar**. Confirmar na cruzadinha limpa letras, marcas, resultados, dicas, revelações, explicações liberadas, tempo e vitória, mantendo o quiz. Confirmar no quiz mantém a cruzadinha.

Letras, marcas, resultados, ajudas, explicações liberadas, segundos, término, seleção, aba atual, teclado próprio e todo o estado do quiz são salvos em `localStorage`, com `try/catch`. As alternativas do quiz não mudam ao recarregar. A chave utilizada é `arqcomp-cruzadinha-v1`.

O salvamento pertence ao navegador e à origem da página. Dados de um arquivo local não migram automaticamente para o GitHub Pages. Limpar os dados do navegador, usar outra origem, outra máquina ou armazenamento temporário da navegação anônima pode remover ou tornar indisponível o progresso. Se o navegador bloquear o armazenamento, o jogo continua na página atual e mostra um aviso. Dados incompatíveis não são sobrescritos silenciosamente: é preciso confirmar um reinício para autorizar o novo salvamento.

## Como Jogar O Quiz

1. Abra a aba **Quiz**. O placar **Acertos: X de 16** permanece acima da pergunta, inclusive no resultado final.
2. Responda às 16 perguntas na ordem original: CPU, ULA, UC, Registradores, RAM, ROM, EEPROM, Flash, Cache, Memória de massa, DMA, Address bus, Data bus, Microcontrolador, Dual core e Quad core.
3. Cada pergunta contém quatro alternativas. Somente as alternativas são embaralhadas, usando Fisher-Yates, uma vez por partida.
4. Após responder, a alternativa certa fica verde e a escolhida incorreta fica vermelha. O jogo informa **Correto!** ou **Incorreto.**, o nome do termo e a explicação. A resposta não pode ser trocada.
5. Clique em **Próxima pergunta**. Na última pergunta, clique em **Ver resultado** para ver o total.
6. **Reiniciar** ou **Jogar novamente** abre a confirmação e cria um novo sorteio das alternativas. Um novo sorteio pode coincidir com o anterior por acaso.

## Como Jogar O Jogo Da Memória

1. Abra a aba **Memória**. Escolha entre **8 pares** (16 cartas, sorteados entre os 16 termos) ou **16 pares** (32 cartas, com todos os conceitos).
2. Cada par é formado por uma carta **TERMO** (nome do conceito) e uma carta **CONCEITO** (sua definição curta).
3. Vire duas cartas por tentativa. O cronômetro começa na primeira carta virada.
4. Ao formar um par correto, as duas cartas ficam verdes e o painel inferior mostra a explicação completa daquele termo.
5. Ao encontrar todos os pares, o cronômetro para e o jogo exibe o total de tentativas e o tempo.

## Modo Claro E Modo Escuro

- O tema inicial acompanha a preferência do sistema operacional (`prefers-color-scheme`) e pode ser alternado a qualquer momento pelo botão **Modo escuro / Modo claro** no topo da página.
- A escolha fica salva em `localStorage` junto com o progresso da partida.

## Palavras E Pistas

As coordenadas originais foram mantidas: 14 linhas, 16 colunas, 94 casas ocupadas, 15 cruzamentos e um único conjunto conectado. A numeração é calculada em ordem de leitura; inícios compartilhados recebem o mesmo número. Cada palavra cruza pelo menos outra. Todas as pistas abaixo foram preservadas e têm no máximo 15 palavras.

### Horizontais

| Número | Resposta no tabuleiro | Pista |
| --- | --- | --- |
| 3 | QUADCORE | Processador com quatro núcleos independentes no mesmo chip. |
| 6 | REGISTRADORES | Memórias minúsculas dentro da CPU, as mais rápidas, que guardam dados temporários. |
| 7 | DUALCORE | Processador com dois núcleos independentes no mesmo chip. |
| 10 | CACHE | Memória pequena e rápida entre CPU e RAM que guarda dados usados com frequência. |
| 11 | MICROCONTROLADOR | Chip único que reúne processador, memória e portas de entrada e saída. |
| 14 | RAM | Memória principal, de leitura e escrita, que perde o conteúdo sem energia. |
| 15 | UC | Parte da CPU que interpreta cada instrução e comanda os outros componentes. |
| 16 | ADDRESSBUS | Caminho de um só sentido que indica à memória qual posição será acessada. |

### Verticais

| Número | Resposta no tabuleiro | Pista |
| --- | --- | --- |
| 1 | MEMORIADEMASSA | Armazenamento permanente de grande capacidade, como HD e SSD, mais lento que a RAM. |
| 2 | ULA | Parte da CPU que faz as contas e as operações lógicas. |
| 4 | DMA | Recurso que permite periféricos trocarem dados com a memória sem ocupar a CPU. |
| 5 | FLASH | Memória não volátil apagada em blocos, usada em pen drives e SSDs. |
| 8 | EEPROM | Memória não volátil que pode ser apagada e regravada por sinais elétricos, byte a byte. |
| 9 | DATABUS | Caminho bidirecional por onde trafegam os valores lidos e escritos entre CPU e memória. |
| 12 | CPU | Chip que busca, interpreta e executa as instruções dos programas. |
| 13 | ROM | Memória gravada na fábrica, não volátil, que normalmente só pode ser lida. |

## Verificação

Ao abrir, `validarDados()` verifica limites, letras dos cruzamentos, sobreposições, adjacências indevidas, ligação entre todas as palavras, limite de palavras nas pistas, presença direta do termo na pista e alternativas duplicadas.

Abra `index.html?testes=1` ou acrescente `?testes=1` ao endereço publicado para exibir as verificações locais de regras, pontuação, navegação, normalização, conferência, embaralhamento e serialização. Elas usam estados separados e não alteram a partida ou o armazenamento. O teste de conteúdo não comprova sozinho a unicidade semântica de uma pista nem substitui a revisão da bibliografia.

**Situação desta entrega:** revisão estática do código e das coordenadas. Não houve execução em navegador nem consulta ao e-book de Paixão (2017). A existência dos testes não significa que foram executados neste ambiente. Confirme os resultados no navegador e conclua os testes manuais abaixo antes da entrega acadêmica.

### Roteiro Manual De Aceitação

- [ ] Abrir com `?testes=1` e confirmar que todas as verificações passam.
- [ ] Conferir os 16 inícios numerados e as listas de oito pistas horizontais e oito verticais.
- [ ] Digitar, testar ç e letras acentuadas, setas, Backspace, Tab, Shift+Tab e alternância de cruzamento.
- [ ] Conferir com respostas corretas, erradas e incompletas; verificar cores, ✓/✗ e explicações.
- [ ] Editar um cruzamento e confirmar que a marca da casa e os dois resultados somem.
- [ ] Confirmar dica única com 0,5 ponto e revelação com 0 ponto, inclusive após conferência e recarga.
- [ ] Confirmar início do tempo somente na primeira letra e parada ao completar todas as palavras.
- [ ] Recarregar com o jogo em andamento; conferir letras, marcas, resultados, ajudas e retomada do tempo.
- [ ] Cancelar e confirmar o reinício de cada modalidade; verificar que a outra modalidade permanece.
- [ ] Responder às 16 perguntas, recarregar no feedback, avançar e conferir o placar e a tela final.
- [ ] Recarregar o quiz e conferir que a ordem sorteada das alternativas foi preservada.
- [ ] Testar os modos claro e escuro nas preferências do sistema.
- [ ] Testar em tela larga e estreita, com rolagem restrita ao tabuleiro e teclado próprio opcional.
- [ ] Bloquear o armazenamento e confirmar o aviso, sem impedir o jogo na página atual.
- [ ] Revisar o conteúdo conforme o e-book exigido pela faculdade.
- [ ] Conferir a exceção do CDN antes de considerar atendidos todos os requisitos do enunciado.
- [ ] Verificar que não foram incluídos RA, e-mail, telefone ou outros dados pessoais.

## Fontes

- TANENBAUM, Andrew S. *Organização Estruturada de Computadores*. 5ª ed. Pearson, 2007.
- MONTEIRO, Mário A. *Introdução à Organização de Computadores*. 5ª ed. LTC, 2007.
- PAIXÃO, Renato Rodrigues. *Arquitetura de Computadores*. Saraiva, 2017.

As pistas, perguntas, alternativas e explicações foram fornecidas na especificação. O e-book de Paixão não foi consultado nesta implementação; a conferência final segundo esse material cabe ao autor. As distinções ROM/EEPROM/Flash e Dual core/Quad core foram preservadas.

## Autor

Feito por **Andrey Sebastian Justino**.