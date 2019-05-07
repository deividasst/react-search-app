const API_URL = 'https://api.unsplash.com/search/photos?query='
const clientID ='d0c006a3a8768f252ec217f09ae6f487bf197cb1c7cc2f251b1472c45a24af91'

export default {
  search(searchTerm) {
    const url = `${API_URL}${searchTerm}&client_id=${clientID}`;
    return fetch(url)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        return result.results;
      });
  }
}