import React from 'react'

export const Counter = ({props}) => {
    console.log(props);
    const{count , handleIncrement, handleDecrement, setName}=props;
    const handleInput=(e)=>{
        const{value}=e.target;
        setName(value);
    }
    
  return (
    <div style={{display:'flex',
        justifyContent:'center',
        flexDirection:'column',
    }}>
        <input type='text' onChange={handleInput}/>
        <h1>Counter{count}</h1>
        <div>
            <button onClick={handleIncrement}>increnent</button>
            <button onClick={handleDecrement}>Decrenent</button>

        </div>
    </div>
    
  )
}
