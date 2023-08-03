import { useRef, useState } from "react"

export default function SignIn(){
  const [email,setEmail] = useState();
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{email}</p>
        <input type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
      </form>
    </>
  )
}