export const SHOW_HEADER = "appLayout/SHOW_HEADER" as const;
export const HIDE_HEADER = "appLayout/HIDE_HEADER" as const;
export const SHOW_FOOTER = "appLayout/SHOW_FOOTER" as const;
export const HIDE_FOOTER = "appLayout/HIDE_FOOTER" as const;
// dashboard
export const LOAD_IMAGE= "appLayout/LOAD_IMAGE" as const;
// export const LOAD_IMAGE_REQUEST = "appLayout/LOAD_IMAGE_REQUEST" as const;
// export const LOAD_IMAGE_SUCCESS = "appLayout/LOAD_IMAGE_SUCCESS" as const;
// export const LOAD_IMAGE_ERROR = "appLayout/LOAD_IMAGE_ERROR" as const;

export const showHeader = () => ({type: SHOW_HEADER});
export const hideHeader = () => ({type: HIDE_HEADER});
export const showFooter = () => ({type: SHOW_FOOTER});
export const hideFooter = () => ({type: HIDE_FOOTER});
export const loadImageRequest = () => ({type: LOAD_IMAGE, payload: Object});
// /export const loadImageRequest = () => ({type: LOAD_IMAGE_REQUEST, payload: Object});
// export const loadImageSuccess = () => ({type: LOAD_IMAGE_SUCCESS, payload: Object })
//{items}
// payload: { items }
export type appLayoutActionType =
  ReturnType<typeof showHeader>
  | ReturnType<typeof hideHeader>
  | ReturnType<typeof showFooter>
  | ReturnType<typeof hideFooter>
  | ReturnType<typeof loadImageRequest>;


  // // /
  // | ReturnType<typeof loadImageRequest>
  // | ReturnType<typeof loadImageSuccess>