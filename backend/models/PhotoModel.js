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
    packageName:{
        type:String,
        default:''
    },
    packagePrice:{
        type:String,
        default:''
    },
    colorCodes:[
      
    ]
  

}, {
    timestamps:true
})


const Photo = mongoose.model('Photo',photoSchema);



export default Photo