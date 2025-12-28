
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizViewProps {
  quizzes: QuizQuestion[];
}

const QuizView: React.FC<QuizViewProps> = ({ quizzes }) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === quizzes[currentQuizIndex].correctAnswer) {
      setScore(s => s + 1);
    }

    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-4 khmer-title">លទ្ធផលរបស់អ្នក</h3>
        <p className="text-4xl font-black text-blue-600 mb-6">{score} / {quizzes.length}</p>
        <p className="text-gray-600 mb-8">
          {score === quizzes.length ? 'អស្ចារ្យណាស់! អ្នកយល់ច្បាស់ពីមេរៀននេះ។' : 'ព្យាយាមម្តងទៀតដើម្បីពង្រឹងចំណេះដឹង!'}
        </p>
        <button
          onClick={handleReset}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
        >
          ធ្វើតេស្តម្តងទៀត
        </button>
      </div>
    );
  }

  const currentQuiz = quizzes[currentQuizIndex];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">សំណួរទី {currentQuizIndex + 1}</span>
        <span className="text-xs text-gray-400">{currentQuizIndex + 1} នៃ {quizzes.length}</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-8">{currentQuiz.question}</h3>
      
      <div className="space-y-4 mb-10">
        {currentQuiz.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !isAnswered && setSelectedOption(idx)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              selectedOption === idx
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <div className="flex items-center">
              <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-4 border ${
                selectedOption === idx ? 'bg-blue-500 text-white' : 'bg-gray-50 text-gray-400'
              }`}>
                {String.fromCharCode(65 + idx)}
              </span>
              <span className={selectedOption === idx ? 'text-blue-900 font-semibold' : 'text-gray-700'}>
                {option}
              </span>
            </div>
          </button>
        ))}
      </div>

      <button
        disabled={selectedOption === null}
        onClick={handleNext}
        className={`w-full py-4 rounded-xl font-bold transition-all ${
          selectedOption !== null
            ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        បន្តទៅមុខទៀត
      </button>
    </div>
  );
};

export default QuizView;
