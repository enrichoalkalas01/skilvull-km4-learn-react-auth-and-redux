import { useSelector } from 'react-redux'
import { getDataArticles } from '../../redux/reducers/ArticleActions'
import { useEffect } from 'react'

const index = () => {
    const store = useSelector(state => state)
    
    useEffect(() => {
        getDataArticles()
    }, [])

    useEffect(() => {
        console.log(store)
    }, [store])

    return(
        <>
            Homepages Here
        </>
    )
}

export default index