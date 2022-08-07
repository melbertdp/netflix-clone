import Image from 'next/image';
import constants from '../utils/constants';
const Banner = ({ movie }) => {

    const truncate = (text,limit) => {
        if (text?.length > limit) {
            return text.slice(0, limit) + '...';
        } else {
            return text;
        }
    }
    
    return (
        <div className='w-full h-[550px] text-white'>
            <div className='relative h-[550px] min-w-[180px]'>
                <div className='z-10 absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <Image
                    className='w-full max-w-full h-auto'
                    layout="fill"
                    src={`${constants.BACKDROP_LINK + movie.backdrop_path}`}
                    alt={`${movie.title + "banner"}`}
                    // objectFit="cover"
                />

                <div className='absolute z-20 w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>
                        {movie.title}
                    </h1>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncate(movie.overview,150)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banner;