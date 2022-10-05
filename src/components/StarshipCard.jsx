import React from 'react'

const StarshipCard = () => {
  return (
    <div className="card max-w-xs bg-base-100 mt-4 h-min rounded-xl">
    <figure>
      <img src="https://placeimg.com/400/400/arch" alt="Shoes" />
    </figure>
    <div className="card-body p-2 bg-slate-800  border-t-4 border-t-pink-400">
      <h2 className="card-title mt-4 m-2">{getShipName}</h2>
      <p className="mx-2">Model: {getShipModel}</p>
      <div className="card-actions justify-start">
        <div className="badge text-pink-400 bg-none">DATABANK</div>
      </div>
    </div>
  </div>
  )
}

export default StarshipCard