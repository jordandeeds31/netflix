const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
    const authHeader = req.headers.token; // we are sending the jwt accessToken to the req.headers 
    if (authHeader) {                     // we are checking if there is a jwt token in the req.headers, if there is go to the next steps
        const token = authHeader.split(" ")[1]      // since Bearer is in front of the jwt token we need to split by a space and get the second element which is the jwt token
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {      // we are checking if the jwt token is an actual token and if it is set the payload to req.user which is in the next step
            if (err) res.status(403).json("Token is not valid");
            req.user = user;                                            // we are setting the payload which is in the token (id and isAdmin) to req.user
            next();
        })
    } else {
        return res.status(401).json("You are not authenticated");
    }
}

module.exports = verify;