import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { completeTask, postTask, removeTask } from './actions';

const initialTaskState = {
  taskId: 0,
  taskDesc: '',
  isCompleted: false
};

function App() {
  const [task, setTask] = useState({
    taskId: 0,
    taskDesc: '',
    isCompleted: false
  });
  const [greeting, setGreeting] = useState('');
  // access/get postedTask array from store
  const displayTask = useSelector(state => state.postTask);
  // used to trigger an action -> structure/sample syntax: dispatch(<action>)
  const dispatch = useDispatch();
  
  useEffect(() => {
    let today = new Date()
    let currentHour = today.getHours()
    
    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    };
  }, [greeting]);

  return (
    <div className='bg-gray-200 min-h-screen font-mono flex'>
      <Helmet>
        <title>Simple Task App</title>
      </Helmet>
      <div className="max-w-screen-md m-auto">
        <h1 className='text-5xl antialiased mb-3'>{greeting}, human!</h1>
        <p className='text-2xl'>What are you up to?</p>

        <div className='flex my-10'>
          <input 
            id={task.taskId}
            type='text' 
            className='p-2 px-5 w-full rounded rounded-r-none' 
            placeholder='Got bored, made a task app'
            onChange={(e) => {
              setTask({ 
                ...task,
                taskDesc: e.target.value 
              })
            }} 
            onKeyUp={(e) => {
              if (!task) return;
              if (e.key === 'Enter') {
                dispatch(postTask(task));
                setTask({
                  ...initialTaskState,
                  taskId: task.taskId + 1
                });
              }
            }}
            value={task.taskDesc}
          />
          
          <button 
            className='bg-white p-2 px-5 text-3xl rounded rounded-l-none'
            onClick={() => {
              if (!task) return;
              dispatch(postTask(task));
              setTask({
                ...initialTaskState,
                taskId: task.taskId + 1
              })
            }}>
              +
          </button>
        </div>

        {displayTask && (
          <ul>
            {displayTask.map((task, index) => (
              <>
                <li key={index} className='p-3 pl-4 bg-gray-50 rounded flex justify-between items-center mb-2' style={{ minHeight: 52 }}>
                  <div className='flex flex-grow mr-3 items-center'>
                    <input 
                      id={index}
                      type='checkbox' 
                      className='mr-3' 
                      onChange={(e) => {
                        dispatch(completeTask(index, task, e.target.checked));
                      }}
                    />

                    <label
                      htmlFor={index}
                      className={`flex-grow cursor-pointer ${task.isCompleted ? 'line-through text-gray-400' : ''}`}
                    >
                        {task.taskDesc}
                    </label>
                  </div>

                  {!task.isCompleted && (
                    <button 
                      className='p-1 px-3 bg-red-500 rounded text-white text-sm font-bold'
                      onClick={() => dispatch(removeTask(task))}>
                        x
                    </button>
                  )}
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
