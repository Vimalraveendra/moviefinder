import React from 'react';

const MovieDisplay = ({title,poster,year}) =>{
	return(
		<React.Fragment>
		 <div>
		  <div>
		  	<img src={poster} alt=""/>
		  </div>
          <h2>{title}</h2>
          <h3>{year}</h3>
		 </div>
		</React.Fragment>
	)
}

export default MovieDisplay;