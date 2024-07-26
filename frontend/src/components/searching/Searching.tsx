import { X } from 'lucide-react'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { useCreateTaskMutation } from '../../store/api/task.api'
import { useDispatch, useSelector } from 'react-redux'
import { createTask } from '../../store/task/task.slice'
import { RootState } from '../../store/store'


export interface ITaskComponent {
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
}

const Searching: FC<ITaskComponent> = ({searchValue, setSearchValue}) => {
    const tasks = useSelector((state: RootState) => state.taskSlice)
    const dispatch = useDispatch()
    
    const [addTask, {error}] = useCreateTaskMutation()
    const funcOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }


    async function funcOnCreateNewTask(value: string) {
        if(!searchValue.length) return 
        if(tasks.arrTasks.length === 0) {
            dispatch(createTask({id: tasks.arrTasks.length + 1, description: value}))
            await addTask({id: tasks.arrTasks.length + 1 , description: value})
            setSearchValue('')
        }else {
            const id = tasks.arrTasks[tasks.arrTasks.length - 1].id + 1
            dispatch(createTask({id: id, description: value}))
            await addTask({id: id , description: value})
            setSearchValue('')
        }
    }

    function funcOnKeyEnter (event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.code === 'Enter') {
            funcOnCreateNewTask(searchValue)
        }
    }

    return (
    <div className='p-[15px] border-b border-[#555555] flex justify-between' onKeyDown={funcOnKeyEnter}>
        <div className='flex gap-[10px] w-full'>
            <img src="/images/search.svg" alt="" />
            <input onChange={funcOnChange} value={searchValue} className='w-full h-[30px] bg-transparent placeholder:text-[#555555] outline-0' placeholder='Search...' type="text" />
        </div>
        <div className='flex gap-[5px] items-center'>
            <button onClick={() => setSearchValue('')}><X size={20} strokeWidth={2} /></button>
            <button onClick={() => funcOnCreateNewTask(searchValue)} className='text-[#2b9725] border border-[#2b9725] px-[10px] py-[5px] rounded-[20px]'>Create</button>
        </div>
    </div>
    )
}

export default Searching