import Header from './header';
import Footer from './footer';
import Banner from './banner';

import Row from './shared/row';
import Cards from './shared/cards';
import { useEffect, useState } from 'react';

// posts will be populated at build time by getStaticProps()
function Blog({ movies }) {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const bannerItem = movies.popular.results[Math.floor(Math.random() * movies.popular.results.length)];
        // const bannerItem = movies.popular.results[0];
        setBanner(bannerItem);

    }, [movies])

    return (
        <main className="relative">
            <Header />
            <Banner movie={banner} />
            <section className="md:space-y-4">
                <div>
                    <Row key={"popular"} title="popular" movielist={movies.popular} />
                    <Row key={"trending"} title="trending" movielist={movies.trending} />
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Blog