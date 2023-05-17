import mongoose from 'mongoose';


const photoSchema = mongoose.Schema({
   
    image : {
        type:String,
        
    },
    property : {
        type:String,
        
    },
    description : {
        type:String,
        default:''
    },
    src : {
        type:String,
        default:''
    },
    colorCodes:[
      
    ],
    order:{
        type:Number
    }
  

}, {
    timestamps:true
})


const Photo = mongoose.model('Photo',photoSchema);



export default Photo