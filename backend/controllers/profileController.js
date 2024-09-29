const axios = require('axios');

const getProfile = async function (req, res) {
    try {
        const url = 'http://localhost:8000/profile';
        const profile = await axios.get(url);
        res.status(200).json({
            msg: 'Get profile succeed',
            data: profile.data,
        });
    } catch (error) {
        next(error);
    };
};

module.exports = {getProfile};