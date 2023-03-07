import { useEffect, useState } from "react";


let subscribers = [];
let currentState = localStorage.getItem('login-state') === undefined ? "unauth" : JSON.parse(localStorage.getItem('login-state'));

export const updateLogin = (l) => {
    currentState = l;
    localStorage.setItem('login-state', JSON.stringify(l));
    subscribers.forEach((f) => f(l));
};

// FIXME: probably get this from backend??

export const useLogin = () => {
    const [user, setUser] = useState(currentState);
    useEffect(() => {
        const f = (x) => setUser(x);
        subscribers.push(f);
        return () => {
            subscribers = subscribers.filter((k) => k !== f);
        };
    });
    return user;    
};
