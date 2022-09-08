import './register.css'

export default function Polje1 () {
    return(
        <section className='firstSection'>
            <img className='firstSectionImage' src={require('./registerAssets/StudentImage.png')} 
            alt='Cannot load resource'></img>
            <article className='firstSectionQuote'>
                “ Zahvaljujući DKU, imala sam priliku 
                da slomim nogu na fancy izletu
                i upoznam slatkog doktora. ”
            </article>
            <p className='firstSectionName'>Lejla M. učenica naše škole</p>
        </section>
    )
}