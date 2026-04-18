import { ALL_QUESTIONS } from "./questions";

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
  timestamp: string;
}

export const getQuestions = async (): Promise<Question[]> => {
  return ALL_QUESTIONS;
};

export const saveResult = async (result: Omit<UserResult, "timestamp">) => {
  const results = JSON.parse(localStorage.getItem('quiz_results') || '[]');
  const newResult = { ...result, timestamp: new Date().toISOString() };
  results.push(newResult);
  localStorage.setItem('quiz_results', JSON.stringify(results));
  return newResult;
};

export const getLeaderboard = async (limitNum = 10): Promise<UserResult[]> => {
  const results: UserResult[] = JSON.parse(localStorage.getItem('quiz_results') || '[]');
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limitNum);
};

export const seedQuestionsIfEmpty = async () => {
  // No-op for local version as we use STATIC_QUESTIONS
};
