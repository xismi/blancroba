import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, Instagram, MapPin, Phone, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import './styles.css'

const images = {
  hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=88',
  interior: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=85',
  fashion: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=85',
  detail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85'
}

const copy = {
  es: {
    nav: ['La tienda', 'Inspiración', 'Visítanos'], menu: 'Menú', intro: 'Moda con alma mediterránea',
    title: 'Para encontrar ese estilo que ya llevas dentro.',
    text: 'Una selección cuidada de moda femenina, accesorios y detalles con carácter para cada momento.',
    explore: 'Descubre Blanc Roba', visit: 'Cómo llegar',
    storyEyebrow: 'Blanc Roba · Alaior', storyTitle: 'Nuestra tienda',
    storyText: 'En pleno corazón de Alaior encontrarás una boutique donde la moda se vive de forma cercana. Seleccionamos prendas y accesorios para mujeres de todas las edades que buscan verse naturales, cómodas y auténticas.',
    styleEyebrow: 'Inspírate', styleTitle: 'Tu estilo, con un toque diferente',
    advisorTitle: 'Asesora de estilo', advisorText: 'Cuéntanos qué ocasión tienes y te ayudaremos a elegir la inspiración adecuada para tu visita.',
    advisorCta: 'Pide una recomendación', advisorBack: 'Volver', adviserTitle: '¿Qué buscas hoy?',
    occasions: ['Una ocasión especial', 'Ropa de día', 'Viajar y sentirte cómoda', 'Un regalo'],
    visitTitle: 'Te esperamos en Alaior', address: 'Carrer Menor, 4\n07730 Alaior, Menorca', schedule: 'Horario', call: 'Llamar', map: 'Abrir en Google Maps',
    morning: 'Lunes a viernes y sábado', morningHours: '10:00–13:30', afternoon: 'Lunes a viernes', afternoonHours: '17:30–20:00', sunday: 'Domingo cerrado',
    follow: 'Síguenos', stock: 'La disponibilidad se confirma en tienda.',
    advisorAnswers: {
      'Una ocasión especial': 'Para una ocasión especial recomendamos elegir una prenda con una silueta que te haga sentir cómoda y segura. Ven a la tienda para probar tejidos, cortes y colores según tu estilo.',
      'Ropa de día': 'Para el día a día buscamos facilidad y personalidad: piezas versátiles, colores naturales y combinaciones ligeras. Te ayudaremos a crear varios conjuntos para sacarles partido.',
      'Viajar y sentirte cómoda': 'Busca prendas naturales, ligeras y fáciles de combinar. Puedes venir a probar nuestra selección de conjuntos cómodos y preparar un fondo de armario funcional.',
      'Un regalo': 'Un accesorio, una bufanda o una pieza versátil puede ser un acierto. Si nos cuentas el estilo de la persona al llamar o visitar la tienda, podremos ayudarte mejor.'
    }
  },
  ca: {
    nav: ['La botiga', 'Inspiració', 'Ens visita'], menu: 'Menú', intro: 'Moda amb ànima mediterrània',
    title: 'Per trobar aquell estil que ja duus a dins.',
    text: 'Una selecció cuidada de moda femenina, complements i detalls amb caràcter per a cada moment.',
    explore: 'Descobreix Blanc Roba', visit: 'Com arribar',
    storyEyebrow: 'Blanc Roba · Alaior', storyTitle: 'La nostra botiga',
    storyText: 'Al cor d’Alaior trobaràs una boutique on la moda es viu de manera propera. Seleccionem peces i complements per a dones de totes les edats que busquen veure’s naturals, còmodes i autèntiques.',
    styleEyebrow: 'Inspira’t', styleTitle: 'El teu estil, amb un toc diferent',
    advisorTitle: 'Assessora d’estil', advisorText: 'Explica’ns quina ocasió tens i t’ajudarem a trobar la inspiració adequada per a la teva visita.',
    advisorCta: 'Demanar una recomanació', advisorBack: 'Tornar', adviserTitle: 'Què busques avui?',
    occasions: ['Una ocasió especial', 'Roba de dia', 'Viatjar còmodament', 'Un regal'],
    visitTitle: 'T’esperem a Alaior', address: 'Carrer Menor, 4\n07730 Alaior, Menorca', schedule: 'Horari', call: 'Trucar', map: 'Obrir a Google Maps',
    morning: 'Dilluns a divendres i dissabte', morningHours: '10:00–13:30', afternoon: 'Dilluns a divendres', afternoonHours: '17:30–20:00', sunday: 'Diumenge tancat',
    follow: 'Segueix-nos', stock: 'La disponibilitat es confirma a botiga.',
    advisorAnswers: {
      'Una ocasió especial': 'Per a una ocasió especial recomanam triar una peça amb una silueta que et faci sentir còmoda i segura. Vine a botiga per provar teixits, talles i colors segons el teu estil.',
      'Roba de dia': 'Per al dia a dia busquem facilitat i personalitat: peces versàtils, colors naturals i combinacions lleugeres. T’ajudarem a crear conjunts diferents.',
      'Viatjar còmodament': 'Busca peces naturals, lleugeres i fàcils de combinar. Vine a provar la nostra selecció de conjunts còmodes i prepara un fons d’armari funcional.',
      'Un regal': 'Un complement, una bufanda o una peça versàtil pot ser una gran idea. Si ens dius l’estil de la persona, podrem ajudar-te millor.'
    }
  },
  en: {
    nav: ['The shop', 'Inspiration', 'Visit'], menu: 'Menu', intro: 'Fashion with Mediterranean soul',
    title: 'Find the style you already carry within you.',
    text: 'A considered selection of women’s fashion, accessories and distinctive details for every moment.',
    explore: 'Discover Blanc Roba', visit: 'Directions',
    storyEyebrow: 'Blanc Roba · Alaior', storyTitle: 'Our shop',
    storyText: 'In the heart of Alaior, you will find a boutique where fashion is personal. We select clothing and accessories for women of every age who want to feel natural, comfortable and authentic.',
    styleEyebrow: 'Get inspired', styleTitle: 'Your style, with a different touch',
    advisorTitle: 'Style advisor', advisorText: 'Tell us the occasion and we will help you find the right inspiration for your visit.',
    advisorCta: 'Ask for a recommendation', advisorBack: 'Back', adviserTitle: 'What are you looking for today?',
    occasions: ['A special occasion', 'Everyday clothing', 'Comfortable travel', 'A gift'],
    visitTitle: 'We look forward to seeing you', address: 'Carrer Menor, 4\n07730 Alaior, Menorca', schedule: 'Opening hours', call: 'Call', map: 'Open in Google Maps',
    morning: 'Monday to Friday and Saturday', morningHours: '10:00–13:30', afternoon: 'Monday to Friday', afternoonHours: '17:30–20:00', sunday: 'Sunday closed',
    follow: 'Follow us', stock: 'Availability is confirmed in store.',
    advisorAnswers: {
      'A special occasion': 'For a special occasion, choose a silhouette that makes you feel comfortable and confident. Visit the shop to try fabrics, cuts and colours that suit your style.',
      'Everyday clothing': 'For everyday wear, we look for ease and personality: versatile pieces, natural colours and light combinations. We can help you create outfits that work together.',
      'Comfortable travel': 'Look for natural, lightweight pieces that are easy to combine. Visit to try comfortable outfits and build a functional capsule wardrobe.',
      'A gift': 'An accessory, scarf or versatile piece can be a beautiful choice. Tell us about the recipient’s style and we can help you decide in store.'
    }
  }
}

