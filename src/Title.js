import React from 'react';

const Title = ({onHandleChange,input,onHandleSubmit}) =>{
	return(
		<React.Fragment>
		 <div>
		 <input 
		 type="text"
		 value={input}
         onChange={onHandleChange}
		 />
		 <button
		 className='f4'
		 onClick={onHandleSubmit}
		 >
		 Click
		 </button>
		 </div>
		</React.Fragment>
	)
}

export default Title;