import asyncHandler from "express-async-handler";
import Notification from "../models/NotificationModel.js";

//  @desc Fetch all notifications
//  @route Get /api/notifications
//  @acces Public

const getNotifications = asyncHandler(async (req, res) => {

  const PageSize = Number(req.query.PageSize) || 10;
  const PageNumber = Number(req.query.PageNumber) || 1;
  const skipNum = (PageNumber - 1) * PageSize;
  const StartDateFilter = req.query.StartDate || null;
  const EndDateFilter = req.query.EndDate || null;
  const Action = req.query.Action || '';




  const sortQuery = {};
  if(req?.query?.Sort) {
    const sortData = req.query.Sort.split('-');
    const sortField = sortData[0]
    const direction = sortData[1] === 'asc' ? 1 : -1;
    sortQuery[sortField] = direction;
  
  }

  const query = {};

  if (Action) {
    query.action = {
      $regex: new RegExp(Action, "i"),
    };
  }

  if (StartDateFilter) {
    console.log(new Date(StartDateFilter * 1000))
    query.date = {
      ...(StartDateFilter && {$gte: StartDateFilter}),
      ...(EndDateFilter &&{ $lte: EndDateFilter}),
    };
  }

  const notifications = await Notification.find(query).sort(sortQuery).skip(skipNum).limit(PageSize).populate('user','name');

  const TotalCount = await Notification.countDocuments(query);
  const TotalPages = PageSize === -1 ? 1 : Math.ceil(TotalCount / PageSize);



  res.json({
    Data: notifications,
    TotalCount,
    PageNumber,
    PageSize,
    TotalPages,
  });


});

//  @desc Fetch  notificationDetail
//  @route Get /api/notifications/:id
//  @acces Private
const getNotificationById = asyncHandler(async (req, res) => {
  const notificationDetail = await Notification.findById(req.params.id);
  if (notificationDetail) {
    res.json(notificationDetail);
  } else {
    res.status(404);
    throw new Error("Notification not found");
  }
});
//  @desc Delete notificationDetail
//  @route Dekete /api/notifications/:id
//  @acces Private/Admin
const deleteNotification = asyncHandler(async (req, res) => {
  const notificationDetail = await Notification.findById(req.params.id);
  if (notificationDetail) {
    await notificationDetail.remove();
    res.json({ message: "notification deleted" });
  } else {
    res.status(404);
    throw new Error("Notification not found");
  }
});

//  @desc Create notificationDetail
//  @route Create /api/notifications/
//  @acces Private/Admin

const createNotification = asyncHandler(async (req, res) => {
  // const {price,date,description} = req.body

  const {
    action
  } = req.body;


  console.log(action);
  const notification = new Notification({
    action,
    user: req.user._id, 
   
})
  const notificationDetail = await notification.save(req.body);

  if (notificationDetail) {
    res.status(201).json(notificationDetail);
  } else {
    res.status(401);
    throw new Error("notificationDetail not found");
  }
});

//  @desc Update Notification
//  @route Put /api/notifications/:id
//  @acces Private/Admin
const updateNotification = asyncHandler(async (req, res) => {
  const {
    user,
   action,
   
  } = req.body;

  const notificationDetail = await Notification.findById(req.params.id);
  if (notificationDetail) {
    notificationDetail.action = action || notificationDetail.action;
    notificationDetail.description = description || notificationDetail.description;
  
    const updatedNotification = await notificationDetail.save();
    res.json(updatedNotification);
  } else {
    res.status(404);
    throw new Error("Notification not found");
  }
});

export {
  getNotifications,
  getNotificationById,
  deleteNotification,
  createNotification,
  updateNotification,
};
