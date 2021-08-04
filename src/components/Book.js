import React from 'react';

const Book = ({data}) => {

  const toggleFav = () => {
    data.isFav = !data.isFav
    document.getElementById("fav"+data.isbn).innerHTML=data.isFav? "Retirer Favoris" : "Ajouter Favoris"
  }

  const toggleRead = () => {
    data.read = !data.read
    document.getElementById("read"+data.isbn).innerHTML=data.read? "Retirer des lus" : "A lire"
  }

  return (
    <div className='book-card'>
      <div className='book-card-img'>
        {data.thumbnailUrl? <img src={data.thumbnailUrl} alt='book-img'></img> : <img src='https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?cs=srgb&dl=pexels-sofia-alejandra-3007370.jpg&fm=jpg' alt='book-img'></img>}
        <div className="infos">
          <h3>{data.title}</h3>
          <p>{data.shortDescription}</p>
        </div>
      </div>
      <button id={"fav"+data.isbn} onClick={toggleFav}>{data.isFav? "Retirer Favoris" : "Ajouter Favoris"}</button>
      <button id={"read"+data.isbn} onClick={toggleRead}>{data.read? "Retirer des lus" : "A lire"}</button>
    </div>
  )
}

export default Book