function App() {
  const [lang, setLang] = useState('es')
  const [menu, setMenu] = useState(false)
  const [advisor, setAdvisor] = useState(false)
  const [answer, setAnswer] = useState(null)
  const t = copy[lang]
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) }
  return <>
    <header>
      <button className="brand" onClick={() => go('inicio')} aria-label="Blanc Roba">BLANC<span>ROBA</span></button>
      <nav className="desktopNav">
        <button onClick={() => go('tienda')}>{t.nav[0]}</button><button onClick={() => go('inspiracion')}>{t.nav[1]}</button><button onClick={() => go('visitanos')}>{t.nav[2]}</button>
      </nav>
      <div className="actions">
        <div className="languages">{['es','ca','en'].map(l => <button key={l} className={lang===l?'active':''} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}</div>
        <button className="menuButton" onClick={() => setMenu(true)}>{t.menu}</button>
      </div>
    </header>

    {menu && <div className="menuPanel"><button className="close" onClick={() => setMenu(false)}><X /></button><button onClick={() => go('tienda')}>{t.nav[0]}</button><button onClick={() => go('inspiracion')}>{t.nav[1]}</button><button onClick={() => go('visitanos')}>{t.nav[2]}</button></div>}

    <main>
      <section className="hero" id="inicio">
        <img src={images.hero} alt="Interior de una boutique de moda" />
        <div className="heroShade" />
        <div className="heroContent"><p>{t.intro}</p><h1>{t.title}</h1><button className="lightButton" onClick={() => go('tienda')}>{t.explore}<ArrowRight /></button></div>
        <button className="scrollCue" onClick={() => go('tienda')}><ArrowDown /></button>
      </section>

      <section className="story" id="tienda">
        <div className="storyCopy"><p className="eyebrow">{t.storyEyebrow}</p><h2>{t.storyTitle}</h2><p>{t.storyText}</p><button className="textLink" onClick={() => go('visitanos')}>{t.visit}<ArrowRight /></button></div>
        <div className="storyImage"><img src={images.interior} alt="Selección de moda en Blanc Roba" /></div>
      </section>

      <section className="inspiration" id="inspiracion">
        <div className="sectionHeading"><p className="eyebrow">{t.styleEyebrow}</p><h2>{t.styleTitle}</h2></div>
        <div className="gallery"><img src={images.fashion} alt="Inspiración de moda femenina" /><img src={images.detail} alt="Detalle de prendas y accesorios" /></div>
      </section>

      <section className="advisorSection">
        <div><Sparkles /><p className="eyebrow">{t.advisorTitle}</p><h2>{t.advisorText}</h2></div>
        <button className="darkButton" onClick={() => setAdvisor(true)}>{t.advisorCta}<ArrowRight /></button>
      </section>

      {advisor && <div className="advisorOverlay" role="dialog" aria-modal="true">
        <div className="advisorCard"><button className="closeDark" onClick={() => {setAdvisor(false);setAnswer(null)}}><X /></button><p className="eyebrow">{t.advisorTitle}</p><h2>{answer ? t.advisorBack : t.adviserTitle}</h2>
          {!answer ? <div className="occasionGrid">{t.occasions.map(o => <button key={o} onClick={() => setAnswer(o)}>{o}<ArrowRight /></button>)}</div> : <div className="answer"><p>{t.advisorAnswers[answer]}</p><button className="darkButton" onClick={() => setAnswer(null)}>{t.advisorBack}</button></div>}
        </div>
      </div>}

      <section className="visit" id="visitanos">
        <div className="visitInfo"><p className="eyebrow">Alaior · Menorca</p><h2>{t.visitTitle}</h2><div className="contactLines"><p><MapPin />{t.address.split('\n').map((x,i)=><span key={i}>{x}</span>)}</p><p><Phone /><a href="tel:+34971379446">971 37 94 46</a></p></div>
          <div className="actionsRow"><a className="darkButton" href="tel:+34971379446">{t.call}<Phone /></a><a className="outlineButton" href="https://share.google/PHAC9IMhRMeLm4IJw" target="_blank" rel="noreferrer">{t.map}<MapPin /></a></div>
        </div>
        <div className="schedule"><p className="eyebrow">{t.schedule}</p><dl><dt>{t.morning}</dt><dd>{t.morningHours}</dd><dt>{t.afternoon}</dt><dd>{t.afternoonHours}</dd><dt>{t.sunday}</dt><dd>{lang==='ca'?'Diumenge tancat':lang==='en'?'Closed':'Cerrado'}</dd></dl><p className="stock">{t.stock}</p></div>
      </section>
    </main>

    <footer><button className="brand footerBrand" onClick={() => go('inicio')}>BLANC<span>ROBA</span></button><a href="https://www.instagram.com/blancroba" target="_blank" rel="noreferrer"><Instagram /> {t.follow}</a><p>© {new Date().getFullYear()} Blanc Roba</p></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
