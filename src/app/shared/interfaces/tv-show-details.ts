export interface TvShowDetails {
  tvShow: TvShow;
  episodesCount: number;
  seasonsCount: number;
  nextEpisode: Date;
}

export interface TvShow {
  id:                   number;
  name:                 string;
  permalink:            string;
  url:                  string;
  description:          string;
  description_source:   null;
  start_date:           string;
  end_date:             string;
  country:              string;
  status:               string;
  runtime:              number;
  network:              string;
  youtube_link:         string;
  image_path:           string;
  image_thumbnail_path: string;
  rating:               number;
  rating_count:         string;
  countdown:            null;
  genres:               string[];
  pictures:             any[];
  episodes:             Episode[];
}

export interface Episode {
  season:   number;
  episode:  number;
  name:     string;
  air_date: Date;
}
