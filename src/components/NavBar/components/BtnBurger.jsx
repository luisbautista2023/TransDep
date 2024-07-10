import { BsList, BsXLg } from "react-icons/bs";

const BtnBurger = (props) => {
 
  return (
    <>
    <div  onClick={props.handleClick} className={`btn-burger-open ${props.clicked ? "open" : "close" } `} >
      <BsList className="btn-burger-open" />
    </div>
    <div className={`btn-burger-close ${props.close ? "close" : ""} `} onClick={props.handleClick} >
      
      <BsXLg className="btn-burger-close" />
    </div>
    </>
  );
};

export default BtnBurger;
