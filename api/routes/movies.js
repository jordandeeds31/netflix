const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken"); // we need to import this because only the admin will be able to add movies 

// Create a movie
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = newMovie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    }
})


// Update movie
router.post("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                {
                    new: true
                }
            )
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
})

// Delete a movie 
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id)
        } catch (err) {
            res.status(500).json(err);
        }
    }
})

module.exports = router;






