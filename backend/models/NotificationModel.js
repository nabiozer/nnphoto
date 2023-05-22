import mongoose from 'mongoose';


const notificationSchema = mongoose.Schema({
   
    user : {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    action : {
        type:String,
    },
    description : {
        type:String,
    },
  

}, {
    timestamps:true
})


const Notification = mongoose.model('Notification',notificationSchema);



export default Notification