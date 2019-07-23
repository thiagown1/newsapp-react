import React, {useEffect, useState} from 'react'
import axios from 'axios'

const useArticles = (query) => {
    let baseURL = 'https://newsapi.org/v2'
    let apiKey = '27e16724ac59410ba06aab272354fbdb'

    const [data, setData] = useState(null)
    
    useEffect( () => {
        const fetch = async () => {
            try {
                let response = await axios.get(`${baseURL}/everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}`)
                let { articles } = await response.data
                setData(articles)
            } catch (error) {
                console.log(error)
            }
        }

        fetch();
    }, [])
    
    return data;
}

export default useArticles;