import React from 'react'
import styled from '@emotion/styled'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`

const Message = styled.div`
  color: white;
  font-size: 30px;
`

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const UrlInputBar = styled.input`
  width: 300px;
  height: 50px;
  border: 2px solid #808080;
  border-radius: 5px;
`

const Button = styled.button`
  height: 30px;
  background: #6c75f1;
  border: 2px solid #6c75f1;
  border-radius: 5px;
`

const UrlInput = () => {
  return (
    <Root>
      <Message>Shorten Your Url!</Message>
      <Cont>
        <UrlInputBar type='text' />
        <Button>Shorten Url!</Button>
      </Cont>
    </Root>
  )
}

export default UrlInput
