
import './App.css';

function App() {
  return (
    <div className="MovieList">
      <div className="Movie">
        <h1 id="Title"></h1>
        <img src='https://academymuseumstore.org/cdn/shop/products/movieposterredo32.jpg?v=1666936667' id='MovieCover'/>
        <p>Revenge of the Sith is the third of the prequal trilogy. Telling the story of how anakin skywalker battles his fears which eventually lead him to becoming Darth Vader. 
        This movie contains a lot of action and causes a variety of emotions. </p>
        <div className='Rating'>
          <button className='Stars'>1star</button>
          <button className='Stars'>2star</button>
          <button className='Stars'>3star</button>
          <button className='Stars'>4star</button>
          <button className='Stars'>5star</button>
          <div className='ReviewList'>
            <p>leave your opinions here</p>
            <div className='Review' >

            </div>
          </div>
          
          
        </div>


      </div>
    </div>



  );
}


export default App;


/*
Using what you've learned this week, create a page of an application that enables users to vote and leave reviews on movies.

All data necessary for this assignment, including Movies and Reviews, can be pulled from an API or you can create the Movies and their Reviews yourself.

  Your application must include the following components:

  - MovieList: a container for all the Movie components and their data.  

  - Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)

  - Stars: a one to five-star rating component that allows users to rate something 
    (movies in this case, but remember that components are reusable, so you could use it elsewhere!)

  - ReviewList: a container inside of a Movie that houses Review components.

  - Review: A text review a user can leave on a movie.

  - ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. 

When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.
*/