import React from 'react';
import { Link } from 'react-router-dom';
function List() {
  const Domes = [
    { title: "Clock", name: "clock" }
  ]
  return (
    <div className="List">
      {
        Domes.map(item => {
          return <div key={item.title} style={{padding:"20px",borderBottom:1,borderColor:"red"}}>
            <Link to={item.name}>{item.title}</Link>
          </div>
        })
      }
    </div>
  );
}

export default List;
