//Component to get API data about individual books

import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'

export default class Book extends Component {
  componentDidMount () {
    console.log(this);//test to verify which books are on the shelves
  }

  render() {
    {/*let coverImage = this.prop.book.imageLinks ?
      this.props.book.imageLinks.thumbnail : ''*/}
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks && this.props.imageLinks.thumbnail || ""})` }}></div>
          <div className = 'change-shelf-changer'>
            <select onChange={(e) => this.props.changeShelf(
                this.props.book, e.target.value
            )}
                value={this.props.currentShelf}>

              <option value="move">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    </li>
  )
  }
}
