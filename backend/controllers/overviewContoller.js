import asyncHandler from "express-async-handler";
import Package from "../models/PackageModel.js";
import User from "../models/UserModel.js";
import Expense from "../models/ExpenseModel.js";

//  @desc Fetch all overview
//  @route Get /api/overview
//  @acces Privtae admin

const getOverview = asyncHandler(async (req, res) => {

 const users= await User.find({isAdmin:{$ne:true}})
 const expenses = await Expense.find({})
     

const totalIncome = users.reduce((acc, item) => acc + item?.reservationInfo?.advancePayment, 0);
const totalExpense = expenses.reduce((acc, item) => acc + item?.fee, 0);
const totalUsers = users?.length;
const waitingShooting = users?.filter(item => item.status === 'Çekim')?.length;
const choiceWaiting = users?.filter(item => item.status === 'Seçim')?.length;
const progressingAlbum = users?.filter(item => item.status === 'İşlenme')?.length;
const inAlbumCompany = users?.filter(item => item.status === 'Albüm')?.length;
const done = users?.filter(item => item.status === 'Tamamlandı')?.length;


  res.json({
    totalIncome,
    totalExpense,
    totalUsers,
    waitingShooting,
    choiceWaiting,
    progressingAlbum,
    inAlbumCompany,
    done    
  });


});

export {getOverview} 