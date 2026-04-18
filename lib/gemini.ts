import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export async function getAiExplanation(questionText: string, selectedOption: string, correctOption: string, explanation: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Você é um professor tutor para o vestibular da UNIVESP. 
      O aluno errou uma questão ou quer mais detalhes.
      Questão: ${questionText}
      Opção selecionada pelo aluno: ${selectedOption}
      Opção correta: ${correctOption}
      Explicação base: ${explanation}
      
      Por favor, forneça uma explicação didática e encorajadora em português, explicando por que a opção correta é a certa e por que a opção do aluno estava incorreta (se aplicável). Seja conciso.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Não foi possível gerar uma explicação detalhada no momento.";
  }
}
