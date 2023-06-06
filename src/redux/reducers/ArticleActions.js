import Axios from 'axios'
import Store from '../Store'
import { setArticles } from "./Article"

export async function getDataArticles(params = { authorization: null }) {
    const stateArticle = Store.getState().Article
    const dispatch = Store.dispatch

    try {
        let getArticles = await Axios({
            url: 'https://647dd8ecaf984710854a76a9.mockapi.io/api/v1/articles',
            method: 'get', headers: { 'Content-Type': 'application/json' }
        })
        
        dispatch(setArticles(getArticles.data))
    } catch (error) {
        console.log(error)
        dispatch(setArticles([]))
    }
}