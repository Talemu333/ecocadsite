const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect('mongodb+srv://ecocad:liontiger.com@cluster0.ohiz2eb.mongodb.net/ecocadData', {useNewUrlParser: true}) 
// mongoose.connect('mongodb://127.0.0.1:27017/ecocad-data', {useNewUrlParser: true})
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error('email is invalid')
            }
        }
    },
    mobile: {
        type: String,
        required:true,
        minlength: 11,
        maxlength: 11
    },
    project: {
        type: String,
        trim: true,
        required: true
    },
    message: {
        type: String,
        
    }
},{
    timestamps: true
})

const User = new mongoose.model('users',userSchema )

module.exports = User


