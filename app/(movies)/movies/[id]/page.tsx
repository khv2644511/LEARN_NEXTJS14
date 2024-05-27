import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

// 해당 컴포넌트에서는 async를 사용하지 않아도 됨
export default function MovieDetail({ params: { id } }: IParams) {
    // console.log('start fetching');
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    // console.log('end fetching');
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie vidieos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}

// 1. async 컴포넌트로 변경
