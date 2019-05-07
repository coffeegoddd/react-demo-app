import React from 'react';

/** Home component will be the main image the user sees when they arrive
 * It will consist of the Main image and the Site title 'UCLA Cat Cafe'
 */

const Home = () => (
    // id set to home so the link in the nav bar directs user here
    <section id="home">
        <header>
            <h1>Curious Cat Cafe!</h1>
        </header>
        <img src="https://s3-us-west-1.amazonaws.com/coffeegodddpublic/ucla-cat-cafe/main.jpg" alt="cat with coffee"></img>
    </section>
);

export default Home;