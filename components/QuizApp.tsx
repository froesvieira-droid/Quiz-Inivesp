'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/hooks/use-auth';
import { getQuestions, saveResult, getLeaderboard, Question, UserResult } from '@/lib/db';
import { getAiExplanation } from '@/lib/gemini';
import { CheckCircle2, XCircle, LogOut, Trophy, Brain, Sparkles, ChevronRight, RefreshCw, Loader2, User } from 'lucide-react';
import dynamic from 'next/dynamic';

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function QuizApp() {
  const { user, loading: authLoading, login, logout } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [leaderboard, setLeaderboard] = useState<UserResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    async function init() {
      if (user) {
        setLoading(true);
        const data = await getQuestions();
        setQuestions(data);
        const lb = await getLeaderboard();
        setLeaderboard(lb);
        setLoading(false);
      }
    }
    init();
  }, [user]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim()) {
      login(guestName.trim());
    }
  };

  const handleAnswer = async (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === questions[currentIndex].correctOptionIndex) {
      setScore(s => s + 1);
    } else {
      // Get AI explanation for wrong answer
      setIsAiLoading(true);
      const explanation = await getAiExplanation(
        questions[currentIndex].text,
        questions[currentIndex].options[index],
        questions[currentIndex].options[questions[currentIndex].correctOptionIndex],
        questions[currentIndex].explanation
      );
      setAiExplanation(explanation ?? "Não foi possível gerar uma explicação detalhada no momento.");
      setIsAiLoading(false);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setAiExplanation(null);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    setShowResults(true);
    if (user) {
      await saveResult({
        userId: user.uid,
        userName: user.displayName || 'Estudante',
        score: score,
        totalQuestions: questions.length
      });
      const lb = await getLeaderboard();
      setLeaderboard(lb);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowResults(false);
    setAiExplanation(null);
  };

  if (authLoading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-[#f8fafc]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white p-10 rounded-[16px] border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] space-y-8"
        >
          <div className="bg-[#eff6ff] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
            <Brain className="w-8 h-8 text-[#2563eb]" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-[#0f172a]">UNIVESP Quiz Master</h1>
            <p className="text-[#64748b] text-sm">Entre com seu nome para começar o quiz e salvar seu progresso localmente.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
              <input 
                type="text" 
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Seu nome"
                required
                className="w-full pl-11 pr-4 py-4 rounded-xl border border-[#e2e8f0] focus:ring-2 focus:ring-[#2563eb] outline-none transition-all text-[#1e293b]"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#2563eb] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Começar agora
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  if (loading) return <div className="flex h-screen items-center justify-center bg-[#f8fafc]"><Loader2 className="animate-spin text-[#2563eb]" /></div>;

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6 md:p-12 min-h-screen">
        {score === questions.length && <ReactConfetti recycle={false} />}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-12 rounded-[16px] border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] text-center space-y-8"
        >
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto" />
          <h2 className="text-3xl font-bold text-[#0f172a]">Quiz Finalizado!</h2>
          
          <div className="flex justify-center gap-12 py-6 border-y border-[#f1f5f9]">
            <div className="text-center">
              <span className="block text-5xl font-extrabold text-[#2563eb]">{score}</span>
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider font-bold">Acertos</span>
            </div>
            <div className="text-center">
              <span className="block text-5xl font-extrabold text-[#e2e8f0]">{questions.length}</span>
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider font-bold">Total</span>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <h3 className="font-bold text-[#64748b] uppercase text-[10px] tracking-wider font-bold">Ranking Global</h3>
            <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] overflow-hidden">
              {leaderboard.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b last:border-b-0 border-[#f1f5f9] bg-white text-sm">
                   <div className="flex items-center gap-4">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-50 text-slate-400'}`}>
                        {i + 1}
                      </span>
                      <span className="font-semibold text-[#1e293b]">{item.userName}</span>
                   </div>
                   <span className="font-bold text-[#2563eb]">{item.score}/{item.totalQuestions}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={resetQuiz}
              className="bg-[#2563eb] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <RefreshCw className="w-4 h-4" /> Tentar Novamente
            </button>
            <button 
              onClick={logout}
              className="bg-white text-[#64748b] border border-[#e2e8f0] py-4 rounded-xl font-bold hover:bg-[#f8fafc] transition-all flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Sair
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <nav className="bg-white border-b border-[#e2e8f0] h-[70px] flex items-center justify-between px-6 md:px-10 sticky top-0 z-10 shadow-sm">
        <div className="font-bold text-xl text-[#2563eb] tracking-tight">QUIZ_ENGINE <span className="text-[#64748b] font-medium text-sm">v1.2</span></div>
        <div className="flex gap-6">
          <div className="text-center hidden md:block">
            <div className="text-[10px] uppercase tracking-wider text-[#64748b] font-bold">Desempenho</div>
            <div className="text-base font-bold text-[#0f172a]">{Math.round((score / Math.max(1, currentIndex)) * 100)}%</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-wider text-[#64748b] font-bold">Pontuação</div>
            <div className="text-base font-bold text-[#0f172a]">{score * 100} pts</div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <section className="quiz-container space-y-6">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="question-card bg-white p-8 md:p-10 rounded-[16px] border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
          >
            <div className="question-meta text-sm font-semibold text-[#64748b] mb-4">Pergunta {currentIndex + 1} de {questions.length} • {currentQuestion.category}</div>
            
            <div className="progress-bar w-full h-1.5 bg-[#e2e8f0] rounded-full mb-8 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                className="progress-fill h-full bg-[#2563eb] rounded-full"
              />
            </div>

            <h2 className="question-text text-xl md:text-2xl font-semibold leading-tight mb-8 text-[#0f172a]">
              {currentQuestion.text}
            </h2>

            <div className="options-grid grid gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuestion.correctOptionIndex;
                const showCorrect = isAnswered && isCorrect;
                const showWrong = isAnswered && isSelected && !isCorrect;

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleAnswer(idx)}
                    className={`option-btn w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between group text-base font-medium
                      ${isSelected ? 'selected border-[#2563eb] bg-[#eff6ff] text-[#1e40af] border-2 shadow-sm' : 'border-[#e2e8f0] hover:border-[#cbd5e1] bg-white'}
                      ${showCorrect ? 'correct border-[#10b981] bg-[#ecfdf5] text-[#065f46] !opacity-100 shadow-sm' : ''}
                      ${showWrong ? 'border-[#ef4444] bg-[#fef2f2] text-[#991b1b] shadow-sm' : ''}
                      ${isAnswered && !isSelected && !isCorrect ? 'opacity-40 grayscale-[0.5]' : ''}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs border
                        ${isSelected ? 'bg-[#2563eb] text-white border-transparent' : 'bg-slate-50 text-slate-400 border-[#e2e8f0]'}
                        ${showCorrect ? 'bg-[#10b981] text-white border-transparent' : ''}
                        ${showWrong ? 'bg-[#ef4444] text-white border-transparent' : ''}
                      `}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {option}
                    </div>
                    <div className="flex-shrink-0">
                      {showCorrect && <CheckCircle2 className="text-[#10b981] w-5 h-5" />}
                      {showWrong && <XCircle className="text-[#ef4444] w-5 h-5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <AnimatePresence>
            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="explanation-box bg-[#f8fafc] border-l-4 border-[#2563eb] p-6 rounded-r-xl shadow-sm"
              >
                <div className="space-y-4">
                  <h4 className="font-bold text-[#64748b] text-[10px] uppercase tracking-wider">Explicação do Gabarito</h4>
                  <p className="text-sm leading-relaxed text-[#475569]">
                    {currentQuestion.explanation}
                  </p>
                  
                  {aiExplanation && (
                    <div className="pt-4 border-t border-[#e2e8f0]">
                      <h4 className="font-bold text-[#2563eb] text-[10px] uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Sparkles className="w-3 h-3" /> Complemento IA
                      </h4>
                      <p className="text-sm italic leading-relaxed text-[#64748b]">
                        {aiExplanation}
                      </p>
                    </div>
                  )}

                  {isAiLoading && (
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[#64748b] animate-pulse">
                      <Loader2 className="w-3 h-3 animate-spin" /> Gerando contexto adicional...
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {isAnswered && (
            <button
              onClick={nextQuestion}
              className="w-full bg-[#2563eb] text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md group"
            >
              {currentIndex === questions.length - 1 ? 'Finalizar Quiz' : 'Próxima Questão'} 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </section>

        <aside className="sidebar hidden lg:flex flex-col gap-6">
          <div className="results-panel bg-white p-6 rounded-[16px] border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] text-center">
            <h3 className="panel-title text-[10px] font-bold text-[#64748b] uppercase tracking-wider mb-8 text-left">Desempenho em Tempo Real</h3>
            <div className="accuracy-circle relative w-32 h-32 mx-auto mb-4 border-8 border-[#f1f5f9] rounded-full flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 border-8 border-[#10b981] rounded-full" style={{ clipPath: `inset(0 0 ${100 - (score / Math.max(1, Math.min(currentIndex + 1, questions.length))) * 100}% 0)` }}></div>
               <span className="text-2xl font-extrabold text-[#0f172a]">{Math.round((score / Math.max(1, Math.min(currentIndex + 1, questions.length))) * 100)}%</span>
            </div>
            <p className="text-center text-[10px] text-[#64748b] font-medium mb-8">Precisão das Respostas</p>
            
            <div className="history-list space-y-3">
              <h4 className="panel-title text-[10px] font-bold text-[#64748b] uppercase tracking-wider text-left">Líderes</h4>
              {leaderboard.slice(0, 5).map((item, i) => (
                <div key={i} className="history-item flex justify-between items-center text-xs py-2 border-b border-[#f1f5f9] last:border-0 font-medium">
                  <span className="text-[#64748b] truncate pr-4">{item.userName}</span>
                  <span className="font-bold text-[#2563eb] whitespace-nowrap">{item.score} pts</span>
                </div>
              ))}
            </div>
          </div>

          <div className="results-panel bg-[#2563eb] p-6 rounded-[16px] text-white space-y-2 border-none">
            <div className="panel-title text-[10px] font-bold uppercase tracking-wider opacity-70 text-white">Status da Prova</div>
            <div style={{ fontSize: '18px', fontWeight: 600 }}>Candidato UNIVESP</div>
            <p style={{ fontSize: '12px', opacity: 0.8, lineHeight: 1.6 }}>Você está {score >= 3 ? 'no caminho certo' : 'começando sua jornada'} para a aprovação.</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
