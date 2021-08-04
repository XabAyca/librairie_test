import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <div className="books-list">
        <ReactLoading type={type} color={color} height={300} width={150} />
    </div>    
);
 
export default Loading;