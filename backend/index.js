const express = require('express');
const cors = require('cors');
const axios = require('axios')
require('dotenv').config({path: __dirname+'/../.env'});

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

const privateKey = process.env.chatEnginePrivateKey;
const projectId = process.env.chatEngineProjectId;

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;
    try {
        const chatEngineResponse = await axios.put(
            'https://api.chatengine.io/users/',
            {username, secret: username, first_name: username},
            {headers: {"PRIVATE-KEY": privateKey}}
        );
        return res.status(chatEngineResponse.status).json(chatEngineResponse.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.get('/projectid', async (req, res) => {
    res.json(projectId);
})

app.listen(3001);