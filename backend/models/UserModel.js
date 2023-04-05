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
        type: String,

        default: "",
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
      album: {
        type: String,
        default: "25x65 - 2 Adet Aile Albumu -50x70 poster",
      },
      isPoster:{
        type:Boolean,
        default: false,
      }
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
      default: 'Çekim Bekleniyor',
    },
    isAdmin: {
      type: Boolean,

      default: false,
    },

   
    
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
