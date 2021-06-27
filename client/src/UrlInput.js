import React, { useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

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
  margin-bottom: 30px;
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
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleShortenUrl = async () => {
    try {
      const { data, status } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/url/shorten`,
        {
          originalUrl: url
        }
      )

      if (status === 200) {
        setShortUrl(data.shortUrl)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Root>
      <Message>Shorten Your Url!</Message>
      <Cont>
        <UrlInputBar type='text' onChange={e => setUrl(e.target.value)} />
        <Button onClick={handleShortenUrl}>Shorten Url!</Button>
      </Cont>
      {shortUrl && <div style={{ color: 'white' }}>{shortUrl}</div>}
    </Root>
  )
}

export default UrlInput
