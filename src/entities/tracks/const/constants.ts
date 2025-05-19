export interface Minor {
  name: string;
  relatedSkills: string[];
  threshold: number; // минимальный балл для рекомендации
}

export const MINORS: Minor[] = [
  {
    name: "Математический майнор",
    relatedSkills: ["Математика", "Физика", "Аналитика"],
    threshold: 70,
  },
  {
    name: "Программирование и инженерия",
    relatedSkills: ["Программирование", "Инженерия"],
    threshold: 60,
  },
];
