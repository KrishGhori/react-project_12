import { useState , useEffect, useRef} from 'react'

import './App.css'

function App() {

  const [count , setcount] = useState(0);
  let value = useRef(0);
  let btnref = useRef();

  function handleincrement (){
    value.current = value.current +1 ;
    console.log('current value is :', value.current);
    setcount(count+1);
  }

  //ues in every render
  useEffect(() => {
    console.log('render again');
  })

   function handlecolor (){
    btnref.current.style.backgroundColor = "blue";
  }
  
  return (
    <div>
      <button  ref={btnref} onClick={handleincrement} >increment</button>
      <br />
      <br />
      <button onClick={handlecolor}>change colore of increment button</button>
      <br />
      <br />
     <div>
       count :{count}
     </div>
    </div>
  )
}

export default App
