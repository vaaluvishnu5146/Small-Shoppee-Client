import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3>404 NOT FOUND</h3>
          <h5>Page that you are looking for is either NOT FOUND or Removed</h5>
          <p>
            Please Go Back to <Link to="/dashboard">Dashboard</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
