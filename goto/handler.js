"use strict"

module.exports = (event, context) => {
    let redirect;

    /* Use a switch statement, or look up the routes in a database
     * such as MongoDB, Redis or Postgres. AWS and DigitalOcean provide
     * remote, managed databases that would work here and maintain
     * a connection pool */
    if(event.path == "/home") {
        redirect = "https://codius.org/";
    } else if(event.path == "/whitepaper" || event.path == "/white-paper") {
        redirect = "https://github.com/codius/codius-wiki/wiki/White-Paper";
    }

    /* Let the user know we couldn't find the URL, we could
     * also return a HTML page and set the correct encoding for the
     * browser to understand. */
    if(!redirect) {
        return context
            .status(400)
            .fail("try /home or /whitepaper");
    }

    /* 302 Moved Temporarily
     * Prevents the browser from caching the redirection
     * https://en.wikipedia.org/wiki/HTTP_302 */
    context
        .status(302)
        .headers({"location": redirect})
        .succeed();
}
