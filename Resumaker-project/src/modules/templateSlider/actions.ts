export const LOAD_REMAINING_THUMBNAILS =
  "templateSlider/LOAD_REMAINING_THUMBNAILS" as const;

export const loadRemainingThumbnails = (templateId: string) => ({
  type: LOAD_REMAINING_THUMBNAILS,
  payload: templateId,
});

export type templateSliderActionType = ReturnType<
  typeof loadRemainingThumbnails
>;
