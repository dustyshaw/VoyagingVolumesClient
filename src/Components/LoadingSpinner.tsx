

const LoadingSpinner = () => {
  return (
    <div className="d-flex w-100 justify-content-center">
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
