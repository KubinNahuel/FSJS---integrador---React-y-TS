
import CardGroup from 'react-bootstrap/CardGroup';
import { Stock } from '../data/data';
import { GenerarCard } from './card';
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
    {Stock.map((item,index) => {
                        if(item.id===numero1 || item.id===numero2 || item.id===numero3 || item.id===numero4 || item.id===numero5 ){
                        return(<GenerarCard index={index} imagen={item.imagen} marca={item.marca} descripcion={item.descripcion} item={item} price={item.price}></GenerarCard>)}})}
    </CardGroup>
  </>
  )
}

export default GroupExample;