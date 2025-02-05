interface QuestionData {
    name: string;
    question: string;
  }
  
  export const questions: QuestionData[] = [
    {
      name: "John",
      question: "john teri ma ki nchu"
    },
    {
      name: "Emma",
      question: "How can edge computing transform the future of AI deployment?"
    },
    // Add more questions as needed
  ];
  
  export function getQuestionByName(name: string): string {
    const found = questions.find(q => q.name.toLowerCase() === name.toLowerCase());
    return found?.question || "Default question about AI and edge computing innovation?";
  }
  