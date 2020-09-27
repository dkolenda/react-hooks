import * as React from "react";
import { P1Oop } from "./problems/problem1/P1Oop";
import { P2Oop } from "./problems/problem2/P2Oop";
import { P3Oop } from "./problems/problem3/P3Oop";
import { P4Oop } from "./problems/problem4/P4Oop";
import { P5Oop } from "./problems/problem5/P5Oop";
import { P1Function } from "./problems/problem1/P1Function";
import { P2Function } from "./problems/problem2/P2Function";
import { P3Function } from "./problems/problem3/P3Function";
import { P4Function } from "./problems/problem4/P4Function";
import { P5Function } from "./problems/problem5/P5Function";
import { P3Functionv2 } from "./problems/problem3/P3Functionv2";

import "./styles.css";

enum PageName {
  P1Oop = "P1Oop",
  P1Function = "P1Function",
  P2Oop = "P2Oop",
  P2Function = "P2Function",
  P3Oop = "P3Oop",
  P3Function = "P3Function",
  P3Functionv2 = "P3Functionv2",
  P4Oop = "P4Oop",
  P4Function = "P4Function",
  P5Oop = "P5Oop",
  P5Function = "P5Function"
}

const Page = (props: { page: PageName }) => {
  const [temp, setTemp] = React.useState("Strona X");

  switch (props.page) {
    case PageName.P1Oop:
      return <P1Oop title="Strona P1Oop" />;
    case PageName.P1Function:
      return (
        <div>
          <P1Function title={temp} />
          <button
            onClick={() => {
              setTemp("Strona P1Function X");
            }}
          >
            Button wywoluje czysczenie useEfect
          </button>
        </div>
      );
    case PageName.P2Oop:
      return <P2Oop />;
    case PageName.P2Function:
      return <P2Function />;
    case PageName.P3Oop:
      return <P3Oop />;
    case PageName.P3Function:
      return <P3Function />;
    case PageName.P3Functionv2:
      return <P3Functionv2 />;
    case PageName.P4Oop:
      return <P4Oop />;
    case PageName.P4Function:
      return <P4Function />;
    case PageName.P5Oop:
      return <P5Oop />;
    case PageName.P5Function:
      return <P5Function />;
    default:
      return <div>:)</div>;
  }
};

export default function App() {
  const [page, setPage] = React.useState(PageName.P1Oop);

  const handleClick = (e: any) => {
    const page = e.target?.getAttribute("data-name");
    setPage(page);
  };

  return (
    <div className="App">
      <button onClick={handleClick} data-name={PageName.P1Oop}>
        P1Oop
      </button>
      <button onClick={handleClick} data-name={PageName.P1Function}>
        P1Function
      </button>
      <button onClick={handleClick} data-name={PageName.P2Oop}>
        P2Oop
      </button>
      <button onClick={handleClick} data-name={PageName.P2Function}>
        P2Function
      </button>
      <button onClick={handleClick} data-name={PageName.P3Oop}>
        P3Oop
      </button>
      <button onClick={handleClick} data-name={PageName.P3Function}>
        P3Function
      </button>
      <button onClick={handleClick} data-name={PageName.P3Functionv2}>
        P3FunctionV2
      </button>
      <button onClick={handleClick} data-name={PageName.P4Oop}>
        P4Oop
      </button>
      <button onClick={handleClick} data-name={PageName.P4Function}>
        P4Function
      </button>
      <button onClick={handleClick} data-name={PageName.P5Oop}>
        P5Oop
      </button>
      <button onClick={handleClick} data-name={PageName.P5Function}>
        P5Function
      </button>
      <Page page={page} />
    </div>
  );
}
