import axios from 'axios';
import Cookies from 'js-cookie';

async function getleagueEvents() {
  const leagues = ['Spain', 'England', 'Italy', 'Germany'];

  let location = Cookies.get('location');

  if (location) {
    leagues.unshift(location);
  } else {
    location = await getUserCountry();
    
    if (location) {
      leagues.unshift(location);
      Cookies.set('location', location, { expires: 30 });
    }
  }

  const leaguesEvents = leagues.map(country => getLatestEvents(country));

  return Promise.all(leaguesEvents);
}

async function getLatestEvents(country) {
  const url = 'https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php'
  const leagueId = await getLeaguesId(country);
  const leagueEvents = await axios.get(`${url}?id=${leagueId}`);

  return leagueEvents.data;
};

async function getLeaguesId(country) {
  const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php';

  const response = await axios.get(`${url}?c=${country}`);

  return response.data.countrys[0].idLeague;
}

async function getUserCountry() {
  const urlIP = 'https://api.ipify.org?format=json';
  const accessKey = '4f4c475b48c748838e29b2ceacce57df';
  let userIP = '';
  let responseLocation;

  try {
    const responseIP = await axios.get(urlIP);

    userIP = responseIP.data.ip;
    const urlLocation = `https://api.geoapify.com/v1/ipinfo?&ip=${userIP}&apiKey=${accessKey}`;

    responseLocation = await axios.get(urlLocation);
  } catch (error) {
    return null;
  }

  return responseLocation.data.country.name;
}

export default {
  getleagueEvents,
}