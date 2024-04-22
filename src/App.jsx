import { useState } from 'react'
import './App.css'

function App() {
  const [mark, setMark] = useState(Array(9).fill(null));
  const [flag, setFlag] = useState(true);
  const [winner, setWinner]= useState("no winner yet");

  function CheckWinner(arr){
    let winpos=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7],[0,4,8]]
    for(let i=0;i<winpos.length;i++){
      let a=winpos[i][0];
      let b=winpos[i][1];
      let c=winpos[i][2];
      if(arr[a] && arr[a]==arr[b] && arr[b]==arr[c]){
        setWinner(arr[a]);
      }
    }

  }

  function markChangeHandler(idx) {
    if (mark[idx] === null) {
      const newMark = [...mark];
      newMark[idx] = flag ? 'X' : 'O';
      setMark(newMark);
      setFlag(prevFlag => !prevFlag);
      CheckWinner(newMark);
    }
  }
  return (
    <div className="board">
      {mark.map((value, idx) => (
        <button key={idx} onClick={() => markChangeHandler(idx)} className="square">
          {value}
        </button>
      ))}
      <h1>Winner:{winner}</h1>
    </div>
  );
}

export default App;
