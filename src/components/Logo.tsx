import { IconButton, Link } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as MortyIcon } from '~Assets/img/morty.svg'
import { ReactComponent as RickIcon } from '~Assets/img/rick.svg'
import routes from '~Routes/routes'

const StyledRickIcon = styled(RickIcon)`
  position: absolute;
`

const Logo = () => {
  const [isRick, setIsRick] = useState(true)
  const [rickOpacity, setRickOpacity] = useState(1.0)
  const [mortyOpacity, setMortyOpacity] = useState(0.0)

  const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef<() => void>()

    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    useEffect(() => {
      function tick() {
        if (savedCallback.current) {
          savedCallback.current()
        }
      }
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }, [delay])
  }

  useInterval(() => {
    setIsRick(!isRick)
  }, 3000)

  useInterval(() => {
    const opacityVar = 0.01
    if (isRick && rickOpacity < 1) {
      setRickOpacity(rickOpacity + opacityVar)
      setMortyOpacity(mortyOpacity - opacityVar)
    }
    if (!isRick && mortyOpacity < 1) {
      setRickOpacity(rickOpacity - opacityVar)
      setMortyOpacity(mortyOpacity + opacityVar)
    }
  }, 10)

  return (
    <IconButton>
      <Link component={RouterLink} to={routes.baseUrl.path}>
        <div>
          <StyledRickIcon opacity={rickOpacity} />
          <MortyIcon opacity={mortyOpacity} />
        </div>
      </Link>
    </IconButton>
  )
}

export default Logo
