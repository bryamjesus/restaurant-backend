const jwt = require('jsonwebtoken')
const { TOKEN_KEY } = require('../config')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]
}

module.exports = verifyToken