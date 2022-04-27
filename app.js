// const express = require('express');
const config = require('./config/config');
const mainRouter = require('./routes/main.routes');

const app = express()
config(app)

// app.use('/', mainRout);
app.use('/', mainRouter);



app.listen(3000, () => console.log("listen port 3000"));
// app.use('/', mainRouter)
// app.use('/', mainRout);
