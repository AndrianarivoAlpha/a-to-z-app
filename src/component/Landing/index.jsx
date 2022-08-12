import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {

    const[btn, setBtn] = useState(false)
    const refWolverine = useRef(null)

    useEffect(() => {
        refWolverine.current.classList.add("startingImg")
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg")
            setBtn(true)
        }, 3000)
    }, [])

    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg")
    }

    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg")
    }

    const removeLeftImg = () => {
        refWolverine.current.classList.remove("leftImg")
    }
    const removeRightImg = () => {
        refWolverine.current.classList.remove("rightImg")
    }

    const showBtn = btn && (
            <Fragment>
                <div className="leftBox" onMouseOver={setLeftImg} onMouseOut={removeLeftImg}>
                    <Link to="/signup" className='btn-welcome'>Inscription</Link>
                </div>
                <div className="rightBox" onMouseOver={setRightImg} onMouseOut={removeRightImg}>
                    <Link to="/login" className='btn-welcome'>Connexion</Link>
                </div>
            </Fragment>
        )
  return (
    <main ref={refWolverine} className='welcomePage'>
        {showBtn}
    </main>
  )
}

export default Landing