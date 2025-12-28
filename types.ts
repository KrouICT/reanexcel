
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ExcelLesson {
  id: string;
  title: string;
  category: 'Basic' | 'Intermediate' | 'Advanced';
  description: string;
  syntax: string;
  example: {
    data: any[][];
    formula: string;
    result: string;
    explanation: string;
  };
  practice: string;
  quizzes: QuizQuestion[];
}

export type Category = 'Basic' | 'Intermediate' | 'Advanced';
