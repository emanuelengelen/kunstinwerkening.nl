import { useEffect, useState, useRef } from 'react';

// response should be a object with nodes in it

const useStructuresocket = (artDesc) => {
    const [messages, setMessages] = useState(``);

    const webSocket = useRef(null);

    useEffect(() => {
        webSocket.current = new WebSocket('ws://localhost:3001');

        webSocket.current.onmessage = (message) => {
            setMessages(message.data);
        };

        return () => webSocket.current.close();
    }, []);

    useEffect(() => {
        if (webSocket.current.readyState === 1) {
            webSocket.current.send(artDesc);
        }
    }, [artDesc]);

    // useEffect(() => {
    //     console.log(messages, artDesc);
    // }, [messages]);

    return messages;
};

export default useStructuresocket;
