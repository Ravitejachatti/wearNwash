import * as types from "./actionTypes";

const init = {
  centers: [],
  isLoading: false,
  isError: false,
};

export const reducer = (oldState = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LOCATION_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
        centers: [],
      };
    case types.GET_LOCATION_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        centers: payload,
      };

    case types.GET_LOCATION_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        centers: [],
      };
    default:
      return oldState;
  }
};
