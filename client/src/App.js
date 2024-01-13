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
    //fetch('/members').then(res=>{console.log(res)}).then(data=>{setState(data); console.log(data)})
    //fetchMata()
    console.log('fetching')
    // https://api.github.com/users/Shaurya9923/repos
    // axios(`/https://api.github.com/users/Shaurya9923/repos`)
    // .then(res => {res.json();console.log(res)})
    // .then(
    //   (result) => {
    //     console.log(result)
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // )
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
