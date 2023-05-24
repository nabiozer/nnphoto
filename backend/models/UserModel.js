import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      default: "",
    },

    reservationInfo: {
      date: {
        type: Number,

        default: null
      },
      place: {
        type: String,

        default: "",
      },
      packagePrice: {
        type: Number,

        default: "",
      },

      packageDetails: {
        type: String,
        default: "",
      },

      advancePayment: {
        type: Number,

        default: "",
      },
      extras:{
        type:String,
        default:""
      },
      album:{
     
        isPoster:{
          type:Boolean,
          default: false,
        },
        albumDetail: {
          type: String,
          default: "25x50 - 2 Jumbo",
        },
        familyDetail:{
          type: String,
          default: "2",
        },
        posterDetail:{
          type: String,
          default: "",
        },
        canvasDetail:{
          type: String,
          default: '',
        },
        pvc:{
          type:String,
          default:'white'
        },
        box:{
          type:String,
          default:''
        },
        wood:{
          type:String,
          default:''
        },
      },
     
    },

    chosen: {
      album: {
        colorCode: {
          type: String,
          default: "",
        },
        albumName: {
          type: String,
          default: "",
        },
      },
      photosChosen: [],
      poster: {
        type: String,
      },
      cover: {
        type: String,
      },
      coverText: {
        type: String,
      },
      isChoiced:{
        type: Boolean,
      }
    },
    photos: {
      type: String,
    },
    video: {
      type: String,
    },
    status: {
      type: String,
      default: 'Çekim',
    },
    isAdmin: {
      type: Boolean,

      default: false,
    },
    downloadedCount:{
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
