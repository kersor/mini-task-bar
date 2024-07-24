import React, { useState } from 'react'
import TaskComponent from './components/taskComponent/TaskComponent'
import Searching from './components/searching/Searching'
import { ITask } from './types/Types'

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const tasks: ITask[] = [
    {
      "id": 1,
      "description": "ABCD"
    },
    {
      "id": 2,
      "description": "DCBA"
    },
    {
      "id": 3,
      "description": "BACD"
    },
    {
      "id": 4,
      "description": "AAAA"
    }
  ]

  return (
    <div className='bg-[#000] w-full h-screen flex justify-center items-center text-[#555555]'>
      <div className='bg-[#161618] border border-[#555555] max-w-[500px] mx-auto w-full rounded-[20px] flex flex-col'>
        <Searching searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className='px-[10px] pt-[15px] pb-[30px] flex flex-col gap-[10px] h-[500px] overflow-auto'>
          {
            tasks
              .filter((item, index) => item.description.includes(searchValue))
              .map(item => <TaskComponent key={item.id} item={item} />)
          }
        </div>
        <div className='border-t-[1px] border-[#555555] p-[20px] flex justify-between items-center'>
          <div>12 tasks</div>
          <div>
            <button className='border border-[#952525] text-[#952525] px-[15px] py-[8px] text-[14px] rounded-[5px] mr-[10px]'>Delete all</button>
            <button className='border border-[#952525] text-[#952525] px-[15px] py-[8px] text-[14px] rounded-[5px]'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App