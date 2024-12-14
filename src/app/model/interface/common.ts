export interface APIResponseModel {
  message: string,
  success: boolean,
  data: any
}
export interface FeedbackType {
    feedbackTypeNo: number;
    feedbackName:   string;
    feedbackCode:   string;
    feedbackDesc:   string;
    isActive:       number;
}
