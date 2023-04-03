'use client'

import { useState } from "react"
import s from './counter.module.scss'

const Counter = (): JSX.Element => {
    const [count, setCount] = useState<number>(0)

    const increase = (value: number = 1) => () => setCount(state => state += value) 
    const decrease = (value: number = 1) => () => setCount(state => state -= value) 

    return (
        <div className={s.counter}>
            <div onClick={decrease(1)}>-</div>
            <div>{ count }</div>
            <div onClick={increase(1)}>+</div>
        </div>
    )
}

export default Counter