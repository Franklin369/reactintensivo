import "./TopBar.css"
import pokeball from "../img/pokeball.png";
import pokeballcolor from "../img/pokeballcolor.png";
export function TopBar(){
    return(<div className="title">
    <div className="title__left">
      <p>Pokédex</p>
      <div className="caught-seen">
        <div className="caught">
          <img
            src={pokeballcolor}
            alt="pokeball"
            style={{width:"30px", marginRight:"10px"}}
          />
          <p>438</p>
        </div>
        <div className="seen">
          <img src={pokeball} alt="pokeball" style={{width:"30px", marginRight:"10px"}} />
          <p>649</p>
        </div>
      </div>
    </div>
 
  </div>)
}