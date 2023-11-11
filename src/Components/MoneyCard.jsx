import React from 'react'

export default function MoneyCard() {
  return (
    <div className='w-full py-2 px-16 h-[50px] bg-gray-100 mb5 mt-3 flex space-x-48'>
        <div className=''>
            <p>santosh kumar dhal</p>
        </div>

        <div>
            <p>santosh@gmail.com</p>
        </div>

        <div>
            <p>12th nov 2023</p>
        </div>

        <div className='bg-green-500 px-3 rounded text-white '>
            <p>upi</p>
        </div>

        <div className='text-green-600 font-bold'>
            <p>#89900</p>
        </div>
    </div>
  )
}
