import React from 'react'

const ThemeDockIcon = ({ name, active }) => {
    return (
        <div
            style={{
            fontWeight: 'bold'
            }}
            className={`
            ${(active) && 'text-white'} 
            rounded-[15px] active:text-white
            h-[43px] w-[50px] flex items-center
            transition-[5s] justify-center
            hover:scale-[1.3]`}
        >
            {
                name
            }
        </div>
    )
}

export default ThemeDockIcon