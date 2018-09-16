const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

//const modelsPath = path.resolve('server', 'models')
const modelsPath = path.join(__dirname, '../models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://glenrg:sp1noza@ds129801.mlab.com:29801/movies');

mongoose.connection.on('connected', () => console.log('connected to MongoDB'));



fs.readdirSync(modelsPath).forEach(file =>{
    if (reg.test(file)){
        require(path.join(modelsPath, file))
    }
})