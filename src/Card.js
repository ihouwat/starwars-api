import React from 'react';

const Card = ({name, hairColor}) => {
  return (
    <div className='br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center'>
      <h2 className='f5 f4-ns mv0'>{name}</h2>
      <p className='f6 lh-copy measure mt2 mid-gray'>{hairColor}</p>
    </div>
  )
}

export default Card