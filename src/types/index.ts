export type Forecast = {
    at: string;
    units: string;
    generation: number;
};
  
export type Station = {
    id: string;
    name: string;
    type: string;
    capacity: number;
    commissioningDate: string;
};

export type StationForecast = {
    stationId: string;
    forecasts: Array<Forecast>;
};