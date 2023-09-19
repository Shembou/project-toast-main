import React from 'react';

import Button from '../Button';

import Toast from '../Toast';

import styles from './ToastPlayground.module.css';
import Label from '../Label/Label';
import ToastShelf from '../ToastShelf';

import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const {
    message, 
    setId, 
    selectedVariant, 
    setSelectedVariant, 
    setMessage, 
    pushToast
   } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf>
      </ToastShelf>
      <form
        onSubmit={(event) => pushToast(event)}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message"
                className={styles.messageInput}
                value={message}
                onChange={event => {
                  setMessage(event.target.value);
                }} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {
                VARIANT_OPTIONS.map((value, index) => (
                  <Label
                    key={setId(index)}
                    labelId={setId(index)}
                    variantType={value}
                    selectedVariant={selectedVariant}
                    setSelectedVariant={setSelectedVariant}>
                    {value}
                  </Label>
                ))
              }
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>
                Pop Toast!
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
