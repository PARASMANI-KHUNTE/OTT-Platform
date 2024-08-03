

const SeriesCard = (props) => {
    const { name,img_url,rating,description,cast,genre,watch_url} = props.current
        return (  <li key={props} className="border   hover:shadow-xl   bg-white ">
          <div>
              <img className="" src={img_url}  alt="" width="100%"  height="100%"/>
          </div>
          <section className="p-3 " id="Info">
          <h2 className="text-center"> {name}</h2>
          <h3  >Rating :<span className={`rounded ${rating >= 8.5 ? "bg-green-400  " : "bg-yellow-400  "}` }> {rating}</span> </h3>
          <p>Summary : {description}</p>
          <p >Genre : {genre}</p>
          <p>Cast : {cast}</p>
          <a className=" bg-blue-500 text-white  hover:bg-blue-600  p-2 rounded" href={watch_url} target="_blank"><button>Watch Now</button></a>
          
          </section>
          
      </li>);
   
}

export default SeriesCard