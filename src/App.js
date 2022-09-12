import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from './actions/gmaeActions'
import Game from './components/game'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import GlobalStyles from './components/GlobalStyles'
import GameDetail from './components/GameDetail'
import Nav from './components/Nav'


const App = () => {

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loadGames())
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector((state) => state.games);
  const { game } = useSelector((state) => state.detail);
  

  return (
    <GameList>
      { game.id && <GameDetail />}
      <Nav />
      <GlobalStyles />
      {searched.length ? 
        <div>
          <h2>Searched Games</h2>
          <Games>
            {searched.map(game => (
              <Game 
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}

          </Games>
        </div> 
       : ''} 
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map(game => (
          <Game 
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}

      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map(game => (
          <Game 
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}

      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map(game => (
          <Game 
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}

      </Games>
    </GameList>
  )
} 

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem
  }
` 
const Games =styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem 3rem;
`


export default App
