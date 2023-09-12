const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const app = express();
require('dotenv').config();
const { MONGO_URL, PORT } = process.env;
const router = require('./routing/common.routing.js')

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDb is connected..')).catch((err) => console.error(err))

app.listen(PORT, () => {
    console.log(`server runnig on ${PORT}`)
})

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)

app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(router);