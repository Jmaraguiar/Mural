

const express = require('express');
const router = express.Router()
const posts = require('../model/posts');
const cors = require('cors');
const { application } = require('express');
const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options));

router.get("/all", (req,res)=>{

    res.json(JSON.stringify(posts.getAll()));

})

router.post("/new",express.json(),(req,res)=>{

    let title = req.body.title;
    let descript = req.body.descript;

    posts.newPost(title,descript)

    res.send('post adicionado!')
})

module.exports = router;