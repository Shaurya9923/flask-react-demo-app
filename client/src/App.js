import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState({});
  const fetchMata = async ()=> {
    const result = await axios.get('/members')
    setState(result.data)
  }
  useEffect(()=>{
    //fetch('/members').then(res=>{console.log(res)}).then(data=>{setState(data); console.log(data)})
    //fetchMata()
    console.log('fetching')
    // https://api.github.com/users/Shaurya9923/repos
    // fetch(`/members`)
    // .then(res => {res.json();console.log(res)})
    // .then(
    //   (result) => {
    //     console.log(result)
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // )
    fetchMata(setState)
  },[])
  return (
    <div>
      <h1>{state.members}</h1>
      Date Joined Date: {state.current_date} <br/>
      <ul>
        {state.friends && state.friends.map((members, index)=>{
          return <li key={index}>{members}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
