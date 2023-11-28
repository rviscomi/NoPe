'use client';

import React from 'react';

import styles from './OriginSearch.module.css'

function OriginSearch({ data, selectedOrigin, setSelectedOrigin }) {
  const [origin, setOrigin] = React.useState(selectedOrigin);

  const originListId = React.useId();
  const origins = Object.keys(data);

  return (
    <>
      <form
        className={styles.search}
        onSubmit={(e) => {
          e.preventDefault();
          setSelectedOrigin(origin);
        }}
        >
        <input
          className={styles.selectedOrigin}
          value={origin}
          onChange={(e) => {
            setOrigin(e.target.value);
          }}
          onBlur={(e) => {
            setSelectedOrigin(e.target.value);
          }}
          list={originListId}
          placeholder="Search for an origin" />
        <button
          className={styles.randomize}
          type="button"
          onClick={() => {
            let randomOrigin;
            do {
              randomOrigin = origins[Math.floor(Math.random() * origins.length)];
            } while (randomOrigin == selectedOrigin);
            setOrigin(randomOrigin);
            setSelectedOrigin(randomOrigin);
          }}
          title="Choose a random origin">
          🎁
        </button>
      </form>

      <datalist id={originListId}>{
        origins.map(origin => (
          <option key={origin} value={origin}>{origin}</option>
        ))
      }</datalist>
    </>
  );
}

export default OriginSearch;