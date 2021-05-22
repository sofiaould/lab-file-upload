const { Router } = require('express');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model');
const mongoose = require('mongoose');

const routeGuard = require('../configs/route-guard.config');
const fileUploader = require('../configs/cloudinary.config')


/////////////////// iteration 2 /////////////////////

router.post('/model/Post',(req,res,next)=>{
res.render ('../')
})


module.exports = router;