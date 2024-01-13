import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState({});
  const [repos , setRepos] = useState([]);
  const fetchMata = async ()=> {
    const result = await axios.get('/members')
    setState(result.data)
  }
  const fetchRepos = async ()=> {
    const result = await axios.get(`https://api.github.com/users/Shaurya9923/repos`)
    setRepos(result.data)
    console.log(result.data)
  }
  useEffect(()=>{
    console.log('fetching')
    fetchMata()
    fetchRepos()
  }, [])
  return (
    <div>
      <h1>{state.members}</h1>
      Date Joined Date: {state.current_date} <br/>
      Friends List :
      <ul>
        {state.friends && state.friends.map((members, index)=>{
          return <li key={index}>{members}</li>
        })}
      </ul>
      Github Repo List :
      <ul>
        {repos && repos.map((repo, index)=>{
          return <li key={index}>{repo.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
