import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";

function Software() {

  useEffect(() => {
    fetchData();
    gsap.from(".software-data", 1, {
      ease: "power3.out",
      y:100,
      opacity:0,
      stagger: {
          amount: .2
      }
  });
  }, []);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const fetchedData = await fetch('https://api.github.com/users/deaththreats/repos');
    const data = await fetchedData.json();
    setData(data);
  }

  return (
    <div className="container software">
      <h1 className="mb-4 display-4 font-weight-bold text-dark software-data">Software Repository</h1>
      <div className="table-responsive-lg software-data">
        <table className="table table-hover text-nowrap">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col" className="fixed-width">Description</th>
              <th scope="col">Language</th>
              <th scope="col">Date Created</th>
              <th scope="col">File Size (kb)</th>
              <th scope="col">Open Issues</th>
            </tr>
          </thead>
          <tbody>{data.map(item => (
            <tr key={item.id}>
              <td><a href={item.html_url}>{item.name}</a></td>
              <td className="fixed-width">{item.description}</td>
              <td>{item.language}</td>
              <td>{item.created_at.slice(0,10)}</td>
              <td>{item.size}</td>
              <td>{item.open_issues}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Software;