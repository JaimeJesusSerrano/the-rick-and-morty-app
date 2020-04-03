import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { useIdle } from "@react-corekit/use-idle";

// Images import
import EvilMortyImg from '~Assets/img/evilmorty.jpeg'
import GoodMortyImg from '~Assets/img/goodmorty.jpeg'

const StyledCard = styled(Card)`
  /* background-color: ${({ theme }) => theme.palette.primary.light}; */
  margin: 10px 5px;
  min-height: 140px;
`

const Sidebar = () => {

  const options = { timeToIdle: 3000 };
  const isIdle = useIdle(options);

  return (
    <>
      <StyledCard>
        <CardMedia
          style={{ height: 250, transition: 'all .5s ease-in-out' }}
          image={isIdle ? EvilMortyImg : GoodMortyImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {isIdle ? "...or maybe not." : "Such a good boy..."}
          </Typography>
        </CardContent>
      </StyledCard>
    </>
  )
}

export default Sidebar
