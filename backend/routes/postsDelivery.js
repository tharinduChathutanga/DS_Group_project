const express = require('express');
const Posts = require('../models/postsDelivery');

const router = express.Router();

//Save posts

router.post('/postDelivery/save',(req,res) =>{

    let newPost = new Posts(req.body);

    newPost.save((err) =>{

        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });

});

//get posts

router.get('/postsDelivery',(req,res) =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post

router.get("/postDelivery/:id",(req,res) =>{

    let postId  = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});




//update posts

router.put('/postDelivery/update/:id',(req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
            if(err){
               return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        });    
    });

//delete post

router.delete('/postDelivery/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });

        return res.json({
            message:"Delete successfull",deletedPost
        });
    });
});

module.exports = router;