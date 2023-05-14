import "./notification.css"

function Lists(props)  {

  return (
    <div>
      <div className="flex">
          <div className={`graybox ${props.class}`}>
                <div className="icon">
                       <img src={props.image} alt="icon" />
                </div>
                <div className="notification-text">
                  <h1 className="main">{props.text}</h1>
                  <h2 className="Error">{props.Error}</h2>
                  <p>Order Placed Successfully. You  can check order</p>
                  <p className="line">delivery status.</p>
                </div>
          </div>
          </div>
       </div>
  )


};


export default Lists;

