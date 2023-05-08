import mongoose from 'mongoose';


const packageSchema = mongoose.Schema({
   
    packageName : {
        type:String,
        
    },
    packagePrice:{
        type:Number,
        default:''
    },
    albumDetail : {
        type:String,
        
    },
    familyDetail : {
        type:String,
        default:''
    },
    posterDetail : {
        type:String,
        default:''
    },
    canvasDetail:{
        type:String,
        default:''
    },
    videoKlip:{
        type:String,
        default:'Ortalama ,1 - 1.5 Dakika'
    },
    isDrone:{
        type:Boolean,
        default:false,
    },
    isPlaceInc:{
        type:Boolean,
        default:false,
    }
  

}, {
    timestamps:true
})


const Package = mongoose.model('Package',packageSchema);



export default Package