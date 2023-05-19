import asyncHandler from "express-async-handler";
import Message from "../models/MessageModel.js";

//  @desc Fetch all messages
//  @route Get /api/messages
//  @acces Public

const getMessages = asyncHandler(async (req, res) => {

  const PageSize = Number(req.query.PageSize) || 10;
  const PageNumber = Number(req.query.PageNumber) || 1;
  const skipNum = (PageNumber - 1) * PageSize;
  const StartDateFilter = req.query.StartDate || null;
  const EndDateFilter = req.query.EndDate || null;
  const Name = req.query.Name || '';


  const sortQuery = {};
  if(req?.query?.Sort) {
    const sortData = req.query.Sort.split('-');
    const sortField = sortData[0]
    const direction = sortData[1] === 'asc' ? 1 : -1;
    sortQuery[sortField] = direction;
  
  }

  const query = {};

  if (Name) {
    query.name = {
      $regex: new RegExp(Name, "i"),
    };
  }

  if (StartDateFilter) {
    query.date = {
      ...(StartDateFilter && {$gte: StartDateFilter}),
      ...(EndDateFilter &&{ $lte: EndDateFilter}),
    };
  }

  const messages = await Message.find(query).sort(sortQuery).skip(skipNum).limit(PageSize);

  const TotalCount = await Message.countDocuments(query);
  const TotalPages = PageSize === -1 ? 1 : Math.ceil(TotalCount / PageSize);



  res.json({
    Data: messages,
    TotalCount,
    PageNumber,
    PageSize,
    TotalPages,
  });


});

//  @desc Fetch  messageDetail
//  @route Get /api/messages/:id
//  @acces Private
const getMessageById = asyncHandler(async (req, res) => {
  const messageDetail = await Message.findById(req.params.id);
  if (messageDetail) {
    res.json(messageDetail);
  } else {
    res.status(404);
    throw new Error("Message not found");
  }
});
//  @desc Delete messageDetail
//  @route Dekete /api/messages/:id
//  @acces Private/Admin
const deleteMessage = asyncHandler(async (req, res) => {
  const messageDetail = await Message.findById(req.params.id);
  if (messageDetail) {
    await messageDetail.remove();
    res.json({ message: "messageDetail deleted" });
  } else {
    res.status(404);
    throw new Error("Message not found");
  }
});

//  @desc Create messageDetail
//  @route Create /api/messages/
//  @acces Private/Admin

const createMessage = asyncHandler(async (req, res) => {
  // const {price,date,description} = req.body

  const messageDetail = await Message.create(req.body);
  if (messageDetail) {
    res.status(201).json(messageDetail);
  } else {
    res.status(401);
    throw new Error("messageDetail not found");
  }
});

//  @desc Update Message
//  @route Put /api/messages/:id
//  @acces Private/Admin
const updateMessage = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    message,
  } = req.body;

  const messageDetail = await Message.findById(req.params.id);
  if (messageDetail) {
    
    messageDetail.name = name || messageDetail.name;
    messageDetail.email = email || messageDetail.email;
    messageDetail.phone = phone || messageDetail.phone;
    messageDetail.message = message || messageDetail.message;
   
    const updatedMessage = await messageDetail.save();
    res.json(updatedMessage);
  } else {
    res.status(404);
    throw new Error("Message not found");
  }
});

export {
  getMessages,
  getMessageById,
  deleteMessage,
  createMessage,
  updateMessage,
};
