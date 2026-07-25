const express=require('express');
const router= express.Router();

const V1apiroutes= require('./v1/index')
router.use('/v1',V1apiroutes);

module.exports=router