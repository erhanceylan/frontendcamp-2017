const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const db=require('./db.js')


nunjucks.configure('views',{
    autoescape:true,
    express:app  
})


app.get('/', function (req, res) {
  res.render('index.html', { posts: db })
})

app.get('/:id', function (req, res) {
  const id=req.params.id
  const post = db.find(function(item){
      return item.id==id
    })

    if(post)
    {
        res.render('detail.html',{post:post})
    }else{
        res.send('Geçersiz id='+ id)
    }
      
  
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// altay.aydemir@gmail.com