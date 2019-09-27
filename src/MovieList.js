import React from 'react';
import MovieDisplay from './MovieDisplay'
import './MovieList.css';

const MovieList = ({moviesArray}) =>{
	return(
		<React.Fragment>
		 <div className="grid-container">
		  { moviesArray.map(item=>{
		  	return<MovieDisplay
		  	key={item.imdbID}
		  	title={item.Title}
		  	poster={item.Poster}
		  	year={item.Year}
		  	/>
		  	
		  })
		}
		 </div>
		</React.Fragment>
	)
}

export default MovieList;