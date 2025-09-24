import React from 'react'
import { doctors } from '../assets/assets'

const TopDoc = () => {
  return (
    <div>
      <h1>Top Doctor To Book</h1>
      <p> Simply  browse through  our  extensive  list of  trusted  doctors.</p>
      <div>
        {doctors.slice(0,10).map((item,index)=>(
            <div>
                <img src={item.image } alt=""/>
                <div>
                    <div>
                        <p></p><p>Avalible</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TopDoc
