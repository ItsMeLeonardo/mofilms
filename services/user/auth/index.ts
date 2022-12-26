import { movieApi } from "services/movieApi";
//types
import {
  RequestTokenResponse,
  LoginResponse,
  LoginBody,
  SessionIdResponse,
  SessionIdBody,
  LoginSuccess,
} from "services/user/auth/types";

export const getRequestToken = async (): Promise<RequestTokenResponse> => {
  const { data } = await movieApi.get<RequestTokenResponse>(
    "authentication/token/new"
  );
  return data;
};

export const getSessionId = async (
  body: SessionIdBody
): Promise<SessionIdResponse> => {
  const { data } = await movieApi.post<SessionIdResponse>(
    "authentication/session/new",
    body
  );
  return data;
};

export const loginWithValidate = async (
  body: LoginBody
): Promise<LoginResponse> => {
  const { data } = await movieApi.post<LoginResponse>(
    "authentication/token/validate_with_login",
    body
  );
  return data;
};

/**
 * 1) get request token
 * 2) login with token
 * 3) get session id
 */
export const Login = async (
  body: Omit<LoginBody, "request_token">
): Promise<LoginSuccess> => {
  //FIXME: add validation
  const { request_token } = await getRequestToken();
  const payload: LoginBody = { ...body, request_token };

  const { success } = await loginWithValidate(payload);

  const { session_id } = await getSessionId({ request_token });

  return {
    success,
    session_id,
    request_token,
  };
};
