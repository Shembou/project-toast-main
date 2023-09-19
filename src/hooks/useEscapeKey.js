import React from "react";

export default function useEscapeKey(setToasts) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === 'Escape') {
                setToasts([]);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
}