import { SETS_REQUESTED, SETS_LOADED } from '../constants/action-types';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from "axios";

const url = "https://api.magicthegathering.io/v1";

export default function* watcherSaga() {
  yield takeEvery(SETS_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(fetchSets)
    yield put({ type: SETS_LOADED, payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e })
  }
}

async function fetchSets() {
  const results = await axios.get(url + "/sets");
  let fetchedSets = results.data.sets;
  fetchedSets = fetchedSets.filter(
    set => set.type === "core" || set.type === "expansion"
  );
  fetchedSets
    .sort((a, b) => {
      if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) > 0)
        return 1;
      if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) < 0)
        return -1;
      return a.releaseDate.slice(5, 7) - b.releaseDate.slice(5, 7);
    })
    .reverse();
  return fetchedSets;
};