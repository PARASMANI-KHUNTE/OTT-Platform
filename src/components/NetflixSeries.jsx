import SeriesCard from "./SeriesCard"
import seriesData  from "../api/seriesData.json"

const NetflixSeries = () => {
  return  <section>
    <h1 className="text-center p-6">List  of the series </h1>
    <ul className="grid grid-cols-3 gap-4 p-10 bg-gray-200">
    
    {
      seriesData.map((current)=>{
        return (
          <SeriesCard key={current.id} current={current} />
        )
        
      })
    }
  </ul>
  
  </section>
   
}

export default NetflixSeries