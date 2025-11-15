export type SearchEngine = "baidu" | "google" | "github";

export const searchEngineUrls: Record<SearchEngine, string> = {
  baidu: "https://www.baidu.com/s?wd=",
  google: "https://www.google.com/search?q=",
  github: "https://github.com/search?q="
};

