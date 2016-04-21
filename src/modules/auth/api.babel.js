import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './User';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

mongoose.connect('mongodb://localhost:27017/react-meetup', (err) => {
  if(err) console.error(err);
  console.log('Connect to mongo');
});

app.post('/users', (req, res) => {

  // req.body -> { username: '', password: '' }
  const user = new User(req.body);

  user.save((err, user) => {

    if(err) {
      return res.send(err);
    }

    res.send(user);

  });

});

app.post('/login', (req, res) => {

  User.findOne({ username: req.body.username }).exec((err, user) => {

    if(err) {
      return res.send(err);
    }

    if(!user) {
      res.status(404);
      return res.send('Invalid credentials');
    }

    if(user.password === req.body.password) {

      // delete password here
      delete user.password;
      res.send(user);
      
    } else {
      res.status(401);
      res.send('Invalid credentials');
    }

  });

});

app.listen(PORT, (err) => {
  if(err) {
    console.error(err)
  }

  console.info(`app listening on http://localhost:${PORT}`);
})
