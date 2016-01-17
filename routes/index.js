
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.happy_m = function(req, res){
  res.render('happy_m', { title: 'Express' });
};