import { useEffect, useRef, useState } from "react"
import axios from "axios"

export default function SignIn(){
  const [email,setEmail] = useState('');
  const [users,setUser] = useState([]);
  const [error,setError] = useState(null);
  const [isLoading,setLoading] = useState(null);
  

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  useEffect(() => {
    axios.post('https://jsonplaceholder.typicode.com/posts', email)
    .then(response => {
      console.log('Post created:', response.data);
      // Reset form fields
      console.log(email)
    })
    .catch(error => {
      console.error('Error creating post:', error);
    });
  } )
 /* useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts//')
    .then(response => {
        setUser(response.data)
        setLoading(true)
    })
    .catch(err => {
      setError(err.message);
      setLoading(false)
    })
  },[])*/
  
  return (
    <>
     <ul>
       {isLoading ?  users.map(item => (
            <li key={item.id}>{item.id}. {item.title}</li>
          )) : error}
      </ul>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
      </form>
    </>
  )
}