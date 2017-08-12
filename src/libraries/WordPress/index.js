const baseURL = 'http://localhost:8080/wp/wp-json/wp/v2';

export function getPostsList() {
    const url = `${baseURL}/posts`;
    const results = get(url);

    return results;
}

export function getSinglePost(id) {
    const url = `${baseURL}/posts/${id}`;
    const results = get(url);

    return results;
}

/**
 * General fetch function, assumes JSON response.
 * @param {string} url The url to fetch results from.
 * @returns {Promise.<object>}
 */
function get(url) {
    const results = fetch(url).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Network error');
        }
    }).catch(error => console.log(`Error: ${error.message}`));

    return results;
}