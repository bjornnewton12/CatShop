import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CatCard from "../components/CatCard";

function Cats() {
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const start = (currentPage - 1) * 10;
  const end = currentPage * 10;

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds?limit=30`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setCats(data);
      });
  }, []);

  return (
    <div className="container text-left mt-5">
      <h1 className="display-3">Cats</h1>
      <Row>
        {cats.filter(cat => cat.reference_image_id).slice(start, end).map((cat) => (
          <Col key={cat.id} xs={3}>
            <CatCard cat={cat} />
          </Col>
        ))}
      </Row>
      <Pagination>
        {Array.from({ length: Math.ceil(cats.length / 10) }, (_, i) => (
            <Pagination.Item key={i + 1} onClick={() => setCurrentPage(i + 1)}
            active={currentPage === i + 1}>
                {i + 1}
            </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default Cats;
