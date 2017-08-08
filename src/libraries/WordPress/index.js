/**
 * Gets posts or, if id is provided, a single post, from WordPress.
 * 
 * @param {string} endpoint The WP API endpoint.
 * @param {number} [id] The WP post ID.
 * @returns {Promise.<array>}
 */
export function getPosts(endpoint, id) {
    const url = () => id ? `${endpoint}/posts/${id}` : `${endpoint}/posts`;

    const posts = fetch(url()).then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            throw new Error('Network error');
        }
    }).then(json => {
        if (id) {
            return [ json ];
        } else {
            return json;
        }
    }).catch(error => console.log(`Error: ${error.message}`));

    return posts;
}
