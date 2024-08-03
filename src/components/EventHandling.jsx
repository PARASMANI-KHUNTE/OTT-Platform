import { useState } from 'react';
import SeriesCard from "./SeriesCard";
import seriesData from "../api/seriesData.json";

const EventHandling = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState('');

  

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchTerm = formData.get("element");

    const foundSeries = seriesData.find((current) => current.name === searchTerm);
    if (foundSeries) {
      setSearchResult(foundSeries);
      setError('');
    } else {
      setSearchResult(null);
      setError('No Such series Found');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex mt-4" onSubmit={handleSearch}>
        <input type="text" name="element" placeholder="Search" className="border p-2 rounded-xl ml-3" />
        <button type="submit" className="bg-green-600 text-white p-2 rounded ml-1 hover:bg-green-700">
          Search
        </button>
      </form>
      <div className="mt-4">
        {searchResult ? (
          <SeriesCard key={searchResult.id} current={searchResult} />
        ) : (
          <>{error}</>
        )}
      </div>
    </div>
  );
};

export default EventHandling;
