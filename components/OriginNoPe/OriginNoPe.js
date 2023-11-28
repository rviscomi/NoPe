'use client';

import React from 'react';

import data from "../../data/data.js";

import OriginSearch from '../OriginSearch';
import OriginChart from '../OriginChart';

function OriginNoPe() {
  const [selectedOrigin, setSelectedOrigin] = React.useState('https://app.slack.com');
  const originData = data[selectedOrigin];

  return (
    <>
      <OriginSearch
        data={data}
        selectedOrigin={selectedOrigin}
        setSelectedOrigin={setSelectedOrigin}
      />

      <OriginChart
        originData={originData}
      />
    </>
  );
}

export default OriginNoPe;