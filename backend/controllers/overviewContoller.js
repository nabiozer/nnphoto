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

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthNamesObj = {
  January: 0,
  February: 0,
  March: 0,
  April: 0,
  May: 0,
  June: 0,
  July: 0,
  August: 0,
  September: 0,
  October: 0,
  November: 0,
  December: 0
};
const monthsAllUsers = users.map(item => item.reservationInfo.date).reduce((accumulator, timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to Date object
    const month = date.getMonth(); // Get month number (0-indexed)
    const monthName = monthNames[month]; // Get month name from month number
    if (!accumulator[monthName]) {
      accumulator[monthName] = 0; // Initialize month key if it doesn't exist
    }
    accumulator[monthName]++; // Increment count for the month key
    return accumulator;
  }, {});

  const monthsDoneUsers = users?.filter((item)=> item.status === 'Tamamlandı')?.map(item => item.reservationInfo.date).reduce((accumulator, timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to Date object
    const month = date.getMonth(); // Get month number (0-indexed)
    const monthName = monthNames[month]; // Get month name from month number
    if (!accumulator[monthName]) {
      accumulator[monthName] = 0; // Initialize month key if it doesn't exist
    }
    accumulator[monthName]++; // Increment count for the month key
    return accumulator;
  }, {});



  res.json({
    totalIncome,
    totalExpense,
    totalUsers,
    waitingShooting,
    choiceWaiting,
    progressingAlbum,
    inAlbumCompany,
    done,
    monthsAllUsers:{...monthNamesObj,...monthsAllUsers},
    monthsDoneUsers:{...monthNamesObj,...monthsDoneUsers},
  });


});

export {getOverview} 