import asyncHandler from "express-async-handler";
import Expense from "../models/ExpenseModel.js";

//  @desc Fetch all expenses
//  @route Get /api/expenses
//  @acces Public

const getExpenses = asyncHandler(async (req, res) => {

  const PageSize = Number(req.query.PageSize) || 10;
  const PageNumber = Number(req.query.PageNumber) || 1;
  const skipNum = (PageNumber - 1) * PageSize;
  const StartDateFilter = req.query.StartDate || null;
  const EndDateFilter = req.query.EndDate || null;
  const Description = req.query.Description || '';


  const query = {};

  if (Description) {
    query.description = {
      $regex: new RegExp(Description, "i"),
    };
  }

  if (StartDateFilter) {
    query.date = {
      ...(StartDateFilter && {$gte: StartDateFilter}),
      ...(EndDateFilter &&{ $lte: EndDateFilter}),
    };
  }

  const expenses = await Expense.find(query).skip(skipNum).limit(PageSize);

  const TotalCount = await Expense.countDocuments(query);
  const TotalPages = PageSize === -1 ? 1 : Math.ceil(TotalCount / PageSize);



  res.json({
    Data: expenses,
    TotalCount,
    PageNumber,
    PageSize,
    TotalPages,
  });


});

//  @desc Fetch  expenseDetail
//  @route Get /api/expenses/:id
//  @acces Private
const getExpenseById = asyncHandler(async (req, res) => {
  const expenseDetail = await Expense.findById(req.params.id);
  if (expenseDetail) {
    res.json(expenseDetail);
  } else {
    res.status(404);
    throw new Error("Expense not found");
  }
});
//  @desc Delete expenseDetail
//  @route Dekete /api/expenses/:id
//  @acces Private/Admin
const deleteExpense = asyncHandler(async (req, res) => {
  const expenseDetail = await Expense.findById(req.params.id);
  if (expenseDetail) {
    await expenseDetail.remove();
    res.json({ message: "expenseDetail deleted" });
  } else {
    res.status(404);
    throw new Error("Expense not found");
  }
});

//  @desc Create expenseDetail
//  @route Create /api/expenses/
//  @acces Private/Admin

const createExpense = asyncHandler(async (req, res) => {
  // const {price,date,description} = req.body

  const expenseDetail = await Expense.create(req.body);
  if (expenseDetail) {
    res.status(201).json(expenseDetail);
  } else {
    res.status(401);
    throw new Error("expenseDetail not found");
  }
});

//  @desc Update Expense
//  @route Put /api/expenses/:id
//  @acces Private/Admin
const updateExpense = asyncHandler(async (req, res) => {
  const {
    expenseName,
    expensePrice,
    albumDetail,
    familyDetail,
    posterDetail,
    canvasDetail,
    videoKlip,
    isDrone,
    isPlaceInc,
  } = req.body;

  const expenseDetail = await Expense.findById(req.params.id);
  if (expenseDetail) {
    expenseDetail.expenseName = expenseName || expenseDetail.expenseName;
    expenseDetail.expensePrice = expensePrice || expenseDetail.expensePrice;
    expenseDetail.albumDetail = albumDetail || expenseDetail.albumDetail;
    expenseDetail.familyDetail = familyDetail || expenseDetail.familyDetail;
    expenseDetail.posterDetail = posterDetail || expenseDetail.posterDetail;
    expenseDetail.canvasDetail = canvasDetail || expenseDetail.canvasDetail;
    expenseDetail.videoKlip = videoKlip || expenseDetail.videoKlip;
    expenseDetail.isDrone = isDrone || expenseDetail.isDrone;
    expenseDetail.isPlaceInc = isPlaceInc || expenseDetail.isPlaceInc;
    const updatedExpense = await expenseDetail.save();
    res.json(updatedExpense);
  } else {
    res.status(404);
    throw new Error("Expense not found");
  }
});

export {
  getExpenses,
  getExpenseById,
  deleteExpense,
  createExpense,
  updateExpense,
};
