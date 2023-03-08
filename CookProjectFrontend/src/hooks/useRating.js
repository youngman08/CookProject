import { useEffect, useState } from "react";


let subscribers = [];
let currentState = localStorage.getItem('rate-state') === null ? {} : JSON.parse(localStorage.getItem('rate-state'));

export const updateRating = (id, rate) => {
    currentState = { ...currentState, [id]: rate };
    localStorage.setItem('rate-state', JSON.stringify(currentState));
    subscribers.forEach((f) => f(currentState));
};

// FIXME: definitely we should get this from backend.

export const useRating = () => {
    const [state, setState] = useState(currentState);
    useEffect(() => {
        const f = (x) => setState(x);
        subscribers.push(f);
        return () => {
            subscribers = subscribers.filter((k) => k !== f);
        };
    });
    return state;    
};
