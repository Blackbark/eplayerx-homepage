type Locale = "en" | "zh" | "zh-Hant" | "ja" | "es" | "ar";

type HomeTitleKey =
  | "home.continue_watching"
  | "home.tmdb_popular_tv_shows"
  | "home.tmdb_popular_movies"
  | "home.popular_domestic_anime"
  | "home.bangumi_popular_anime"
  | "home.tmdb_on_the_air_tv_shows"
  | "home.popular_tv_shows"
  | "home.popular_movies"
  | "home.popular_variety_shows"
  | "home.popular_korean_tv_shows"
  | "home.popular_japanese_tv_shows"
  | "home.popular_spanish_tv_shows"
  | "home.popular_taiwanese_tv_shows"
  | "home.tmdb_discover_genres"
  | "home.tmdb_discover_languages"
  | "home.tmdb_discover_networks"
  | "home.tmdb_top_rated_movies"
  | "home.tmdb_top_rated_tv_shows"
  // 新增的标题 Key
  | "home.trakt_popular_movies"
  | "home.trakt_popular_shows"
  | "home.tmdb_anime_jp"
  | "home.tmdb_anime_cn"
  | "home.tmdb_tv_ja"
  | "home.tmdb_tv_th"
  | "home.tmdb_movie_th"
  | "home.tmdb_movie_sea";

type SourceQueryValue = string | number | boolean;

interface HomePagination {
  pageParam: string;
  startPage: number;
}

type TmdbListRoute = {
  type: "tmdb-list";
  title: string;
  params: {
    category: "trending" | "top-rated" | "discover";
    type: "movie" | "tv";
    genre?: string;
    language?: string;
    network?: string;
    networkName?: string;
  };
};

type TmdbListRouteParams = TmdbListRoute["params"];

interface HomeBlockSource {
  id?: string;
  path?: string;
  query?: Record<string, SourceQueryValue>;
  itemEnvelope?: "data" | "results" | "array";
  pagination?: HomePagination;
}

interface HomeBlock {
  id: string;
  title?: string;
  mediaType?: "movie" | "tv";
  preset: string;
  showRank?: boolean;
  showOverview?: boolean;
  source?: HomeBlockSource;
  metadata?: {
    isAnime?: boolean;
  };
  route?: TmdbListRoute;
}

type HomeBlockTemplate = Omit<HomeBlock, "title"> & {
  titleKey?: HomeTitleKey;
};

export interface DefaultHomeConfigOptions {
  apiBaseUrl: string;
  imageBaseUrl: string;
  language: string;
  timezone: string;
}

export interface DefaultHomeConfig {
  version: number;
  apiBaseUrl: string;
  imageBaseUrl: string;
  carouselSourceId: string;
  blocks: HomeBlock[];
}

export const HOME_CONFIG_VERSION = 1;

