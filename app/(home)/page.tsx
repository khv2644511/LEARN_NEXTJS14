'use client';

import { useEffect, useState } from 'react';

// 클라이언트 사이드 렌더링에선 메타데이터를 사용할 수 없다.
// export const metadata = {
//     title: 'Home',
// };

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        const json = await response.json();
        setMovies(json);
        setIsLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
}
