import * as http from "http";

import {
  getListEpisodes,
  getFilterEpisodes,
} from "./controllers/podscasts-controller.js";

import { Routes } from "./routes/routes.js";
import { HttpMethod } from "./utils/http-methods.js";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
    return;
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.ESPISODE) {
    await getFilterEpisodes(request, response);
    return;
  }

  response.writeHead(404);
  response.end();
};