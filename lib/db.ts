import { 
  collection, 
  getDocs, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  Timestamp, 
  serverTimestamp 
} from "firebase/firestore";
import { db } from "./firebase";

export interface Question {
  id?: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  category: string;
}

export interface UserResult {
  userId: string;
  userName: string;
  score: number;
  totalQuestions: number;
  timestamp: Timestamp | any;
}

export const getQuestions = async (): Promise<Question[]> => {
  const q = collection(db, "questions");
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Question));
};

export const saveResult = async (result: Omit<UserResult, "timestamp">) => {
  return await addDoc(collection(db, "results"), {
    ...result,
    timestamp: serverTimestamp()
  });
};

export const getLeaderboard = async (limitNum = 10): Promise<UserResult[]> => {
  const q = query(collection(db, "results"), orderBy("score", "desc"), limit(limitNum));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ ...doc.data() } as UserResult));
};

// Seed questions if empty
export const seedQuestionsIfEmpty = async () => {
  const questions = await getQuestions();
  if (questions.length > 0) return;

  const initialQuestions: Omit<Question, "id">[] = [
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
      text: "Depreende-se da análise do cartum que as propagandas são:",
      options: ["empáticas", "comedidas", "manipuladoras", "fidedignas", "detalhistas"],
      correctOptionIndex: 2,
      explanation: "O cartum ironiza a frase 'sua ligação é muito importante para nós' enquanto o homem aguarda infinitamente, sugerindo que as propagandas tentam manipular a percepção do consumidor.",
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
    }
  ];

  const colRef = collection(db, "questions");
  for (const q of initialQuestions) {
    await addDoc(colRef, q);
  }
};
