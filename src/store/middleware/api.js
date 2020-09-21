import axios from "axios";
import * as actions from "../api";
import { errorRecieved } from "../errors";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const {
    url,
    method,
    data,
    onSuccess,
    onError,
    headers,
    onStart,
  } = action.payload;

  next(action);

  if (onStart) dispatch({ type: onStart });

  try {
    const response = await axios.request({
      baseURL: "http://localhost:5000/api",
      url,
      method,
      data,
      headers,
    });
    dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    console.log(response);
  } catch (err) {
    dispatch(actions.apiCallFailed(err.message));
    dispatch(
      errorRecieved({
        msg: { msg: err.response.data },
        status: err.response.status,
      })
    );
    if (onError) {
      dispatch({ type: onError, payload: err.message });
    }
  }
};

export default api;
