import { PodcastTransferModel } from "../models/podcast-transfer-model.js";
import { repositoryPodcast } from "../repositories/podcasts-repository.js";
import { StatusCode } from "../utils/status-code.js";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responseFormat;
};