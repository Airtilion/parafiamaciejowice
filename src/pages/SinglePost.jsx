import React from 'react'
import { useParams } from 'react-router-dom';
import TitleCard from '../components/TitleCard';
import FixedBg from '../components/FixedBg';
import NewsItem from '../components/singlePosts/NewsItem';

const SinglePost = () => {
    const { id } = useParams();

    return (
        <>
            <TitleCard title="Aktualności" />

            <NewsItem id={id} />

            <FixedBg />
        </>
    )
}

export default SinglePost