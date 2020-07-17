import React, { useState } from "react";
// import InformationButtons from './InformationButtons'

const Card = ({ 
            picture,

            name,

            email,

            data, 

            country,
            city, 
            street,

            phone, 

            password,
        }) => {

        const [value, setValue] = useState('My name is'); // Basic value
        const [secondValue, setSecondValue] = useState(name); // Basic valu

        const arrayOfInformationButtonsClassNames = [
            'far fa-user fa-4x',
            "fas fa-at fa-4x",
            "fas fa-birthday-cake fa-4x",
            "fas fa-home fa-4x",
            "fas fa-phone fa-4x",
            "fas fa-unlock fa-4x",
        ];
        const arrayOfFirstValue = [
            'Hello, I am',
            'My email is',
            'I was born in',
            'I live in',
            'My phone',
            'My password',
        ];
        const arrayOfSecondValue = [
            name,
            email,
            data, 
            country,
            phone, 
            password,
        ];

        const handleBothValue = (firstValue, secondValue) => {
            setValue(firstValue);
            setSecondValue(secondValue);
        };

        return (
            <div className='Card'>
                <img src={ picture } alt={ picture }/>
                <hr/>
            
                <h1 className='Presentation'>
                    <div> { value } </div>
                    <div> { secondValue }  </div>
                </h1>
                
                <div className='InformationButtons'>
                    <div className="HoverButtons__InformationButtons">
                        <button className="far fa-user fa-4x"  //Work!!!
                            onMouseOver={ () => handleBothValue('My name is', name) }>
                        </button>
                        <button 
                            className="fas fa-at fa-4x" 
                            onMouseOver={ () => handleBothValue('My email is', email) }>
                        </button>
                        <button 
                            className="fas fa-birthday-cake fa-4x"
                            onMouseOver={ () => handleBothValue('I was born in ', data.substring(10, data.indexOf('?'))  ) }>
                        </button>
                        <button 
                            className="fas fa-home fa-4x" 
                            onMouseOver={ () => handleBothValue('I live in', country) }>
                        </button>
                        <button 
                            className="fas fa-phone fa-4x" 
                            onMouseOver={ () => handleBothValue('My phone number is', phone) }>
                        </button>
                        <button
                            className= "fas fa-unlock fa-4x" 
                            onMouseOver={ () => handleBothValue('My password', password)  }>
                        </button> 
                    </div>
                </div>
            </div>
    )
}

export default Card;

                        {/* <button className="far fa-user fa-4x"  //Work!!!
                            onMouseOver={ () => handleBothValue('My name is', name) }>
                        </button>
                        <button 
                            className="fas fa-at fa-4x" 
                            onMouseOver={ () => handleBothValue('My email is', email) }>
                        </button>
                        <button 
                            className="fas fa-birthday-cake fa-4x"
                            onMouseOver={ () => handleBothValue('I was born in ', data) }>
                        </button>
                        <button 
                            className="fas fa-home fa-4x" 
                            onMouseOver={ () => handleBothValue('I live in', country) }>
                        </button>
                        <button 
                            className="fas fa-phone fa-4x" 
                            onMouseOver={ () => handleBothValue('My phone number is', phone) }>
                        </button>
                        <button
                            className= "fas fa-unlock fa-4x" 
                            onMouseOver={ () => handleBothValue('My password', password)  }>
                        </button> */}