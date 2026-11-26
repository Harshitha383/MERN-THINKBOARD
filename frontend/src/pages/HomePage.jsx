import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";

const HomePage = () => {
  const [isRateLimited, setISRateLimited] = useState(true);

  return (
    <div className="min-h-screen">
      {isRateLimited && <RateLimitedUI />}
    </div>
  )
}

export default HomePage