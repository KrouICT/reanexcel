
import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import { EXCEL_LESSONS } from './constants/excelData';
import { askExcelAI } from './services/gemini';

const App: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState(EXCEL_LESSONS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const activeLesson = useMemo(() => 
    EXCEL_LESSONS.find(l => l.id === activeLessonId) || EXCEL_LESSONS[0], 
  [activeLessonId]);

  const handleAskAI = async () => {
    if (!aiQuestion.trim()) return;
    setIsAiLoading(true);
    setAiResponse('');
    const res = await askExcelAI(aiQuestion);
    setAiResponse(res);
    setIsAiLoading(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/50 font-sans text-slate-900">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[45] lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <Sidebar 
        activeLessonId={activeLessonId} 
        onSelectLesson={setActiveLessonId} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Sticky Header */}
        <header className="h-16 bg-white/80 backdrop-blur-lg border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 shrink-0 z-30 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-slate-900 khmer-title leading-none">
                <span className="text-emerald-600">My Langdy</span> Excel
              </h1>
              <span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.3em] mt-0.5 hidden sm:block">Learning Platform</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
             <button 
                onClick={() => setIsAiOpen(true)}
                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl font-bold text-[11px] shadow-sm hover:bg-slate-800 transition-all active:scale-95"
             >
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                សួរ AI
             </button>
          </div>
        </header>

        {/* Scrollable Lesson Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 scroll-smooth">
          <LessonView lesson={activeLesson} />
          
          {/* Minimal Professional Footer */}
          <footer className="mt-20 border-t border-slate-100 pt-16 pb-20">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 mb-4">
                <div className="w-5 h-5 bg-emerald-500 rounded-md"></div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-800 khmer-title">រៀនរូបមន្ត Excel ឱ្យបានច្បាស់លាស់ ១០០%</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed max-w-sm mx-auto">
                  មេរៀនទាំងអស់ត្រូវបានរៀបចំឡើងយ៉ាងសម្រិតសម្រាំង ដើម្បីជួយឱ្យការងាររបស់អ្នកកាន់តែមានប្រសិទ្ធភាព។
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 pt-8 border-t border-slate-50 w-32 mx-auto">
                <div className="text-[10px] font-bold text-slate-700">ដឹកនាំដោយ <span className="text-blue-600">My Langdy</span></div>
                <div className="flex items-center gap-2 text-[8px] font-black text-slate-300 uppercase tracking-widest">
                  <span>Powered by</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                    <div className="w-1 h-1 rounded-full bg-red-400"></div>
                    <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
                  </div>
                  <span>Google AI</span>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* AI Drawer */}
      {isAiOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden flex justify-end">
          <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] transition-opacity" onClick={() => setIsAiOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 bg-slate-900 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold khmer-title">ជំនួយការ Excel AI</h3>
                  <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Master Bot</p>
                </div>
              </div>
              <button onClick={() => setIsAiOpen(false)} className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
              {aiResponse ? (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-center gap-2 mb-4 text-emerald-600 font-bold text-[9px] uppercase tracking-widest">
                    ចម្លើយពី AI
                  </div>
                  <div className="text-slate-700 leading-relaxed whitespace-pre-wrap text-sm font-light">{aiResponse}</div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30 px-8">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  <p className="text-xs font-medium">សួរ AI ដើម្បីទទួលបានការពន្យល់លម្អិត និងរូបមន្តត្រឹមត្រូវ!</p>
                </div>
              )}
              {isAiLoading && (
                <div className="flex flex-col items-center gap-3 py-10">
                  <div className="w-8 h-8 border-3 border-slate-100 border-t-emerald-500 rounded-full animate-spin"></div>
                  <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest animate-pulse">Thinking...</span>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="relative">
                <textarea
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="ឧទាហរណ៍៖ តើត្រូវប្រើ SUMIFS យ៉ាងដូចម្តេច?"
                  className="w-full p-4 pb-14 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all resize-none h-40 text-sm font-light leading-relaxed placeholder-slate-300 shadow-sm"
                />
                <button
                  disabled={isAiLoading || !aiQuestion.trim()}
                  onClick={handleAskAI}
                  className="absolute bottom-3 right-3 bg-slate-900 text-white px-5 py-2 rounded-xl font-bold text-[10px] hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed transition-all shadow-md flex items-center gap-2"
                >
                  ផ្ញើសំណួរ
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
