import { MINORS, Minor } from "@/entities/tracks/const/constants";

export function recommendMinors(skillsScores: any[]): Minor[] {
  return MINORS.filter((minor) =>
    minor.relatedSkills.some((skill) => {
      const skillScore = skillsScores.find((s) => s.skill === skill);
      return skillScore ? skillScore.value >= minor.threshold : false;
    })
  );
}
