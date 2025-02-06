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
    question: "Someone who can crack intellectual jokes"
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
    question: "At lunch, I served with grace,\nwhile you called yourself the clumsy one in this space.\nI'm known for my voice that resonates and my melodies that elevate.\nIf you can hum a tune, you might find your way to the right place."
  },
  {
    name: "pratiksha",
    question: "I share my name with a famous cricketer.\nYou call me Pandya, but beyond the nickname,\nI'm known for my analytical thinking and problem-solving skills.\nCan you connect the dots and guess my real name?"
  },
  {
    name: "sachin",
    question: "I speak in codes, but not with words,\nI fix the glitches, crashes, and errors absurd.\nIf your screen goes blue or your email won't send,\nI'm the one you call, your techy friend"
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
    question: "When expenses rise and profits fall, I make sense of it all"
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
    question: "I welcome new faces, say goodbye to a few,\nI help you learn, and help you renew.\nFrom policies to perks, I know them best,\nFind me now, complete your quest"
  }
];

export function getQuestionByName(name: string): string {
  const defaultQuestion = "Hmm, looks like this person might be keeping a low profile. Try asking around at the Latent.AI booth!";
  if (!name) return defaultQuestion;
  
  // Clean up the input name:
  // 1. Convert to lowercase
  // 2. Take only the first name
  // 3. Remove extra spaces
  const cleanName = name.toLowerCase().trim().split(' ')[0];
  
  const found = questions.find(q => q.name === cleanName);
  return found?.question || defaultQuestion;
}