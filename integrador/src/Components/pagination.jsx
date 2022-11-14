import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample(props) {
  function cambiarTipo2(e){
    props.setCategoria2(e.target.textContent);
   }
  return (
    <Pagination className='flexB'>
      <Pagination.First />
      <Pagination.Prev />
      
      <Pagination.Item onClick={cambiarTipo2}>{1}</Pagination.Item>
      <Pagination.Item onClick={cambiarTipo2}>{2}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default AdvancedExample;