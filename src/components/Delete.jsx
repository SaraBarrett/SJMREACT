import { useState } from "react";
import "./Delete.css";

export default function Delete() {
  const [isDelete, setIsDelete] = useState(false);

  return (
    <div>
      {isDelete && (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={()=>setIsDelete(false)}>Proceed</button>
        </div>
      )}

      <button onClick={()=>setIsDelete(true)}>Delete</button>
    </div>
  );
}
