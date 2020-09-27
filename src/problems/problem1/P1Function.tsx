import React from "react";
import { useEffect } from "react";

export const P1Function = (props: { title: string }) => {
  useEffect(() => {
    console.log("useEffect P1Function");
    document.title = props.title;

    return () => {
      /* To czuszczenie wywoła się za każdym razem gdy zmianie ulegnie props.title */
      // console.log("sprzatanie P1Function");
      // document.title = "Coś nie teges ?";
    };
  }, [props.title]);

  useEffect(() => {
    return () => {
      console.log("sprzatanie przy odmontowaniu");
      document.title = "Odmontowany komponent Funkcyjny";
    };
  }, []);

  return <div>P1Function</div>;
};
