import React from 'react';

/** The CurrentCats component displays all of the cats currently
 * residing in the Cat Cafe.
 * It serves the images from S3 since there is no database for this app.
 */

// Let's create an array to hold our urls for cat photos from S3
// and the names of each cat
const currentCats = [];

// Let's make up some names
const catNames = [
    'Bubbles',
    'Banana',
    'Beatrice',
    'Beatrix',
    'Beezus',
    'Bob',
    'Buster',
    'Bernard',
    'Bonnie',
    'Bravos',
];

// Let's add cats to currentCats
for (let i = 1; i <= 10; i += 1) {
    const cat = {
        id: 1234 + i,
        name: catNames[i-1],
        url: `https://s3-us-west-1.amazonaws.com/coffeegodddpublic/ucla-cat-cafe/cat_${i}.jpg`
    };
    currentCats.push(cat);
}

// Let's make a simple React Component to act as a cat card template
const CatCard = ({ name, url }) => (
    <div className="cat-card-container">
        <img src={url} alt="current cat"></img>
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora at quo, ullam velit exercitationem praesentium ex accusantium porro, mollitia itaque sed incidunt odio qui officia maiores expedita, minus eum vero?</p>
    </div>
);


// Let's dynamically render a cat card for every url in currentCats
const CurrentCats = () => (
    <section id="current-cats">
    <header>
        <h1>Our current cats</h1>
    </header>
        <div id="card-container">
            {currentCats.map(({ id, name, url }) => <CatCard key={id} url={url} name={name} />)}
        </div>
    </section>
);

export default CurrentCats;