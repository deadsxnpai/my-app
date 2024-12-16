import React from 'react'
import { MainLayout } from '@/shared/layouts'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import cls from './HomePage.module.less'
const HomePage = () => {
    return <>
      <MainLayout>
        <VStack>
          <Text className={cls.Text} size='l' text='Добро пожаловать в систему поддержки принятия решений по выбору предметов для эффективного обучения!' />
          <Text className={cls.Text} size='m' text='Наша система разработана для того, чтобы помочь вам выбрать наиболее подходящие учебные дисциплины в рамках вашего образовательного процесса. Мы понимаем, как сложно выбрать правильные предметы среди множества вариантов, и стремимся облегчить этот выбор, предоставив инструменты, которые помогут принять обоснованное и взвешенное решение.' />
          <Text className={cls.Text} size='m' text='Система анализирует ваши предпочтения, цели и требования, чтобы предложить оптимальные варианты предметов, которые будут соответствовать вашим интересам и образовательным потребностям. Она учитывает не только ваш текущий уровень знаний, но и перспективы на будущее, позволяя строить индивидуальную траекторию обучения.' />
          <Text className={cls.Text} size='m' text='Система построена таким образом, чтобы предложить вам максимально персонализированный опыт. Мы уверены, что с ее помощью вы сможете сделать осознанный выбор и эффективно планировать свое обучение.' />
          </VStack>
      </MainLayout>
    </>
  }
  
  
  export default HomePage