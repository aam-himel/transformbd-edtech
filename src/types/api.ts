// make a genereral api types file for all api related types

// make a genral api type like IApiResponse

export interface IApiResponse<T> {
  data: T;
  message: string;
  code: number;
}

export interface ICourse {
  course_id: number;
  title: string;
  description: string;
  price: string;
  featured_video_url: string | null;
  featured_image_url: string | null;
  tagline: string;
  location: string;
  time: string | null;
  capacity: string;
  type: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface IAuthErrorResponse {
  code: number;
  message: string;
  data: {
    [key: string]: string[];
  };
}

export type ICoursesResponse = IApiResponse<ICourse[]>;

// Auth Types
export interface IRegistrationRequest {
  name: string;
  email: string;
  password: string;
  conf_password: string;
  deviceID: string;
  deviceName: string;
  profession: string;
  phone: string;
  education: string;
  address: string;
}

export interface IRegistrationResponse {
  code: string;
  message: string;
  data: string; // token
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  code: string;
  message: string;
  data: {
    token: string;
  };
}

export interface IUserProfile {
  account_id: number;
  name: string;
  oneID: string;
  role: string;
  image_path: string | null;
  profession: string | null;
  phone: string | null;
  education: string | null;
  address: string | null;
  dob: string | null;
  created_at: string;
}

export interface IUserProfileResponse {
  code: string;
  message: string;
  data: IUserProfile;
}
