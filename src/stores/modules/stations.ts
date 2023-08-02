import { defineStore } from 'pinia';


export const useStationsStore = defineStore({
    id: 'stations',
    state: () => ({
      stations: [] as Station[],
      isLoading: false,
      error: null as string | null,
    }),
    actions: {
      async fetchStations() {
        this.isLoading = true;
        this.error = null;
        try {
          const response = await api.get('/stations');
          this.stations = response.data;
        } catch (error) {
          this.error = error.message;
        } finally {
          this.isLoading = false;
        }
      },
      async createStation(station: Station) {
        this.isLoading = true;
        this.error = null;
        try {
          const response = await api.post('/stations', station);
          this.stations.push(response.data);
        } catch (error) {
          this.error = error.message;
        } finally {
          this.isLoading = false;
        }
      },
      async updateStation(updatedStation: Station) {
        this.isLoading = true;
        this.error = null;
        try {
          const response = await api.put(`/stations/${updatedStation.id}`, updatedStation);
          const index = this.stations.findIndex(station => station.id === updatedStation.id);
          if (index !== -1) {
            this.stations[index] = response.data;
          }
        } catch (error) {
          this.error = error.message;
        } finally {
          this.isLoading = false;
        }
      },
      async deleteStation(stationId: number) {
        this.isLoading = true;
        this.error = null;
        try {
          await api.delete(`/stations/${stationId}`);
          const index = this.stations.findIndex(station => station.id === stationId);
          if (index !== -1) {
            this.stations.splice(index, 1);
          }
        } catch (error) {
          this.error = error.message;
        } finally {
          this.isLoading = false;
        }
      },
    },
});