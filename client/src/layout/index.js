import React from 'react'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-green-100'>
            <div className='text-3xl font-bold'>GO-CHAT</div>
        </header>

        { children }
    </>
  )
}

export default AuthLayouts
