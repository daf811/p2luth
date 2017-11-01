var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection(config);

connection.connect();

/* A valider GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* A valider GET page Mes créations. */
router.get('/gabarit1', function(req, res, next) {
  res.render('gabarit1');
});

/* A valider GET page Me contacter. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* A valider GET page Produit. */
router.get('/gabaritpdt/product-:id_products(\\d+)', function(req, res, next) {
  connection.query('SELECT * FROM products WHERE id_products = ?;', [req.params.id_products], function(error, results, fields){
		if (error) {
			console.log(error);
		}else {
			res.render('gabaritpdt', {
        products:results[0]
      });
		};
	});
	
});

router.get('/mentions-legales', function(req, res, next) {
  res.render('mentionslegales');
});


module.exports = router;