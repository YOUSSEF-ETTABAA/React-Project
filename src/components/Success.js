
import '../styles/Success.css'

export default function Success (){
    localStorage.setItem('AddedProducts',JSON.stringify([]))
    return (
      <div>
        <div className="container" id="Success">

              <h2 id="h22">
                {" "}
                OPERATIN SUCCESSED <i className="fa-solid fa-circle-check"></i>
              </h2>
        </div>
      </div>
    );
}