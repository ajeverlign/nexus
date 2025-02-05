export type Question = {
  name: string;
  question: string;
};

export const questions: Question[] = [
  {
    name: "John",
    question: "How can we effectively optimize AI models for edge computing while maintaining accuracy?"
  },
  {
    name: "Sarah",
    question: "What strategies would you propose for reducing latency in edge AI applications?"
  },
  {
    name: "Michael",
    question: "How can we balance model compression and performance in edge AI deployments?"
  },
  // Add more name-question pairs as needed
];

export function getQuestionByName(name: string): string {
  const defaultQuestion = "What innovative approaches would you suggest for optimizing AI model performance in edge computing scenarios?";
  if (!name) return defaultQuestion;
  
  const found = questions.find(q => q.name.toLowerCase() === name.toLowerCase());
  return found?.question || defaultQuestion;
}