import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/User'
import Article from './reducers/Article'

export default configureStore({
    reducer: {
        UserReducer,
        Article,
    }
})