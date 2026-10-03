import { useState } from "react";

function ConditionalText() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome Siyana!</h1>
      ) : (
        <h1>Please Login</h1>
      )}

      <button onClick={() => setIsLoggedIn(true)}>
        Login
      </button>
    </div>
  );
}

export default ConditionalText;