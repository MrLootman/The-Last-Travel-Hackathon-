import React, { useRef } from 'react';
import style from '../style/Contact.css';

const Form = () => {

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        inputRef.current.value = "";
    }

    return (
        <div className="formulaire">
            <div className="left-part">
                <h2>Contactez-nous</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="left-part">
                        <label htmlFor="name">Votre nom</label>
                            <input
                                ref={inputRef}
                                type="text" 
                                id="name" 
                            />
                        <textarea></textarea>
                        <button type="submit" value="Envoyer">Envoyer</button>
                    </div>
                </form>
            </div>

            <div className="right-part">
                <img src="https://images.unsplash.com/photo-1605446994677-9b99e0d6647f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1282&q=80" alt="Man near to a cliff" />
            </div>
        </div>
    );
};

export default Form;