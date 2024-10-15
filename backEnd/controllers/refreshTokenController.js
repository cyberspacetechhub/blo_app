const User = require('../models/User');
const jwt = require('jsonwebtoken');

handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;

    if(!cookies) return res.sendStatus(401); //Unathorized
    console.log(cookies.refresh);
    const refreshToken = cookies.refresh;

    const currentUser = await User.findOne({refreshToken}).exec();
    if(!currentUser) return res.sendStatus(403); //Forbidden

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN,
        (err, decoded) => {
            if(err || currentUser.email !== decoded.email) return res.sendStatus(403); //Forbidden
            const roles = currentUser.type;

            const accessToken = jwt.sign(
                {
                    "email": decoded.email,
                    roles: roles
                },
                process.env.ACCESS_TOKEN,
                {expiresIn: '1d'}
            );
            res.json({accessToken});
        }
    )
    
}

module.exports = { handleRefreshToken }