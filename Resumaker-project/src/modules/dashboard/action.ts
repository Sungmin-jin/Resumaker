export const LOAD_DASHBOARD = "dashboard/LOAD_DASHBOARD" as const;
export const LOAD_DASHBOARD_SUCCESS =
  "dashboard/LOAD_DASHBOARD_SUCCESS" as const;
export const LOAD_DASHBOARD_FAILURE =
  "dashboard/LOAD_DASHBOARD_FAILURE" as const;
export const INCREASE_DASHBOARD_INDEX =
  "dashboard/INCREASE_DASHBOARD_INDEX" as const;
export const DELETETEMPLATESUCCESS = "dashboard/DELETETEMPLATESUCCESS" as const;
export const CLEARDASHBOARD = "dashboard/CLEARDASHBOARD" as const;

export const loadDashboard = () => ({
  type: LOAD_DASHBOARD,
});
export const loadDashboardSuccess = (data: any) => ({
  type: LOAD_DASHBOARD_SUCCESS,
  payload: data,
});
export const loadDashboardFailure = (error: Error) => ({
  type: LOAD_DASHBOARD_FAILURE,
  error: error,
});
export const increaseDashboardIndex = () => ({
  type: INCREASE_DASHBOARD_INDEX,
});

export const deleteTemplateSuccess = (id: string) => ({
  type: DELETETEMPLATESUCCESS,
  payload: id,
});

export const clearDashboard = () => ({
  type: CLEARDASHBOARD,
});

export type loadDashboardType =
  | ReturnType<typeof loadDashboard>
  | ReturnType<typeof loadDashboardSuccess>
  | ReturnType<typeof loadDashboardFailure>
  | ReturnType<typeof increaseDashboardIndex>
  | ReturnType<typeof clearDashboard>
  | ReturnType<typeof deleteTemplateSuccess>;
