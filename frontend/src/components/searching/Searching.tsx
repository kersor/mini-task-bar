import React, { Dispatch, FC, SetStateAction } from 'react'

export interface ITaskComponent {
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
}

const Searching: FC<ITaskComponent> = ({searchValue, setSearchValue}) => {
    const funcOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }


    return (
    <div className='p-[15px] border-b border-[#555555] flex justify-between'>
        <div className='flex gap-[10px] w-full'>
            <img src="/images/search.svg" alt="" />
            <input onChange={funcOnChange} value={searchValue} className='w-full h-[30px] bg-transparent placeholder:text-[#555555] outline-0' placeholder='Search...' type="text" />
        </div>
        <button onClick={() => setSearchValue('')}><img src="/images/x.svg" alt="" /></button>
    </div>
    )
}

export default Searching