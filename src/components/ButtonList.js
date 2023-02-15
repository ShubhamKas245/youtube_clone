import React from 'react'
import Button from './Button'

const lists=["All","Gaming","Songs","Live","Cricket","Soccer","Cooking","Valentines Special","Mixes","Computer Programming","Motivations","Maths"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        lists.map((list,i)=>(
          <Button list={list} key={i} />
        ))
      }
    </div>
  )
}

export default ButtonList