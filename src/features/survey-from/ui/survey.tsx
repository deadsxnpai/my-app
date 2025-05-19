import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Card } from "@/shared";
import { VStack, HStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/button-new/button";
import { Input } from "@/shared/ui/input/input";
import { Text } from "@/shared/ui/Text/Text";
import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import cls from "./styles.module.less";
import { CORRECT_ANSWERS, QUESTIONS } from "./questions";

type QuestionFormData = {
  [skill: string]: (number | undefined)[];
};

type SurveyFormProps = {
  onProgressChange?: (percent: number) => void;
  onSubmit?: (result: { skill: string; value: number }[]) => void;
  setIsOpen?: (open: boolean) => void;
};

export const SurveyForm: React.FC<SurveyFormProps> = ({
  onProgressChange,
  onSubmit,
  setIsOpen,
}) => {
  const [step, setStep] = useState<"select-skills" | "answer-questions">(
    "select-skills"
  );
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [finalData, setFinalData] = useState<
    { skill: string; value: number }[]
  >([]);

  const { register, handleSubmit, setValue, watch, trigger, control } =
    useForm<QuestionFormData>({
      defaultValues: {},
    });

  const handleNext = async () => {
    selectedSkills.forEach((skill) => {
      const length = QUESTIONS[skill]?.length || 3;
      setValue(skill, Array(length).fill(undefined));
    });
    await trigger();
    setStep("answer-questions");
  };

  const handleSkillSelect = (skill: string) => {
    setSelectedSkills((prev) => {
      if (prev.includes(skill)) {
        return prev.filter((s) => s !== skill);
      }
      if (prev.length < 6) {
        return [...prev, skill];
      }
      return prev;
    });
  };

  const allValues = watch();

  useEffect(() => {
    if (step === "answer-questions" && selectedSkills.length > 0) {
      let completedSkillsCount = 0;

      selectedSkills.forEach((skill) => {
        const answers = allValues[skill];
        if (answers && answers.length > 0) {
          const allAnswered = answers.every(
            (val) => typeof val === "number" && val >= 0 && val <= 3
          );
          if (allAnswered) {
            completedSkillsCount += 1;
          }
        }
      });

      const percent = Math.round(
        (completedSkillsCount / selectedSkills.length) * 100
      );
      console.log("Progress:", percent);
      onProgressChange && onProgressChange(percent);
    } else {
      onProgressChange && onProgressChange(0);
    }
  }, [allValues, selectedSkills, step, onProgressChange]);

  const onFinalSubmit = (data: QuestionFormData) => {
    setIsOpen && setIsOpen(false);

    const result = Object.entries(data).map(([skill, answers]) => {
      const correctAnswers = CORRECT_ANSWERS[skill] || [];

      const total = answers.reduce((acc, val, idx) => {
        if (val === undefined) return acc;
        if (val === 0) return acc;
        return acc + (val === correctAnswers[idx] ? 3 : 1);
      }, 0);

      const max = answers.length * 3;
      const value = max > 0 ? Math.round((total / max) * 100) : 0;

      return { skill, value };
    });

    console.log("[result]", result);
    setFinalData(result);
    onSubmit && onSubmit(result);
  };

  const restart = () => {
    setStep("select-skills");
    setSelectedSkills([]);
    setFinalData([]);
  };

  return (
    <Card className={cls.card}>
      <VStack gap="16">
        {step === "select-skills" && (
          <>
            <Text color="white" size="l" text="Выберите 6 ключевых навыков" />

            {Object.keys(CORRECT_ANSWERS).map((skill) => (
              <Checkbox
                key={skill}
                label={skill}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => handleSkillSelect(skill)}
              />
            ))}

            <Text
              color="white"
              size="m"
              text={`Выбрано ${selectedSkills.length} из 6`}
            />

            <Button disabled={selectedSkills.length !== 6} onClick={handleNext}>
              Продолжить
            </Button>
          </>
        )}

        {step === "answer-questions" && (
          <form onSubmit={handleSubmit(onFinalSubmit)}>
            <Text
              color="white"
              size="l"
              text="Ответьте на вопросы по каждому навыку (оценка от 0 до 3)"
            />
            <VStack gap="16">
              {selectedSkills.map((skill) => (
                <Card key={skill} padding="16">
                  <Text color="white" size="m" text={`Навык: ${skill}`} />
                  <VStack gap="8" style={{ marginTop: 8 }}>
                    {(QUESTIONS[skill] || []).map((question, i) => (
                      <div key={i}>
                        <Text color="white" size="s" text={question} />

                        <Controller
                          control={control}
                          name={`${skill}.${i}`}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <HStack gap="8" style={{ marginTop: 4 }}>
                              {[
                                { label: "Да", value: 3 },
                                { label: "Нет", value: 1 },
                                { label: "Не знаю", value: 0 },
                              ].map(({ label, value }) => (
                                <label key={value} style={{ color: "#fff" }}>
                                  <input
                                    type="radio"
                                    value={value}
                                    checked={field.value === value}
                                    onChange={() => field.onChange(value)}
                                  />
                                  {label}
                                </label>
                              ))}
                            </HStack>
                          )}
                        />
                      </div>
                    ))}
                  </VStack>
                </Card>
              ))}
            </VStack>

            <HStack gap="16" style={{ marginTop: 24 }}>
              <Button type="submit">Сохранить</Button>
              <Button variant="secondary" type="button" onClick={restart}>
                Назад
              </Button>
            </HStack>
          </form>
        )}

        {/* {finalData.length > 0 && (
					<VStack
						gap='8'
						style={{ marginTop: 24 }}>
						<Text
							color='white'
							size='l'
							text='Результаты опроса:'
						/>
						{finalData.map(({ skill, value }) => (
							<Text
								key={skill}
								color='white'
								size='m'
								text={`${skill}: ${value}%`}
							/>
						))}
					</VStack>
				)} */}
      </VStack>
    </Card>
  );
};
