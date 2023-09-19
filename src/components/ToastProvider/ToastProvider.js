import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  
  const [selectedVariant, setSelectedVariant] = React.useState("notice");

  const [message, setMessage] = React.useState('');

  const [toasts, setToasts] = React.useState([]);

  function setId(number) {
    return `variant-${number}`;
  }

  function pushToast(event) {
    event.preventDefault();

    const newToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        selectedVariant,
      },
    ];
    setToasts(newToasts);
  }

  function filterToasts(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
    value = {{
      selectedVariant,
      setSelectedVariant,
      message,
      setMessage,
      toasts,
      setToasts,
      setId,
      pushToast,
      filterToasts
    }}>
      {children}
      </ ToastContext.Provider>
  )
}

export default ToastProvider;
