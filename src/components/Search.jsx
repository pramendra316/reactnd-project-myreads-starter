
// Display book image, title, author to page
//Coding help here from Jason Michael White

// import React
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf'
import * as BooksAPI from '.././BooksAPI' //error message says access is forbidden

class Search extends Component {

      state = {
            books: [],
      			query: ""  //empty query string
      };

     updateQuery = (query) => {
         console.log('looking for books...');
         this.setState({ //The state of the query sting
             query: query
         });
         if (query === '') {
             this.setState({
                 books: []
             });
             return;
         }
         BooksAPI.search(query).then(result => {
             result instanceof Array ? this.setState({books: result}) : this.setState({ books: [] });
         });
         console.log(this.state.books);
     }
     handleChange = (e) => {
         const val = e.target.value;
         this.setState({ query: val });
         this.updateQuery(val);
     }

     updateBooks = (book, shelf) => {
       BooksAPI.update(book, shelf)
       .then(resp => {
         book.shelf = shelf;
         this.setState(state => ({
           books: state.books.filter(b => b.id !== book.id).concat(book)
         }));
       });
     }

    render() {
            return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                      value={this.state.query}
                      onChange={this.handleChange}
                />
              </div>
            </div>

                <BookShelf
                    books={this.state.books}
                    changeShelf={this.props.changeShelf}
                    updateBook={this.updateBooks}
                />
          </div>
        );
    }
}
export default Search
