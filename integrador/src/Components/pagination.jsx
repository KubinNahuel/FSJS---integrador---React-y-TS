import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";

function AdvancedExample(props) {
  return (
    <Pagination className="flexB">
      <Pagination.First />
      <Pagination.Prev />
      <Link to="/">
        <Pagination.Item href="/">{1}</Pagination.Item>
      </Link>
      <Link to="/Resumen">
        <Pagination.Item href="/">{2}</Pagination.Item>
      </Link>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default AdvancedExample;
