import React from "react";
import DevIcon from "devicon-react-svg";
import { techs } from '../../helpers/techs';
import './technologies.css'

function Technologies() {
    return (
        <div className="technologies__container" id="technologies">
            <div>
                <h1 style={{textAlign: 'center'}}>Some technologies I use:</h1>
            </div>
            <div className="tech__cards__container">
                {techs.map((e, idx) => {
                    return (
                        <div key={idx} className='tech__card'>
                            <DevIcon className='tech__icons' icon={e.iconName}  />
                            <span style={{ margin: '5px', fontSize: '1rem'}}>{e.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies