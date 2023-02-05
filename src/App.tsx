import { useState } from "react";
import { Calendar } from "./component/Calendar";
import moment from "moment";

function App() {
  const [value, setValue] = useState(moment());
  return (
    <div className="App">
      <center>
        <Calendar value={value} onChange={setValue} />
      </center>
    </div>
  );
}

export default App;
