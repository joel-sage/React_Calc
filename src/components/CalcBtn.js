import React from 'react'

const CalcBtn = ({ symbol, onBtnClick, onClick, className }) => {

    const handledPress = () => {
        onBtnClick(symbol);
    }

    const numbers = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '.',
    ]

    const operators = [
        '=',
        '+',
        '-',
        '*',
        '/',
    ]
    
    const actionBtns = [
        'AC',
        'C',
        '%'
    ]

    return (
        <div
            style={{
                fontWeight: 'bold'
            }}
            className={`
            ${className} 
            ${actionBtns.includes(symbol) && 'text-[#00ec7e]'} 
            ${operators.includes(symbol) && 'text-[#db0042]'} 
            ${numbers.includes(symbol) && 'text-white'}  
            cursor-pointer h-[50px] w-[50px] bg-[#030f0f] rounded-[12px]
            flex items-center justify-center transition-[.5s]
            hover:scale-[1.14] hover:bg-[#aaaaaa80]
            hover:text-white`}
            onClick={onBtnClick? handledPress : onClick}
        >
            {(symbol !== '*') && symbol}
            {(symbol === '*') && 'x'}
        </div>
    )
}

export default CalcBtn