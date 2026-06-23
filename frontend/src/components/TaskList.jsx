import { useState, useEffect } from "react";
import { deleteTask, getTasks } from "../api/tasks";
import Task from "./Task";
import { CirclePlusIcon } from "lucide-react";
import TaskModal from "./TaskModal";


const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [isModalOpen, setIsModelOpen] = useState(false)

    useEffect(() => {
        const fetchTasks = async () => {
            const tasklist = await getTasks();
            setTasks(tasklist);
        }
        fetchTasks();
    }, [])

    return (
        <div
            className="flex justify-center mt-24"
        >
            <ul
                className="w-2/3"
            >
            {
                tasks.map((task, i) => (
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
                        deleteTask={() => { 
                            deleteTask(task._id)
                            setTasks(tasks.filter((t) => t._id != task._id))
                        }}
                        setTasks={setTasks}
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
                setTasks={setTasks}
            />
        </div>
    )
}

export default TaskList;