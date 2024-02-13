import { cards } from '@/constants'
import React from 'react'

const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="m-6 border-2 w-full md:w-[20rem] rounded-md h-[10rem] shadow-lg"
          >
            <h1 className="text-lg m-5">{card.cardHeader}</h1>
            <p className="font-bold text-5xl m-5">{card.cardNumber}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards
