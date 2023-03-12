import React from 'react'

const Message = (props) => {
    const {role,content} = props.model
  return (
    <div className={`w-full flex ${role === 'assistant'? 'justify-start':'justify-end'}`}>
        <div className={` ${role === 'assistant' ? 'gpt' : 'user'}`}>
            <div className='text'>{content}</div>
        </div>
    </div>
  )
}

export default Message