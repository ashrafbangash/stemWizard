import { combineReducers } from "@reduxjs/toolkit";
import {
    studentCalenderReducer,
    studentCreditReducer,
    studentDetailReducer,
  } from "./studentReducer";




  export default combineReducers({
    studentDetail: studentDetailReducer,
  studentCredit: studentCreditReducer,
  studentCalender: studentCalenderReducer,
  })