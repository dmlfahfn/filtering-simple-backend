var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Instead of using database, i have chosen to use an object
//Preferrable would be a database of any sort where all data is fetched from 
//and then all data is sent forward to the client side.
router.get('/videos', function(req, res, next) {
  console.log("salam from backend");
  const videos = [
    {
    id: 1,
    image : "public/images/img_avatar.png",
    title: "Loading data from catalog",
    description: "This is some description text...",
    product: "Qlik catalog",
    version: "November 2021",
    checked: false
  },
  {
    id: 2,
    image : "public/images/img_avatar.png",
    title: "Get to know the loop block",
    description: "This is some description text...",
    product: "Qlik catalog",
    version: "November 2021",
    checked: false
  },
  {
    id: 3,
    image : "public/images/img_avatar2.png",
    title: "This is another TITLE!!!",
    description: "This is some description text...",
    product: "QlikView",
    version: "December 2021",
    checked: false
  },
  {
    id: 4,
    image : "public/images/img_avatar2.png",
    title: "Another title",
    description: "This is some description text.",
    product: "Alerting",
    version: "October 2021",
    checked: false
  }
]
  res.send(videos);
});

module.exports = router;
