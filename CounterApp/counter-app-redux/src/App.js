import React from 'react'
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector( (state) => state.changeTheNumber); 
  const dispatch = useDispatch();
  var a =10;
  var b=11;
  var c = a<b;
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and redux</h4>
        

        <div className='quantity'>
          <a className='quantity__minus' title='Decrement' onClick={() => dispatch(decNumber(10))}><span>-</span></a>
          <input name='quantity' type="text" className="quantity__input" value={myState} />
          <a 
            className='quantity__plus' 
            title='Increment'
            onClick={() => dispatch(incNumber(5)).then(alert("Number incremented")) }
          >
              <span>+</span>
          </a>
        </div>

        <span>{Date()}</span>
      </div>
    </>
  )
}

export default App;