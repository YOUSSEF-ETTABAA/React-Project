import Home1 from  '../assets/Home1.png';
import { NavLink } from 'react-router-dom';
import '../styles/Home.css'
function Home(){
    return (
      <section className="home">
        <div className="content">
          <h1>
            Men's New <br />
            <span>Arrivals</span>
          </h1>
          <p>New colors new also available in men's sizing</p>
          <div id="btn">
            <button>
              <NavLink to="/Shop">View collection</NavLink>
            </button>
          </div>
        </div>
        <div >
          <img src={Home1} alt="" />
        </div>
      </section>
    );
}
export default Home;