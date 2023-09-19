import React from 'react';

import Button from '../Button';

import Toast from '../Toast';

import styles from './ToastPlayground.module.css';
import Label from '../Label/Label';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [selectedVariant, setSelectedVariant] = React.useState("notice");

  const [message, setMessage] = React.useState('');

  const [showToast, setShowToast] = React.useState();

  function setId(number) {
    return `variant-${number}`;
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {
        showToast && <Toast 
        selectedVariant = { selectedVariant } 
        message = { message }
        setShowToast = { setShowToast } ></Toast>
      }
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
            <Button
              onClick= {() => setShowToast(true)}>Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
