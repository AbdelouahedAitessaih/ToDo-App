const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() =>
    console.log('Connected successfully to Database ')).catch((err) => console.log(err));