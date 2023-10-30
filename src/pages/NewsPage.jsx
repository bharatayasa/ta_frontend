import React, { useEffect, useState } from 'react';
import { getnewslocal } from '../utils/api';

function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsLocal() {
      try {
        const { error, data } = await getnewslocal();

        if (!error) {
          setNewsData(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchNewsLocal();
  }, []);

  return (
    <div className='py-5 container'>
        <h1>halaman news</h1>
    </div>

    // <div>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <ul>
    //       {newsData.map((news, index) => (
    //         <li key={index}>
    //           <a href={news.url}>{news.title}</a>
    //           <p>Date: {news.date}</p>
    //           <p>Category: {news.category}</p>
    //           <img src={news.image} alt={news.title} />
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
}

export default NewsPage;
