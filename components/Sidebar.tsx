
import React, { useState, useMemo } from 'react';
import { EXCEL_LESSONS } from '../constants/excelData';
import { ExcelLesson, Category } from '../types';

interface SidebarProps {
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeLessonId, onSelectLesson, isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories: Category[] = ['Basic', 'Intermediate', 'Advanced'];

  const getCategoryLabel = (cat: Category) => {
    switch (cat) {
      case 'Basic': return 'កម្រិតដំបូង';
      case 'Intermediate': return 'កម្រិតមធ្យម';
      case 'Advanced': return 'កម្រិតខ្ពស់';
    }
  };

  const filteredLessons = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return EXCEL_LESSONS.filter(l =>
      l.title.toLowerCase().includes(term) ||
      l.id.toLowerCase().includes(term) ||
      l.description.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-all duration-300 ease-in-out z-50 w-72 bg-white border-r border-slate-100 flex flex-col`}>
      {/* Sidebar Header */}
      <div className="p-5 border-b border-slate-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h2 className="text-base font-bold text-slate-800 khmer-title">មេរៀន Excel</h2>
          </div>
          <button onClick={onClose} className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Integrated Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="ស្វែងរករូបមន្ត..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border-none rounded-xl py-2 pl-9 pr-4 text-xs focus:ring-2 focus:ring-emerald-500/20 transition-all text-slate-700 placeholder-slate-400"
          />
          <svg className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {filteredLessons.length === 0 ? (
          <div className="text-center py-10 px-4">
            <p className="text-slate-400 text-xs">រកមិនឃើញ "{searchTerm}"</p>
          </div>
        ) : (
          categories.map(cat => {
            const catLessons = filteredLessons.filter(l => l.category === cat);
            if (catLessons.length === 0) return null;

            return (
              <div key={cat} className="space-y-1">
                <h3 className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  {getCategoryLabel(cat)}
                </h3>
                <div className="space-y-0.5">
                  {catLessons.map(lesson => (
                    <button
                      key={lesson.id}
                      onClick={() => {
                        onSelectLesson(lesson.id);
                        onClose();
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-3 ${
                        activeLessonId === lesson.id
                          ? 'bg-emerald-50 text-emerald-700 font-semibold shadow-sm ring-1 ring-emerald-100'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-current opacity-40"></span>
                      <span className="truncate">{lesson.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer Branding */}
      <div className="p-4 border-t border-slate-50 bg-slate-50/30">
        <div className="flex items-center justify-center gap-2 grayscale opacity-40">
           <span className="text-[10px] font-bold uppercase tracking-tighter">Excel Master Khmer</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
