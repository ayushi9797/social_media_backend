const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.Model');
const app = express();

const UserRouter = express.Router();
UserRouter.use(express.json());

// Register routes
// Login routes


//  users to register. Hash the password on store.

UserRouter.post('/register', async function (req, res) {
    const { name, email, password, dob, posts, friends, friendRequests } = req.body;
    console.log(req.body);

    try {

        const user = await UserModel.find({ email });
        console.log(user);

        if (user.length > 0) res.send(`User already registered`);
        else
            bcrypt.hash(password, 7, async function (err, hash) {
                const user = new UserModel({
                    name, email: email, password: hash, dob, posts, friends, friendRequests
                });

                console.log(user);
                await user.save();

                res.status(201).send({ message: `User successfully registered`, user });

            })

    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: `User  registered failed` })

    }
})


// This endpoint should return a list of all registered users. 
UserRouter.get('/users', async function (req, res) {
    let user = await UserModel.find();
    console.log(user);

    console.log({ message: `All registered Users` });
    res.status(200).send({ message: 'All Users', user });
})


//  allow users to login. Return JWT token on successful login.
UserRouter.post('/login', async function (req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const user = await UserModel.findOne({ email });
        console.log(user);;

        const hash_pass = user?.password;
        console.log(hash_pass);

        if (user) bcrypt.compare(password, hash_pass, async function (err, result) {
            if (result) {
                const token = jwt.sign({ user_id: user.id }, 'social-key', {
                    expiresIn: '7d'
                })
                console.log(token);
                res.status(201).send({ token, message: ' users successfully login', token, user });

            } else console.log(err.message);


        })

    } catch (error) {

        console.log(error.message);
        res.status(201).send({ message: ' users  login failed' });

    }


})

// This endpoint should return a list of all friends of a specific user identified by its ID.

UserRouter.get('/users/:id/friends', async function (req, res) {
    const id = req.params.id;

    console.log(id);
    const user = await UserModel.findByIdAndUpdate(id);
    const friend = user.friends;

    console.log(friend);
    res.status(200).send({  message: ' Successfully get friend request ', user});

})




// This endpoint should allow the user to send a friend request to another user identified by its ID.
UserRouter.post('/users/:id/friends', async function (req, res) {
    const id = req.params.id;
    const friendId = req.body.userId;

    console.log(id, friendId);
    const user = await UserModel.findById(id);
    user.friendRequests.push(friendId);
    console.log(user);
    res.status(201).send({ message: ' Successfully sent friend request ', user });

})

// This endpoint should allow users to update the text or image of a specific post identified by its ID.
// (Protected Route)

UserRouter.patch('posts/:id', async function (req, res) {
    const id = req.params.id;
    const friendId = req.body.userId;

    console.log(id, friendId);
    const user = await UserModel.findByIdAndUpdate(id);
    const friend = user.friends;

    console.log(friend);
    res.status(200).send({ token, message: ' Successfully get friend request ', user, friend });

})



module.exports = UserRouter;
