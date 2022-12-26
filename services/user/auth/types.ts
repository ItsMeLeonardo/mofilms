export interface RequestTokenResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}
export interface LoginResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface LoginBody {
  username: string;
  password: string;
  request_token: string;
}

export interface SessionIdResponse {
  success: boolean;
  session_id: string;
}

export interface SessionIdBody {
  request_token: string;
}

export interface LoginSuccess {
  success: boolean;
  session_id: string;
  request_token: string;
}
