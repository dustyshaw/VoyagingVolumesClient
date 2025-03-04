import { useState } from "react";


const ErrorBoundaryComponent = () => {
  const [isError, setisError] = useState<boolean>(false);

  if (isError) {
    throw new Error("Something went wrong!!");
  }

  return (
    <button className="btn btn-danger" onClick={() => setisError(true)}>
      Throw Exception
    </button>
  );
};

export default ErrorBoundaryComponent;
