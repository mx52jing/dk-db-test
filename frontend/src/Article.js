import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from './api/axios'

export default () => {
    useEffect(() => {
        axios.get('/articles')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="article">
            article
            <Link to="/">去login</Link>
        </div>
    )
}
