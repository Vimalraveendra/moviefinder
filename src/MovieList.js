import React from 'react';
import MovieDisplay from './MovieDisplay'

const MovieList = ({moviesArray}) =>{
	return(
		<React.Fragment>
		 <div>
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