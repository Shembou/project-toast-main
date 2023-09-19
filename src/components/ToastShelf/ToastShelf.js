import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {

  function filterToasts(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ol className={styles.wrapper}>
      {
        toasts.map((toast) => {
          return (
            <li
              className={styles.toastWrapper}
              key={toast.id}>
              <Toast selectedVariant={toast.selectedVariant}
                filterToasts={filterToasts}
                id={toast.id}
              >
                {toast.message}
              </Toast>
            </li>
          )
        })
      }
    </ol>
  );
}

export default ToastShelf;
