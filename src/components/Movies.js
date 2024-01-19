import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "Highlander",
        release_date: "1986-03-07",
        runtime: 116,
        mpaa_rating: "R",
        desciption: "Some long description",
      },
      {
        id: 2,
        title: "Raider of the Lost Ark",
        release_date: "1981-06-12",
        runtime: 115,
        mpaa_rating: "PG-13",
        desciption: "Some long description",
      },
    ];

    setMovies(moviesList);
  }, []);
  return (
    <div>
      <h2>Filme</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Film</th>
            <th>Veröffentlichungsdatum</th>
            <th>Bewertung</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
