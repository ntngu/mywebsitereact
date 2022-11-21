import * as React from "react";
import { DateTime } from "luxon";

const Home = () => {
  let now = DateTime.now();
  const [time, setTime] = React.useState(now.toLocaleString(DateTime.TIME_WITH_SECONDS));
  
  setInterval(() => {
    now = DateTime.now();
    setTime(now.toLocaleString(DateTime.TIME_WITH_SECONDS));
  }, 1000);

  return (
    <div id="Home">
      <h1>Welcome to my website.</h1>
      <p>{time}</p>
    </div>
  );
};

export default Home;
