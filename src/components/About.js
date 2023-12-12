import aboutPicture from '../assets/aboutPicture.png';
import LessText from './LessText';
import '../styles/About.css'

function About(){
    return (
      <div className="container" id="about">
        <h1>ABOUT US</h1>
        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src={aboutPicture} alt="" />
            </div>
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <h2>Best clothers</h2>
            <LessText
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam accusamus exercitationem ut. Non assumenda nihil tempore minima consequatur corrupti numquam quia dolorum laborum praesentium vero commodi ex velit expedita, omnis adipisci? Exercitationem consequatur ducimus praesentium dolores rerum voluptatibus, nam illo quas modi deleniti iusto laboriosam adipisci enim excepturi, cupiditate quidem neque tempora sunt animi natus aliquid. Fugiat eligendi molestiae magnam vero dicta est praesentium unde ducimus eveniet commodi alias, pariatur quis quod saepe sed accusamus porro nemo doloribus cumque quos quo nihil! Numquam explicabo odit accusamus laudantium molestiae. Ipsum culpa dolor sequi dolore doloribus aperiam, earum maxime alias voluptates magni."
              maxLength={200}
            />
          </div>
        </div>
      </div>
    );
}
export default About