import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "U1",
    email: "u1@example.com",
    password: bcrypt.hashSync("123456", 10),

    address: "abdülbaki golpınarlı u21 ",
    phoneNumber: "5303180728",

    reservationInfo: {
      date: null,
      hour: "12:00",
      place: "plato",
      packagePrice: 1500,
      advancePayment: 300,
      packageDetails: '3',
      album:{
        albumDetail:'25x50',
        familyDetail:'2',
        posterDetail:'50x70',
        canvasDetail:'',
        pvc:'White',
        box:'',
        wood:''
      },
    },

    chosen: {
      album: {
        colorCode: "404",
        albumName: "more",
      },
      photosChosen: ["IMG-0738.JPG", "IMG-0739.JPG"],
      poster: "IMG-0738.JPG",
      cover: "IMG-0738.JPG",
      isChoiced:false
    },
    photos: "",
    video: "",
    isAdmin: false,
  },
  {
    name: "U2",
    email: "u2@example.com",
    password: bcrypt.hashSync("123456", 10),

      address: "abdülbaki golpınarlı u1 ",
      phoneNumber: "5303180728",
    reservationInfo: {
      album:{
        albumDetail:'25x50',
        familyDetail:'2',
        posterDetail:'50x70',
        canvasDetail:'',
        pvc:'White',
        box:'',
        wood:''
      },
      date: null,
      hour: "13:00",
      place: "plato2",
      packagePrice: 1700,
      advancePayment: 300,
      packageDetails:'3',
      isPoster:true
    },

    chosen: {
      album: {
        colorCode: "402",
        albumName: "DORA",
      },
      photos: ["IMG-0738.JPG", "IMG-0739.JPG"],
      poster: "IMG-0738.JPG",
      cover: "IMG-0738.JPG",
      coverText: "xx&xx 2013",
      isChoiced:false,
    },
    photos: "",
    video: "",
    isAdmin: false,
  },
  {
    name: "U3",
    email: "u3@example.com",
    password: bcrypt.hashSync("123456", 10),

      address: "abdülbaki golpınarlı u1 ",
      phoneNumber: "5303180728",
    reservationInfo: {
      date: null,
      hour: "13:00",
      place: "plato2",
      packagePrice: 1700,
      advancePayment: 300,
      packageDetails: '2',
      isPoster:false,
      album:{
        albumDetail:'25x50',
        familyDetail:'2',
        posterDetail:'50x70',
        canvasDetail:'',
        pvc:'White',
        box:'',
        wood:'',
        albumDetail:'25x50',
        familyDetail:'2'
      },
    },

    chosen: {
      album: {
        colorCode: "402",
        albumName: "DORA",
      },
      photos: ["IMG-0738.JPG", "IMG-0739.JPG"],
      poster: "IMG-0738.JPG",
      cover: "IMG-0738.JPG",
      coverText: "xx&xx 2013",
      isChoiced:true,
    },
    photos: "",
    video: "",
    status:"Albüm Bekleniyor",
    isAdmin: false,
  },
  {
    name: "U4",
    email: "u4@example.com",
    password: bcrypt.hashSync("123456", 10),

      address: "abdülbaki golpınarlı u1 ",
      phoneNumber: "5303180728",
    reservationInfo: {
      album:{
        albumDetail:'25x50',
        familyDetail:'2',
        posterDetail:'',
        canvasDetail:'',
        pvc:'White',
        box:'',
        wood:''

      },
      date: null,
      hour: "13:00",
      place: "plato2",
      packagePrice: 1700,
      advancePayment: 300,
      packageDetails: '1'
    },

    chosen: {
      album: {
        colorCode: "402",
        albumName: "DORA",
      },
      photos: ["IMG-0738.JPG", "IMG-0739.JPG"],
      poster: "IMG-0738.JPG",
      cover: "IMG-0738.JPG",
      coverText: "xx&xx 2013",
      isChoiced:false,
    },
    photos: "",
    video: "",
    isAdmin: false,
  },
];

export default users;
