// api key: 2c8c81b6b360428ba327622b7489636d

const API_KEY = '2c8c81b6b360428ba327622b7489636d'

const base_url = 'https://api.rawg.io/api/';

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`;

    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate() + 1;
    if(day < 10) {
        return `0${day}`;

    } else {
        return day;
    }
}

const currentYear = new Date().getFullYear();

const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate =`${currentYear}-${currentMonth}-${currentDay}`
const lastYear =`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear =`${currentYear+1}-${currentMonth}-${currentDay}`

const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${newGames}`

export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${API_KEY}`
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${API_KEY}`
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=8&key=${API_KEY}`


