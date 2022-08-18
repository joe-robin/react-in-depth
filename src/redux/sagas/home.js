import { call, delay, put, takeLatest, takeLeading } from "redux-saga/effects";
import { Get } from "../../services/axios/axios";
import actions from "../actions/index";

function* searchMovies(action) {
  try {
    yield delay(500);

    //Setting Loading State
    yield put({ type: actions.MOVIES_LOADING, payload: true });

    const res = yield call(Get, {
      endPoint: "/search/movie",
      params: { query: action.payload },
    });

    if (res.status === 200)
      yield put({ type: actions.SET_MOVIES, payload: res.data });
    else yield put({ type: actions.SET_MOVIES, payload: {} });

    //Setting Loading State
    yield put({ type: actions.MOVIES_LOADING, payload: false });
  } catch (err) {
    console.error(err);
  }
}

function* getCategories(action) {
  const res = yield call(Get, {
    endPoint: "/genre/movie/list",
  });
  yield put({ type: actions.SET_CATEGORIES, payload: res.data });
}

export function* homeSaga() {
  yield takeLatest(actions.GET_MOVIES, searchMovies);
  yield takeLeading(actions.GET_CATEGORIES, getCategories);
}
