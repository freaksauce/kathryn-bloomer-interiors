import React from 'react'

export default function({ item }) {
  return (
    <div className="relative text-center">
      <img
        className="card--project__img"
        src={item.photo}
        alt={item.title}
      />
      <div className="flex justify-center absolute left-0 top-2/4 w-full mt-[-75px]">
        <div
          className="bg-white cursor-pointer p-12 w-[90%]"
          onClick={() => navigate(item.link)}
          onKeyUp={null}
        >
          <h2 className="relative font-serif text-3xl pb-4 top-0 border-b border-stone-500">
            {item.title}
          </h2>
        </div>
      </div>
    </div>
  )
}