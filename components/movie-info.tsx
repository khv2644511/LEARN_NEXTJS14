import { API_URL } from '../app/constants';
import styles from '../styles/movie-info.module.css';

export async function getMovie(id: string) {
    const respons = await fetch(`${API_URL}/${id}`);
    return respons.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.ttile}</h1>
                <h3>⭐️ {movie.vote_average}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={'_blank'}>
                    Homepage &rarr;
                </a>
            </div>
        </div>
    );
}
