import { useState } from "react";
import Card from "react-bootstrap/Card";

const CardFlags = ({ title, capital, statistics, image }) => {
  const [showImage, setShowImage] = useState(true);
  const handleClick = () => setShowImage(!showImage);

  return (
    <Card
      onClick={handleClick} // onClick={()=>setShowImage(!showImage)} olabilirdi.
      className="rounded-2 m-auto flag-card"
      role="button"
    >
      {showImage ? (
        <Card.Img variant="top" src={image} className="flag-logo" />
      ) : (
        <ul className="m-auto p-1">
          {statistics.map((item, i) => {
            return (
              <li key={i} className="h6 text-start list-unstyled p-1">
                📌{item}
              </li>
            );
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title className="text-uppercase">{title}</Card.Title>
      </Card.Footer>
    </Card>
  );
};
export default CardFlags;
