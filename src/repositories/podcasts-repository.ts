import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { PodcastModel } from "../models/podcast-model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathData = path.resolve(__dirname, "podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8";

  const rawData = fs.readFileSync(pathData, language);

  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName
    );
  }

  return jsonFile.map((podcast: PodcastModel) => ({
    ...podcast,
    youtubeLink: `https://youtube.com/watch?v=${podcast.videoId}`,
  }));
};

