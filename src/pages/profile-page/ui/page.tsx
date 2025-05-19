import React, { useEffect, useState } from "react";
import { MainLayout } from "@/shared/layouts";
import cls from "./styles.module.less";

import { HStack, VStack } from "@/shared/ui/Stack";
import { StudentInfoCard } from "@/entities/student/ui/student-card";
import { ProfileForm } from "@/features/fill-profile-form";
import { ProfileProgressChart } from "@/features/profile-analitycs";
import { StudentSkillsRadar } from "@/entities/student-skills";
import { Text } from "@/shared";
import { useDispatch } from "react-redux";
import { setSkillsScores } from "@/entities/student/redux/slice";

const ProfilePage = () => {
  const [surveyProgress, setSurveyProgress] = useState<number>(0);

  const chartData = [
    { name: "Заполнено", value: surveyProgress },
    { name: "Не заполнено", value: 100 - surveyProgress },
  ];
  const [finalData, setFinalData] = React.useState<
    { skill: string; value: number }[]
  >([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (finalData.length > 0) {
      dispatch(setSkillsScores(finalData));
    }
  }, [finalData, dispatch]);
  console.log("finalData", finalData);
  return (
    <MainLayout className={cls.main}>
      <Text
        color="white"
        size="l"
        text={`Результаты доступны при заполнении опроса на 100%`}
      />
      <HStack gap="16">
        <VStack className={cls.container}>
          <ProfileProgressChart
            setFinalData={setFinalData}
            chartData={chartData}
            onCompletePercent={setSurveyProgress}
          />
          <StudentInfoCard
            finalData={finalData}
            show={surveyProgress === 100}
          />
          <ProfileForm />
        </VStack>
        {surveyProgress === 100 && <StudentSkillsRadar data={finalData} />}
      </HStack>
    </MainLayout>
  );
};

export default ProfilePage;
