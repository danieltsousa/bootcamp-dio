import { PodcastTransferModel } from "../models/podcast-transfer-model.js";
import { repositoryPodcast } from "../repositories/podcasts-repository.js";
import { StatusCode } from "../utils/status-code.js";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split("?p=")[1] || "";

  const data = await repositoryPodcast(queryString);

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responseFormat;
};


