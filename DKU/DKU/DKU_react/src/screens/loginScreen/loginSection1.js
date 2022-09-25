import './login.css'

export default function Section1 () {
    return(
        <section className='firstSectionL'>
            <img className='firstSectionImageL' src={require('./loginAssets/StudentImage.png')} 
            alt='Cannot load resource'></img>
            <article className='firstSectionQuoteL'>
            “ Zahvaljujući DKU, imala sam priliku 
            da slomim nogu na fancy izletu
            i upoznam slatkog doktora. ”
            </article>
            <p className='firstSectionNameL'>Lejla M. učenica naše škole</p>
        </section>
    )
}