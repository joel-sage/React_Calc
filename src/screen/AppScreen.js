import React, { useReducer, useState } from 'react'
import CalcBtn from '../components/CalcBtn'
import ThemeDock from '../components/ThemeDock'

const numbers = [
  '1','2',
  '3','4',
  '5','6',
  '7','8',
  '9','0',
  '.',
]
const keys = [
  '1','2',
  '3','4',
  '5','6',
  '7','8',
  '9','0',
  '.','/',
  '-','*',
  '+'
]
const operators = [
  '=','+',
  '-','*',
  '/',
]
const calcValueReducer = (state, action) => {
  if (action.type === 'CALC_VALUE') {
    return {value: action.val}
  }

  if (action.type === 'CALC_CLEAR') {
    return {value: action.val}
  }

  if (action.type === 'CALC_DELETE') {
    return {value: action.val}
  }

  if (action.type === 'CALC_RESULT') {
    return {value: action.val}
  }

  return {value: ''}
}

const AppScreen = () => {
  const [calcValueState, dispatchCalcValue] = useReducer(calcValueReducer, {
    value: ''
  })
  const [error, setError] = useState(false);
  const [disexp, setDisexp] = useState('');
  let expr = disexp.split('');

  // HANDLING THE BUTTON CLICKS
  const btnHandler = (symbol) => {
    dispatchCalcValue({
      type: 'CALC_VALUE',
      val: calcValueState.value + symbol
    })
    setDisexp(calcValueState.value + symbol);
    setError(false)
  }

  // DELETING ALL SHIT YOU ENTERED
  const handleClear = () => {
    dispatchCalcValue({
      type: 'CALC_CLEAR',
      val: ''
    })
    setDisexp('')
  }
  
  // DELETING THE LAST DIGIT FROM THE CALCULATION
  const handleDelete = () => {
    const del = () => {
      let allValues = calcValueState.value.split('')
      allValues.pop();
      return allValues.join('');
    }
    
    dispatchCalcValue({
      type: 'CALC_DELETE',
      val: del()
    })

    setDisexp(del());
  }

  // HANDLING THE TOTAL RESULT
  const handleResult = () => {
    try {
      dispatchCalcValue({
        type: 'CALC_RESULT',
        val: eval(calcValueState.value),
      })
    } catch (error) {
      setError(true);
    }
  }

  window.onkeyup = (event) => {
    if (keys.includes(event.key)) {
      dispatchCalcValue({
        type: 'CALC_VALUE',
        val: calcValueState.value + event.key
      })
      setDisexp(calcValueState.value + event.key);
      setError(false)
    }

    if (event.key === 'Enter') {
      handleResult();
    }

    if (event.key === 'c' || event.key === 'C') {
      handleDelete();
    }
  }

  return (
    <div className='flex items-center justify-center h-screen w-full bg-gray-950'>
      <div id='container' className=' relative h-fit w-[270px] bg-[#000107] red-100 rounded-[20px] overflow-hidden'>
        <ThemeDock />
        <div id='display-holder' className='h-[220px] w-full bg-[#11660000] flex flex-col justify-end'>
          <div style={{
            fontWeight: 'bold'
          }} className='h-fit w-full text-white text-end px-5 '>
            {
              expr.map((exp, id) => (
                <span
                  key={id}
                  className={`
                  ${exp === '%' && 'text-[#0de076] mx-1'}
                  ${operators.includes(exp) && 'text-[#e00d5e] mx-1'}
                  `}
                >{exp}</span>
              ))
              }
          </div>
          <div id='display-board' style={{ fontWeight: 'bold' }} className='h-[80px] w-full bg-[#5a88b600] text-white text-[37px] py-4 px-5 flex items-end justify-end'>
            <p className='w-full overflow-x-scroll text-end'>
              {!error && calcValueState.value}
              {error &&
                <span className='text-red-600 text-[20px]'>
                  Type Error
                </span>
              }
            </p>
          </div>
        </div>

        <div id="button-holder" className='w-full h-fit p-[10px] bg-[#000c0f7e] flex items-center justify-center rounded-t-[20px] '>
          <div id='btn-carton' className='grid grid-cols-4 gap-[10px] h-fit w-fit py-3'>
            <CalcBtn symbol={'AC'} onClick={handleClear} />
            <CalcBtn symbol={'C'} onClick={handleDelete} />
            <CalcBtn symbol={'%'} onBtnClick={btnHandler}/>
            <CalcBtn symbol={'/'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'7'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'8'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'9'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'*'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'4'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'5'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'6'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'-'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'1'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'2'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'3'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'+'} onBtnClick={btnHandler} />
            <CalcBtn symbol={' '} />
            <CalcBtn symbol={'0'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'.'} onBtnClick={btnHandler} />
            <CalcBtn symbol={'='} onBtnClick={handleResult} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppScreen






                    // const alive = () => {
                    //   return true
                    // }

                    // auth = (() => { 
                    //   while (alive()) {
                    //     knowGod();
                    //     work();
                    //     eat();
                    //     build();
                    //     impact();
                    //     rest();
                    //     repeat(auth);
                    //   }
                    // })()
