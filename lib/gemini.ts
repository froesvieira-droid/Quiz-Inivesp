import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    console.warn("NEXT_PUBLIC_GEMINI_API_KEY is not set or using placeholder.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export async function getAiExplanation(questionText: string, selectedOption: string, correctOption: string, explanation: string) {
  try {
    const ai = getAiClient();
    if (!ai) {
      return "Para ver explicações detalhadas por IA, configure sua chave GEMINI_API_KEY nas configurações do projeto.";
    }

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `Você é um professor tutor para o vestibular da UNIVESP. 
      O aluno errou uma questão ou quer mais detalhes.
      Questão: ${questionText}
      Opção selecionada pelo aluno: ${selectedOption}
      Opção correta: ${correctOption}
      Explicação base: ${explanation}
      
      Por favor, forneça uma explicação didática e encorajadora em português, explicando por que a opção correta é a certa e por que a opção do aluno estava incorreta (se aplicável). Seja conciso.`,
    });
    return response.text;
  } catch (error: unknown) {
    console.error("Gemini Error:", error);
    const err = error as { status?: number; message?: string };
    if (err?.status === 403 || err?.message?.includes('403')) {
      return "Erro de permissão da API (403). Verifique se sua chave da API tem permissão para usar este modelo ou se você está em uma região suportada.";
    }
    return "Não foi possível gerar uma explicação detalhada no momento.";
  }
}
