const doner = require("../model/Doner");
require('dotenv').config();


const handleLogout = async (req, res) => {
   
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No Content
    const refreshToken = cookies.jwt;

    try {
        // Find the hospital with the refreshToken
        const findDoner = await doner.findOne({ refreshToken: refreshToken });
        if (!findDoner) {
            // If no hospital found, clear the cookie and send No Content response
            res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
            return res.sendStatus(204); // No Content
        }

        // If hospital found, update its refreshToken to null
        findDoner.refreshToken = null;
        await findDoner.save();

        // Clear the refreshToken cookie and send No Content response
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        res.sendStatus(204); // No Content
    } catch (error) {
        console.error("Error deleting refreshToken:", error);
        res.sendStatus(500); // Internal Server Error
    }
}

module.exports = { handleLogout };
