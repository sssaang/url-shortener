const express = require('express')
const router = express.Router()

const Url = require('../models/Url')

// @route GET /:code
// @desc Redirect to original url

router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({
      urlCode: req.params.code
    })

    if (!url) {
      return res.status(404).json('no url found')
    }

    return res.redirect(url.originalUrl)
  } catch (err) {
    console.error(err)
    res.status(500).json('Internal Server Error!')
  }
})

module.exports = router
