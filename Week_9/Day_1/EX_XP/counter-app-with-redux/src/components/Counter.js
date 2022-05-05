import React from "react";
import { store } from "../store";
import { add, substract } from "../actions";

const Counter = ({ value }) => {

    const handleSubmit = event => {
        event.preventDefault();
        //get button dataset
        const buttonType = event.target.dataset.button
        //get H1 dataset
        const val = event.target.parentElement.firstElementChild.dataset.val

        switch (buttonType) {
            case "plus":
                store.dispatch(add(val));
                break;
            case "minus":
                store.dispatch(substract(val));
                break;
            default:
                console.log("wrong button")
        }
    }

    return (
        <>
            <h1 data-val={value}>{value}</h1>
            <button type="submit" onClick={handleSubmit} data-button="plus">+</button>
            
            <button type="submit" onClick={handleSubmit} data-button="minus">-</button>
        </>
    );
};

export default Counter;
