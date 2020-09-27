import React, { useCallback, useEffect, useRef, useState } from "react";

/*
 drukujemy test jako countRef.current bo inaczej wartość test wyswietlona w popup była by nie aktualna.
 Nie możemy użyc do odswieżenia tablicy zależności bo to stwożyło by nam nowy Timeout
 */

export const P5Function = () => {
  const [test, setTest] = useState(0);
  const countRef = useRef(0);

  countRef.current = test;

  const handleClick = useCallback(() => {
    setTest((oldState) => {
      return oldState + 1;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      alert(countRef.current);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      P5Function
      <button onClick={handleClick}>Podbij {test}</button>
    </div>
  );
};
