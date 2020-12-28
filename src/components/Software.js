import React, { useState, useEffect } from 'react';
import '../styles/App.css';

// https://api.github.com/users/deaththreats/repos

function Software() {

  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const fetchedData = await fetch('https://api.github.com/users/deaththreats/repos');
    const data = await fetchedData.json();
    setData(data);
  }

  return (
    <div className="container softwareBody pt-5 mt-3 pb-5 mb-3">
      <h1 className="mb-4 text-dark">GitHub - Software Repositories</h1>
        <div className="table-responsive-lg">
          <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Language</th>
                  <th scope="col">Date Created</th>
                  <th scope="col">File Size (kb)</th>
                  <th scope="col">Open Issues</th>
                </tr>
              </thead>
              <tbody>{data.map(item => (
                <tr key={item.id}>
                  <td><a href={item.html_url}>{item.name}</a></td>
                  <td>{item.description}</td>
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