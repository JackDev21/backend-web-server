const express = require('express')
const path = require('path')

const startServer = (options) => {
  const { port, public_path = "public" } = options


  const app = express()

  // Para usar middleware se usa la palabra use (express)
  app.use(express.static(public_path)) // Contenido estático disponible en la carpeta public

  app.get("*", (req, res) => {
    const indexPath = path.join(__dirname + `../../${public_path}/index.html`)
    res.sendFile(indexPath)

  })

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

module.exports = {
  startServer
}