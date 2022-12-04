import Container from 'react-bootstrap/Container';
import "./Introduction.css"

function Introduction(){
    return(
        <>
        <div className='containerIntro p-6'> 
        <Container className='containerBox'>
        <h1>What is AlliCODER?</h1>
        
        Autocomplete CSS properties smarter. SCA collects local CSS properties usage statistic to provide smart sorted hints. In case of not enough individual static it uses global usage statistic to suggest you best options.
        </Container> 
        </div>
     
        </>
    )
}

export default Introduction;