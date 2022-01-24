const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req,res)=>{
    res.send(
        [{
          id: 1,
          image: "https://placeimg.com/64/64/1",
          name: "이의현",
          birthday: "970419",
          gender: "man",
          job: "student",
        },
        {
          id: 2,
          image: "https://placeimg.com/64/64/2",
          name: "임종태",
          birthday: "971121",
          gender: "man",
          job: "student",
        },
        {
          id: 3,
          image: "https://placeimg.com/64/64/3",
          name: "이재우",
          birthday: "970305",
          gender: "man",
          job: "student",
        },
      ])
})

app.listen(port, ()=>console.log(`Listening on Port ${port}`));