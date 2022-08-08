import React, {useState} from 'react'
import './Count.css'

function Count() {
    const reset = 0;
    const [counter, setCount] = useState(reset);
    const decreaseCount = () => {
        if(counter > 0) {
            setCount(counter - 1);
        }
    }
  return (
    <div className='container'>
        <h1 className="count_text">
            You have Clicked {counter} times
        </h1>
        <button className="increase_count"
         onClick={() => setCount(counter + 1)}>
            Increase the Count
        </button>

        <button className="decrease_count"
         onClick={decreaseCount}>
            Decrease the Count
        </button>
         <button className="reset" onClick={() => setCount(decreaseCount)}>
            Reset
         </button>
    </div>
  )
}

export default Count