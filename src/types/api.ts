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
