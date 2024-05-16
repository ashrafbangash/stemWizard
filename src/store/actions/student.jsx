import studentService from "@/services/studentService";
import student from "@/services/student";
import * as Constants from "../constents/constent";

export const getStudentDetail = (params) => {
  return (dispatch) => {
    dispatch(studentStart());

    studentService
      .getStudentData(params)
      .then((response) => {
        dispatch(studentSuccess(response.data));
      })
      .catch((err) => {
        dispatch(studentFailure(err.message));
      });
  };
};
export const studentStart = () => {
  return {
    type: Constants.STUDENT_DETAIL_START,
  };
};

export const studentSuccess = (data) => {
  return {
    type: Constants.STUDENT_DETAIL_SUCCESS,
    payload: data,
  };
};

export const studentFailure = (error) => {
  return {
    type: Constants.STUDENT_DETAIL_FAILURE,
    payload: error,
  };
};

export const getStudentCredit = () => {
  return (dispatch) => {
    dispatch(studentCreditStart());
    student
      .getStudentCredits()
      .then((response) => {
        dispatch(studentCreditSuccess(response.data));
      })
      .catch((err) => {
        dispatch(studentCreditFailure(err.message));
      });
  };
};
export const studentCreditStart = () => {
  return {
    type: Constants.GET_CREDIT_START,
  };
};

export const studentCreditSuccess = (data) => {
  return {
    type: Constants.GET_CREDIT_SUCCESS,
    payload: data,
  };
};

export const studentCreditFailure = (error) => {
  return {
    type: Constants.GET_CREDIT_FAILURE,
    payload: error,
  };
};
