type Locale = "en" | "zh" | "zh-Hant" | "ja" | "es" | "ar";
type HomeTitleKey = "home.continue_watching" | "home.tmdb_popular_tv_shows" | "home.tmdb_popular_movies" | "home.tmdb_on_the_air_tv_shows" | "home.tmdb_discover_genres" | "home.tmdb_discover_languages" | "home.tmdb_discover_networks" | "home.tmdb_top_rated_movies" | "home.tmdb_top_rated_tv_shows"
  | "home.tmdb_tv_netflix"
  | "home.tmdb_tv_hbo"
  | "home.tmdb_tv_apple"
  | "home.trakt_movies"
  | "home.trakt_shows"
  | "home.douban_movies"
  | "home.douban_tv"
  | "home.douban_hot_variety"
  | "home.douban_korean_tv"
  | "home.tmdb_anime_top_ja"
  | "home.tmdb_anime_jp"
  | "home.tmdb_anime_movie_ja"
  | "home.tmdb_anime_cn"
  | "home.tmdb_tv_ja"
  | "home.tmdb_tv_th"
  | "home.tmdb_movie_th"
  | "home.tmdb_movie_sea"
  | "home.tmdb_tv_es";
type SourceQueryValue = string | number | boolean; interface HomePagination { pageParam: string; startPage: number; }
type TmdbListRoute = { type: "tmdb-list"; title: string; params: { category: "trending" | "top-rated" | "discover"; type: "movie" | "tv"; genre?: string; language?: string; network?: string; networkName?: string; }; };
type TmdbListRouteParams = TmdbListRoute["params"];
interface HomeBlockSource { id?: string; path?: string; query?: Record<string, SourceQueryValue>; itemEnvelope?: "data" | "results" | "array"; pagination?: HomePagination; }
interface HomeBlock { id: string; title?: string; mediaType?: "movie" | "tv"; preset: string; showRank?: boolean; showOverview?: boolean; source?: HomeBlockSource; metadata?: { isAnime?: boolean; }; route?: TmdbListRoute; }
type HomeBlockTemplate = Omit<HomeBlock, "title"> & { titleKey?: HomeTitleKey; };
export interface DefaultHomeConfigOptions { apiBaseUrl: string; imageBaseUrl: string; language: string; timezone: string; }
export interface DefaultHomeConfig { version: number; apiBaseUrl: string; imageBaseUrl: string; carouselSourceId: string; blocks: HomeBlock[]; }
export const HOME_CONFIG_VERSION = 1;
const TITLE_TRANSLATIONS: Record<HomeTitleKey, Record<Locale, string>> = {
  "home.continue_watching": { en: "Continue Watching", zh: "继续观看", "zh-Hant": "繼續觀看", ja: "続きを視聴", es: "Continuar Viendo", ar: "متابعة المشاهدة" },
  "home.tmdb_popular_tv_shows": { en: "Today's Popular TV Shows", zh: "今日热门电视剧", "zh-Hant": "今日熱門電視劇", ja: "今日の人気テレビ番組", es: "Series de TV Populares de Hoy", ar: "مسلسلات شائعة" },
  "home.tmdb_popular_movies": { en: "Today's Popular Movies", zh: "今日热门电影", "zh-Hant": "今日熱門電影", ja: "今日の人気映画", es: "Películas Populares de Hoy", ar: "أفلام شائعة" },
  "home.tmdb_on_the_air_tv_shows": { en: "On The Air TV Shows", zh: "正在热播", "zh-Hant": "正在熱播", ja: "放送中", es: "En Emisión", ar: "يعرض الآن" },
  "home.tmdb_discover_genres": { en: "Browse By Category", zh: "按分类浏览", "zh-Hant": "按分類瀏覽", ja: "カテゴリで探す", es: "Explorar por Categoría", ar: "تصفح حسب الفئة" },
  "home.tmdb_discover_languages": { en: "Browse By Language", zh: "按语言浏览", "zh-Hant": "按語言瀏覽", ja: "言語で探す", es: "Explorar por Idioma", ar: "حسب اللغة" },
  "home.tmdb_discover_networks": { en: "Browse By Network", zh: "按平台浏览", "zh-Hant": "按平台瀏覽", ja: "配信サービスで探す", es: "Explorar por Plataforma", ar: "حسب الشبكة" },
  "home.tmdb_top_rated_movies": { en: "Top Rated Movies", zh: "高分电影", "zh-Hant": "高分電影", ja: "高評価映画", es: "Películas Mejor Valoradas", ar: "الأعلى تقييماً" },
  "home.tmdb_top_rated_tv_shows": { en: "Top Rated TV Shows", zh: "高分电视剧", "zh-Hant": "高分電視劇", ja: "高評価テレビ番組", es: "Series Mejor Valoradas", ar: "المسلسلات الأعلى تقييماً" },
  "home.tmdb_tv_netflix": { en: "Netflix 热播", zh: "Netflix 热播", "zh-Hant": "Netflix 热播", ja: "Netflix 热播", es: "Netflix 热播", ar: "Netflix 热播" },
  "home.tmdb_tv_hbo": { en: "HBO 神剧", zh: "HBO 神剧", "zh-Hant": "HBO 神剧", ja: "HBO 神剧", es: "HBO 神剧", ar: "HBO 神剧" },
  "home.tmdb_tv_apple": { en: "Apple TV+", zh: "Apple TV+", "zh-Hant": "Apple TV+", ja: "Apple TV+", es: "Apple TV+", ar: "Apple TV+" },
  "home.trakt_movies": { en: "火爆全球欧美大片", zh: "火爆全球欧美大片", "zh-Hant": "火爆全球欧美大片", ja: "火爆全球欧美大片", es: "火爆全球欧美大片", ar: "火爆全球欧美大片" },
  "home.trakt_shows": { en: "时下热播欧美剧集", zh: "时下热播欧美剧集", "zh-Hant": "时下热播欧美剧集", ja: "时下热播欧美剧集", es: "时下热播欧美剧集", ar: "时下热播欧美剧集" },
  "home.douban_movies": { en: "实时热门电影", zh: "实时热门电影", "zh-Hant": "实时热门电影", ja: "实时热门电影", es: "实时热门电影", ar: "实时热门电影" },
  "home.douban_tv": { en: "热门国产剧", zh: "热门国产剧", "zh-Hant": "热门国产剧", ja: "热门国产剧", es: "热门国产剧", ar: "热门国产剧" },
  "home.douban_hot_variety": { en: "实时热门综艺", zh: "实时热门综艺", "zh-Hant": "实时热门综艺", ja: "实时热门综艺", es: "实时热门综艺", ar: "实时热门综艺" },
  "home.douban_korean_tv": { en: "高分韩剧推荐", zh: "高分韩剧推荐", "zh-Hant": "高分韩剧推荐", ja: "高分韩剧推荐", es: "高分韩剧推荐", ar: "高分韩剧推荐" },
  "home.tmdb_anime_top_ja": { en: "史诗级高分神作日漫", zh: "史诗级高分神作日漫", "zh-Hant": "史诗级高分神作日漫", ja: "史诗级高分神作日漫", es: "史诗级高分神作日漫", ar: "史诗级高分神作日漫" },
  "home.tmdb_anime_jp": { en: "当前热门日本动漫", zh: "当前热门日本动漫", "zh-Hant": "当前热门日本动漫", ja: "当前热门日本动漫", es: "当前热门日本动漫", ar: "当前热门日本动漫" },
  "home.tmdb_anime_movie_ja": { en: "备受好评的动画电影", zh: "备受好评的动画电影", "zh-Hant": "备受好评的动画电影", ja: "备受好评的动画电影", es: "备受好评的动画电影", ar: "备受好评的动画电影" },
  "home.tmdb_anime_cn": { en: "热血国漫精选", zh: "热血国漫精选", "zh-Hant": "热血国漫精选", ja: "热血国漫精选", es: "热血国漫精选", ar: "热血国漫精选" },
  "home.tmdb_tv_ja": { en: "流行日剧榜单", zh: "流行日剧榜单", "zh-Hant": "流行日剧榜单", ja: "流行日剧榜单", es: "流行日剧榜单", ar: "流行日剧榜单" },
  "home.tmdb_tv_th": { en: "热门泰剧推荐", zh: "热门泰剧推荐", "zh-Hant": "热门泰剧推荐", ja: "热门泰剧推荐", es: "热门泰剧推荐", ar: "热门泰剧推荐" },
  "home.tmdb_movie_th": { en: "泰国好电影", zh: "泰国好电影", "zh-Hant": "泰国好电影", ja: "泰国好电影", es: "泰国好电影", ar: "泰国好电影" },
  "home.tmdb_movie_sea": { en: "东南亚佳作", zh: "东南亚佳作", "zh-Hant": "东南亚佳作", ja: "东南亚佳作", es: "东南亚佳作", ar: "东南亚佳作" },
  "home.tmdb_tv_es": { en: "西语剧集推荐", zh: "西语剧集推荐", "zh-Hant": "西语剧集推荐", ja: "西语剧集推荐", es: "西语剧集推荐", ar: "西语剧集推荐" },
};
const TMDB_LIST_ROUTE_PARAMS: Partial<Record<string, TmdbListRouteParams>> = { "tmdb-popular-tv-shows": { category: "trending", type: "tv" }, "tmdb-popular-movies": { category: "trending", type: "movie" }, "tmdb-top-rated-movies": { category: "top-rated", type: "movie" }, "tmdb-top-rated-tv-shows": { category: "top-rated", type: "tv" } };
function resolveLocale(language: string): Locale { const normalized = language.toLowerCase(); if (normalized.startsWith("zh-hant") || normalized.includes("tw") || normalized.includes("hk")) return "zh-Hant"; if (normalized.startsWith("zh")) return "zh"; if (normalized.startsWith("ja")) return "ja"; if (normalized.startsWith("es")) return "es"; if (normalized.startsWith("ar")) return "ar"; return "en"; }
function resolveTitle(titleKey: HomeTitleKey, language: string): string { return TITLE_TRANSLATIONS[titleKey][resolveLocale(language)]; }
function createTmdbListRoute(title: string, params: TmdbListRouteParams): TmdbListRoute { return { type: "tmdb-list", title, params }; }
function createDefaultBlockTemplates(language: string, timezone: string): HomeBlockTemplate[] {
  return [
    {
      id: "tmdb_tv_netflix",
      mediaType: "tv",
      titleKey: "home.tmdb_tv_netflix",
      preset: "hero-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_tv_netflix", itemEnvelope: "data" },
    },
    {
      id: "tmdb_tv_hbo",
      mediaType: "tv",
      titleKey: "home.tmdb_tv_hbo",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_tv_hbo", itemEnvelope: "data" },
    },
    {
      id: "tmdb_tv_apple",
      mediaType: "tv",
      titleKey: "home.tmdb_tv_apple",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_tv_apple", itemEnvelope: "data" },
    },
    {
      id: "trakt_movies",
      mediaType: "movie",
      titleKey: "home.trakt_movies",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/trakt_movies", itemEnvelope: "data" },
    },
    {
      id: "trakt_shows",
      mediaType: "tv",
      titleKey: "home.trakt_shows",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/trakt_shows", itemEnvelope: "data" },
    },
    {
      id: "douban_movies",
      mediaType: "movie",
      titleKey: "home.douban_movies",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/douban_movies", itemEnvelope: "data" },
    },
    {
      id: "douban_tv",
      mediaType: "tv",
      titleKey: "home.douban_tv",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/douban_tv", itemEnvelope: "data" },
    },
    {
      id: "douban_hot_variety",
      mediaType: "tv",
      titleKey: "home.douban_hot_variety",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/douban_hot_variety", itemEnvelope: "data" },
    },
    {
      id: "douban_korean_tv",
      mediaType: "tv",
      titleKey: "home.douban_korean_tv",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/douban_korean_tv", itemEnvelope: "data" },
    },
    {
      id: "tmdb_anime_top_ja",
      mediaType: "tv",
      titleKey: "home.tmdb_anime_top_ja",
      preset: "poster-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_anime_top_ja", itemEnvelope: "data" },
    },
    {
      id: "tmdb_anime_jp",
      mediaType: "tv",
      titleKey: "home.tmdb_anime_jp",
      preset: "poster-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_anime_jp", itemEnvelope: "data" },
    },
    {
      id: "tmdb_anime_movie_ja",
      mediaType: "movie",
      titleKey: "home.tmdb_anime_movie_ja",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_anime_movie_ja", itemEnvelope: "data" },
    },
    {
      id: "tmdb_anime_cn",
      mediaType: "tv",
      titleKey: "home.tmdb_anime_cn",
      preset: "hero-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_anime_cn", itemEnvelope: "data" },
    },
    {
      id: "tmdb_tv_ja",
      mediaType: "tv",
      titleKey: "home.tmdb_tv_ja",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_tv_ja", itemEnvelope: "data" },
    },
    {
      id: "tmdb_tv_th",
      mediaType: "tv",
      titleKey: "home.tmdb_tv_th",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_tv_th", itemEnvelope: "data" },
    },
    {
      id: "tmdb_movie_th",
      mediaType: "movie",
      titleKey: "home.tmdb_movie_th",
      preset: "poster-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_movie_th", itemEnvelope: "data" },
    },
    {
      id: "tmdb_movie_sea",
      mediaType: "movie",
      titleKey: "home.tmdb_movie_sea",
      preset: "poster-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_movie_sea", itemEnvelope: "data" },
    },
    {
      id: "tmdb_tv_es",
      mediaType: "tv",
      titleKey: "home.tmdb_tv_es",
      preset: "poster-list",
      showOverview: true,
      source: { path: "https://movie-api.l3okuu.workers.dev/api/tmdb_tv_es", itemEnvelope: "data" },
    },
    { id: "tmdb-popular-tv-shows", mediaType: "tv", titleKey: "home.tmdb_popular_tv_shows", preset: "thumb-list", showRank: true, source: { path: "/tmdb/trending/tv", query: { language, page: 1, limit: 20 }, itemEnvelope: "results", pagination: { pageParam: "page", startPage: 1 } } },
    { id: "tmdb-popular-movies", mediaType: "movie", titleKey: "home.tmdb_popular_movies", preset: "thumb-list", showRank: true, source: { path: "/tmdb/trending/movie", query: { language, page: 1 }, itemEnvelope: "results", pagination: { pageParam: "page", startPage: 1 } } },
    { id: "tmdb-on-the-air-tv-shows", mediaType: "tv", titleKey: "home.tmdb_on_the_air_tv_shows", preset: "hero-list", source: { path: "/tmdb/tv/on_the_air", query: { language, timezone }, itemEnvelope: "results" } },
    { id: "tmdb-discover-genres", titleKey: "home.tmdb_discover_genres", preset: "genres-list", source: { path: "/crawler/discover/genres", query: { language }, itemEnvelope: "data" } },
    { id: "tmdb-discover-tv-by-language", titleKey: "home.tmdb_discover_languages", preset: "languages-list", source: { path: "/crawler/discover/tv-by-language", query: { language }, itemEnvelope: "data" } },
    { id: "tmdb-discover-networks", titleKey: "home.tmdb_discover_networks", preset: "networks-list", source: { path: "/crawler/discover/tv-by-network", itemEnvelope: "data" } },
    { id: "tmdb-top-rated-movies", titleKey: "home.tmdb_top_rated_movies", mediaType: "movie", preset: "poster-list", source: { path: "/tmdb/movie/top_rated", query: { language, page: 1, limit: 20 }, itemEnvelope: "results", pagination: { pageParam: "page", startPage: 1 } } },
    { id: "tmdb-top-rated-tv-shows", titleKey: "home.tmdb_top_rated_tv_shows", mediaType: "tv", preset: "poster-list", source: { path: "/tmdb/tv/top_rated", query: { language, page: 1, limit: 20 }, itemEnvelope: "results", pagination: { pageParam: "page", startPage: 1 } } }
  ];
}
function resolveBlockTitle(block: HomeBlockTemplate, language: string): HomeBlock { const { titleKey, ...rest } = block; if (!titleKey) return rest; const title = resolveTitle(titleKey, language); const routeParams = TMDB_LIST_ROUTE_PARAMS[rest.id]; return { ...rest, title, ...(routeParams ? { route: createTmdbListRoute(title, routeParams) } : {}) }; }
export function createDefaultHomeConfig(options: DefaultHomeConfigOptions): DefaultHomeConfig { return { version: HOME_CONFIG_VERSION, apiBaseUrl: options.apiBaseUrl, imageBaseUrl: options.imageBaseUrl, carouselSourceId: "trakt-popular-shows", blocks: createDefaultBlockTemplates(options.language, options.timezone).map((block) => resolveBlockTitle(block, options.language)), }; }
