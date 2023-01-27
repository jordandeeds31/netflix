import React, { useState, useRef } from 'react'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }
    return (
        <div className="registerContainer text-white pl-[100px] pr-[100px] pt-[50px] relative">
            <div className="absolute bg-black h-[100%] w-screen top-0 left-0 opacity-[0.5] z-[10]"></div>
            <div className="flex justify-between z-[10] relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix" className="w-[150px] cursor-pointer" />
                <button className="bg-[#e50914] py-[1px] px-[20px] rounded-[3px]">Sign In</button>
            </div>
            <div className="flex flex-col items-center justify-center h-screen relative z-[12]">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {!email ? (
                    <div className="">
                        {/* emailRef sets whatever the user types in the input field as the email. this is what the handleStart function does (emailRef.current.value) */}
                        <input type="email" placeholder="Email address" className="text-black" ref={emailRef} />
                        <button className="bg-[#e50914]" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form>
                        <input type="password" placeholder="password" ref={passwordRef} className="text-black"/>
                        <button className="bg-[#e50914]" onClick={handleFinish}>Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register
