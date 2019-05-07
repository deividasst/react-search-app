import React, {Component} from 'react';
import api from './api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'React.JS Image Search',
      searchTerm: ''
    };
  }

formSubmitted(event) {
  event.preventDefault();
  api.search(this.state.searchTerm)
    .then(images => {
      console.log(images);
      
    })
}

  searchTermChanged(event) {
    console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    });
  }
  render(){
    const{title, searchTerm} = this.state;
  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={(event) => this.formSubmitted(event)}>
        <label htmlFor="searchTerm">Search Term</label>
        <input onChange={(event)=>this.searchTermChanged(event)} 
               value={searchTerm} 
               className="u-full-width" 
               type="text" 
               id="searchTerm" 
               name="searchTerm"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
}

export default App;
