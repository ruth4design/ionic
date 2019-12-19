
export interface SearchResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: any[];
}
export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: any[];
  homepage: string;
  id: number;
  imdb_id:string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies?: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface CreditsInterface {
  id: number;
  cast: any[];
  crew: any[];
}