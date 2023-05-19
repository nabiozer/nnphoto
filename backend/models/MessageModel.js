import mongoose from 'mongoose';


const messageSchema = mongoose.Schema({
   
   
    email : {
        type:Number,
    },
    name : {
        type:String,
    },
    phone : {
        type:String,
    },
    message : {
        type:String,
    },

}, {
    timestamps:true
})


const Message = mongoose.model('Message',messageSchema);



export default Message