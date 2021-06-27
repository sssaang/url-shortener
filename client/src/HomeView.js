import React from 'react'
import UrlInput from './UrlInput'
import styled from '@emotion/styled'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #121211;
`

const HomeView = () => {
  return (
    <Root>
      <UrlInput />
    </Root>
  )
}

export default HomeView
