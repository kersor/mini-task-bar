import React, { useEffect, useState } from 'react'
import TaskComponent from './components/taskComponent/TaskComponent'
import Searching from './components/searching/Searching'
import { ITask } from './types/Types'
import { useDeleteAllTaskMutation, useDeleteChangeTaskMutation, useGetAllTasksQuery } from './store/api/task.api'
import { useDispatch, useSelector } from 'react-redux'
import { createTask, deleteAllTask, deleteChangeTask } from './store/task/task.slice'
import { RootState } from './store/store'

const App = () => {
  const tasks = useSelector((state: RootState) => state.taskSlice)
  const dispatch = useDispatch()

  const [apiDeleteAllTask] = useDeleteAllTaskMutation()
  const [apiDeleteChangeTask] = useDeleteChangeTaskMutation()

  const [searchValue, setSearchValue] = useState<string>('')
  const {data, isLoading, isError, error} = useGetAllTasksQuery()

  useEffect(() => {
    if(!data || data.length === 0) return
    dispatch(createTask(data))
  }, [data])

  const funcDeleteAllTask = () => {
    dispatch(deleteAllTask())
    apiDeleteAllTask()
  }

  const funcDeleteChangeTask = () => {
    dispatch(deleteChangeTask())
    apiDeleteChangeTask(tasks.deleteChangeTasks)
  }

  return (
    <div className='bg-[#000] w-full h-screen flex justify-center items-center text-[#555555]'>
      <div className='bg-[#161618] border border-[#555555] max-w-[500px] mx-auto w-full rounded-[20px] flex flex-col'>
        <Searching searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className={`px-[10px] pt-[15px] pb-[30px] flex flex-col gap-[10px] h-[500px] overflow-auto ${tasks.arrTasks.length === 0 && 'items-center justify-center'}`}>
          {
            tasks.arrTasks.length > 0 
              ?
              tasks.arrTasks
              .filter((item, index) => item.description.toLowerCase().includes(searchValue.toLowerCase()))
              .map(item => <TaskComponent key={item.id} item={item} />)
              :
              <div className='text-[20px]'>There are no tasks :(</div>
          }
        </div>
        <div className='border-t-[1px] border-[#555555] p-[20px] flex justify-between items-center'>
          <div>{data?.length} tasks</div>
          <div>
            <button onClick={funcDeleteAllTask} className='border border-[#952525] text-[#952525] px-[15px] py-[8px] text-[14px] rounded-[5px] mr-[10px]'>Delete all</button>
            <button onClick={funcDeleteChangeTask} className='border border-[#952525] text-[#952525] px-[15px] py-[8px] text-[14px] rounded-[5px]'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App