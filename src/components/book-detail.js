import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Subscribe } from 'unstated';
import { BookContainer } from '../containers';

export default class BookDetail extends Component {
  render() {
    return (
      <Subscribe to={[BookContainer]}>
        {(book) => (
          <div>
            {!(book.state.selectedBook.title) && <div> Select a Book</div>}
            <h3> Details for: </h3>
            <div>{book.state.selectedBook.title}</div>
          </div>
        )}

      </Subscribe>
    );
  }
}

