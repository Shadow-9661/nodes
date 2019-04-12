const express = require('express')
//import * as express from "express";
const path = require('path')
//import * as path from "path";
const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const App = express();
App.get('/',(req,res)=>{
  res.send({
    message:"Home using ts-node!"
  })
})
App.listen(PORT)