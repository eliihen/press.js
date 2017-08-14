# Press.js
A React app using WordPress as the backend to provide a single-page blog.

## Development

For developing press.js, a wordpress server is required. This is very easy to do
using [docker][docker]. First install docker and follow the instructions below.

### Wordpress

To set up a mariadb and wordpress container for development, run the following:

    # Set up wordpress mysql container
    $ docker run --name press-mariadb -e MYSQL_ROOT_PASSWORD=a-secret-pw -d mariadb
    # Set up wordpress docker container
    $ docker run --name press-wordpress --link press-mariadb:mysql -p 8080:80 -d wordpress

After this, wordpress should be running on http://localhost:8080. Go there and
fill in the form to set it up for first use.

Try going to http://localhost:8080/?rest\_route=/wp/v2/posts and you should see
a JSON result. If not, something went wrong.

### Press.js

To run press.js locally, first make sure you are running the correct version of
node.js and npm. Node.js >= 8 is highly encouraged, and can be installed using
[nvm][nvm] with the following command.

    $ nvm install

Now install javascript dependencies with `npm`.

    $ npm install

Finally you can run the development server using `npm`.

    $ npm start

[docker]: https://docker.com/
[nvm]: https://github.com/creationix/nvm
