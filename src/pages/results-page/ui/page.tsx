import React from "react";
import { MainLayout } from "@/shared/layouts";
import cls from "./styles.module.less";

import { VStack } from "@/shared/ui/Stack";
import { recommendMinors } from "@/features/recommened-minors";
import { useSelector } from "react-redux";
import { Card, Text } from "@/shared";
const ResultPage = () => {
  const skillsScores = useSelector((state: any) => state.profile.skillsScores);
  const recommendedMinors = recommendMinors(skillsScores);
  return (
    <MainLayout className={cls.main}>
      <Card padding="16">
        <Text
          color="white"
          size="m"
          title={`Вам подходят следующие элективы:`}
        />
      </Card>
      <VStack className={cls.container}>
        {recommendedMinors.length > 0 ? (
          recommendedMinors.map((minor) => (
            <Card padding="16">
              <Text color="white" size="m" text={`${minor.name}`} />
            </Card>
          ))
        ) : (
          <div>Нет подходящих майноров</div>
        )}
      </VStack>
    </MainLayout>
  );
};

export default ResultPage;
