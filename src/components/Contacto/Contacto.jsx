import "./Contacto.css";
const Contacto = () => {
    return(
        <section className="contacto-container">
        <div className="contacto">
        <form action="#" target="" method="get" name="formDatosPersonales">

        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre"/>

        <label htmlFor="apellidos">Apellidos</label>
        <input type="text" name="apellidos" id="apellidos" placeholder="1r Apellido"/>

       <label htmlFor="email" >Email</label>
       <input type="email" name="email" id="email" placeholder="email" required />

       <label htmlFor="asunto">Asunto</label>
       <input type ="text" name="asunto" id="asunto" placeholder="titular de la consulta"/>

       <label htmlFor="mensaje">Mensaje</label>
       <textarea name="mensaje" htmlFor="mensaje" placeholder="describe brevemente en menos de 300 carácteres" maxLength="300"></textarea>

       <input type="submit" name="Enviar" value="enviar datos"/>
       </form>
     </div>
     </section>
    )

    
}
export default Contacto;
