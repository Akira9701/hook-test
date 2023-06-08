export interface INewsItem {
  source: {
    id: null | number;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type INewsReques = {
  status: string;
  totalResults: number;
  articles: INewsItem[];
};

export interface IWeather {
  now: number;
  now_dt: string;
  geo_object: {
    locality: {
      name: string;
    };
  };
  info: {
    lat: number;
    lon: number;
    tzinfo: {
      offset: number;
      name: string;
      abbr: string;
      dst: false;
    };
    def_pressure_mm: number;
    def_pressure_pa: number;
    url: string;
  };
  fact: {
    temp_water: string;
    temp: number;
    feels_like: number;
    icon: string;
    condition: string;
    wind_speed: number;
    wind_gust: number;
    wind_dir: string;
    pressure_mm: number;
    pressure_pa: number;
    humidity: number;
    daytime: string;
    polar: false;
    season: string;
    prec_type: number;
    prec_strength: number;
    is_thunder: false;
    cloudness: number;
    obs_time: number;
    phenom_icon: string;
    'phenom-condition': string;
  };
  forecasts: [
    {
      date: string;
      date_ts: number;
      week: number;
      sunrise: string;
      sunset: string;
      moon_code: number;
      moon_text: string;
      parts: {
        night: {
          temp_min: number;
          temp_max: number;
          temp_avg: number;
          feels_like: number;
          icon: string;
          condition: string;
          daytime: string;
          polar: false;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_mm: number;
          prec_period: number;
          prec_type: number;
          prec_strength: number;
          cloudness: number;
        };
        evening: {
          temp_min: number;
          temp_max: number;
          temp_avg: number;
          feels_like: number;
          icon: string;
          condition: string;
          daytime: string;
          polar: false;
          wind_speed: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_mm: number;
          prec_period: number;
          prec_type: number;
          prec_strength: number;
          cloudness: number;
        };
        day_short: {
          temp: number;
          temp_min: number;
          feels_like: number;
          icon: string;
          condition: string;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_type: number;
          prec_strength: number;
          cloudness: number;
        };
        night_short: {
          temp: number;
          feels_like: number;
          icon: string;
          condition: string;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_type: number;
          prec_strength: number;
          cloudness: number;
        };
      };
      hours: [
        {
          hour: string;
          hour_ts: number;
          temp: number;
          feels_like: number;
          icon: string;
          condition: string;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_mm: number;
          prec_period: number;
          prec_type: number;
          prec_strength: number;
          is_thunder: false;
          cloudness: number;
        },
        {
          hour: string;
          hour_ts: number;
          temp: number;
          feels_like: number;
          icon: string;
          condition: string;
          wind_speed: number;
          wind_gust: number;
          wind_dir: string;
          pressure_mm: number;
          pressure_pa: number;
          humidity: number;
          prec_mm: number;
          prec_period: number;
          prec_type: number;
          prec_strength: number;
          is_thunder: false;
          cloudness: number;
        }
      ];
    },
    {
      date: string;
      date_ts: number;
      week: number;
      sunrise: string;
      sunset: string;
      moon_code: number;
      moon_text: string;
      parts: {
        night: {
          [key: string]: string | number;
        };
        morning: {
          [key: string]: string | number;
        };
        day: {
          [key: string]: string | number;
        };
        evening: {
          [key: string]: string | number;
        };
        day_short: {
          [key: string]: string | number;
        };
        night_short: {
          [key: string]: string | number;
        };
      };
      hours: [key: string][];
    }
  ];
}

export interface ITodo {
  checked: boolean;
  key: number;
  title: string;
}
