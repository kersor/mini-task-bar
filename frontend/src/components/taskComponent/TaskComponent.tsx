import { Square, SquareCheck } from 'lucide-react'
import React, {FC, useState} from 'react'
import { ITask } from '../../types/Types'

interface ITaskComponent {
    item: ITask
}

const TaskComponent: FC<ITaskComponent> = ({item}) => {
    const [activeCheckBox, setActiveCheckBox] = useState<boolean>(false)
  return (
    <>
        <div onClick={(e) => setActiveCheckBox(prev => !prev)} className={`flex items-center gap-[5px] p-[10px] cursor-pointer rounded-[10px] ${activeCheckBox && 'bg-[#1a1a1b]'}`}>
            <button> {activeCheckBox ? <SquareCheck strokeWidth={2} size={20} color={'#555555'}/>  : <Square strokeWidth={2} size={20} color={'#555555'}/>}</button>
            <div>{item.description}</div>
        </div>
    </>
  )
}

export default TaskComponent