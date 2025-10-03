const feed = document.getElementById("feed");
const player = document.getElementById("player");
const itemTitle = document.getElementById("item-title");
const translatedText = document.getElementById("translated-text");
const langSelect = document.getElementById("lang-select");
const closeBtn = document.getElementById("close-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");

const languageNames = {
  pt: "Português",
  en: "Inglês",
  es: "Espanhol",
  fr: "Francês",
  de: "Alemão"
};

const stories = [
  {
    title: "O segredo da chave",
    img: "https://m.media-amazon.com/images/I/81UoKzN6eJL._UF1000,1000_QL80_.jpg",
    texts: {
      pt: "Lucas encontrou uma chave antiga no sótão de sua avó. Curioso, ele procurou pela casa até encontrar uma porta secreta. Ao abrir, descobriu uma sala cheia de livros e objetos mágicos. Desde então, ele passou a visitar aquele lugar todos os dias, aprendendo segredos incríveis sobre magia e história da família.",
      en: "Lucas found an old key in his grandmother’s attic. Curious, he searched the house until he discovered a secret door. When he opened it, he found a room full of books and magical objects. Since then, he has visited that place every day, learning amazing secrets about magic and his family’s history.",
      es: "Lucas encontró una llave antigua en el ático de su abuela. Curioso, buscó por la casa hasta encontrar una puerta secreta. Al abrirla, descubrió una habitación llena de libros y objetos mágicos. Desde entonces, visitaba ese lugar todos los días, aprendiendo secretos increíbles sobre la magia y la historia de su familia.",
      fr: "Lucas a trouvé une vieille clé dans le grenier de sa grand-mère. Curieux, il a cherché dans la maison jusqu’à trouver une porte secrète. En l’ouvrant, il a découvert une pièce pleine de livres et d’objets magiques. Depuis, il visite cet endroit tous les jours, apprenant des secrets incroyables sur la magie et l’histoire de sa famille.",
      de: "Lucas fand einen alten Schlüssel auf dem Dachboden seiner Großmutter. Neugierig suchte er im Haus, bis er eine geheime Tür fand. Als er sie öffnete, entdeckte er einen Raum voller Bücher und magischer Gegenstände. Seitdem besucht er diesen Ort jeden Tag und lernt erstaunliche Geheimnisse über Magie und die Geschichte seiner Familie."
    }
  },
  {
    title: "O Encontro na Floresta encatado ",
    img: "https://hotmart.s3.amazonaws.com/product_pictures/937a04fd-0b73-47c4-93ca-88d710443ebd/Leonardo_Phoenix_10_Capa_para_BookThe_cover_features_a_vibran_2.jpg",
    texts: {
      pt: "Athur caminhava pela floresta quando ouviu um choro suave. Seguindo o som, encontrou um filhote de lobo preso entre os galhos. Ela o libertou e o animal a acompanhou até a vila. Desde aquele dia, eles se tornaram inseparáveis, compartilhando aventuras e protegendo a floresta juntos.",
      en: "Athur was walking through the forest when she heard a soft cry. Following the sound, she found a wolf pup stuck among the branches. She freed it, and the animal followed her to the village. From that day on, they became inseparable, sharing adventures and protecting the forest together.",
      es: "Athur caminaba por el bosque cuando escuchó un suave llanto. Siguiendo el sonido, encontró a un cachorro de lobo atrapado entre las ramas. Lo liberó y el animal la acompañó hasta la aldea. Desde ese día, se volvieron inseparables, compartiendo aventuras y protegiendo el bosque juntos.",
      fr: "Athur marchait dans la forêt lorsqu’elle entendit un faible cri. En suivant le son, elle trouva un louveteau coincé entre les branches. Elle le libéra et l’animal la suivit jusqu’au village. Depuis ce jour, ils sont devenus inséparables, partageant des aventures et protégeant la forêt ensemble.",
      de: "Athur ging durch den Wald, als sie ein leises Weinen hörte. Dem Geräusch folgend, fand sie ein Wolfsjunges, das zwischen den Zweigen feststeckte. Sie befreite es, und das Tier folgte ihr ins Dorf. Von diesem Tag an wurden sie unzertrennlich, teilten Abenteuer und beschützten gemeinsam den Wald."
    }
  },
  {
    title: "O Tempo escapou do relogio",
    img: "https://m.media-amazon.com/images/I/91SlQvyHewL._UF1000,1000_QL80_.jpg",
    texts: {
      pt: "Miguel herdou um antigo relógio de bolso do seu avô. Ao girar o ponteiro, ele percebeu que podia voltar no tempo por alguns minutos. Usando esse poder, ajudou pessoas em pequenas situações, sempre aprendendo algo novo sobre a vida e o valor das escolhas.",
      en: "Miguel inherited an old pocket watch from his grandfather. When he turned the hand, he realized he could go back in time for a few minutes. Using this power, he helped people in small situations, always learning something new about life and the value of choices.",
      es: "Miguel heredó un antiguo reloj de bolsillo de su abuelo. Al girar la manecilla, se dio cuenta de que podía retroceder en el tiempo unos minutos. Usando este poder, ayudó a personas en pequeñas situaciones, siempre aprendiendo algo nuevo sobre la vida y el valor de las decisiones.",
      fr: "Miguel a hérité d’une vieille montre à gousset de son grand-père. En tournant l’aiguille, il se rendit compte qu’il pouvait remonter le temps de quelques minutes. En utilisant ce pouvoir, il aidait les gens dans de petites situations, apprenant toujours quelque chose de nouveau sur la vie et la valeur des choix.",
      de: "Miguel erbte eine alte Taschenuhr von seinem Großvater. Als er den Zeiger drehte, bemerkte er, dass er für ein paar Minuten in der Zeit zurückreisen konnte. Mit dieser Kraft half er Menschen in kleinen Situationen und lernte immer etwas Neues über das Leben und den Wert von Entscheidungen."
    }
  },
  {
    title: "a biblioteca secreta",
    img: "https://m.media-amazon.com/images/I/616vEwCjTxL._UF1000,1000_QL80_.jpg",
    texts: {
      pt: "Sofia descobriu uma passagem secreta na biblioteca da escola. Lá dentro, encontrou livros que contavam histórias que nunca existiram no mundo real. Cada página ensinava lições valiosas sobre coragem, amizade e criatividade. Ela prometeu guardar aquele segredo para sempre.",
      en: "Sofia discovered a secret passage in the school library. Inside, she found books that told stories that never existed in the real world. Each page taught valuable lessons about courage, friendship, and creativity. She promised to keep that secret forever.",
      es: "Sofía descubrió un pasaje secreto en la biblioteca de la escuela. Allí dentro, encontró libros que contaban historias que nunca existieron en el mundo real. Cada página enseñaba valiosas lecciones sobre el coraje, la amistad y la creatividad. Prometió guardar ese secreto para siempre.",
      fr: "Sofia a découvert un passage secret dans la bibliothèque de l’école. À l’intérieur, elle trouva des livres racontant des histoires qui n’avaient jamais existé dans le monde réel. Chaque page enseignait des leçons précieuses sur le courage, l’amitié et la créativité. Elle promit de garder ce secret pour toujours.",
      de: "Sofia entdeckte einen geheimen Durchgang in der Schulbibliothek. Dort fand sie Bücher, die Geschichten erzählten, die es in der realen Welt nie gegeben hatte. Jede Seite lehrte wertvolle Lektionen über Mut, Freundschaft und Kreativität. Sie versprach, dieses Geheimnis für immer zu bewahren."
    }
  },
  {
    title: "O Pintor de Sonhos",
    img: "https://www.papodecinema.com.br/wp-content/uploads/2022/02/20220216-o-pintor-de-sonhos-papo-de-cinema-cartaz.webp",
    texts: {
      pt: "João era um pintor que não desenhava o que via, mas o que as pessoas sonhavam. Cada quadro transformava sonhos em cores vivas. As pessoas vinham de longe para ver suas obras e se inspirar, percebendo que os sonhos poderiam se tornar realidade se acreditassem neles.",
      en: "João was a painter who didn’t paint what he saw, but what people dreamed. Each painting turned dreams into vivid colors. People came from far away to see his works and get inspired, realizing that dreams could become reality if they believed in them.",
      es: "João era un pintor que no dibujaba lo que veía, sino lo que la gente soñaba. Cada cuadro transformaba los sueños en colores vivos. La gente venía de lejos para ver sus obras e inspirarse, dándose cuenta de que los sueños podrían convertirse en realidad si creían en ellos.",
      fr: "João était un peintre qui ne peignait pas ce qu’il voyait, mais ce que les gens rêvaient. Chaque tableau transformait les rêves en couleurs vives. Les gens venaient de loin pour voir ses œuvres et s’inspirer, réalisant que les rêves pouvaient devenir réalité s’ils y croyaient.",
      de: "João war ein Maler, der nicht malte, was er sah, sondern was die Menschen träumten. Jedes Gemälde verwandelte Träume in lebendige Farben. Die Menschen kamen von weit her, um seine Werke zu sehen und sich inspirieren zu lassen, und erkannten, dass Träume Wirklichkeit werden könnten, wenn man an sie glaubte."
    }
  },
  {
    title: "A Cidade Submersa",
    img: "https://m.media-amazon.com/images/I/91nLiWD7EpL._UF1000,1000_QL80_.jpg",
    texts: {
      pt: "Durante uma expedição submarina, Clara descobriu uma cidade antiga submersa. As construções ainda eram impressionantes, e em cada rua havia histórias de um povo esquecido. Ela registrou tudo e compartilhou com o mundo, lembrando que algumas maravilhas do passado ainda esperam para serem descobertas.",
      en: "During an underwater expedition, Clara discovered an ancient submerged city. The buildings were still impressive, and every street held stories of a forgotten people. She documented everything and shared it with the world, reminding everyone that some wonders of the past are still waiting to be discovered.",
      es: "Durante una expedición submarina, Clara descubrió una antigua ciudad sumergida. Las construcciones aún eran impresionantes, y en cada calle había historias de un pueblo olvidado. Documentó todo y lo compartió con el mundo, recordando que algunas maravillas del pasado aún esperan ser descubiertas.",
      fr: "Lors d’une expédition sous-marine, Clara découvrit une ancienne ville submergée. Les bâtiments étaient encore impressionnants et chaque rue racontait l’histoire d’un peuple oublié. Elle documenta tout et partagea avec le monde, rappelant que certaines merveilles du passé attendent encore d’être découvertes.",
      de: "Während einer Unterwasserexpedition entdeckte Clara eine alte versunkene Stadt. Die Gebäude waren noch beeindruckend, und in jeder Straße gab es Geschichten eines vergessenen Volkes. Sie dokumentierte alles und teilte es mit der Welt, um daran zu erinnern, dass einige Wunder der Vergangenheit noch darauf warten, entdeckt zu werden."
    }
  },
  {
    title: "A Ponte dos Mistérios",
    img: "https://gataborralheira34.wordpress.com/wp-content/uploads/2020/02/image.jpeg?w=259",
    texts: {
      pt: "Pedro atravessava uma ponte antiga quando ouviu vozes sussurrando segredos do passado. Cada passo revelava memórias esquecidas da cidade. Ele se tornou guardião da ponte, mantendo viva a história e as lendas locais.",
      en: "Pedro was crossing an old bridge when he heard voices whispering secrets from the past. Each step revealed forgotten memories of the city. He became the guardian of the bridge, keeping alive the history and local legends.",
      es: "Pedro cruzaba un puente antiguo cuando escuchó voces susurrando secretos del pasado. Cada paso revelaba recuerdos olvidados de la ciudad. Se convirtió en el guardián del puente, manteniendo viva la historia y las leyendas locales.",
      fr: "Pedro traversait un vieux pont lorsqu’il entendit des voix chuchotant des secrets du passé. Chaque pas révélait des souvenirs oubliés de la ville. Il devint le gardien du pont, maintenant vivante l’histoire et les légendes locales.",
      de: "Pedro überquerte eine alte Brücke, als er Stimmen hörte, die Geheimnisse aus der Vergangenheit flüsterten. Jeder Schritt enthüllte vergessene Erinnerungen der Stadt. Er wurde zum Hüter der Brücke und hielt die Geschichte und die lokalen Legenden lebendig."
    }
  },
  {
    title: "O Jardim Encantado",
    img: "https://editoraappris.com.br/wp-content/uploads/2022/05/Edleia-Lopes_capa_14x21.jpg",
    texts: {
      pt: "Lúcia encontrou um jardim escondido atrás de uma parede de hera. Flores brilhavam em cores impossíveis e pássaros cantavam melodias mágicas. Cada visita a fazia sentir-se conectada com a natureza e com algo além do mundo visível.",
      en: "Lúcia discovered a garden hidden behind a wall of ivy. Flowers glowed in impossible colors, and birds sang magical melodies. Each visit made her feel connected to nature and something beyond the visible world.",
      es: "Lucía descubrió un jardín escondido detrás de una pared de hiedra. Las flores brillaban con colores imposibles y los pájaros cantaban melodías mágicas. Cada visita la hacía sentir conectada con la naturaleza y con algo más allá del mundo visible.",
      fr: "Lúcia découvrit un jardin caché derrière un mur de lierre. Les fleurs brillaient de couleurs impossibles et les oiseaux chantaient des mélodies magiques. Chaque visite la faisait se sentir connectée à la nature et à quelque chose au-delà du monde visible.",
      de: "Lúcia entdeckte einen Garten, der hinter einer Mauer aus Efeu verborgen war. Blumen leuchteten in unmöglichen Farben, und Vögel sangen magische Melodien. Jeder Besuch ließ sie sich mit der Natur und etwas jenseits der sichtbaren Welt verbunden fühlen."
    }
  },
  {
    title: "O Trem Fantasma",
    img: "https://preview.redd.it/ghost-train-illustration-by-me-v0-k6c0ie98u1xd1.jpg?width=640&crop=smart&auto=webp&s=e6c4972353d61e55942317f3a6ef50717e486304",
    texts: {
      pt: "Em uma noite de neblina, Rafael ouviu o apito de um trem que não existia nos mapas. Curioso, embarcou e descobriu passageiros de diferentes épocas. Ele passou a viajar entre o passado e o presente, aprendendo lições que mudaram sua vida.",
      en: "On a foggy night, Rafael heard the whistle of a train that didn’t exist on the maps. Curious, he boarded and discovered passengers from different eras. He began traveling between past and present, learning lessons that changed his life.",
      es: "En una noche de niebla, Rafael escuchó el silbato de un tren que no existía en los mapas. Curioso, subió y descubrió pasajeros de diferentes épocas. Comenzó a viajar entre el pasado y el presente, aprendiendo lecciones que cambiaron su vida.",
      fr: "Par une nuit de brouillard, Rafael entendit le sifflet d’un train qui n’existait pas sur les cartes. Curieux, il monta à bord et découvrit des passagers de différentes époques. Il commença à voyager entre le passé et le présent, apprenant des leçons qui changèrent sa vie.",
      de: "In einer nebligen Nacht hörte Rafael das Pfeifen eines Zuges, der auf den Karten nicht existierte. Neugierig stieg er ein und entdeckte Passagiere aus verschiedenen Epochen. Er begann, zwischen Vergangenheit und Gegenwart zu reisen und lernte Lektionen, die sein Leben veränderten."
    }
  },
  {
    title: "A Ilha dos misterios",
    img: "https://m.media-amazon.com/images/I/51JUwfvzd1L._UF1000,1000_QL80_.jpg",
    texts: {
      pt: "Mariana chegou a uma ilha desconhecida, onde cada pedra parecia contar uma história. Animais falavam entre si, e árvores antigas guardavam memórias de exploradores. Ela passou dias explorando e descobriu que a ilha tinha vida própria.",
      en: "Mariana arrived at an unknown island, where every stone seemed to tell a story. Animals spoke to each other, and ancient trees held memories of explorers. She spent days exploring and discovered that the island had a life of its own.",
      es: "Mariana llegó a una isla desconocida, donde cada piedra parecía contar una historia. Los animales hablaban entre sí y los árboles antiguos guardaban recuerdos de exploradores. Pasó días explorando y descubrió que la isla tenía vida propia.",
      fr: "Mariana arriva sur une île inconnue, où chaque pierre semblait raconter une histoire. Les animaux se parlaient entre eux et les arbres anciens conservaient les souvenirs des explorateurs. Elle passa des jours à explorer et découvrit que l’île avait sa propre vie.",
      de: "Mariana erreichte eine unbekannte Insel, auf der jeder Stein eine Geschichte zu erzählen schien. Tiere sprachen miteinander, und alte Bäume bewahrten die Erinnerungen der Entdecker. Sie verbrachte Tage damit, die Insel zu erkunden, und entdeckte, dass die Insel ein eigenes Leben hatte."
    }
  },
  {
    title: "O Livro Infinito",
    img: "https://m.media-amazon.com/images/I/91QKqz1x5UL._UF1000,1000_QL80_.jpg",
    texts: {
      pt: "Lua encontrou um livro que nunca terminava. Cada vez que virava uma página, surgiam novas histórias e personagens. Ele percebeu que poderia criar mundos inteiros e se tornou um escritor que explorava infinitas possibilidades.",
      en: "Lua found a book that never ended. Each time he turned a page, new stories and characters appeared. He realized he could create entire worlds and became a writer exploring infinite possibilities.",
      es: "Lua encontró un libro que nunca terminaba. Cada vez que pasaba una página, surgían nuevas historias y personajes. Se dio cuenta de que podía crear mundos enteros y se convirtió en un escritor explorando posibilidades infinitas.",
      fr: "Lua trouva un livre qui ne finissait jamais. Chaque fois qu’il tournait une page, de nouvelles histoires et personnages apparaissaient. Il réalisa qu’il pouvait créer des mondes entiers et devint un écrivain explorant des possibilités infinies.",
      de: "Lua fand ein Buch, das nie endete. Jedes Mal, wenn er eine Seite umblätterte, erschienen neue Geschichten und Charaktere. Er erkannte, dass er ganze Welten erschaffen konnte, und wurde ein Schriftsteller, der unendliche Möglichkeiten erkundete."
    }
  },
  {
    title: " Trovão Azul",
    img: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/27/35/20394084.JPG",
    texts: {
      pt: "Durante uma tempestade, Elisa viu um relâmpago azul que tocou o solo e abriu um portal. Curiosa, atravessou e encontrou um mundo feito de luz e energia. Aprendeu que a coragem de seguir o desconhecido podia revelar universos incríveis.",
      en: "During a storm, Elisa saw a blue lightning strike the ground and open a portal. Curious, she went through and found a world made of light and energy. She learned that the courage to follow the unknown could reveal amazing universes.",
      es: "Durante una tormenta, Elisa vio un rayo azul que tocó el suelo y abrió un portal. Curiosa, atravesó y encontró un mundo hecho de luz y energía. Aprendió que el valor de seguir lo desconocido podía revelar universos increíbles.",
      fr: "Pendant une tempête, Elisa vit un éclair bleu toucher le sol et ouvrir un portail. Curieuse, elle traversa et découvrit un monde fait de lumière et d’énergie. Elle apprit que le courage de suivre l’inconnu pouvait révéler des univers incroyables.",
      de: "Während eines Sturms sah Elisa einen blauen Blitz, der den Boden berührte und ein Portal öffnete. Neugierig ging sie hindurch und fand eine Welt aus Licht und Energie. Sie lernte, dass der Mut, dem Unbekannten zu folgen, erstaunliche Universen offenbaren kann."
    }
  }
];
function loadFeed() {
  feed.innerHTML = "";
  stories.forEach((story, index) => {
    const div = document.createElement("div");
    div.classList.add("feed-item");
    div.style.backgroundImage = `url(${story.img})`;

    div.innerHTML = `
      <div class="overlay">
        <h3>${story.title}</h3>
        <p>${story.texts.pt.substring(0, 60)}...</p>
      </div>
    `;

    div.addEventListener("click", () => openPlayer(index));
    feed.appendChild(div);

    setTimeout(() => div.classList.add("show"), 100 * index);
  });
}

function openPlayer(index) {
  const story = stories[index];
  player.style.display = "flex";
  itemTitle.textContent = story.title;

  // Definindo o idioma inicial como português
  translatedText.textContent = `${languageNames["pt"]}: ${story.texts.pt}`;

  langSelect.innerHTML = "";
  for (const lang in story.texts) {
    const opt = document.createElement("option");
    opt.value = lang;
    opt.textContent = languageNames[lang] || lang;
    langSelect.appendChild(opt);
  }

  // Atualiza o texto ao mudar de idioma
  langSelect.onchange = () => {
    const selectedLang = langSelect.value;
    translatedText.textContent = `${languageNames[selectedLang]}: ${story.texts[selectedLang]}`;
  };
}

closeBtn.addEventListener("click", () => {
  player.style.display = "none";
});

fullscreenBtn.addEventListener("click", () => {
  player.classList.toggle("fullscreen");
});

loadFeed();