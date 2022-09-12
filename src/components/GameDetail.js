import React from 'react'

import styled from 'styled-components'
import { motion} from 'framer-motion'

import { useSelector, useDispatch } from 'react-redux'

import {emptyDetail} from '../actions/detailActions'
import { popUp } from '../animation'

const GameDetail = () => {
    const {screen, game} = useSelector((state) => state.detail)
    const dispatch = useDispatch()
    
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            dispatch(emptyDetail());
        }
    }

    const getStarIcon = () => {
        const stars = [];
        const rating = Math.floor(game.rating)
        for (let i = 1; i <=5 ; i++ ){
            if (i<= rating) {
                stars.push(<i className="fa-solid fa-star"></i>)
            } else {
                stars.push(<i className="fa-regular fa-star"></i>)
            }
        }
        return stars
    }

    const getPlatformIcon = (platform) => {
        switch(platform){
            case 'PlayStation 4':
                return <i key='playstation' className='fab fa-playstation'></i>
            case 'Xbox One':
                return <i key='xbox' className='fab fa-xbox'></i>
            case 'PC':
                return <i key='desktop' className='fas fa-desktop'></i>
            case 'Nintendo Switch':
                return <i key='nintendo' className='fas fa-user-ninja'></i>
            case 'IOS':
                return <i key='apple' className='fab fa-apple'></i>
            default:
                return <i key='gamepad' className='fas fa-gamepad'></i>

        }

    }
     
  return (
    
    <CardShadow className='shadow' onClick={exitDetailHandler} variants={popUp} initial='hidden' animate='show'>
        <Detail>
            <Status>
                <div className='rating'>
                <h3>{game.name}</h3>
                <p>Rating: {getStarIcon()}</p>
                </div>
            
                <Info>
                    <h3>Platforms</h3>
                    <Platform>
                        {game.platforms.map(data => (
                            getPlatformIcon(data.platform.name)
                        ))}

                    </Platform>
                </Info>
            </Status>

        
        <Media>
            <img src={game.background_image} alt='image_background' />
        </Media>
        <Description>
            <p>{game.description_raw}</p>

        </Description>
        <div className='gallery'>
            {screen.results.map(screen => (
                <img src={screen.image} key={screen.id} alt='screenshot' />
            ))}

        </div>
        </Detail>
    </CardShadow>
  )
  
};


const CardShadow = styled(motion.div)`
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5)
    position: fixed;
    left: 0;
    top: 0;
    
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: red;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
    
`;

const Detail = styled(motion.div)`
    width: 80%;
    background: white;
    border: solid 2px #777;
    border-radius: 1rem;
    padding: 2rem 2rem;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;

const Status = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Info = styled(motion.div)`
    text-align: center;
`
const Platform = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    i {
        font-size: 2rem;
        margin-left: 2rem;
    }
`
const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`


export default GameDetail