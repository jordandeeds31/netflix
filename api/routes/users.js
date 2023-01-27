const router = require("express").Router();
const verify = require("../verifyToken");
const CryptoJS = require("crypto-js");
const User = require("../models/User");

// Update
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {    // this req.user.id is coming from the accessToken, which was passed from the verify function in verifyToken.js by using the next(), (if the id from the params equals the id from the accessToken then we know the user is validated )
        if (req.user.password) {                                // this checks if the user wants to update their password, if so we encrypt the updated password 
            req.user.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body                                 // this updates anything the user changes in the body 
            },
                { new: true }                                  // in order to save the update changes to the database we need to include this line. 
            )
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err)
        }
    }
})

// Delete 
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can only delete your account");
    }
})

module.exports = router;

// Get a user
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;                        // this removes the password from the user object when we send it to the front end. the ...info holds everything else.
        res.status(200).json(info);
    } catch (err) {
        res.json(500).json(err);
    }
})

// Get all users
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
      try {
        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed to see all users!");
    }
  });

// Get Stats

