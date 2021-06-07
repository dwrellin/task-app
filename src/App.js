import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTask } from './actions';

function App() {
  const [task, setTask] = useState('');
  const displayTask = useSelector(state => state.postTask);
  const dispatch = useDispatch();

  return (
    <div className='bg-gray-200 min-h-screen font-mono flex'>
      <div className="max-w-screen-md m-auto">
        <h1 className='text-5xl antialiased mb-3'>Good day, human!</h1>
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
          <ol>
            {displayTask.map((task, index) => (
              <>
                <li key={index}>
                  {index + 1}. {task}
                </li>
              </>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default App;
