import { Template } from "interfaces";
import { all, put, takeEvery } from "redux-saga/effects";
import {
  UPLOADTEMPLATE,
  EDITTEMPLATE,
  DELETETEMPLATE,
  FETCHTEMPLATE,
  getTemplateSuccess,
  uploadTempalteSuccess,
  editTemplateSuccess,
} from "./action";

import { deleteTemplateSuccess } from "../dashboard/action";

import {
  uploadTemplateRequest,
  fetchTemplateRequest,
  deleteTemplateRequest,
} from "./api";

//TODO: Error handling
function* uploadTemplate({ payload }: Template) {
  try {
    yield uploadTemplateRequest(payload);
    yield put(uploadTempalteSuccess());
  } catch (error) {
    console.error(error);
  }
}

function* deleteTemplate({ payload }: string) {
  try {
    const response = yield fetchTemplateRequest(payload);
    const template = response.data;
    yield deleteTemplateRequest(template);
    yield put(deleteTemplateSuccess(payload));
  } catch (error) {
    console.error(error);
  }
}

function* editTemplate() {}

function* fetchTemplate({ payload }: string) {
  const response = yield fetchTemplateRequest(payload);
  yield put(getTemplateSuccess(response.data));
}

function* watchUploadTemplate() {
  yield takeEvery(UPLOADTEMPLATE, uploadTemplate);
}

function* watchDeleteTemplate() {
  yield takeEvery(DELETETEMPLATE, deleteTemplate);
}

function* watchEditTemplate() {
  yield takeEvery(EDITTEMPLATE, editTemplate);
}

function* watchFetchTemplate() {
  yield takeEvery(FETCHTEMPLATE, fetchTemplate);
}

export function* templateSaga() {
  yield all([
    watchUploadTemplate(),
    watchDeleteTemplate(),
    watchEditTemplate(),
    watchFetchTemplate(),
  ]);
}
