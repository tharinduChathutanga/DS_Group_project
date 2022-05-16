const express = require ('express');
const MobilePayPosts = require('../models/mobilePayModels');

const path = require('path');

const router = express.Router();

//insert mobile payment data in data base 
router.post('/mobilepay/save',(req,res)=>{

    let newMobilePayPosts = new MobilePayPosts(req.body);

    newMobilePayPosts.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Mobile payment details saved successfully"
        });
    });
});

//retrive mobile payment data 
router.get('/mobilepay',(req,res)=>{
    MobilePayPosts.find().exec((err,mobilepayposts)=>{
        if(err){
            return res.status(400).json({

                error:err
            });
        }

        return res.status(200).json({
            success : true,
            existingPosts : mobilepayposts
        });
    });
});

//get a specific data
router.get("/mobilepay/:id",(req,res)=> {

    let mobilepId = req.params.id;
    MobilePayPosts.findById(mobilepId,(err,mobilepayposts) => {
        if(err){
            return res.status(400).json({success:false, err});

        }

        return res.status(200).json({
            success:true,
            mobilepayposts
        });
    });
});

//delete mobile payment details
router.delete('/mobilepay/delete/id' , (req,res) => {

    MobilePayPosts.findByIdAndRemove(req.params.id).exec((err,deletedMobilepay) =>{
        if(err) return res.status(400).json({
            message:"Delete unsucceful",err
        });

        return res.json({
            message: "Mobile payment details deleted succfully",deletedMobilepay
        });
    });
});


module.exports = router;