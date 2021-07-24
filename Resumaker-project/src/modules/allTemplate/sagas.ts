import axios from "axios";
import { select, put, takeEvery } from "redux-saga/effects";
import {
  loadAllTemplatesSuccess,
  LOAD_ALL_TEMPLATE_LOADING,
  increaseTemplateIndex,
} from "./actions";

const apiUrl = "https://www.heejaerica.online/api/mockData";
// const apiUrl = "http://localhost:8081/api/mockData";

async function fetchTemplates(firstIndex: number, secondIndex: number) {
  const data = await axios.post(
    apiUrl,
    { firstIndex, secondIndex },
    { headers: { "Content-Type": "application/json" } }
  );
  if (data.data) {
    return {
      data: data.data,
      available: data.headers["x-custom-header"] === "keepGoing",
    };
  }
  throw new Error("No data!");
}

function* getTemplateList(): any {
  const available: boolean = yield select((state) => state.allTemplate.available);
  if (!available) {
    return 0;
  }

  try {
    const firstIndex: number = yield select((state) => state.allTemplate.index);
    const secondIndex: number = firstIndex + 1;

    const fetchedData = yield fetchTemplates(firstIndex, secondIndex);

    yield put(increaseTemplateIndex());
    yield put(loadAllTemplatesSuccess(fetchedData));
  } catch (e) {
    console.log(e);
  }
}

export default function* allTemplateSaga() {
  yield takeEvery(LOAD_ALL_TEMPLATE_LOADING, getTemplateList);
}
