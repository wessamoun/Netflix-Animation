import React from 'react'

const Loading = () => {
  return (
    <div className="bg-black h-screen w-full flex justify-center items-center">
      <div className="h-8 w-8 rounded-full border-4 border-gray-800 border-r-red-700 animate-spin"></div>
    </div>
  )
}

export default Loading