const TITLE_TRANSLATIONS: Record<HomeTitleKey, Record<Locale, string>> = {
  // --- 之前原有的翻译 ---
  "home.continue_watching": { en: "Continue Watching", zh: "继续观看", "zh-Hant": "繼續觀看", ja: "続きを視聴", es: "Continuar Viendo", ar: "متابعة المشاهدة" },
  "home.tmdb_popular_tv_shows": { en: "Today's Popular TV Shows", zh: "今日热门电视剧", "zh-Hant": "今日熱門電視劇", ja: "今日の人気テレビ番組", es: "Series de TV Populares de Hoy", ar: "مسلسلات شائعة" },
  "home.tmdb_popular_movies": { en: "Today's Popular Movies", zh: "今日热门电影", "zh-Hant": "今日熱門電影", ja: "今日の人気映画", es: "Películas Populares de Hoy", ar: "أفلام شائعة" },
  "home.popular_domestic_anime": { en: "Popular Domestic Anime", zh: "热门国产动漫", "zh-Hant": "熱門國產動漫", ja: "人気の国内アニメ", es: "Anime Doméstico Popular", ar: "أنمي محلي" },
  "home.bangumi_popular_anime": { en: "Today's Popular Bangumi", zh: "今日热门番剧", "zh-Hant": "今日熱門番劇", ja: "今日の人気番組", es: "Bangumi Populares de Hoy", ar: "بانغومي شائع" },
  "home.tmdb_on_the_air_tv_shows": { en: "On The Air TV Shows", zh: "正在热播", "zh-Hant": "正在熱播", ja: "放送中", es: "En Emisión", ar: "يعرض الآن" },
  "home.popular_tv_shows": { en: "Trending Domestic Dramas", zh: "时下最热门的国产剧", "zh-Hant": "時下最熱門的國產劇", ja: "話題の中国ドラマ", es: "Dramas Chinos en Tendencia", ar: "دراما صينية رائجة" },
  "home.popular_movies": { en: "Trending Movies", zh: "实时热门电影", "zh-Hant": "實時熱門電影", ja: "リアルタイム人気映画", es: "Películas en Tendencia", ar: "أفلام رائجة" },
  "home.popular_variety_shows": { en: "Today's Popular Variety Shows", zh: "实时热门综艺", "zh-Hant": "實時熱門綜藝", ja: "今日の人気バラエティ", es: "Programas de Variedades Populares de Hoy", ar: "برامج منوعة" },
  "home.popular_korean_tv_shows": { en: "Popular Korean Dramas", zh: "备受欢迎的韩剧推荐", "zh-Hant": "備受歡迎的韓劇推薦", ja: "人気の韓国ドラマ", es: "Dramas Coreanos Populares", ar: "دراما كورية شائعة" },
  "home.popular_japanese_tv_shows": { en: "Trending Japanese Dramas", zh: "近期最流行日剧榜单", "zh-Hant": "近期最流行日劇榜單", ja: "最近人気の日本ドラマ", es: "Dramas Japoneses en Tendencia", ar: "دراما يابانية رائجة" },
  "home.popular_spanish_tv_shows": { en: "Trending Spanish-Language Series", zh: "时下流行的西语剧集", "zh-Hant": "時下流行的西語劇集", ja: "話題のスペイン語シリーズ", es: "Series en Español en Tendencia", ar: "مسلسلات إسبانية رائجة" },
  "home.popular_taiwanese_tv_shows": { en: "Popular Taiwanese Dramas", zh: "台剧当然也不能落下", "zh-Hant": "台劇當然也不能落下", ja: "人気の台湾ドラマ", es: "Dramas Taiwaneses Populares", ar: "دراما تايوانية شائعة" },
  "home.tmdb_discover_genres": { en: "Browse By Category", zh: "按分类浏览", "zh-Hant": "按分類瀏覽", ja: "カテゴリで探す", es: "Explorar por Categoría", ar: "تصفح حسب الفئة" },
  "home.tmdb_discover_languages": { en: "Browse By Language", zh: "按语言浏览", "zh-Hant": "按語言瀏覽", ja: "言語で探す", es: "Explorar por Idioma", ar: "حسب اللغة" },
  "home.tmdb_discover_networks": { en: "Browse By Network", zh: "按平台浏览", "zh-Hant": "按平台瀏覽", ja: "配信サービスで探す", es: "Explorar por Plataforma", ar: "حسب الشبكة" },
  "home.tmdb_top_rated_movies": { en: "Top Rated Movies", zh: "高分电影", "zh-Hant": "高分電影", ja: "高評価映画", es: "Películas Mejor Valoradas", ar: "الأعلى تقييماً" },
  "home.tmdb_top_rated_tv_shows": { en: "Top Rated TV Shows", zh: "高分电视剧", "zh-Hant": "高分電視劇", ja: "高評価テレビ番組", es: "Series Mejor Valoradas", ar: "المسلسلات الأعلى تقييماً" },
  
  // --- ✨ 新增：Trakt & 精准流派翻译 ---
  "home.trakt_popular_movies": { en: "Trending Hollywood Movies", zh: "Trakt 欧美电影热榜", "zh-Hant": "Trakt 歐美電影熱榜", ja: "ハリウッド映画", es: "Películas de Hollywood", ar: "أفلام هوليوود" },
  "home.trakt_popular_shows": { en: "Trending Hollywood Shows", zh: "Trakt 欧美热播美剧", "zh-Hant": "Trakt 歐美熱播美劇", ja: "人気のアメリカドラマ", es: "Series de Hollywood", ar: "مسلسلات هوليوود" },
  "home.tmdb_anime_jp": { en: "Trending Japanese Anime", zh: "最新热门日漫", "zh-Hant": "最新熱門日漫", ja: "最新アニメ", es: "Anime Japonés", ar: "أنمي ياباني" },
  "home.tmdb_anime_cn": { en: "Trending Chinese Anime", zh: "火爆国漫推荐", "zh-Hant": "火爆國漫推薦", ja: "中国アニメ", es: "Anime Chino", ar: "أنمي صيني" },
  "home.tmdb_tv_ja": { en: "Popular Japanese Dramas", zh: "日剧精选", "zh-Hant": "日劇精選", ja: "人気ドラマ", es: "Dramas Japoneses", ar: "دراما يابانية" },
  "home.tmdb_tv_th": { en: "Popular Thai Dramas", zh: "泰剧迷推荐", "zh-Hant": "泰劇迷推薦", ja: "タイドラマ", es: "Dramas Tailandeses", ar: "دراما تايلاندية" },
  "home.tmdb_movie_th": { en: "Popular Thai Movies", zh: "泰国高分电影", "zh-Hant": "泰國高分電影", ja: "タイ映画", es: "Películas Tailandesas", ar: "أفلام تايلاندية" },
  "home.tmdb_movie_sea": { en: "Southeast Asian Cinema", zh: "东南亚精选电影", "zh-Hant": "東南亞精選電影", ja: "東南アジア映画", es: "Cine del Sudeste Asiático", ar: "سينما جنوب شرق آسيا" },
};

