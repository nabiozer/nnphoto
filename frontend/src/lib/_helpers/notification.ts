import { Dispatch } from "@reduxjs/toolkit";
import { createNotification } from "../../store/notification/notificationActions";

export const onAddNotification = async (dispatch:any,data:any) => {
    const res = await dispatch(createNotification(data));

    if (res.meta.requestStatus === 'fulfilled') {
      console.log('success')
    }

  }