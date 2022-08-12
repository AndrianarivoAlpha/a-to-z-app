import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Firebase/userAuthContext'

const SignUp = () => {
    const [pseudo, setPseudo] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")

    const { signUp } = useUserAuth()
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await signUp(email, password);
            navigate("/")
        } catch (err) {
            setError(err.message)
            console.log(err.message);
        }
    }

    const btn = pseudo === "" || email === "" || password === "" || password !== confirmPwd ? (<button disabled>Inscription</button>) : (<button type="Submit">Inscription</button>)
    const errorMsg = error !=="" && <span>{error.message}</span>
  return (
    <div className='signUpLoginBox'>
        <div className="slContainer">
            <div className="formBoxLeftSignup"></div>
            <div className="formBoxRight">
              <div className="formContent">

              {errorMsg}

              <h2>Inscription</h2>
                <form onSubmit={handleSubmit}>
                  <div className="inputBox">
                    <input type="text" id="pseudo" required autoComplete='off' onChange={(e) => setPseudo(e.target.value)} value={ pseudo }/>
                    <label htmlFor="pseudo">Pseudo</label>
                  </div>
                  <div className="inputBox">
                    <input type="email" id="email" required autoComplete='off' onChange={(e) => setEmail(e.target.value)} value={ email }/>
                    <label htmlFor="email">E-mail</label>
                  </div>
                  <div className="inputBox">
                    <input type="password" id="password" required autoComplete='off' onChange={(e) => setPassword(e.target.value)} value={ password }/>
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="inputBox">
                    <input type="password" id="confirmPassword" required autoComplete='off' onChange={(e) => setConfirmPwd(e.target.value)} value={ confirmPwd }/>
                    <label htmlFor="password">Confirm Password</label>
                  </div>

                  {btn}

                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp