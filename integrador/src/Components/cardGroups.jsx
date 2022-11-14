import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Stock } from '../data/data';
function generateRandom(min, max){
  min= Math.ceil(min)
  max= Math.floor(max)
  return Math.floor((Math.random()*(1 + max - min)+ min))
}
let numero1= generateRandom(1,30)
let numero2= generateRandom(1,30)
let numero3= generateRandom(1,30)
let numero4= generateRandom(1,30)
let numero5= generateRandom(1,30)


function GroupExample() {
  return (
  <>
     <div className='tituloP'>
      <h1>POPULARES</h1>
    </div>
    <CardGroup className='card-container'>
    {Stock.map((element,index) => {
                        if(element.id===numero1 || element.id===numero2 || element.id===numero3 || element.id===numero4 || element.id===numero5){
                        return(
                            <Card.Body key={index}>
                                <Card.Img className='imagen-card'  src={element.imagen} />
                                  <Card.Title>{element.marca}</Card.Title>
                                  <Card.Text>{element.descripcion}</Card.Text>
                                  <small className="text-muted">${element.precio}</small>
                                  <Card.Footer>
                                  <button type='button' className='comprar'>Comprar</button>
                                </Card.Footer>
                                </Card.Body>
                )}
    })}
    </CardGroup>
  </>
  )
}

export default GroupExample;