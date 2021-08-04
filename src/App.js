import React, { useEffect } from "react";
import Books from "components/Books";
import Loading from "components/Loading";
import Header from "components/Header";

const App = () => {
  const [books, setBooks] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [filteredBooks, setFilteredBooks] = React.useState("")

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json')
    .then(response => (response.json()))
    .then(response => {
      setBooks(response.books[0]);
    })

  }, [])

  const sorted = () => {
    const sortedArray = books.filter(book => {
      let result = book.title.toLowerCase()
      return result.search(search) !== -1
    })
    setFilteredBooks(sortedArray)
  }

  const allBooks = () => {
    if (books) {
      return <Books data={books} />
    } else {
      return <Loading type="bars" color='#454545'/>
    }
  }

  const allFav = () => {
    const filter = books.filter(book => {
      return book.isFav === true
    })
    setFilteredBooks(filter);
  }
  

  
  return (
    <>
      <Header />
      <div>
        <form onSubmit={sorted} action="javascript:void(0);">
          <input
          className='search'
          placeholder='Rechercher'
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}>
          </input>
          <button onClick={allFav} className='fav'>Favoris</button>
          <button className='read'>A lire</button>
        </form>


      </div>
      {filteredBooks ? <Books data={filteredBooks} /> : allBooks()}
    </>
  )
}

export default App