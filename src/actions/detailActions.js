import axios from 'axios'
import { gameDetailsURL, gameScreenshotURL } from '../api'

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id));
    const screenshotData = await axios.get(gameScreenshotURL(id));

    

    dispatch({
        type: "GET_DETAIL",
        payload: {
           game: detailData.data,
           screen: screenshotData.data
        }
    })
}

export const emptyDetail = () => {
    return {
        type: 'EMPTY_DETAIL',
        payload: {
            game: {},
            screen: {},
        }
    }
}