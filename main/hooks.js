import React, {useEffect, useState} from 'react'
import axios from 'axios'

const useArticles = (query) => {
    const [data, setData] = useState(null)

    useEffect( () => {
        const fetch = async () => {
            let response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2019-06-22&sortBy=publishedAt&apiKey=27e16724ac59410ba06aab272354fbdb`)
            let { articles } = await response.data
            setData(articles)
        }

        fetch();
    }, [])
    
    return data;
}

export default useArticles;