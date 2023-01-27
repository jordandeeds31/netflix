import React, {useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="registerContainer text-white pl-[100px] pr-[100px] pt-[50px] relative">
      <div className="absolute bg-black h-[100%] w-screen top-0 left-0 opacity-[0.5] z-[10]"></div>
      <div className="flex justify-between z-[10] relative">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix" className="w-[150px] cursor-pointer" />
      </div>
      <form className="flex flex-col items-center justify-center h-screen relative z-[12] gap-[10px]">
        <h1 className="flex w-[250px]">Sign In</h1>
        <input type="" placeholder="Email or phone number" className="w-[250px]" onChange={(e) =>  setEmail(e.target.value)}/>
        <input type="password" placeholder="password" className="w-[250px]" onChange={(e) => setPassword(e.target.value)}/>
        <button className="bg-[#e50914] w-[250px]">Sign In</button>
      </form>
    </div>
  )
}

export default Login
