import React from 'react'
import styled from 'styled-components'
import Book from './Book'

const ItemListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
`

const BookList = ({ books = {} }) =>
  books.bookArray.length === 0 ? null : (
    <ItemListWrap>
      {books.bookArray.items.map(book => {
        const bookId = book.id
        return <Book key={bookId} {...book.volumeInfo} />
      })}
    </ItemListWrap>
  )

export default BookList
