
import React from 'react';
import { ExcelLesson } from '../types';
import QuizView from './QuizView';

interface LessonViewProps {
  lesson: ExcelLesson;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      
      {/* Minimal Header */}
      <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            lesson.category === 'Basic' ? 'bg-emerald-50 text-emerald-600' : 
            lesson.category === 'Intermediate' ? 'bg-amber-50 text-amber-600' : 
            'bg-rose-50 text-rose-600'
          }`}>
            {lesson.category}
          </span>
          <span className="text-[10px] text-slate-300 font-bold">ID: {lesson.id.toUpperCase()}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 khmer-title text-slate-800 leading-tight">{lesson.title}</h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">{lesson.description}</p>
      </section>

      {/* Core Content Grid */}
      <div className="grid grid-cols-1 gap-6">
        
        {/* Syntax & Examples */}
        <div className="space-y-6">
          {/* Syntax Card */}
          <section className="bg-slate-900 p-5 md:p-6 rounded-3xl shadow-lg shadow-slate-200">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              របៀបប្រើប្រាស់រូបមន្ត
            </h3>
            <div className="bg-slate-800/50 p-4 rounded-xl font-mono text-sm md:text-base text-emerald-400 border border-slate-700/50 overflow-x-auto select-all">
              {lesson.syntax}
            </div>
          </section>

          {/* Spreadsheet Simulator */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="px-5 py-3 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-rose-400/60"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60"></div>
                </div>
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter">Spreadsheet Preview</span>
             </div>
             
             <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50/20 border-b border-slate-50">
                      <th className="w-10 py-2 px-3 border-r border-slate-50 text-[9px] font-bold text-slate-200 italic">#</th>
                      {lesson.example.data[0].map((_, i) => (
                        <th key={i} className="py-2 px-4 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">{String.fromCharCode(65 + i)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {lesson.example.data.map((row, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-slate-50/30 transition-colors">
                        <td className="py-3 px-3 border-r border-slate-50 text-center text-[10px] font-medium text-slate-200 italic">{rowIndex + 1}</td>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className={`py-3 px-4 text-xs border-b border-slate-50/50 ${cell.startsWith('=') ? 'bg-emerald-500/5 text-emerald-700 font-mono font-bold' : 'text-slate-600 font-medium'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>

             <div className="p-5 md:p-6 bg-slate-50/30 border-t border-slate-100/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Formula</span>
                    <div className="p-3 bg-white rounded-xl border border-slate-100 font-mono text-blue-600 font-bold text-xs shadow-sm">
                      {lesson.example.formula}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Result</span>
                    <div className="p-3 bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-md flex items-center justify-center">
                      {lesson.example.result}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-8 h-8 shrink-0 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">ការពន្យល់</span>
                    <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed">{lesson.example.explanation}</p>
                  </div>
                </div>
             </div>
          </section>
        </div>

        {/* Practice & Quiz Sidebars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-indigo-600 p-6 rounded-3xl text-white shadow-lg shadow-indigo-100">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            </div>
            <h3 className="text-base font-bold mb-2 khmer-title">លំហាត់អនុវត្ត</h3>
            <p className="text-indigo-100 text-xs md:text-sm font-light leading-relaxed">{lesson.practice}</p>
          </section>

          {lesson.quizzes.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
                តេស្តចំណេះដឹង
              </h3>
              <QuizView quizzes={lesson.quizzes} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonView;
