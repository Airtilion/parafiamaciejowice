import React, { useEffect, useState } from 'react'

const RequestForQuote = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8881/wp-json/wp/v2/')
            if (!response.ok) throw new Error('Błąd pobierania');
            const data = await response.json()
            console.log(data);
            setPosts(data)
            setLoading(false)
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <section>
            <article>

            </article>
        </section>
    )
}

export default RequestForQuote