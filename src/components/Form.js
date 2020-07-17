import React , {Component} from 'react';

const Form = (porps) => {
    return(
        <form onSubmit={porps.getWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default Form;