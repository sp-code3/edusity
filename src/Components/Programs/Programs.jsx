import React from 'react'
import './Programs.css'
import program from '../../assets/program.jpg'
import program_icon1 from '../../assets/program-icon-1.jpg'
import program_icon2 from '../../assets/program-icon-2.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program} alt="" />
            <div className="caption">
                <img src={program_icon1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program} alt="" />
            <div className="caption">
                <img src={program_icon2} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program} alt="" />
            <div className="caption">
                <img src={program_icon1} alt="" />
                <p>Post Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs