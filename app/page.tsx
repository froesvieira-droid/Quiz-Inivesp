'use client';

import dynamic from 'next/dynamic';

const QuizApp = dynamic(() => import('@/components/QuizApp'), { 
  ssr: false,
  loading: () => <div className="flex h-screen items-center justify-center bg-[#f8fafc]">Carregando Quiz...</div>
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <QuizApp />
    </main>
  );
}
