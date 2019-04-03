import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { Route } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    // console.log(movie)
    if (savedList.includes(movie)) {
      alert("You've already added this movie to your Saved!")
      this.setState({ savedList })
    }
    else{
    savedList.push(movie);
    this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path='/' component={ MovieList } />
          {/* use :(name) to pass a dynamic id */}
          <Route path='/movie/:id' render={ (props) => <Movie {...props} addToSavedList={this.addToSavedList} />} />
          
        </div>
      </div>
    );
  }
}
