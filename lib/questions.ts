import { Question } from "./db";

export const ALL_QUESTIONS: Question[] = [
  // --- EXISTING QUESTIONS ---
  {
    text: "Em uma livraria, no setor responsável por preparar presentes, havia 63 livros. Após embalar parte deles, a razão do número de exemplares prontos para o número de exemplares não prontos era 4/5. O número de livros que ainda deveriam ser embalados era:",
    options: ["25", "28", "30", "32", "35"],
    correctOptionIndex: 4,
    explanation: "Se a razão de prontos (P) para não prontos (NP) é 4/5, temos P/NP = 4/5. Isso significa que de cada 9 livros (4+5), 5 não estão prontos. Como o total é 63, temos 63 / 9 = 7 grupos. Logo, NP = 5 * 7 = 35.",
    category: "Matemática"
  },
  {
    text: "Uma pessoa comprou 4 livros de ficção e 3 livros técnicos, todos distintos entre si, e irá separar 2 livros de ficção e 1 livro técnico para ler nas férias. O número de maneiras distintas de ela escolher os 3 livros é:",
    options: ["2", "6", "9", "15", "18"],
    correctOptionIndex: 4,
    explanation: "Trata-se de uma combinação. Para ficção: C(4,2) = (4*3)/(2*1) = 6. Para técnicos: C(3,1) = 3. Multiplicando as possibilidades: 6 * 3 = 18.",
    category: "Matemática"
  },
  {
    text: "Analise o cartum para responder à questão: No cartum, um personagem aparece extremamente envelhecido, segurando o fone de um telefone, enquanto uma voz eletrônica diz: 'sua ligação é muito importante para nós...'. Depreende-se da análise do cartum que as propagandas e mensagens de atendimento desse tipo são:",
    options: ["empáticas", "comedidas", "manipuladoras", "fidedignas", "detalhistas"],
    correctOptionIndex: 2,
    explanation: "O cartum ironiza a frase padrão de teleatendimento 'sua ligação é muito importante para nós' enquanto o personagem aguarda tanto tempo que chega a envelhecer (ou tornar-se uma caveira em algumas versões), sugerindo que tais mensagens são manipuladoras e não refletem a realidade do descaso com o consumidor.",
    category: "Português"
  },
  {
      text: "The main purpose of the text (about Brazil nuts) is to:",
      options: [
          "alert readers to the possible dangers of consuming too many Brazil nuts.",
          "suggest ways for readers to incorporate Brazil nuts into a healthy diet.",
          "highlight the numerous health benefits of consuming Brazil nuts.",
          "compare the nutritional value of Brazil nuts with other types of nuts.",
          "discuss the environmental impact of harvesting Brazil nuts."
      ],
      correctOptionIndex: 2,
      explanation: "The text focuses extensively on the nutritional properties and health benefits of Brazil nuts, such as heart health, thyroid function, and brain health.",
      category: "Inglês"
  },
  {
      text: "Uma medida preventiva para a ascaridíase é:",
      options: ["usar calçados quando em solos úmidos.", "higienizar as frutas e verduras.", "cozinhar as carnes por longo tempo.", "receber a vacina específica.", "combater o mosquito transmissor."],
      correctOptionIndex: 1,
      explanation: "A ascaridíase é transmitida pela ingestão de ovos presentes em alimentos contaminados ou mãos sujas. Higienizar frutas e verduras é uma medida preventiva fundamental.",
      category: "Biologia"
  },

  // --- MATEMÁTICA (8 mais) ---
  {
    text: "Qual é o valor de x na equação 2x + 5 = 15?",
    options: ["3", "4", "5", "6", "10"],
    correctOptionIndex: 2,
    explanation: "Subtraindo 5 de ambos os lados: 2x = 10. Dividindo por 2: x = 5.",
    category: "Matemática"
  },
  {
    text: "Se um triângulo tem base 10 cm e altura 5 cm, qual é a sua área?",
    options: ["15 cm²", "25 cm²", "50 cm²", "100 cm²", "20 cm²"],
    correctOptionIndex: 1,
    explanation: "A área do triângulo é (base * altura) / 2. Logo, (10 * 5) / 2 = 25 cm².",
    category: "Matemática"
  },
  {
    text: "Um capital de R$ 1000,00 aplicado a juros simples de 10% ao ano, após 2 anos, resultará em um montante de:",
    options: ["R$ 1100,00", "R$ 1200,00", "R$ 1210,00", "R$ 1300,00", "R$ 1020,00"],
    correctOptionIndex: 1,
    explanation: "Juros = C * i * t = 1000 * 0,10 * 2 = 200. Montante = Capital + Juros = 1000 + 200 = 1200.",
    category: "Matemática"
  },
  {
    text: "A soma dos ângulos internos de um hexágono regular é:",
    options: ["360°", "540°", "720°", "900°", "1080°"],
    correctOptionIndex: 2,
    explanation: "Soma = (n - 2) * 180°. Para n=6, Soma = (6-2)*180 = 4*180 = 720°.",
    category: "Matemática"
  },
  {
    text: "O valor de log₂(32) é:",
    options: ["2", "3", "4", "5", "6"],
    correctOptionIndex: 3,
    explanation: "Como 2⁵ = 32, o logaritmo de 32 na base 2 é 5.",
    category: "Matemática"
  },
  {
    text: "Em uma Progressão Aritmética onde a₁=5 e r=3, o décimo termo é:",
    options: ["27", "32", "35", "38", "41"],
    correctOptionIndex: 1,
    explanation: "aₙ = a₁ + (n-1)*r. a₁₀ = 5 + (10-1)*3 = 5 + 27 = 32.",
    category: "Matemática"
  },
  {
    text: "A probabilidade de sair um número par ao lançar um dado comum de 6 faces é:",
    options: ["1/6", "1/4", "1/3", "1/2", "2/3"],
    correctOptionIndex: 3,
    explanation: "Os números pares em um dado são 2, 4 e 6 (3 números). O total de faces é 6. Logo, 3/6 = 1/2.",
    category: "Matemática"
  },
  {
    text: "Qual é o valor da hipotenusa de um triângulo retângulo com catetos 3 e 4?",
    options: ["5", "6", "7", "12", "25"],
    correctOptionIndex: 0,
    explanation: "Teorema de Pitágoras: a² + b² = c². 3² + 4² = c² -> 9 + 16 = 25. c = √25 = 5.",
    category: "Matemática"
  },

  // --- PORTUGUÊS (9 mais) ---
  {
    text: "Assinale a alternativa em que a palavra está grafada corretamente segundo o acordo ortográfico:",
    options: ["Idéia", "Vôo", "Auto-estima", "Micro-ondas", "Porto-alegrense"],
    correctOptionIndex: 3,
    explanation: "No novo acordo, prefixos terminados em vogal igual à que inicia a palavra seguinte exigem hífen. Micro-ondas é a forma correta.",
    category: "Português"
  },
  {
    text: "Qual é a função sintática de 'o menino' em 'O menino comprou um doce'?",
    options: ["Objeto direto", "Objeto indireto", "Sujeito", "Predicativo", "Complemento nominal"],
    correctOptionIndex: 2,
    explanation: "O termo realiza a ação de comprar, sendo o núcleo do sujeito da oração.",
    category: "Português"
  },
  {
    text: "Identifique a figura de linguagem: 'Sua voz é mel para meus ouvidos'.",
    options: ["Metonímia", "Eufemismo", "Comparação", "Metáfora", "Antítese"],
    correctOptionIndex: 3,
    explanation: "Ocorre uma comparação implícita, sem conectivo, caracterizando uma metáfora.",
    category: "Português"
  },
  {
    text: "A obra 'Dom Casmurro' é de autoria de:",
    options: ["Machado de Assis", "José de Alencar", "Aluísio Azevedo", "Guimarães Rosa", "Clarice Lispector"],
    correctOptionIndex: 0,
    explanation: "Dom Casmurro é um dos romances mais famosos de Machado de Assis, expoente do Realismo brasileiro.",
    category: "Português"
  },
  {
    text: "Qual alternativa apresenta apenas advérbios?",
    options: ["Ontem, aqui, mal", "Correr, saltar, rápido", "Belo, azul, grande", "Eu, tu, ele", "Com, sem, para"],
    correctOptionIndex: 0,
    explanation: "Ontem (tempo), aqui (lugar) e mal (modo) são advérbios.",
    category: "Português"
  },
  {
    text: "No Realismo, o foco principal das obras era:",
    options: ["Sentimentalismo", "Idealização do herói", "Descrições objetivas e críticas sociais", "Uso de rimas complexas", "Escapismo e fantasia"],
    correctOptionIndex: 2,
    explanation: "O Realismo buscava retratar a sociedade e o ser humano de forma crua, objetiva e analítica.",
    category: "Português"
  },
  {
    text: "Assinale o sinônimo da palavra 'Efêmero':",
    options: ["Duradouro", "Passageiro", "Rápido", "Importante", "Singular"],
    correctOptionIndex: 1,
    explanation: "Efêmero significa algo que dura pouco tempo, ou seja, passageiro.",
    category: "Português"
  },
  {
    text: "O uso da crase é obrigatório em:",
    options: ["Fui a escola", "Entreguei o presente a ele", "Chegamos a tempo", "Fui a festas", "Paramos a ver a paisagem"],
    correctOptionIndex: 0,
    explanation: "Em 'Fui à escola', ocorre a fusão da preposição 'a' com o artigo feminino 'a' de escola.",
    category: "Português"
  },
  {
    text: "Qual é o antônimo de 'Benevolente'?",
    options: ["Bondoso", "Malevolente", "Justo", "Rico", "Triste"],
    correctOptionIndex: 1,
    explanation: "Benevolente é quem deseja o bem; malevolente é quem deseja o mal.",
    category: "Português"
  },

  // --- INGLÊS (4 mais) ---
  {
    text: "The word 'however' indicates:",
    options: ["Addition", "Conclusion", "Condition", "Contrast", "Reason"],
    correctOptionIndex: 3,
    explanation: "'However' is used to introduce a statement that contrasts with something previously said.",
    category: "Inglês"
  },
  {
    text: "Choose the correct verb form: 'She ________ to the park yesterday'.",
    options: ["goes", "go", "went", "gone", "going"],
    correctOptionIndex: 2,
    explanation: "The sentence refers to the past ('yesterday'), so the past tense 'went' is required.",
    category: "Inglês"
  },
  {
    text: "What is the synonym of 'huge'?",
    options: ["Small", "Tiny", "Enormous", "Fast", "Strong"],
    correctOptionIndex: 2,
    explanation: "'Huge' and 'enormous' both mean very large.",
    category: "Inglês"
  },
  {
    text: "If I ________ rich, I would travel the world.",
    options: ["was", "am", "were", "be", "being"],
    correctOptionIndex: 2,
    explanation: "In the second conditional, 'were' is used for all subjects to express a hypothetical situation.",
    category: "Inglês"
  },

  // --- BIOLOGIA (7 mais) ---
  {
    text: "Qual organela celular é responsável pela respiração celular?",
    options: ["Ribossomo", "Lisossomo", "Cloroplasto", "Mitocôndria", "Retículo endoplasmático"],
    correctOptionIndex: 3,
    explanation: "A mitocôndria é a 'casa de força' da célula, onde ocorre a produção de ATP através da respiração celular.",
    category: "Biologia"
  },
  {
    text: "O DNA tem forma de:",
    options: ["Círculo", "Linha reta", "Dupla hélice", "Quadrado", "Cubo"],
    correctOptionIndex: 2,
    explanation: "A estrutura do DNA, descoberta por Watson e Crick, é uma dupla hélice.",
    category: "Biologia"
  },
  {
    text: "O Reino que engloba os seres procariontes e unicelulares é:",
    options: ["Protista", "Fungi", "Plantae", "Monera", "Animalia"],
    correctOptionIndex: 3,
    explanation: "O Reino Monera inclui bactérias e cianobactérias, que são procariontes.",
    category: "Biologia"
  },
  {
    text: "A fotossíntese produz oxigênio e:",
    options: ["Gás carbônico", "Água", "Glicose", "Clorofila", "Nitrogênio"],
    correctOptionIndex: 2,
    explanation: "As plantas usam luz, água e CO₂ para produzir oxigênio e açúcar (glicose).",
    category: "Biologia"
  },
  {
    text: "Qual destes é um mamífero marinho?",
    options: ["Tubarão", "Baleia", "Jacaré", "Pinguim", "Tartaruga"],
    correctOptionIndex: 1,
    explanation: "A baleia é um mamífero que vive no mar, ao contrário dos tubarões (peixes) ou jacarés (répteis).",
    category: "Biologia"
  },
  {
    text: "O processo de divisão celular que resulta em células com metade do número de cromossomos é a:",
    options: ["Mitose", "Meiose", "Fissão binária", "Ocrose", "Citocinese"],
    correctOptionIndex: 1,
    explanation: "A meiose é responsável pela formação de gametas, reduzindo a carga cromossômica pela metade.",
    category: "Biologia"
  },
  {
    text: "O principal reservatório de carbono no planeta é:",
    options: ["A atmosfera", "Os seres vivos", "O solo", "Os oceanos", "As rochas"],
    correctOptionIndex: 3,
    explanation: "Os oceanos retêm a maior parte do carbono dissolvido na forma de bicarbonatos.",
    category: "Biologia"
  },

  // --- QUÍMICA (8) ---
  {
    text: "Qual é o símbolo químico do Ouro?",
    options: ["Ag", "Au", "Fe", "Cu", "Pb"],
    correctOptionIndex: 1,
    explanation: "Au vem do latim 'Aurum'.",
    category: "Química"
  },
  {
    text: "O pH de uma solução neutra a 25°C é:",
    options: ["0", "1", "7", "14", "10"],
    correctOptionIndex: 2,
    explanation: "O valor 7 na escala de pH representa neutralidade.",
    category: "Química"
  },
  {
    text: "A ligação química onde há compartilhamento de elétrons é a:",
    options: ["Iônica", "Metálica", "Covalente", "Ponte de Hidrogênio", "Força de London"],
    correctOptionIndex: 2,
    explanation: "Ligações covalentes envolvem o compartilhamento de pares de elétrons entre átomos.",
    category: "Química"
  },
  {
    text: "A tabela periódica atual é organizada em ordem crescente de:",
    options: ["Massa atômica", "Número de massa", "Número atômico", "Densidade", "Volume"],
    correctOptionIndex: 2,
    explanation: "Moseley descobriu que a carga nuclear (número atômico) define a identidade do elemento.",
    category: "Química"
  },
  {
    text: "O gelo seco é a forma sólida de:",
    options: ["Água", "Gás oxigênio", "Nitrogênio", "Dióxido de carbono", "Metano"],
    correctOptionIndex: 3,
    explanation: "Gelo seco é CO₂ sólido que sofre sublimação em temperatura ambiente.",
    category: "Química"
  },
  {
    text: "Soluções ácidas tornam o papel de tornassol azul em:",
    options: ["Verde", "Rosa", "Vermelho", "Amarelo", "Violeta"],
    correctOptionIndex: 2,
    explanation: "Ácidos reagem com indicadores mudando para tonalidades avermelhadas.",
    category: "Química"
  },
  {
    text: "Qual é o principal componente do Gás Natural?",
    options: ["Etano", "Propano", "Butano", "Metano", "Pentano"],
    correctOptionIndex: 3,
    explanation: "O metano (CH₄) compõe cerca de 70-90% do gás natural.",
    category: "Química"
  },
  {
    text: "A mudança do estado líquido para o gasoso chama-se:",
    options: ["Fusão", "Sublimação", "Solidificação", "Vaporização", "Condensação"],
    correctOptionIndex: 3,
    explanation: "Vaporização engloba processos como ebulição e evaporação.",
    category: "Química"
  },

  // --- FÍSICA (8) ---
  {
    text: "Qual é a unidade de medida da força no SI?",
    options: ["Joule", "Watt", "Newton", "Pascal", "Volt"],
    correctOptionIndex: 2,
    explanation: "O Newton (N) é a unidade que mede força, em homenagem a Isaac Newton.",
    category: "Física"
  },
  {
    text: "A velocidade da luz no vácuo é aproximadamente:",
    options: ["300.000 km/s", "30.000 km/s", "3.000 km/s", "300 km/s", "30 km/s"],
    correctOptionIndex: 0,
    explanation: "A luz viaja a cerca de 3x10⁸ m/s, ou 300.000 km/s.",
    category: "Física"
  },
  {
    text: "A Primeira Lei de Newton é também conhecida como Lei da:",
    options: ["Ação e Reação", "Inércia", "Gravitação", "Eletrostática", "Dinâmica"],
    correctOptionIndex: 1,
    explanation: "A Inércia afirma que um corpo tende a manter seu estado de movimento ou repouso.",
    category: "Física"
  },
  {
    text: "O calor transmitido pelo Sol chega à Terra por:",
    options: ["Condução", "Convecção", "Irradiação", "Refração", "Difração"],
    correctOptionIndex: 2,
    explanation: "A irradiação térmica ocorre através de ondas eletromagnéticas e não exige meio material.",
    category: "Física"
  },
  {
    text: "Um corpo que não permite a passagem de luz é chamado de:",
    options: ["Transparente", "Translúcido", "Opaco", "Brilhante", "Espelhado"],
    correctOptionIndex: 2,
    explanation: "Materiais opacos absorvem ou refletem a luz, impedindo sua passagem.",
    category: "Física"
  },
  {
    text: "A grandeza que mede a rapidez com que o trabalho é realizado é a:",
    options: ["Energia", "Força", "Potência", "Pressão", "Empuxo"],
    correctOptionIndex: 2,
    explanation: "Potência (P) = Trabalho (W) / tempo (t).",
    category: "Física"
  },
  {
    text: "O instrumento usado para medir a pressão atmosférica é o:",
    options: ["Termômetro", "Barômetro", "Higrômetro", "Anemômetro", "Voltímetro"],
    correctOptionIndex: 1,
    explanation: "O barômetro foi inventado por Torricelli para medir a pressão do ar.",
    category: "Física"
  },
  {
    text: "O som é uma onda do tipo:",
    options: ["Eletromagnética", "Transversal", "Mecânica", "Luminosa", "Gravitacional"],
    correctOptionIndex: 2,
    explanation: "O som exige um meio material para se propagar, sendo uma onda mecânica longitudinal.",
    category: "Física"
  },

  // --- HISTÓRIA (8) ---
  {
    text: "A Revolução Francesa começou em:",
    options: ["1776", "1789", "1808", "1822", "1914"],
    correctOptionIndex: 1,
    explanation: "A queda da Bastilha em 1789 marcou o início da Revolução Francesa.",
    category: "História"
  },
  {
    text: "Quem foi o primeiro presidente do Brasil?",
    options: ["Dom Pedro II", "Getúlio Vargas", "Deodoro da Fonseca", "Juscelino Kubitschek", "Prudente de Morais"],
    correctOptionIndex: 2,
    explanation: "Marechal Deodoro da Fonseca assumiu o poder após a Proclamação da República em 1889.",
    category: "História"
  },
  {
    text: "O período da história brasileira entre 1964 e 1985 é conhecido como:",
    options: ["Era Vargas", "República Velha", "Ditadura Militar", "Segundo Reinado", "Nova República"],
    correctOptionIndex: 2,
    explanation: "Refere-se ao período de regime autoritário liderado pelos militares.",
    category: "História"
  },
  {
    text: "A principal atividade econômica do Brasil Colonial no século XVIII foi a extração de:",
    options: ["Pau-brasil", "Cana-de-açúcar", "Ouro", "Café", "Borracha"],
    correctOptionIndex: 2,
    explanation: "O século XVIII foi marcado pelo Ciclo do Ouro, especialmente em Minas Gerais.",
    category: "História"
  },
  {
    text: "O descobrimento da América por Colombo ocorreu em:",
    options: ["1492", "1500", "1530", "1600", "1700"],
    correctOptionIndex: 0,
    explanation: "Cristóvão Colombo chegou às Antilhas em 12 de outubro de 1492.",
    category: "História"
  },
  {
    text: "A Primeira Guerra Mundial terminou em:",
    options: ["1910", "1914", "1918", "1939", "1945"],
    correctOptionIndex: 2,
    explanation: "O armistício foi assinado em novembro de 1918.",
    category: "História"
  },
  {
    text: "Qual civilização antiga construiu as pirâmides de Gizé?",
    options: ["Gregos", "Romanos", "Egípcios", "Mesopotâmicos", "Astecas"],
    correctOptionIndex: 2,
    explanation: "As pirâmides eram túmulos monumentais para os faraós do Egito Antigo.",
    category: "História"
  },
  {
    text: "A abolição da escravidão no Brasil ocorreu pela Lei Áurea em:",
    options: ["1850", "1871", "1885", "1888", "1889"],
    correctOptionIndex: 3,
    explanation: "A Princesa Isabel assinou a Lei Áurea em 13 de maio de 1888.",
    category: "História"
  },

  // --- GEOGRAFIA (8) ---
  {
    text: "Qual é o maior país do mundo em extensão territorial?",
    options: ["Canadá", "China", "EUA", "Brasil", "Rússia"],
    correctOptionIndex: 4,
    explanation: "A Rússia possui mais de 17 milhões de km², sendo o maior país do globo.",
    category: "Geografia"
  },
  {
    text: "O principal bioma da região Norte do Brasil é a:",
    options: ["Caatinga", "Cerrado", "Mata Atlântica", "Amazônia", "Pantanal"],
    correctOptionIndex: 3,
    explanation: "A maior floresta tropical do mundo é a característica dominante do Norte brasileiro.",
    category: "Geografia"
  },
  {
    text: "Qual é a capital da França?",
    options: ["Berlim", "Londres", "Madrid", "Roma", "Paris"],
    correctOptionIndex: 4,
    explanation: "Paris é a capital e principal centro econômico da França.",
    category: "Geografia"
  },
  {
    text: "As camadas da Terra são Crosta, Manto e:",
    options: ["Atmosfera", "Núcleo", "Litosfera", "Biosfera", "Hidrosfera"],
    correctOptionIndex: 1,
    explanation: "A estrutura interna é dividida quimicamente em crosta, manto e núcleo.",
    category: "Geografia"
  },
  {
    text: "O movimento da Terra em torno do seu próprio eixo chama-se:",
    options: ["Translação", "Nutação", "Rotação", "Evolução", "Órbita"],
    correctOptionIndex: 2,
    explanation: "A rotação dura cerca de 24 horas e origina os dias e as noites.",
    category: "Geografia"
  },
  {
    text: "A maior bacia hidrográfica do mundo em volume de água é a do rio:",
    options: ["Nilo", "Mississippi", "Congo", "Amazonas", "Paraná"],
    correctOptionIndex: 3,
    explanation: "O rio Amazonas possui o maior fluxo de descarga de água do mundo.",
    category: "Geografia"
  },
  {
    text: "Qual continente é banhado por todos os meridianos?",
    options: ["Ásia", "América", "Europa", "Antártida", "Oceania"],
    correctOptionIndex: 3,
    explanation: "Como todos os meridianos convergem nos polos, a Antártida (Polo Sul) é atravessada por todos eles.",
    category: "Geografia"
  },
  {
    text: "O processo de crescimento das cidades em relação ao campo é a:",
    options: ["Industrialização", "globalização", "Urbanização", "Gentrificação", "Migração"],
    correctOptionIndex: 2,
    explanation: "A urbanização ocorre quando a população urbana cresce em ritmo superior à rural.",
    category: "Geografia"
  },

  // --- NOVAS QUESTÕES (65) ---
  
  // MATEMÁTICA (10)
  {
    text: "Qual é o valor da função f(x) = x² - 5x + 6 para x = 3?",
    options: ["0", "1", "2", "3", "6"],
    correctOptionIndex: 0,
    explanation: "Substituindo x por 3: 3² - 5(3) + 6 = 9 - 15 + 6 = 0.",
    category: "Matemática"
  },
  {
    text: "Um círculo tem raio igual a 4 cm. Qual é o seu perímetro? (Considere π = 3,14)",
    options: ["12,56 cm", "25,12 cm", "50,24 cm", "16,00 cm", "8,00 cm"],
    correctOptionIndex: 1,
    explanation: "Perímetro (comprimento) = 2 * π * r. C = 2 * 3,14 * 4 = 25,12 cm.",
    category: "Matemática"
  },
  {
    text: "Se f(x) = 2x + 3, qual é a função inversa f⁻¹(x)?",
    options: ["(x - 3) / 2", "(x + 3) / 2", "2x - 3", "x/2 - 3", "3x + 2"],
    correctOptionIndex: 0,
    explanation: "Substituindo f(x) por y: y = 2x + 3 -> x = (y - 3) / 2. Trocando as variáveis: f⁻¹(x) = (x - 3) / 2.",
    category: "Matemática"
  },
  {
    text: "O valor de sen(30°) é:",
    options: ["0", "1/2", "√2/2", "√3/2", "1"],
    correctOptionIndex: 1,
    explanation: "O seno de 30 graus é um valor notável na trigonometria, igual a 1/2 ou 0,5.",
    category: "Matemática"
  },
  {
    text: "Quantos caminhos diferentes podem ser feitos em um grid 2x2 indo do canto inferior esquerdo ao superior direito, movendo-se apenas para cima ou para a direita?",
    options: ["2", "4", "6", "8", "10"],
    correctOptionIndex: 2,
    explanation: "Trata-se de uma permutação com repetição (C(4,2)): 4! / (2!2!) = (4*3*2*1) / (2*2) = 24 / 4 = 6.",
    category: "Matemática"
  },
  {
    text: "A raiz quadrada de 144 somada à raiz cúbica de 27 resulta em:",
    options: ["12", "15", "18", "21", "24"],
    correctOptionIndex: 1,
    explanation: "√144 = 12 e ∛27 = 3. 12 + 3 = 15.",
    category: "Matemática"
  },
  {
    text: "Um polígono de 5 lados é chamado de:",
    options: ["Quadrilátero", "Pentágono", "Hexágono", "Heptágono", "Octógono"],
    correctOptionIndex: 1,
    explanation: "Penta significa cinco. Portanto, pentágono tem cinco lados.",
    category: "Matemática"
  },
  {
    text: "Qual é o volume de um cubo com aresta de 3 cm?",
    options: ["9 cm³", "12 cm³", "18 cm³", "27 cm³", "81 cm³"],
    correctOptionIndex: 3,
    explanation: "Volume = aresta³. V = 3 * 3 * 3 = 27 cm³.",
    category: "Matemática"
  },
  {
    text: "A interseção de dois conjuntos A = {1, 2, 3} e B = {2, 3, 4} é:",
    options: ["{1, 4}", "{1, 2, 3, 4}", "{2, 3}", "{2}", "{3}"],
    correctOptionIndex: 2,
    explanation: "A interseção contém apenas os elementos que pertencem a ambos os conjuntos simultaneamente.",
    category: "Matemática"
  },
  {
    text: "O valor numérico da expressão (2³ * 2²) / 2⁴ é:",
    options: ["1", "2", "4", "8", "16"],
    correctOptionIndex: 1,
    explanation: "(2³ * 2²) = 2⁵. 2⁵ / 2⁴ = 2⁽⁵⁻⁴⁾ = 2¹ = 2.",
    category: "Matemática"
  },

  // PORTUGUÊS (10)
  {
    text: "Qual destas palavras é um paroxítona?",
    options: ["Café", "Lâmpada", "Fácil", "Cajueiro", "Parabéns"],
    correctOptionIndex: 2,
    explanation: "Fácil tem a penúltima sílaba tônica, sendo portanto uma paroxítona acentuada.",
    category: "Português"
  },
  {
    text: "O termo 'embora' estabelece uma relação de:",
    options: ["Causa", "Consequência", "Concessão", "Condição", "Tempo"],
    correctOptionIndex: 2,
    explanation: "'Embora' é uma conjunção subordinativa concessiva.",
    category: "Português"
  },
  {
    text: "Identifique a voz passiva da frase: 'O gato comeu o rato'.",
    options: ["O gato foi comido pelo rato.", "O rato comeu o gato.", "O rato foi comido pelo gato.", "O gato está comendo o rato.", "O rato será comido."],
    correctOptionIndex: 2,
    explanation: "Na voz passiva, o objeto direto (o rato) torna-se sujeito paciente.",
    category: "Português"
  },
  {
    text: "Quem escreveu 'Vidas Secas'?",
    options: ["Graciliano Ramos", "Jorge Amado", "Rachel de Queiroz", "José Lins do Rego", "Érico Veríssimo"],
    correctOptionIndex: 0,
    explanation: "Vidas Secas é a obra-prima de Graciliano Ramos, focada na família de retirantes de Fabiano.",
    category: "Português"
  },
  {
    text: "O sufixo '-mente' em grande parte das vezes forma:",
    options: ["Substantivos", "Adjetivos", "Advérbios", "Verbos", "Pronomes"],
    correctOptionIndex: 2,
    explanation: "O sufixo '-mente' é produtivo na formação de advérbios de modo a partir de adjetivos.",
    category: "Português"
  },
  {
    text: "Qual alternativa apresenta pleonasmo vicioso?",
    options: ["Subir para cima", "Branco como a neve", "Sorriso aberto", "Olhar fixo", "Céu azul"],
    correctOptionIndex: 0,
    explanation: "Subir já pressupõe o movimento para cima, tornando a expressão redundante e viciosa.",
    category: "Português"
  },
  {
    text: "A concordância verbal está correta em:",
    options: ["Fazem dois anos que não o vejo", "Houveram muitos incidentes", "Devem haver problemas aqui", "Fazia muitos dias que estávamos lá", "Existia razões para sua partida"],
    correctOptionIndex: 3,
    explanation: "O verbo 'fazer' indicando tempo decorrido é impessoal e fica na 3ª pessoa do singular.",
    category: "Português"
  },
  {
    text: "Qual é o sujeito da oração 'Choveu granizo ontem'?",
    options: ["Sujeito oculto", "Sujeito indeterminado", "Sujeito inexistente", "O ontem", "Granizo"],
    correctOptionIndex: 4,
    explanation: "Embora verbos de fenômenos da natureza sejam impessoais, quando usados com substantivos (granizo), este último funciona como sujeito.",
    category: "Português"
  },
  {
    text: "O Modernismo no Brasil teve seu marco inicial em:",
    options: ["1888", "1902", "1922", "1930", "1945"],
    correctOptionIndex: 2,
    explanation: "A Semana de Arte Moderna de 1922, em São Paulo, iniciou o movimento no país.",
    category: "Português"
  },
  {
    text: "A palavra 'por que' escrita separadamente e sem acento é usada em:",
    options: ["Final de frase", "Respostas", "Perguntas diretas ou indiretas no meio do texto", "Substantivado", "Exclamações"],
    correctOptionIndex: 2,
    explanation: "'Por que' separado e sem acento é usado no início ou meio de perguntas.",
    category: "Português"
  },

  // INGLÊS (5)
  {
    text: "Which of the following is an irregular verb?",
    options: ["Walk", "Play", "Eat", "Talk", "Finish"],
    correctOptionIndex: 2,
    explanation: "The past of 'eat' is 'ate', which doesn't follow the regular '-ed' rule.",
    category: "Inglês"
  },
  {
    text: "The opposite of 'cheap' is:",
    options: ["Inexpensive", "Free", "Expensive", "New", "Modern"],
    correctOptionIndex: 2,
    explanation: "Something that costs little is cheap; something that costs a lot is expensive.",
    category: "Inglês"
  },
  {
    text: "Choose the correct preposition: 'He lives _______ New York'.",
    options: ["at", "on", "in", "to", "by"],
    correctOptionIndex: 2,
    explanation: "We use 'in' for cities, countries, and large geographical areas.",
    category: "Inglês"
  },
  {
    text: "In the sentence 'They are students', 'They' is a:",
    options: ["Subject pronoun", "Object pronoun", "Possessive adjective", "Verb", "Noun"],
    correctOptionIndex: 0,
    explanation: "'They' acts as the subject of the sentence performing the action/state.",
    category: "Inglês"
  },
  {
    text: "What does the idiom 'break a leg' mean?",
    options: ["To get injured", "Good luck", "To fail", "To run fast", "To be angry"],
    correctOptionIndex: 1,
    explanation: "'Break a leg' is a common English idiom used to wish someone good luck, especially in theater.",
    category: "Inglês"
  },

  // BIOLOGIA (8)
  {
    text: "Qual é o nome do açúcar principal presente no sangue humano?",
    options: ["Frutose", "Lactose", "Sacarose", "Glicose", "Amido"],
    correctOptionIndex: 3,
    explanation: "A glicose é o monossacarídeo fundamental para a energia celular circulante no sangue.",
    category: "Biologia"
  },
  {
    text: "Quem é considerado o 'pai da genética'?",
    options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Lamarck", "Lineu"],
    correctOptionIndex: 1,
    explanation: "Gregor Mendel formulou as leis básicas da hereditariedade através de seus estudos com ervilhas.",
    category: "Biologia"
  },
  {
    text: "Qual órgão humano é responsável pela produção de insulina?",
    options: ["Fígado", "Rins", "Estômago", "Pâncreas", "Baço"],
    correctOptionIndex: 3,
    explanation: "O pâncreas produz insulina nas células beta das Ilhotas de Langerhans.",
    category: "Biologia"
  },
  {
    text: "O processo pelo qual a água atravessa uma membrana semipermeável do meio menos concentrado para o mais concentrado é a:",
    options: ["Difusão", "Osmose", "Fagocitose", "Exocitose", "Pinocitose"],
    correctOptionIndex: 1,
    explanation: "A osmose busca equilibrar as concentrações através do fluxo de solvente (água).",
    category: "Biologia"
  },
  {
    text: "Qual vitamina é produzida na pele humana por exposição ao sol?",
    options: ["Vitamina A", "Vitamina B12", "Vitamina C", "Vitamina D", "Vitamina K"],
    correctOptionIndex: 3,
    explanation: "A vitamina D3 é sintetizada na pele sob a influência da radiação ultravioleta B.",
    category: "Biologia"
  },
  {
    text: "Os vírus são caracterizados por serem organismos:",
    options: ["Unicelulares", "Multicelulares", "Acelulares", "Procariontes", "Eucariontes"],
    correctOptionIndex: 2,
    explanation: "Vírus não possuem estrutura celular e são parasitas intracelulares obrigatórios.",
    category: "Biologia"
  },
  {
    text: "A base nitrogenada que é exclusiva do RNA (não presente no DNA) é:",
    options: ["Adenina", "Guanina", "Citocina", "Timina", "Uracila"],
    correctOptionIndex: 4,
    explanation: "O DNA possui Timina, enquanto o RNA possui Uracila em seu lugar.",
    category: "Biologia"
  },
  {
    text: "O sistema imunológico humano produz ________ para combater antígenos.",
    options: ["Hormônios", "Antibióticos", "Anticorpos", "Enzimas", "Glicogênio"],
    correctOptionIndex: 2,
    explanation: "Anticorpos são proteínas produzidas pelos linfócitos B para neutralizar invasores.",
    category: "Biologia"
  },

  // QUÍMICA (8)
  {
    text: "A escala Kelvin de temperatura começa no zero absoluto, que em Celsius equivale a:",
    options: ["0°C", "-100°C", "-273,15°C", "100°C", "273°C"],
    correctOptionIndex: 2,
    explanation: "Zero Kelvin é a menor temperatura teórica possível, onde cessa o movimento das partículas.",
    category: "Química"
  },
  {
    text: "Qual é o elemento mais abundante no universo?",
    options: ["Oxigênio", "Carbono", "Hélio", "Hidrogênio", "Nitrogênio"],
    correctOptionIndex: 3,
    explanation: "O Hidrogênio constitui cerca de 75% da massa elemental do universo.",
    category: "Química"
  },
  {
    text: "Substâncias que doam prótons (H⁺) em solução aquosa são definidas como:",
    options: ["Bases", "Sais", "Ácidos", "Óxidos", "Metais"],
    correctOptionIndex: 2,
    explanation: "Segundo a teoria de Arrhenius e Brønsted-Lowry, ácidos são doadores de prótons.",
    category: "Química"
  },
  {
    text: "O modelo atômico conhecido como 'Sistema Solar' foi proposto por:",
    options: ["Dalton", "Thomson", "Rutherford", "Bohr", "Schrödinger"],
    correctOptionIndex: 2,
    explanation: "Rutherford propôs o átomo com um núcleo denso e elétrons orbitando-o.",
    category: "Química"
  },
  {
    text: "O processo de separação de misturas heterogêneas de sólidos e líquidos por gravidade é a:",
    options: ["Decantação", "Destilação", "Filtração", "Evaporação", "Cromatografia"],
    correctOptionIndex: 0,
    explanation: "A decantação aproveita a diferença de densidade para separar os componentes.",
    category: "Química"
  },
  {
    text: "Qual destes elementos é um Gás Nobre?",
    options: ["Flúor", "Argônio", "Potássio", "Magnésio", "Enxofre"],
    correctOptionIndex: 1,
    explanation: "O Argônio (Ar) pertence ao grupo 18, apresentando baixa reatividade.",
    category: "Química"
  },
  {
    text: "Polímeros plásticos são derivados principalmente de:",
    options: ["Carvão", "Madeira", "Petróleo", "Minerais", "Gordura animal"],
    correctOptionIndex: 2,
    explanation: "A indústria petroquímica fornece os monômeros para a síntese da maioria dos plásticos.",
    category: "Química"
  },
  {
    text: "Em uma oxirredução, o agente redutor é a espécie que:",
    options: ["Ganha elétrons", "Perde elétrons", "Mantém o Nox", "Se reduz", "Aumenta de massa"],
    correctOptionIndex: 1,
    explanation: "O agente redutor sofre oxidação, portanto, perde elétrons na reação.",
    category: "Química"
  },

  // FÍSICA (8)
  {
    text: "Quem propôs as leis do movimento e a lei da gravidade universal?",
    options: ["Einstein", "Galileu", "Newton", "Tesla", "Planck"],
    correctOptionIndex: 2,
    explanation: "Sir Isaac Newton publicou seus Principia estabelecendo as bases da mecânica clássica.",
    category: "Física"
  },
  {
    text: "A unidade de medida de frequência no SI é:",
    options: ["Hertz", "Volt", "Ampere", "Ohm", "Lux"],
    correctOptionIndex: 0,
    explanation: "Hz (Hertz) mede ciclos por segundo.",
    category: "Física"
  },
  {
    text: "Qual é o nome da mudança de direção da luz ao passar de um meio para outro?",
    options: ["Reflexão", "Refração", "Difração", "Interferência", "Polarização"],
    correctOptionIndex: 1,
    explanation: "A refração ocorre devido à mudança na velocidade da luz nos diferentes meios.",
    category: "Física"
  },
  {
    text: "Um corpo em queda livre na Terra, desprezando o ar, sofre uma aceleração de aprox.:",
    options: ["1 m/s²", "5 m/s²", "9,8 m/s²", "15 m/s²", "30 m/s²"],
    correctOptionIndex: 2,
    explanation: "A gravidade terrestre média ao nível do mar é de aproximadamente 9,8 m/s².",
    category: "Física"
  },
  {
    text: "A grandeza física medida pelo multímetro que representa a oposição ao fluxo de corrente é a:",
    options: ["Tensão", "Potência", "Resistência", "Capacitância", "Indutância"],
    correctOptionIndex: 2,
    explanation: "A resistência elétrica é medida em Ohms (Ω).",
    category: "Física"
  },
  {
    text: "O efeito pelo qual a frequência de uma onda parece mudar devido ao movimento da fonte é o:",
    options: ["Efeito Joule", "Efeito Photoelétrico", "Efeito Doppler", "Efeito Tyndall", "Efeito Estufa"],
    correctOptionIndex: 2,
    explanation: "O efeito Doppler explica por que o som de uma sirene parece mais agudo ao se aproximar.",
    category: "Física"
  },
  {
    text: "Qual é a cor resultante da mistura de todas as cores do espectro visível (luz)?",
    options: ["Preto", "Cinza", "Branco", "Verde", "Cromático"],
    correctOptionIndex: 2,
    explanation: "O branco é a sobreposição de todas as frequências da luz visível.",
    category: "Física"
  },
  {
    text: "O calor necessário para mudar o estado físico de uma substância sem alterar sua temperatura é o:",
    options: ["Calor Sensível", "Calor Latente", "Calor Específico", "Calor Radiante", "Calor Absoluto"],
    correctOptionIndex: 1,
    explanation: "O calor latente é o que 'quebra' as ligações durante a mudança de fase.",
    category: "Física"
  },

  // HISTÓRIA (8)
  {
    text: "O Tratado de Tordesilhas (1494) dividiu terras entre:",
    options: ["Inglaterra e França", "Espanha e Portugal", "Holanda e Espanha", "Roma e Constantinopla", "EUA e URSS"],
    correctOptionIndex: 1,
    explanation: "Portugal e Espanha dividiram as 'terras a serem descobertas' no Novo Mundo.",
    category: "História"
  },
  {
    text: "A capital do Brasil foi transferida de Salvador para o Rio de Janeiro em:",
    options: ["1500", "1640", "1763", "1808", "1822"],
    correctOptionIndex: 2,
    explanation: "A mudança ocorreu para facilitar a fiscalização do ouro extraído das Minas Gerais.",
    category: "História"
  },
  {
    text: "O movimento de independência do Brasil teve como líder principal:",
    options: ["Tiradentes", "Zumbi dos Palmares", "Dom Pedro I", "José Bonifácio", "Bento Gonçalves"],
    correctOptionIndex: 2,
    explanation: "Dom Pedro I proclamou a independência às margens do Ipiranga em 1822.",
    category: "História"
  },
  {
    text: "A Segunda Guerra Mundial iniciou com a invasão da _______ pela Alemanha.",
    options: ["França", "Rússia", "Polônia", "Inglaterra", "Bélgica"],
    correctOptionIndex: 2,
    explanation: "O ataque à Polônia em 1 de setembro de 1939 marcou o início do conflito.",
    category: "História"
  },
  {
    text: "Qual imperador governou o Brasil durante quase 50 anos (o Segundo Reinado)?",
    options: ["Dom Pedro I", "Dom Pedro II", "Dom João VI", "Napoleão", "Carlota Joaquina"],
    correctOptionIndex: 1,
    explanation: "Dom Pedro II governou desde a maioridade até o golpe da República.",
    category: "História"
  },
  {
    text: "A Revolução Russa de 1917 levou ao poder os:",
    options: ["Monarquistas", "Capitalistas", "Bolcheviques", "Nazistas", "Facistas"],
    correctOptionIndex: 2,
    explanation: "Liderados por Lênin, os bolcheviques estabeleceram o regime socialista na Rússia.",
    category: "História"
  },
  {
    text: "O movimento artístico-cultural dos séculos XIV e XVI que rompeu com o teocentrismo foi o:",
    options: ["Barroco", "Renascimento", "Iluminismo", "Romantismo", "Gótico"],
    correctOptionIndex: 1,
    explanation: "O Renascimento buscou resgatar valores da antiguidade clássica e o antropocentrismo.",
    category: "História"
  },
  {
    text: "O líder da Independência da Índia pelo método da não-violência foi:",
    options: ["Mao Zedong", "Nelson Mandela", "Mahatma Gandhi", "Martin Luther King", "Dalai Lama"],
    correctOptionIndex: 2,
    explanation: "Gandhi liderou o movimento pacifista contra o domínio britânico na Índia.",
    category: "História"
  },

  // GEOGRAFIA (8)
  {
    text: "A linha imaginária que divide o planeta em hemisférios Norte e Sul é o:",
    options: ["Meridiano de Greenwich", "Trópico de Capricórnio", "Trópico de Câncer", "Equador", "Círculo Polar"],
    correctOptionIndex: 3,
    explanation: "A Linha do Equador está na latitude 0°.",
    category: "Geografia"
  },
  {
    text: "Qual é o oceano mais extenso do planeta?",
    options: ["Atlântico", "Índico", "Glacial Ártico", "Pacífico", "Antártico"],
    correctOptionIndex: 3,
    explanation: "O Pacífico cobre cerca de um terço de toda a superfície terrestre.",
    category: "Geografia"
  },
  {
    text: "O principal gás causador do efeito estufa agravado por ações humanas é o:",
    options: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono (CO₂)", "Hélio", "Argônio"],
    correctOptionIndex: 2,
    explanation: "A queima de combustíveis fósseis libera grandes quantidades de CO₂ na atmosfera.",
    category: "Geografia"
  },
  {
    text: "Qual o nome da zona de contato entre placas tectônicas onde ocorrem muitos terremotos?",
    options: ["Epicentro", "Hipocentro", "Falha geológica", "Dorsal", "Vulcão"],
    correctOptionIndex: 2,
    explanation: "Falhas são rupturas nas rochas devido à movimentação das placas.",
    category: "Geografia"
  },
  {
    text: "O índice que mede o grau de desenvolvimento humano considerando saúde, educação e renda é o:",
    options: ["PIB", "Gini", "IDH", "IPCA", "Inflação"],
    correctOptionIndex: 2,
    explanation: "IDH (Índice de Desenvolvimento Humano) foi criado pela ONU.",
    category: "Geografia"
  },
  {
    text: "A cordilheira do Himalaia situa-se no continente:",
    options: ["Africano", "Americano", "Asiático", "Europeu", "Oceania"],
    correctOptionIndex: 2,
    explanation: "O Himalaia cruza diversos países da Ásia Central e Meridional.",
    category: "Geografia"
  },
  {
    text: "A camada de solo permanentemente congelado encontrada em regiões polares é a:",
    options: ["Geleira", "Iceberg", "Permafrost", "Tundra", "Taiga"],
    correctOptionIndex: 2,
    explanation: "O permafrost é típico de regiões como Sibéria e Norte do Canadá.",
    category: "Geografia"
  },
  {
    text: "O fenômeno climático cíclico que aquece as águas do Pacífico Equatorial é o:",
    options: ["La Niña", "El Niño", "Monções", "Tufão", "Furacão"],
    correctOptionIndex: 1,
    explanation: "O El Niño altera padrões de chuva e temperatura em todo o mundo.",
    category: "Geografia"
  },
  // --- BATCH 3 (65 mais) ---
  {
    text: "Qual é o valor de x na proporção x/4 = 9/12?",
    options: ["2", "3", "4", "5", "6"],
    correctOptionIndex: 1,
    explanation: "Multiplicando em cruz: 12x = 36. Logo, x = 36/12 = 3.",
    category: "Matemática"
  },
  {
    text: "O volume de um cubo de aresta 3 cm é:",
    options: ["9 cm³", "18 cm³", "27 cm³", "54 cm³", "81 cm³"],
    correctOptionIndex: 2,
    explanation: "Volume = aresta³ = 3³ = 27 cm³.",
    category: "Matemática"
  },
  {
    text: "A raiz quadrada de 144 é:",
    options: ["10", "11", "12", "13", "14"],
    correctOptionIndex: 2,
    explanation: "12 * 12 = 144.",
    category: "Matemática"
  },
  {
    text: "Se um produto custa R$ 80,00 e tem um desconto de 25%, seu novo preço é:",
    options: ["R$ 60,00", "R$ 64,00", "R$ 65,00", "R$ 70,00", "R$ 75,00"],
    correctOptionIndex: 0,
    explanation: "25% de 80 é 20. 80 - 20 = 60.",
    category: "Matemática"
  },
  {
    text: "O valor numérico da expressão x² - 5x + 6 para x=2 é:",
    options: ["0", "2", "4", "6", "10"],
    correctOptionIndex: 0,
    explanation: "2² - 5(2) + 6 = 4 - 10 + 6 = 0.",
    category: "Matemática"
  },
  {
    text: "Quantos segundos existem em 1 hora?",
    options: ["60", "360", "600", "3600", "36000"],
    correctOptionIndex: 3,
    explanation: "1 hora = 60 minutos * 60 segundos = 3600 segundos.",
    category: "Matemática"
  },
  {
    text: "Qual é a média aritmética simples de 7, 8 e 9?",
    options: ["7", "7.5", "8", "8.5", "9"],
    correctOptionIndex: 2,
    explanation: "(7+8+9)/3 = 24/3 = 8.",
    category: "Matemática"
  },
  {
    text: "O MMC (Mínimo Múltiplo Comum) entre 4 e 6 é:",
    options: ["2", "12", "24", "48", "10"],
    correctOptionIndex: 1,
    explanation: "Múltiplos de 4: 4, 8, 12... Múltiplos de 6: 6, 12... O menor comum é 12.",
    category: "Matemática"
  },
  {
    text: "Aponte a alternativa em que a palavra destacada é um advérbio:",
    options: ["Ele FALOU muito.", "O LIVRO é bom.", "A CASA azul.", "Maria é ALTA.", "O CARRO corre."],
    correctOptionIndex: 0,
    explanation: "Em 'falou muito', 'muito' intensifica o verbo (adverbio de intensidade).",
    category: "Português"
  },
  {
    text: "Qual destas palavras é um substantivo abstrato?",
    options: ["Árvore", "Felicidade", "Caneta", "Pedra", "Computador"],
    correctOptionIndex: 1,
    explanation: "Substantivos abstratos dependem de outro ser para existir (sentimentos, estados).",
    category: "Português"
  },
  {
    text: "Identifique a oração em voz passiva:",
    options: ["O menino comeu o bolo.", "O bolo foi comido pelo menino.", "O menino comerá o bolo.", "Come-se bolo.", "Bolo o menino comeu."],
    correctOptionIndex: 1,
    explanation: "A voz passiva é caracterizada pelo sujeito sofrendo a ação.",
    category: "Português"
  },
  {
    text: "Qual é o antônimo de 'Efêmero'?",
    options: ["Breve", "Passageiro", "Duradouro", "Curto", "Rápido"],
    correctOptionIndex: 2,
    explanation: "Efêmero significa algo que dura pouco; duradouro é o oposto.",
    category: "Português"
  },
  {
    text: "Escolha a grafia correta:",
    options: ["Excessão", "Exceção", "Esceção", "Excessão", "Exseção"],
    correctOptionIndex: 1,
    explanation: "A palavra 'exceção' deriva de 'exceto'.",
    category: "Português"
  },
  {
    text: "O plural de 'cidadão' é:",
    options: ["Cidadões", "Cidadães", "Cidadãos", "Cidadãos", "Cidadons"],
    correctOptionIndex: 2,
    explanation: "Regra gramatical: o plural de cidadão é cidadãos.",
    category: "Português"
  },
  {
    text: "A figura de linguagem 'O jardim sorria para mim' é uma:",
    options: ["Metáfora", "Hipérbole", "Personificação", "Antítese", "Comparação"],
    correctOptionIndex: 2,
    explanation: "Personificação (ou prosopopeia) atribui características humanas a seres inanimados.",
    category: "Português"
  },
  {
    text: "Qual é o sinônimo de 'Meticuloso'?",
    options: ["Descuidado", "Detalhista", "Preguiçoso", "Rápido", "Simples"],
    correctOptionIndex: 1,
    explanation: "Meticuloso é quem faz as coisas com extremo cuidado e atenção aos detalhes.",
    category: "Português"
  },
  {
    text: "Choose the correct preposition: 'He is interested ___ learning music.'",
    options: ["at", "on", "in", "to", "with"],
    correctOptionIndex: 2,
    explanation: "Common collocation: 'Interested in'.",
    category: "Inglês"
  },
  {
    text: "What is the opposite of 'Hard'?",
    options: ["Heavy", "Strong", "Easy", "Fast", "Long"],
    correctOptionIndex: 2,
    explanation: "'Hard' can mean difficult; 'Easy' is the opposite.",
    category: "Inglês"
  },
  {
    text: "Which of these is a fruit?",
    options: ["Onion", "Carrot", "Potato", "Apple", "Rice"],
    correctOptionIndex: 3,
    explanation: "Apple is a fruit.",
    category: "Inglês"
  },
  {
    text: "Select the correct plural: 'One person, two ____.'",
    options: ["persons", "peoples", "people", "persones", "peopler"],
    correctOptionIndex: 2,
    explanation: "'People' is the irregular plural of 'person'.",
    category: "Inglês"
  },
  {
    text: "How do you say 'obrigado' in English?",
    options: ["Please", "Sorry", "Welcome", "Thank you", "Hello"],
    correctOptionIndex: 3,
    explanation: "Thank you = Obrigado.",
    category: "Inglês"
  },
  {
    text: "Which color is the result of mixing Blue and Yellow?",
    options: ["Purple", "Green", "Orange", "Pink", "Brown"],
    correctOptionIndex: 1,
    explanation: "Blue + Yellow = Green.",
    category: "Inglês"
  },
  {
    text: "The past tense of 'Go' is:",
    options: ["Goed", "Gone", "Went", "Goin", "Goes"],
    correctOptionIndex: 2,
    explanation: "Go is an irregular verb: go - went - gone.",
    category: "Inglês"
  },
  {
    text: "Which of these is NOT a vehicle?",
    options: ["Car", "Bus", "Bike", "Bread", "Plane"],
    correctOptionIndex: 3,
    explanation: "Bread is food, not a vehicle.",
    category: "Inglês"
  },
  {
    text: "No vácuo, a luz viaja a uma velocidade aproximada de:",
    options: ["300 km/s", "300.000 km/s", "340 m/s", "1.000 km/h", "3.000 m/s"],
    correctOptionIndex: 1,
    explanation: "A velocidade da luz no vácuo é de aproximadamente 300.000 km/s.",
    category: "Física"
  },
  {
    text: "A primeira lei de Newton é conhecida como lei da:",
    options: ["Ação e reação", "Inércia", "Força", "Gravidade", "Massa"],
    correctOptionIndex: 1,
    explanation: "A Primeira Lei de Newton afirma que um corpo tende a manter seu estado de repouso ou movimento uniforme.",
    category: "Física"
  },
  {
    text: "O instrumento utilizado para medir a temperatura é o:",
    options: ["Barômetro", "Higrômetro", "Termômetro", "Anemômetro", "Velocímetro"],
    correctOptionIndex: 2,
    explanation: "Termômetro mede temperatura corporais ou ambientes.",
    category: "Física"
  },
  {
    text: "A energia associada ao movimento de um corpo é a energia:",
    options: ["Potencial", "Térmica", "Cinética", "Elétrica", "Química"],
    correctOptionIndex: 2,
    explanation: "Energia cinética é a energia da massa em movimento.",
    category: "Física"
  },
  {
    text: "Qual dessas partículas tem carga elétrica negativa?",
    options: ["Próton", "Nêutron", "Elétron", "Núcleo", "Atómo"],
    correctOptionIndex: 2,
    explanation: "Elétrons orbitam o núcleo e possuem carga negativa.",
    category: "Física"
  },
  {
    text: "A unidade de resistência elétrica no Sistema Internacional é o:",
    options: ["Volt", "Ampère", "Watt", "Ohm", "Joule"],
    correctOptionIndex: 3,
    explanation: "O Ohm (Ω) mede a oposição à passagem de corrente elétrica.",
    category: "Física"
  },
  {
    text: "O som é uma onda do tipo:",
    options: ["Eletromagnética", "Mecânica", "Transversal", "Luminosa", "Vácuo"],
    correctOptionIndex: 1,
    explanation: "Ondas mecânicas (como o som) precisam de um meio material para se propagar.",
    category: "Física"
  },
  {
    text: "A pressão atmosférica ao nível do mar é aproximadamente:",
    options: ["1 atm", "2 atm", "0,5 atm", "10 atm", "0 atm"],
    correctOptionIndex: 0,
    explanation: "1 atm (atmosfera) é o valor padrão ao nível do mar.",
    category: "Física"
  },
  {
    text: "O símbolo químico do Ouro é:",
    options: ["Or", "Ou", "Au", "Ag", "Fe"],
    correctOptionIndex: 2,
    explanation: "Vem do latim 'Aurum'.",
    category: "Química"
  },
  {
    text: "Qual é o pH de uma substância neutra?",
    options: ["0", "1", "7", "10", "14"],
    correctOptionIndex: 2,
    explanation: "Escala de pH: 0-6 ácido, 7 neutro, 8-14 básico (alcalino).",
    category: "Química"
  },
  {
    text: "O principal gás responsável pelo efeito estufa é o:",
    options: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hélio", "Argônio"],
    correctOptionIndex: 2,
    explanation: "O CO₂ é o principal gás emitido por atividades humanas que causa aquecimento global.",
    category: "Química"
  },
  {
    text: "A passagem do estado sólido para o líquido chama-se:",
    options: ["Vaporização", "Solidificação", "Fusão", "Condensação", "Sublimação"],
    correctOptionIndex: 2,
    explanation: "Fusão é o derretimento do sólido.",
    category: "Química"
  },
  {
    text: "A fórmula da água é:",
    options: ["HO₂", "H₂O", "OH", "CO₂", "NaCl"],
    correctOptionIndex: 1,
    explanation: "Dois átomos de hidrogênio e um de oxigênio.",
    category: "Química"
  },
  {
    text: "Qual destes elementos é um gás nobre?",
    options: ["Oxigênio", "Hidrogênio", "Hélio", "Cloro", "Lítio"],
    correctOptionIndex: 2,
    explanation: "Gases nobres ficam na última coluna da tabela periódica (Estáveis).",
    category: "Química"
  },
  {
    text: "A mistura de água e sal é considerada uma mistura:",
    options: ["Heterogênea", "Homogênea", "Coloide", "Pura", "Instável"],
    correctOptionIndex: 1,
    explanation: "Possui apenas uma fase visível após a dissolução.",
    category: "Química"
  },
  {
    text: "O menor componente de um elemento que mantém suas propriedades é o:",
    options: ["Molécula", "Célula", "Átomo", "Tecido", "Gota"],
    correctOptionIndex: 2,
    explanation: "Átomos são os blocos fundamentais da matéria.",
    category: "Química"
  },
  {
    text: "A organela responsável pela respiração celular é a:",
    options: ["Cloroplasto", "Ribossomo", "Mitocôndria", "Lisossomo", "Vacúolo"],
    correctOptionIndex: 2,
    explanation: "As mitocôndrias produzem energia (ATP) para a célula.",
    category: "Biologia"
  },
  {
    text: "Qual destes animais é um anfíbio?",
    options: ["Jacaré", "Baleia", "Sapo", "Tubarão", "Pinguim"],
    correctOptionIndex: 2,
    explanation: "Anfíbios têm ciclo de vida na água e na terra.",
    category: "Biologia"
  },
  {
    text: "O processo pelo qual as plantas produzem seu próprio alimento é a:",
    options: ["Respiração", "Transpiração", "Fotossíntese", "Digestão", "Germinação"],
    correctOptionIndex: 2,
    explanation: "Usa luz solar, CO₂ e água para produzir glicose e oxigênio.",
    category: "Biologia"
  },
  {
    text: "O principal açúcar circulante no sangue humano é a:",
    options: ["Lactose", "Frutose", "Glicose", "Sacarose", "Amido"],
    correctOptionIndex: 2,
    explanation: "A glicemia mede o nível de glicose no sangue.",
    category: "Biologia"
  },
  {
    text: "Quantos cromossomos tem uma célula humana normal (diplóide)?",
    options: ["23", "44", "46", "48", "50"],
    correctOptionIndex: 2,
    explanation: "São 23 pares, totalizando 46 cromossomos.",
    category: "Biologia"
  },
  {
    text: "O grupo sanguíneo considerado 'doador universal' é:",
    options: ["A+", "B-", "AB+", "O-", "O+"],
    correctOptionIndex: 3,
    explanation: "O sangue O- pode ser transfundido em qualquer pessoa.",
    category: "Biologia"
  },
  {
    text: "Qual destes órgãos pertence ao sistema excretor?",
    options: ["Coração", "Rim", "Pulmão", "Estômago", "Cérebro"],
    correctOptionIndex: 1,
    explanation: "Os rins filtram o sangue e produzem a urina.",
    category: "Biologia"
  },
  {
    text: "A vacina serve para:",
    options: ["Curar uma doença instalada", "Prevenir doenças", "Suplementar vitaminas", "Aumentar a massa muscular", "Diminuir o sono"],
    correctOptionIndex: 1,
    explanation: "Vacinas estimulam a produção de anticorpos antes do contato com o patógeno.",
    category: "Biologia"
  },
  {
    text: "Em que ano começou a Primeira Guerra Mundial?",
    options: ["1910", "1914", "1918", "1939", "1945"],
    correctOptionIndex: 1,
    explanation: "Iniciou-se em 1914 após o assassinato do arquiduque Francisco Ferdinando.",
    category: "História"
  },
  {
    text: "Quem foi o primeiro presidente do Brasil?",
    options: ["Getúlio Vargas", "D. Pedro II", "Deodoro da Fonseca", "Floriano Peixoto", "Juscelino Kubitschek"],
    correctOptionIndex: 2,
    explanation: "Proclamou a República e assumiu o governo provisório em 1889.",
    category: "História"
  },
  {
    text: "A Revolução Francesa teve como lema:",
    options: ["Ordem e Progresso", "Paz e Amor", "Liberdade, Igualdade e Fraternidade", "Deus, Pátria e Família", "Vencer ou Morrer"],
    correctOptionIndex: 2,
    explanation: "Liberté, Égalité, Fraternité.",
    category: "História"
  },
  {
    text: "O período colonial brasileiro terminou com a:",
    options: ["Lei Áurea", "Proclamação da República", "Independência do Brasil", "Chegada da família real", "Guerra do Paraguai"],
    correctOptionIndex: 2,
    explanation: "Em 7 de setembro de 1822 o Brasil tornou-se independente de Portugal.",
    category: "História"
  },
  {
    text: "A muralha da China foi construída principalmente para:",
    options: ["Beleza estética", "Proteção contra invasores", "Marcar território agrícola", "Prática de esportes", "Ligar cidades"],
    correctOptionIndex: 1,
    explanation: "Construída para proteger o império chinês de tribos nômades do norte.",
    category: "História"
  },
  {
    text: "O regime político de Atenas na Antiguidade clássica era a:",
    options: ["Monarquia", "Ditadura", "Democracia", "Teocracia", "Oligarquia"],
    correctOptionIndex: 2,
    explanation: "Atenas é considerada o berço da democracia ocidental.",
    category: "História"
  },
  {
    text: "Quem descobriu o caminho marítimo para as Índias contornando a África?",
    options: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Américo Vespúcio", "Fernão de Magalhães"],
    correctOptionIndex: 2,
    explanation: "Vasco da Gama completou a viagem em 1498.",
    category: "História"
  },
  {
    text: "Qual civilização antiga construiu as pirâmides de Gizé?",
    options: ["Maias", "Incas", "Egípcios", "Gregos", "Romanos"],
    correctOptionIndex: 2,
    explanation: "Construídas como túmulos para faraós como Queóps.",
    category: "História"
  },
  {
    text: "Qual é o maior oceano do planeta?",
    options: ["Atlântico", "Índico", "Antártico", "Pacífico", "Ártico"],
    correctOptionIndex: 3,
    explanation: "O Pacífico cobre quase um terço da superfície da Terra.",
    category: "Geografia"
  },
  {
    text: "O Brasil está localizado em qual continente?",
    options: ["América Central", "América do Norte", "América do Sul", "Europa", "África"],
    correctOptionIndex: 2,
    explanation: "O Brasil ocupa a maior parte do leste da América do Sul.",
    category: "Geografia"
  },
  {
    text: "Qual é a capital da França?",
    options: ["Londres", "Berlim", "Roma", "Paris", "Madri"],
    correctOptionIndex: 3,
    explanation: "Paris é a capital e cidade mais populosa da França.",
    category: "Geografia"
  },
  {
    text: "A linha imaginária que divide a Terra em hemisfério Norte e Sul é o:",
    options: ["Meridiano de Greenwich", "Trópico de Câncer", "Equador", "Trópico de Capricórnio", "Círculo Polar Ártico"],
    correctOptionIndex: 2,
    explanation: "O Equador é o círculo máximo equidistante dos pólos.",
    category: "Geografia"
  },
  {
    text: "O principal rio que atravessa a floresta Amazônica é o:",
    options: ["Nilo", "Ganges", "Amazonas", "São Francisco", "Paraná"],
    correctOptionIndex: 2,
    explanation: "O rio Amazonas é o maior em volume de água do mundo.",
    category: "Geografia"
  },
  {
    text: "País mais populoso do mundo (atualmente competindo com a Índia):",
    options: ["Rússia", "EUA", "Brasil", "China", "Japão"],
    correctOptionIndex: 3,
    explanation: "China e Índia são os dois países com mais de 1 bilhão de habitantes.",
    category: "Geografia"
  },
  {
    text: "Qual deserto é o maior do mundo (em área total, incluindo gelo)?",
    options: ["Saara", "Atacama", "Gobi", "Antártida", "Arábico"],
    correctOptionIndex: 3,
    explanation: "Embora frio, a Antártida é classificada como um deserto polar devido à baixa precipitação.",
    category: "Geografia"
  },
  {
    text: "O ponto mais alto da Terra é o monte:",
    options: ["Everest", "K2", "Kilimanjaro", "Aconcágua", "Mont Blanc"],
    correctOptionIndex: 0,
    explanation: "O Everest tem 8.848 metros acima do nível do mar.",
    category: "Geografia"
  },
  {
    text: "A capital do estado de São Paulo é:",
    options: ["Campinas", "Santos", "São Paulo", "Ribeirão Preto", "Sorocaba"],
    correctOptionIndex: 2,
    explanation: "A cidade de São Paulo é a capital e centro financeiro do estado.",
    category: "Geografia"
  }
];
