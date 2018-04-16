import { Container } from 'unstated';

export default class BookContainer extends Container {
  state = {
    selectedBook: '',
    books: [
      { title: 'Javascript: The Good Parts' },
      { title: 'A Song of Ice and Fire' },
      { title: 'Lord of the Rings' },
      { title: 'You don\'t know JS' }
    ]
  };

  selectBook(book){
    this.setState({
      selectedBook: book
    })
  }

}