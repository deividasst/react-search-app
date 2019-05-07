const API_URL = 'https://api.500px.com/v1/photos/search?'
export default {
    search(searchTerm) {
        const url = `${API_URL}term=${searchTerm}`;
        return fetch(url)
            .then(response => response.json())
            .then(result => {
                return result.photos;
            });

    }
}