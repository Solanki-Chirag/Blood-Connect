const hospital = require("../model/Hospital");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    try {
        const findHospital = await hospital.findOne({ refreshToken: refreshToken });
        if (!findHospital) return res.sendStatus(403); // Forbidden
        
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err || findHospital.Hospital_name !== decoded.Hospital_name) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { "Hospital_name": decoded.Hospital_name },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            );
            res.json({ accessToken });
        });
    } catch (error) {
        console.error("Error handling refresh token:", error);
        res.sendStatus(500); // Internal Server Error
    }
}

module.exports = { handleRefreshToken };
