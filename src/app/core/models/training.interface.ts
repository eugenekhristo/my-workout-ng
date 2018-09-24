export interface SingeAchievement {
  timestamp: number;
  results: number[];
}

export interface Achievement {
  best: SingeAchievement;
  first: SingeAchievement;
  previous: SingeAchievement;
  current: SingeAchievement;
}

export interface Training {
  id: string;
  title: string;
  details: string;
  lastTrained: number;
  isTrained: boolean;
  setsNumber: number;
  breakSecs: number;
  achivements: Achievement;
}
