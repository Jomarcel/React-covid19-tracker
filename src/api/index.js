import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
// const teastUrl = ''

export const fetchData = async () => {
    try {
        const {data} = await axios.get(url);
        const modifiedData  ={
          name: data.name,
          symbol: data.symbol,
          industry: data.industry
        }
        return modifiedData;  // return response;
    } catch (error) {
        
    }
}
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };
  



