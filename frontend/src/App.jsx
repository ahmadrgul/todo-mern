import { getTasks, getTask } from "./api/tasks"
import TaskList from "./components/TaskList"
import Toaster from "./components/Toaster"
import { ToastProvider } from "./context/ToastContext"

function App() {

  return (
    <>
    <ToastProvider>
      <Toaster />
      <TaskList/>
    </ToastProvider>
    </>
  )
}

export default App
