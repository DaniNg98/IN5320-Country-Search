import './Table.css';

function Table(props) {
  console.log(props.apiData);

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Write your code here:
    return (
      <table class='tableContainer'>
        <thead>
          <tr>
            <th>Country</th>
            <th>Continent</th>
            <th>Population</th>
            <th>Population Growth</th>
          </tr>
        </thead>
        <tbody>
          {props.apiData.results.map((row) => (
            <tr key={row.Country}>
              <td>{row.Country}</td>
              <td>{row.Continent}</td>
              <td>{row.Population}</td>
              <td>{row.PopulationGrowth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
