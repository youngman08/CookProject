import { useEffect, useState } from "react";


let subscribers = [];
let currentState = "unauth";

export const updateLogin = (l) => {
    currentState = l;
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
