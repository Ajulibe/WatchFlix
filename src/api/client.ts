/*eslint-disable*/
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import config from "config";
import { getToken } from "./getToken";

interface ClientParams {
  body?: any;
  method?: string;
  axiosConfig?: {
    noBaseURL: boolean;
    [key: string]: unknown;
  };
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  headers?: {
    [key: string]: string;
  };
  [key: string]: unknown;
}

type server = "java" | "express";

async function client(
  serverName: server,
  endpoint: string,
  { body, method, axiosConfig, headers: customHeaders, ...customConfig }: ClientParams = {}
): Promise<unknown> {
  const token = getToken();

  const headers: Record<string, string> = {
    "Content-type": "application/json; charset=UTF-8"
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  const payload = { ...body };

  if (axiosConfig?.noBaseURL) {
    axios.defaults.baseURL = "";
    delete headers.Authorization;
  } else {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    axios.defaults.baseURL =
      serverName === "java"
        ? `${config.REACT_APP_JAVA_SERVER_BASE_URL}/`
        : `${config.REACT_APP_EXPRESS_SERVER_BASE_URL}/`;
    // sets token header if one exists
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  const params: AxiosRequestConfig = {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    method: method || (body ? "POST" : "GET"),
    ...customConfig,
    headers: {
      ...headers,
      ...customHeaders
    }
  };

  if (body) params.data = JSON.stringify(payload);

  let response: AxiosResponse;

  const axiosResponse = await axios(`${endpoint}`, params);
  const data = axiosResponse?.data;

  if (data?.data) {
    const { data: resolvedResponse } = data;
    response = resolvedResponse;
  } else {
    response = data;
  }

  return response;
}

export { client };
