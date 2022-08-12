import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../Firebase'

const Signup = () => {

  const firebase = useContext(FirebaseContext)

  const Data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  const [loginData, setLoginData] = useState(Data)
  const [error, setError] = useState("")

  const handleChage = e => {
    setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = loginData;
    firebase.signupUser(email, password)
    .then(user => {
      setLoginData({...Data})
    })
    .catch(error => {
      setError(error)
      setLoginData({...Data})
    })
  }

  const { pseudo, email, password, confirmPassword } = loginData;

  const btn = pseudo === "" || email === "" || password === "" || password !== confirmPassword ? (<button disabled>Inscription</button>) : (<butto>Inscription</butto>)

  // gestion erreur

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
                    <input type="text" id="pseudo" required autoComplete='off' onChange={handleChage} value={ pseudo }/>
                    <label htmlFor="pseudo">Pseudo</label>
                  </div>
                  <div className="inputBox">
                    <input type="email" id="email" required autoComplete='off' onChange={handleChage} value={ email }/>
                    <label htmlFor="email">E-mail</label>
                  </div>
                  <div className="inputBox">
                    <input type="password" id="password" required autoComplete='off' onChange={handleChage} value={ password }/>
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="inputBox">
                    <input type="password" id="confirmPassword" required autoComplete='off' onChange={handleChage} value={ confirmPassword }/>
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

export default Signup