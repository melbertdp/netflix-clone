import Image from 'next/image';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const Cards = ({ movie }) => {

    return (
        <div className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}>
            <Image
                className="rounded-sm object-cover md:rounded"
                src={`${IMAGE_BASE_URL + movie.poster_path}`}
                alt=""
                layout="fill"
            />
        </div>
    );
}

export default Cards;