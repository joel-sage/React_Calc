import React from 'react'
import ThemeDockIcon from './ThemeDockIcon'

const ThemeDock = () => {
    return (
        <section className='h-fit w-fit absolute flex top-10 left-[50%] translate-x-[-50%] mx-auto bg-[#01050f] rounded-[15px]'>
            <ThemeDockIcon active={true} name={'🌒'} />
            <ThemeDockIcon name={'🌖'} />
        </section>
    )
}

export default ThemeDock