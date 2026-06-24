import { useState, useEffect } from "react";
import { getTasks } from "../api/tasks";
import Task from "./Task";
import { CirclePlusIcon } from "lucide-react";
import TaskModal from "./TaskModal";
import useFetchTasks from "../hooks/useFetchTasks";


const TaskList = () => {
    const [ isModalOpen, setIsModelOpen ] = useState(false)
    const { data, loading, fetchTasks } = useFetchTasks();
    const [ refreshTrigger, setRefreshTrigger ] = useState(0);

    useEffect(() => {
        fetchTasks();
    }, [refreshTrigger])

    if (loading) return <div>Loading...</div>

    return (
        <div className="flex justify-center mt-24">
            <ul className="w-2/3">
            {
                data?.map((task, i) => (
                    <li 
                        key={task._id}
                        className="border-b border-gray-200 py-8"
                    >
                    <Task
                        id={task._id}
                        title={task.title} 
                        description={task.description} 
                        status={task.status} 
                        priority={task.priority} 
                        dueDate={task.dueDate}
                        refreshList={setRefreshTrigger}
                    /> 
                    </li>
                ))
            }
            <li 
                key="new"
                className="py-8"
            >
                <button
                    onClick={() => setIsModelOpen(true)}
                    className="flex gap-2 items-center text-gray-600 hover:cursor-pointer"
                >
                    <CirclePlusIcon size="20" color="gray"/>
                    <span>New Task</span>
                </button>
            </li>
            </ul>
            <TaskModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModelOpen(false)}
                isUpdate={false}
                refreshList={setRefreshTrigger}
            />
        </div>
    )
}

export default TaskList;