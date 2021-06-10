import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { postTask, removeTask } from './actions';

function App() {
  const [task, setTask] = useState('');
  const [completedTask, setCompletedTask] = useState({
    taskId: null,
    isCompleted: false
  });
  const [greeting, setGreeting] = useState('');
  // access/get postedTask array from store
  const displayTask = useSelector(state => state.postTask);
  // used to trigger an action -> structure/sample syntax: dispatch(<action>)
  const dispatch = useDispatch();

  const completeTheTask = (id, isCompleted) => {
    console.log('from completeTheTask before', id, isCompleted);
    setCompletedTask({
      taskId: id,
      isCompleted
    });
  }

  useEffect(() => {
    let today = new Date()
    let currentHour = today.getHours()
    
    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, [completedTask])

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
            type='text' 
            className='p-2 px-5 w-full rounded rounded-r-none' 
            placeholder='Got bored, made a task app'
            onChange={(e) => setTask(e.target.value)} 
            onKeyUp={(e) => {
              if (!task) return;
              if (e.key === 'Enter') {
                dispatch(postTask(task));
                setTask('');
              }
            }}
            value={task}
          />
          
          <button 
            className='bg-white p-2 px-5 text-3xl rounded rounded-l-none'
            onClick={() => {
              if (!task) return;
              dispatch(postTask(task));
              setTask('');
            }}>
              +
          </button>
        </div>

        {displayTask && (
          <ul>
            {displayTask.map((task, index) => (
              <>
                <li key={index} className='p-3 pl-4 bg-gray-50 rounded flex justify-between items-center mb-2'>
                  <div className='flex flex-grow mr-3 items-center'>
                    <input 
                      id={index}
                      type='checkbox' 
                      className='mr-3' 
                      onChange={(e) => {
                        completeTheTask(index, e.target.checked);
                      }}
                    />

                    <label
                      onClick={() => console.log(`${task}`, completedTask.isCompleted, index)}
                      htmlFor={index}
                      className={`
                        flex-grow cursor-pointer
                        ${completedTask.isCompleted
                          ? 'line-through text-green-600' 
                          : ''
                        }
                      `}>
                        {task}
                    </label>
                  </div>

                  <button 
                    className='p-1 px-3 bg-red-500 rounded text-white text-sm font-bold'
                    onClick={() => dispatch(removeTask(task))}>
                      x
                  </button>
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
