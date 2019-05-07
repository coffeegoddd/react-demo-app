import React from 'react';


/** The Contact component provides a way for users
 * to get in touch with the company. For our purposes here
 * we will just reload the page on submit
 */

const Contact = () => (
    // id set to contact so the link in the nave redirects user here 
    <section id="contact">
        <header>
            <h1>Get in touch</h1>
        </header>
        <form method="get" action="/">
            Your name <input type="text"/>
            Your email <input type="text"/>
            Your message
            <textarea></textarea>
            <input className="contact-button" type="submit"/>
        </form>
    </section>
);

export default Contact;