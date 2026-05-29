import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import CatCard from "../components/CatCard";

function Cats() {
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const start = (currentPage - 1) * 10;
  const end = currentPage * 10;
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds?limit=30`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setCats(data);
      });
  }, []);

  const filterCats = cats.filter(cat => cat.reference_image_id)
  .filter(cat => cat.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="container text-left mt-5">
      <h1 className="display-3">Cats</h1>
      <Form.Control type="text" placeholder="Sök efter katter..." value={searchQuery} 
        onChange={(e) => {setSearchQuery(e.target.value) 
        setCurrentPage(1)}} className="mb-4"/>
      <Row className="g-4">
        {filterCats.slice(start, end).map((cat) => (
          <Col key={cat.id} xs={12} sm={6} md={4} lg={3}>
            <CatCard cat={cat}/>
          </Col>
        ))}
      </Row>
      <Pagination className="mt-4">
        {Array.from({ length: Math.ceil(filterCats.length / 10) }, (_, i) => (
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
