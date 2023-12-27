import './Administrador.css';

const Administrador = () => {
  
  return (
    <main className="administrador">
      <div className="administrador-productos">
        <h2>Introduce un producto</h2>
        <form id='administrador' >
          <label htmlFor='name'>
            Name:
            <input id='name' type="text" autoComplete="name"/>
          </label>
          <label htmlFor='category'>
            Category:
            <select id='category' autoComplete="category"> 
              <option value='hogar'>Hogar</option>
              <option value='movilidad'>Movilidad</option>
              <option value='electronica'>Electronica</option>
              <option value='ortopedia'>Ortopedia</option>
            </select>
          </label>
          <label htmlFor='description'>
            Description:
            <input id='description' type="text" autoComplete="description"/>
          </label>
          <label htmlFor='picture'>
            Picture:
            <input id='picture' type="file" autoComplete="picture"/>
          </label>
          <label htmlFor='quality'>
            Quality:
            <select id='quality' autoComplete="quality">
              <option value='una'>⭐</option>
              <option value='dos'>⭐⭐</option>
              <option value='tres'>⭐⭐⭐</option>
              <option value='cuatro'>⭐⭐⭐⭐</option>
              <option value='cinco'>⭐⭐⭐⭐⭐</option>
            </select>
          </label>
          <label htmlFor='price'>
            Price:
            <input id='price' type="text" autoComplete="price"/>
          </label>
          <button className='subir'>Subir Producto</button>
        </form>
      </div>
    </main>
  );
};

export default Administrador;
