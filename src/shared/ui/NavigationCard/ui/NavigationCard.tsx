import React, { useState } from 'react'
import { IconArrowRight } from '@tabler/icons'
import useRedirect from '@/shared/api/useRedirect/useRedirect'
import cls from './NavigationCard.module.less'

interface NavigationCardProps {
    props: {
        path: string
        icon: React.ReactNode
        name: string
        desc: string
        good?: number
    }
}

const NavigationCard: React.FC<NavigationCardProps> = ({ props }) => {
    const [active, setActive] = useState(false)
    const redirect = useRedirect()

    return (
        <div
            className={`${cls.Card} d-cursor`}
            onClick={() => redirect(props.path)}
            onMouseOut={() => setActive(false)}
            onMouseOver={() => setActive(true)}
        >
            {props.icon}

            <div className={`d-row d-center ${cls.title}`}>
                {props.name}
            </div>

            <div className={cls.subtitle}>{props.desc}</div>

            <div
                className={cls.Arrow}
                onClick={() => redirect(props.path)}
                onMouseOut={() => setActive(false)}
                onMouseOver={() => setActive(true)}
            >
                <IconArrowRight color="white" />
            </div>
        </div>
    )
}

export default NavigationCard
