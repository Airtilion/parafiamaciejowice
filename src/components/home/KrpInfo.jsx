import React, { useEffect, useState } from 'react';
import ButtonKRP from '../ButtonKRP';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const KrpInfo = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await fetch('https://podlasie24.pl/atom/aktualnosci.xml', {
            });
            if (!response.ok) {
                throw new Error('Nie udało się pobrać danych z serwisu KRP');
            }

            const text = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, 'text/xml');

            const entries = Array.from(xmlDoc.getElementsByTagName('entry')).slice(0, 3);

            // Przekształcenie na tablicę obiektów JSON
            const rssData = entries.map(entry => ({
                title: entry.getElementsByTagName('title')[0]?.textContent || '',
                link: entry.getElementsByTagName('link')[0]?.getAttribute('href') || '',
                published: entry.getElementsByTagName('published')[0]?.textContent || '',
                summary: entry.getElementsByTagName('summary')[0]?.textContent || '',
            }));

            setPosts(rssData);
        } catch (err) {
            console.error('Błąd podczas pobierania RSS:', err);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <section className="w-full pt-[128px] pb-[64px] bg-white">
            <h2 className="max-w-[1240px] mx-auto font-light mb-[32px]">Serwis informacyjny KRP</h2>
            <article className="w-[1240px] flex gap-[128px] mx-auto">
                <div className="flex flex-col gap-[32px] flex-1">
                    <p className="text-[18px] font-light">Serwis KRP dostarcza najświeższe wiadomości z Siedlec, koncentrując się na wydarzeniach społecznych, kulturalnych i religijnych. To rzetelne źródło informacji o życiu miasta, relacjonujące lokalne inicjatywy, spotkania, uroczystości oraz decyzje samorządowe.</p>
                    <p className="text-[18px] font-light">Dzięki regularnym aktualizacjom, reportażom i wywiadom, serwis pozwala śledzić najważniejsze wydarzenia z regionu, będąc cennym źródłem informacji dla mieszkańców i wszystkich zainteresowanych życiem Siedlec.</p>
                    <ButtonKRP />
                </div>

                <div className="flex flex-col gap-[24px] w-[500px]">
                    <h3>Najnowsze informacje</h3>

                    {posts?.map((post, index) => (
                        <Link to={post.link} target='_blank'>
                            <div key={index} className='flex gap-[32px] relative'>
                                <p className='text-[40px] text-[#C5C5C5] font-medium w-[50px]'>0{index + 1}</p>
                                <div className='w-[300px]'>
                                    <p className='text-[20px] font-medium line-clamp-2 mb-[8px]'>{post.title}</p>
                                    <p className='text-[18px]'>{post.published}</p>
                                </div>
                                <Icon icon="ep:arrow-right-bold" width="20" height="20" className='absolute right-0 top-[50%] translate-y-[-50%]'/>
                            </div>
                        </Link>
                    ))}
                </div>
            </article>
        </section>
    );
};

export default KrpInfo;