import { Square, SquareCheck } from 'lucide-react'
import React, {FC, useState} from 'react'
import { ITask } from '../../types/Types'
import { useDispatch } from 'react-redux'
import { addDeleteChangeTask } from '../../store/task/task.slice'

interface ITaskComponent {
    item: ITask
}

const TaskComponent: FC<ITaskComponent> = ({item}) => {
    const dispatch = useDispatch()
    const [activeCheckBox, setActiveCheckBox] = useState<boolean>(false)

    function funcOnClickTask (e: React.MouseEvent<HTMLDivElement>) {
      setActiveCheckBox(prev => !prev)
      dispatch(addDeleteChangeTask(item.id))
    }

  return (
    <>
        <div onClick={funcOnClickTask} className={`flex items-center gap-[5px] p-[10px] cursor-pointer rounded-[10px] ${activeCheckBox && 'bg-[#1a1a1b]'}`}>
            <button> {activeCheckBox ? <SquareCheck strokeWidth={2} size={20} color={'#555555'}/>  : <Square strokeWidth={2} size={20} color={'#555555'}/>}</button>
            <div>{item.description}</div>
        </div>
    </>
  )
}

export default TaskComponent