const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

router.get('/',(req,res)=>{
    res.send('we are on post');
});

router.post('/', (req,res)=>{
    console.log(req.body)
    const post = new Post({
        title: req.body.title

    });
    post.save().then(
        () => {
          res.status(201).json({
            message: 'title Added Successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );

    
    // try{
    // const savedPost = await post.save();
    // res.json(savedPost);}catch(err){
    //     res.json({message:err});

    // }
    });
    
    


module.exports = router;