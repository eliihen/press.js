/**
 * Gets the posts from WordPress.
 * 
 * @param {string} endpoint The WP API endpoint.
 * @returns {Promise.<object>}
 */
export function getPosts(endpoint) {
    const url = `${endpoint}/posts`;

    const posts = fetch(url).then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            throw new Error('Network error');
        }
    }).catch(error => console.log(`Error: ${error.message}`));

    return posts;
}
