import { Link } from "react-router-dom";

export default function ItemSquare(props){
  const item = props.item;
  return (
    <div className="grid-cat-item">
      <Link to={`/ItemPage/${item.id}`}>
        <img src={item.picUrl} className="gridCatImg"/>
      </Link>
    </div>
  );
}
