const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')
const shortId = require('shortid')
const config = require('config')

const Url = require('../models/Url')

// @route POST /api/url/shorten
// @desc Create short url

router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body
  const baseUrl = config.get('baseUrl')

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url!')
  }

  if (validUrl.isUri(originalUrl)) {
    try {
      let url = await Url.findOne({ longUrl })

      if (url) {
        res.json(url)
      } else {
        const urlCode = shortId.generate()
        const shortUrl = baseUrl + '/' + urlCode

        url = new Url({
          originalUrl,
          shortUrl,
          urlCode,
          date: new Date()
        })

        await url.save()

        res.json(url)
      }
    } catch (e) {
      console.error(e)
      res.status(500).json('Internal Server Error!')
    }
  } else {
    res.status(401).json('Invalid url provided!')
  }
})

module.exports = router
