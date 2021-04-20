const mongoose = require('mongoose')

const mongodbHost = '127.0.0.1'
const mongodbPort = '27017'
const databaseName = 'task-manager-api'

const connetionURL = 'mongodb://' + mongodbHost + ':' + mongodbPort + '/' + databaseName

mongoose.connect(connetionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})