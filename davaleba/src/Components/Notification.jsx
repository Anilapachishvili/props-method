import "./notification.css"

function Lists(props)  {

  return (
    <div>
  
      <h1 className="title">{props.title}</h1>
      <img className="green" src={props.images} alt="" /> 
      <img className="check" src={props.green} alt="" /> 
      <img className="red" src={props.red} alt=""/>
       <img className="error" src={props.error} alt="" />
       <img className="yellow" src={props.yellow} alt="" />
       <img className="warning" src={props.warning} alt=""/>
       <img className="purpulle" src={props.purpulle} alt="" />
       <img className="info" src={props.inffo} alt="" />
       <p className="text">{props.text}</p>
       <p className="texxt">{props.texxt}</p>
       <p className="third">{props.third}</p>
       <p className="fourth">{props.fourth}</p>

       </div>
  )


};


export default Lists;

