
        // ===================================================
        // EXERCÍCIO 1: Contador Simples
        // ===================================================
        let contador = 0;
        const contadorDisplay = document.getElementById('contador-display');
        const btnIncrementar = document.getElementById('btn-incrementar');
        const btnResetar = document.getElementById('btn-resetar');

        btnIncrementar.addEventListener('click', () => {
            contador++;
            contadorDisplay.textContent = contador;
        });

        btnResetar.addEventListener('click', () => {
            contador = 0;
            contadorDisplay.textContent = contador;
        });


        // ===================================================
        // EXERCÍCIO 2: Saudação Interativa
        // ===================================================
        const inputNome = document.getElementById('input-nome');
        const btnSaudar = document.getElementById('btn-saudar');
        const mensagemSaudacao = document.getElementById('mensagem-saudacao');

        btnSaudar.addEventListener('click', () => {
            const nome = inputNome.value.trim(); // .trim() remove espaços em branco extras

            if (nome === '') {
                mensagemSaudacao.textContent = "Por favor, digite seu nome.";
            } else {
                mensagemSaudacao.textContent = `Olá, ${nome}! Seja bem-vindo(a)!`;
                // Opcional: Limpar o input
                // inputNome.value = '';
            }
        });


        // ===================================================
        // EXERCÍCIO 3: Galeria de Imagens Simples
        // ===================================================
        const imagens = [
            'https://static.dw.com/image/52159051_702.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg/330px-BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg',
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5xMFZUte9Ci5jgQLp8EHdAYUYB0UzqIF0Dj9r5PbrFPArwP1a6nEwv4WBjLADmxDutK4rK9aIrOsQn1ytU4WMrqlgQKJrQByynue1mAo',
            'https://www.correiobraziliense.com.br/cbradar/wp-content/uploads/2025/02/Billie-eilish_1739852162528.jpg'
        ];

        let indiceAtual = 0;
        const galeriaImg = document.getElementById('galeria-img');
        const btnAnterior = document.getElementById('btn-anterior');
        const btnProximo = document.getElementById('btn-proximo');

        // Inicializa a imagem ao carregar a página
        galeriaImg.src = imagens[indiceAtual];

        btnProximo.addEventListener('click', () => {
            // Se não for a última imagem, avança o índice
            if (indiceAtual < imagens.length - 1) {
                indiceAtual++;
            } else {
                // Opcional: Voltar para a primeira imagem (loop)
                indiceAtual = 0;
            }
            galeriaImg.src = imagens[indiceAtual];
        });

        btnAnterior.addEventListener('click', () => {
            // Se não for a primeira imagem, volta o índice
            if (indiceAtual > 0) {
                indiceAtual--;
            } else {
                // Opcional: Ir para a última imagem (loop)
                indiceAtual = imagens.length - 1;
            }
            galeriaImg.src = imagens[indiceAtual];
        });


        // ===================================================
        // EXERCÍCIO 4: FAQ (Accordion Simples)
        // ===================================================
        const faqPergunta = document.getElementById('faq-pergunta');
        const faqResposta = document.getElementById('faq-resposta');

        faqPergunta.addEventListener('click', () => {
            // classList.toggle('nome-da-classe') adiciona se não tem, e remove se tem.
            faqResposta.classList.toggle('escondido');
        });


        // ===================================================
        // EXERCÍCIO 5: Lista de Tarefas (To-Do List) - Adicionar Itens
        // ===================================================
        const inputTarefa = document.getElementById('input-tarefa');
        const btnAdicionarTarefa = document.getElementById('btn-adicionar-tarefa');
        const listaTarefas = document.getElementById('lista-tarefas');

        btnAdicionarTarefa.addEventListener('click', () => {
            const textoTarefa = inputTarefa.value.trim();

            if (textoTarefa !== '') {
                // a. Pega o texto do input (feito acima)

                // b. Cria um novo elemento <li>
                const novoItem = document.createElement('li');

                // c. Define o textContent do novo <li>
                novoItem.textContent = textoTarefa;

                // d. Adiciona o novo <li> à <ul>
                listaTarefas.appendChild(novoItem);

                // e. Limpa o campo de input
                inputTarefa.value = '';
                inputTarefa.focus(); // Opcional: Focar o cursor novamente no input
            } else {
                alert('Por favor, digite uma tarefa.');
            }
        });
