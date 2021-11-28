import './App.css';
import MainArea from './mainArea';
import Loader from './loader';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setLoading(true)
    setError(false)
    getData(3*20)
  }, [])

  const getData = async (from) => {
    setUsers([])
    await axios(`https://api.github.com/users?since=${from}&per_page=12`).then((res)=>{
      setUsers(res.data)
    }).catch(err => {
      console.log(err)
      setError(true)
    }).finally(()=>{
      setLoading(false)
    })  
  }

  if (loading) return (
    <Loader />
  )

  if (error) return (
    "something went wrong"
  )

  return (
    <div className="App">
      <MainArea getData={getData} users={users}/>
    </div>
  );
}

export default App;
