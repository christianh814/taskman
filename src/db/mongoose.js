const mongoose = require('mongoose')

const mongodbHost = process.env.MONGODB_HOST || '127.0.0.1'
const mongodbPort = process.env.MONGODB_PORT || '27017'
const databaseName = process.env.MONGODB_DB || 'task-manager-api'

//mongodb://username:password@hostname:port/dbname
const connetionURL = 'mongodb://' + mongodbHost + ':' + mongodbPort + '/' + databaseName

mongoose.connect(connetionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})