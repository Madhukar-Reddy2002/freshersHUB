var express = require('express');
var router = express.Router();
const userModel = require('./users');
const reviewModel = require('./reviews');
const passport = require('passport');

//User login
const localStratagy = require('passport-local');
const { title } = require('process');
passport.use(new localStratagy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('register');
});
router.get('/error', function(req, res) {
  res.render('error');
});
router.get('/login', function(req, res) {
  res.render('login');
  console.log(req.body);
});
router.post('/register', async (req, res) => {
  const { username, email, skills} = req.body;

  const userData = new userModel({
    username,
    email,
    skills,
  });

  userModel.register(userData, req.body.password)
  .then(function(){
    passport.authenticate('local')(req, res, function(){
      res.redirect('/profile');
    })
  })
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}), (req,res)=>{console.log("LOGIN");});

router.get('/logout', function(req, res){
  req.logout(function(err){
    if(err){ return next(err);}
    res.redirect("/login")
  })
})

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

router.get('/profile', isLoggedIn, async function(req, res){
  const reviews = await reviewModel.find({reviewto:req.user._id});
  const ratings = reviews.map(r => r.rating);
  let total = 0;
  ratings.forEach(r => {total += r;});
  const avgRating = (total/ratings.length);
  const skillsArray = req.user.skills.split(', ');
  res.render('profile', { user: req.user, skills:skillsArray, rating:avgRating });
  //res.send(avgRating);
});
router.get('/allprofiles', isLoggedIn, async function(req, res){
  const Users = await userModel.find({_id: { $ne: req.user._id }});
  res.render('allprofiles', { users:Users });
})

// Add Review

router.get('/addreview/:userId', function(req, res) {
  const userId = req.params.userId;

  res.render('addreview', {touser: userId});
});

router.post('/addreview', isLoggedIn, async (req, res) => {
  try {
    const { rating, comment, reviewto } = req.body;
    const newReview = new reviewModel({
      reviewfrom: req.user._id,
      reviewto,
      rating,
      comment,
    });

    await newReview.save();

    res.redirect('/allprofiles');
  } catch (error) {
    console.error('Error adding review:', error);
    res.redirect('/profile');
  }
});


module.exports = router;