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
      date: "02.04.2022",
      hour: "12:00",
      place: "plato",
      packagePrice: 1500,
      advancePayment: 300,
      packageDetails: "fotoğraf çekimi ve video klip (1dk)",
      album: "50x60",
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
      date: "03.04.2022",
      hour: "13:00",
      place: "plato2",
      packagePrice: 1700,
      advancePayment: 300,
      packageDetails: "fotoğraf çekimi ve video klip (1dk)",
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
      date: "03.04.2022",
      hour: "13:00",
      place: "plato2",
      packagePrice: 1700,
      advancePayment: 300,
      packageDetails: "fotoğraf çekimi ve video klip (1dk)",
      isPoster:false
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

      adress: "abdülbaki golpınarlı u1 ",
      phoneNumber: "5303180728",
    reservationInfo: {
      date: "03.04.2022",
      hour: "13:00",
      place: "plato2",
      packagePrice: 1700,
      advancePayment: 300,
      packageDetails: "fotoğraf çekimi ve video klip (1dk)",
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
