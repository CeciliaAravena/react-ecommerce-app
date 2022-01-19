import Container from 'react-bootstrap/Container';

 import './Navbar.css';


 function SlideBar(props) {
     return (
         <>
             <section className="slide__bar--container">
                 <Container>
                     <h1 style={{fontSize: 50}}>{props.titulo}</h1>
                     <p style={{fontSize: 25}}>{props.subtitulo}</p>
                 </Container>
             </section>
         </>
     )
 }

 export default SlideBar