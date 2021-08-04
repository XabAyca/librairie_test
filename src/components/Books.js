import React from 'react';
import Book from './Book';

const Books = ({data}) => {

  return (
    <div className="books-list">
      {data.map(book => {
        return (
          <Book data = {book} key={book.isbn}/>
        )
      })}
    </div>
  )
}

export default Books