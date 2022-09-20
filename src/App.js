import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')

  useEffect(() => {
    Axios.get('http://localhost:3001/getUsers')
      .then((response) => {
        setListOfUsers(response.data)
      })
  },[])

  const submitUser = () => {
    Axios.post('http://localhost:3001/createUser', {name:name,age:age,username:username})
      .then((response) => {
        alert('user created')
      })
  }

  return (
    <div className="App">
      <div className='userDisplay'>
         {listOfUsers.map((user) => (
          <div key={user.id}>
          <h3>Name:{user.name}</h3>
          <h3>age:{user.age}</h3>
          <h3>username:{user.username}</h3>
          </div>
         ))}
      </div>
      <div className='userInput'>
          <form onSubmit={submitUser}>
            <input className='name' onChange={(e) => setName(e.target.value)} value={name} placeholder='Name' type='text'></input>
            <input className='age' onChange={(e) => setAge(e.target.value)} value={age} placeholder='Age' type='number'></input>
            <input className='username' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username' type='text'></input>
            <input type='submit'></input>
          </form>
      </div>
      
    </div>
  );
}

export default App;
