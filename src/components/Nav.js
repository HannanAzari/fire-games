import React, { useState } from 'react'

import styled from 'styled-components'
import { motion } from 'framer-motion'

import { fetchSearch, clearSearch } from '../actions/gmaeActions'
import { useDispatch } from 'react-redux'

import { fadeIn } from '../animation'

const Nav = () => {
    const [text, setText ] = useState('')
    const dispatch = useDispatch()
    const inputHandler = (e) => {
        setText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(text))
        setText('')
    }

    const clearSearched = () => {
        dispatch(clearSearch())
    }

  return (

    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
        <Logo onClick={clearSearched}>
            <i className="fa-solid fa-fire-flame-curved"></i>
            <h1>Fire Games</h1>
        </Logo>
        <form className='search' onSubmit={submitHandler}>
            <input 
                value={text}
                onChange={inputHandler}
                type='text' 
                placeholder='Enter name of game ...'
            />
            <button type='submit'>Search</button>
        </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 50%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: 0;
        outline: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        font-weight: bold;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    input::placeholder {
        font-size: 1rem;
        color: black;
        opacity: 0.5;

    }
    button {
        font-size: 1.5rem;
        font-weight: bold;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: black;
        color: white;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    }
`
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    i {
        font-size: 1.5rem;
        margin-right: 10px;
    }
`

export default Nav