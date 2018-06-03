var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Goods = require('../models/goods');
//连接mongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/anzhData');

mongoose.connection.on("connected", function() {
	console.log("mongoDB connected success.")
})
mongoose.connection.on("error", function() {
	console.log("mongoDB connected faile.")
})
mongoose.connection.on("disconnected", function() {
	console.log("mongoDB connected disconnected.")
})

router.get("/",function(req,res,next) {
	Goods.find({}, function(err,doc) {
		if(err) {
			res.json({
				status: '1',
				msg: err.message
			})
		}else{
			res.json({
				status:'0',
				msg:'',
				result:{
					count:doc.length,
					list:doc
				}
			})
		}
	})
//	res.send("hello,goods list .")
})

module.exports = router;