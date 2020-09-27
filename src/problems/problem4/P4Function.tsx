import React, { useCallback, useRef, useEffect, useState } from "react";
import { getPokemon } from "./getPokemon";

export const P4Function = () => {
  return (
    <div>
      <Popup
        callback={() => {
          console.log("Popup");
        }}
        time={3000}
      />
    </div>
  );
};

const Popup = ({ callback, time }: any) => {
  const savedCallback = useRef(() => {});

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (time !== null) {
      const id = setInterval(tick, time);
      return () => clearInterval(id);
    }
  }, [time]);

  return <div>P4Function</div>;
};
