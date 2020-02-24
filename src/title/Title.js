import React from 'react';

const Title = ({onHandleChange,input,onHandleSubmit}) =>{
	return(
		<React.Fragment>
		 <div>
		 <input 
		 className='f4 pa2 ma4'
		 type="text"
		 value={input}
         onChange={onHandleChange}
		 />
		 <button
		 className='f4 pv2 ph3 grow bg-dark-green white link'
		 onClick={onHandleSubmit}
		 >
		 Click
		 </button>
		 </div>
		</React.Fragment>
	)
}

export default Title;