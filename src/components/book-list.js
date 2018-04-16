import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { selectBook } from '../actions/index';
import { Subscribe } from 'unstated';
import { BookContainer } from '../containers';

export default class BookList extends Component {
  renderList(bookContainer) {
    return bookContainer.state.books.map((book) => {
      return (
        <li key={book.title}
          onClick={() => bookContainer.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <Subscribe to={[BookContainer]}>
        {book => (
          <ul className="list-group col-sm-4">
            {this.renderList(book)}
          </ul>
        )}
      </Subscribe>
    );
  }
}

// function mapStateToProps(state) {
//   //Whatever is returned will show up as props inside BookList
//   return {
//     books: state.books
//   };
// }

// function mapDispatchToProps(dispatch) {
//   //Whenever select book is called, the result should be passed to all of our reducers
//   return bindActionCreators({selectBook : selectBook}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BookList);