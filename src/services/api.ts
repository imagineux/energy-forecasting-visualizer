import { type Station, type StationForecast } from '../types';

const API_BASE_URL = process.env.VUE_APP_API_BASE_URL || '';

export async function getStations(): Promise<Station[]> {
  const response = await fetch(`${API_BASE_URL}/stations`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getStation(stationId: string): Promise<Station> {
  const response = await fetch(`${API_BASE_URL}/stations/${stationId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getStationForecast(stationId: string): Promise<StationForecast> {
  const response = await fetch(`${API_BASE_URL}/forecasts?stationId=${stationId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
