import React from 'react'

function Button({children,type='button',bgcolor='bg-blue-600',textcolor='text-white',classname='',...props}) {
  return (
    <div>
      <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textcolor} ${classname}`} {...props}>
        {children}
      </button>
    </div>
  )
}

export default Button