const TMDB_LIST_ROUTE_PARAMS: Partial<Record<string, TmdbListRouteParams>> = {
  "tmdb-popular-tv-shows": { category: "trending", type: "tv" },
  "tmdb-popular-movies": { category: "trending", type: "movie" },
  "tmdb-top-rated-movies": { category: "top-rated", type: "movie" },
  "tmdb-top-rated-tv-shows": { category: "top-rated", type: "tv" },
};

function resolveLocale(language: string): Locale {
  const normalized = language.toLowerCase();
  if (normalized.startsWith("zh-hant") || normalized.includes("tw") || normalized.includes("hk")) return "zh-Hant";
  if (normalized.startsWith("zh")) return "zh";
  if (normalized.startsWith("ja")) return "ja";
  if (normalized.startsWith("es")) return "es";
  if (normalized.startsWith("ar")) return "ar";
  return "en";
}

function resolveTitle(titleKey: HomeTitleKey, language: string): string {
  return TITLE_TRANSLATIONS[titleKey][resolveLocale(language)];
}

function createTmdbListRoute(title: string, params: TmdbListRouteParams): TmdbListRoute {
  return { type: "tmdb-list", title, params };
}

function createDefaultBlockTemplates(language: string, timezone: string): HomeBlockTemplate[] {
  return [
    // === 1. 欧美强档 (Trakt 引擎) ===
    {
      id: "trakt-popular-movies",
      mediaType: "movie",
      titleKey: "home.trakt_popular_movies",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "/crawler/popular/trakt/movies", itemEnvelope: "data" },
    },
    {
      id: "trakt-popular-shows",
      mediaType: "tv",
      titleKey: "home.trakt_popular_shows",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "/crawler/popular/trakt/shows", itemEnvelope: "data" },
    },

    // === 2. 亚洲剧集专区 ===
    {
      id: "douban-popular-tv-shows",
      mediaType: "tv",
      titleKey: "home.popular_tv_shows",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "/crawler/popular/douban/tv", itemEnvelope: "data" },
    },
    {
      id: "douban-popular-korean-tv-shows",
      mediaType: "tv",
      titleKey: "home.popular_korean_tv_shows",
      preset: "thumb-list",
      source: { path: "/crawler/popular/douban/korean-tv", itemEnvelope: "data" },
    },
    {
      id: "tmdb-tv-ja",
      mediaType: "tv",
      titleKey: "home.tmdb_tv_ja",
      preset: "thumb-list",
      source: { path: "/crawler/popular/tmdb/tv-ja", itemEnvelope: "data" },
    },
    {
      id: "tmdb-tv-th",
      mediaType: "tv",
      titleKey: "home.tmdb_tv_th",
      preset: "thumb-list",
      source: { path: "/crawler/popular/tmdb/tv-th", itemEnvelope: "data" },
    },
    {
      id: "hami-popular-taiwanese-tv-shows",
      mediaType: "tv",
      titleKey: "home.popular_taiwanese_tv_shows",
      preset: "thumb-list",
      source: { path: "/crawler/popular/hami/taiwanese-tv", itemEnvelope: "data" },
    },

    // === 3. 二次元专区 ===
    {
      id: "tmdb-anime-jp",
      mediaType: "tv",
      titleKey: "home.tmdb_anime_jp",
      preset: "thumb-list",
      metadata: { isAnime: true },
      source: { path: "/crawler/popular/tmdb/anime-jp", itemEnvelope: "data" },
    },
    {
      id: "tmdb-anime-cn",
      mediaType: "tv",
      titleKey: "home.tmdb_anime_cn",
      preset: "thumb-list",
      metadata: { isAnime: true },
      source: { path: "/crawler/popular/tmdb/anime-cn", itemEnvelope: "data" },
    },
    {
      id: "bangumi-popular-anime",
      mediaType: "tv",
      titleKey: "home.bangumi_popular_anime",
      preset: "thumb-list",
      metadata: { isAnime: true },
      source: { path: "/crawler/popular/bangumi/animation", itemEnvelope: "data" },
    },

    // === 4. 亚洲电影与综艺 ===
    {
      id: "douban-popular-movies",
      mediaType: "movie",
      titleKey: "home.popular_movies",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "/crawler/popular/douban/movies", itemEnvelope: "data" },
    },
    {
      id: "tmdb-movie-th",
      mediaType: "movie",
      titleKey: "home.tmdb_movie_th",
      preset: "thumb-list",
      source: { path: "/crawler/popular/tmdb/movie-th", itemEnvelope: "data" },
    },
    {
      id: "tmdb-movie-sea",
      mediaType: "movie",
      titleKey: "home.tmdb_movie_sea",
      preset: "thumb-list",
      source: { path: "/crawler/popular/tmdb/movie-sea", itemEnvelope: "data" },
    },
    {
      id: "douban-popular-variety-shows",
      mediaType: "tv",
      titleKey: "home.popular_variety_shows",
      preset: "thumb-list",
      showOverview: true,
      source: { path: "/crawler/popular/douban/hot-variety-shows", itemEnvelope: "data" },
    },

    // === 5. TMDB 基础官方模块 (不动原有的) ===
    {
      id: "tmdb-popular-tv-shows",
      mediaType: "tv",
      titleKey: "home.tmdb_popular_tv_shows",
      preset: "thumb-list",
      showRank: true,
      source: { path: "/tmdb/trending/tv", query: { language, page: 1, limit: 20 }, itemEnvelope: "results" },
    },
    {
      id: "tmdb-discover-genres",
      titleKey: "home.tmdb_discover_genres",
      preset: "genres-list",
      source: { path: "/crawler/discover/genres", query: { language }, itemEnvelope: "data" },
    },
  ];
}

function resolveBlockTitle(block: HomeBlockTemplate, language: string): HomeBlock {
  const { titleKey, ...rest } = block;
  if (!titleKey) return rest;
  const title = resolveTitle(titleKey, language);
  const routeParams = TMDB_LIST_ROUTE_PARAMS[rest.id];

  return {
    ...rest,
    title,
    ...(routeParams ? { route: createTmdbListRoute(title, routeParams) } : {}),
  };
}

export function createDefaultHomeConfig(options: DefaultHomeConfigOptions): DefaultHomeConfig {
  return {
    version: HOME_CONFIG_VERSION,
    apiBaseUrl: options.apiBaseUrl,
    imageBaseUrl: options.imageBaseUrl,
    carouselSourceId: "trakt-popular-shows", // 改为了美剧大图滚动！
    blocks: createDefaultBlockTemplates(options.language, options.timezone).map((block) => resolveBlockTitle(block, options.language)),
  };
}
