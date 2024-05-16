import * as constants from "../constents/constent";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const studentDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.STUDENT_DETAIL_START:
      return { ...state, loading: true, error: null };
    case constants.STUDENT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case constants.STUDENT_DETAIL_FAILURE:
      return { ...state, loading: false, error: action.payload, data: null };
    default:
      return { ...state };
  }
};
export const studentCalenderReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.STUDENT_CALENDER_START:
      return { ...state, loading: true, error: null };
    case constants.STUDENT_CALENDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case constants.STUDENT_CALENDER_FAILURE:
      return { ...state, loading: false, error: action.payload, data: null };
    default:
      return { ...state };
  }
};

export const studentCreditReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_CREDIT_START:
      return { ...state, loading: true, error: null };
    case constants.GET_CREDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case constants.GET_CREDIT_FAILURE:
      return { ...state, loading: false, error: action.payload, data: null };
    default:
      return { ...state };
  }
};
