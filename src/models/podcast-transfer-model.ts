import { PodcastModel } from "./podcast-model.js";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}


