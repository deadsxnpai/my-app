import React from 'react'
import { MainLayout } from '@/shared/layouts'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import cls from './HomeWidget.module.less'
import second from '@/shared/assets/images/navigation_contanct.svg'
import { IconBook, IconFileAnalytics, IconSchool } from '@tabler/icons'
import useGetRole from '@/shared/api/useGetRole/useGetRole'
import { NavigationCard } from '@/shared/ui/NavigationCard'
import { UserRoles } from '@/shared/constants/userRoles'

const HomeWidget = () => {
  const role = useGetRole()
  const navigationCards = [
    {
      name: 'Дисциплины по выбору',
      desc: 'Перейти в раздел',
      path: '/minors',
      img: second,
      role: [
        UserRoles.STUDENT,
        UserRoles.TESTER,
        UserRoles.ADMIN
      ],
      icon: <IconBook size={ 80 } color="#000000" strokeWidth="1" />,
    },
    {
      name: 'Пройти опрос',
      desc: 'Перейти в раздел',
      path: '/form',
      img: second,
      role: [
        UserRoles.STUDENT,
        UserRoles.TESTER,
        UserRoles.ADMIN
      ],
      icon: <IconFileAnalytics size={ 80 } color="#000000" strokeWidth="1" />,
    },
    {
      name: 'Помощь в выборе',
      desc: 'Перейти в раздел',
      path: '/helper',
      img: second,
      role: [
        UserRoles.STUDENT,
        UserRoles.TESTER,
        UserRoles.ADMIN
      ],
      icon: <IconSchool size={ 80 } color="#000000" strokeWidth="1" />,
    },
  ]
    return <>
      <MainLayout className={cls.main}>
        <VStack gap="16" align='center'>
          <Text
            className={cls.Text}
            size="l"
            text="Добро пожаловать в систему поддержки принятия решений по выбору учебных предметов!"
          />
          </VStack>
        <div className={cls.Navigation}>
        <HStack justify='between' gap="24" align='center'>
          { navigationCards.map(i => (i.role.includes(role) ? (
            <NavigationCard props={ i } key={ i.name } />
          ) : null)
          ) }
        </HStack>
        </div>
      </MainLayout>
    </>
  }
  
  
  export default HomeWidget