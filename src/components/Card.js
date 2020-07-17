import React from "react";
import InformationButtons from './InformationButtons'

const Card = ({ picture, first, last }) => (
    <div className='Card'>
        <img src={ picture } />
        <hr style={ colorGray }/>
        <h3 style={ colorGray }>
            Hello, I am 
        </h3>
        <h1 className='Greeting'>
            { first } { last }
        </h1>
        <InformationButtons />
    </div>
)

const colorGray = {
    color: 'gray',
    fontWeight: '500'
}

export default Card;