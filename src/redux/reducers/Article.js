import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'
const ToolsCookies = new Cookies
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import Store from '../Store'

export const ArticleSlice = createSlice({
    name: 'Article',
    initialState: {
        articles: [],
    },
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { setArticles } = ArticleSlice.actions

export default ArticleSlice.reducer