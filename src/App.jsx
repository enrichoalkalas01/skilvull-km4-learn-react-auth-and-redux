import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import { useSelector } from 'react-redux'

import Homepages from './pages/homepages'
import Login from './pages/login'
import NotFound from './pages/404'

function App() {
    const store = useSelector(state => state.UserReducer)
    // console.log(store)
    return(
        <>
            <BrowserRouter>
                {
                    store.authStatus ?
                        // if user has logged in
                        <Routes>
                            <Route exact path="/" element={ <Homepages /> } />
                            <Route exact path="*" element={ <NotFound /> } />
                        </Routes> :
                        // if user not logged in
                        <Routes>
                            <Route exact path="/" element={ <Homepages /> } />
                            <Route exact path="/login" element={ <Login /> } />
                            <Route exact path="*" element={ <NotFound /> } />
                        </Routes>
                }
            </BrowserRouter>
        </>
    )
}

export default App
