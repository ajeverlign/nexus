export type Question = {
  name: string;
  question: string;
};

export const questions: Question[] = [
  {
    name: "pranav",
    question: "Hard work is my second name, enthusiasm is my daily game, I never frown, never hide, look around I'm by your side"
  },
  {
    name: "zubair",
    question: "I arrive before the sun does rise, And leave when stars begin to light the skies. When games are sought, but partners few, I'm always there, a sporting friend to you."
  },
  {
    name: "ashwini",
    question: "At foosball she's like a fish trying to fly,\n'Hey, look at me!' is her constant cry,\nWhile I score goals and smoothly pass her by!"
  },
  {
    name: "chaitanya",
    question: "I ask a lot but answer less,\nIn every talk, I try to speak the best.\nWho am I?"
  },
  {
    name: "jitesh",
    question: "With Budweiser in hand, leaving chaos in his trail,\nWhile I clean up his mess, it's an endless tale!"
  },
  {
    name: "amit",
    question: "When you were new, I stood near,\nYour first friend, I made things clear.\nI ride on electric wheels each day,\nCan you guess who I am, right away?"
  },
  {
    name: "santosh",
    question: "Helping others is my tribe, work doesn't tire me, I stay upbeat, who am I in this treasure route?"
  },
  {
    name: "prasad",
    question: "I always talk about cash, Making people laugh is goal, Who am I?"
  },
  {
    name: "khushi",
    question: "I nourish bodies, big and small, Providing sustenance for one and all. From rumbling tummies, I bring relief, A midday haven, a culinary brief"
  },
  {
    name: "pratiksha",
    question: "I share my name with a famous cricketer.\nYou call me Pandya, but beyond the nickname,\nI'm known for my analytical thinking and problem-solving skills.\nCan you connect the dots and guess my real name?"
  },
  {
    name: "sachin",
    question: "I juggle tasks, risks, and plans with care,Keeping projects on track, always aware.From kickoff to close, I lead the way,Find me fast—don’t delay"
  },
  {
    name: "ankit",
    question: "Once a voice that filled the space,\nNow I observe with a quieter grace,\nGuess my name"
  },
  {
    name: "rahuld",
    question: "From foosball triumphs to Satkar's tasty fare, our foodie adventures we love to share. The next course awaits, if you dare."
  },
  {
    name: "rohit",
    question: "From Resurg's rise to Pizza Hut's delight, a journey of learning, where your wisdom took flight. Since fresher days my own confidence has grown, credited to your guidance alone!"
  },
  {
    name: "rahulc",
    question: " I keep the budgets, and scope in sight,Guiding the team to deliver it right.With tasks and milestones, I make the call,Find me, and you'll solve it all!"
  },
  {
    name: "aakriti",
    question: "Who is someone always complaining about soreness?"
  },
  {
    name: "ashish",
    question: "An avid traveler from Lonavala"
  },
  {
    name: "mugdha",
    question: "I don’t build, I don’t create,But without me, projects miss their fate.A master of tasks, a leader with grace, Find me fast to win this race"
  }
];

export function getQuestionByName(name: string): string {
  const defaultQuestion = "Hmm, looks like this person might be keeping a High profile. Try asking around at the Latent.AI booth!";
  if (!name) return defaultQuestion;
  
  // Clean up the input name:
  // 1. Convert to lowercase
  // 2. Take only the first name
  // 3. Remove extra spaces
  const cleanName = name.toLowerCase().trim().split(' ')[0];
  
  const found = questions.find(q => q.name === cleanName);
  return found?.question || defaultQuestion;
}