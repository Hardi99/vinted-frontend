import '../App.css'
import imgbanner from '../assets/img-banner.jpg'

function Main() {

    const bannerStryle = {
        backgroundImage: {imgbanner},
        height: '453px',
        backgroundSize: 'cover'
    }

  return (
    <main>
        <div className='banner' style={bannerStryle}>
            <img src={imgbanner} alt="" />
            <div className='side-text'>
                <p>Prêts à faire du tri dans vos placards ?</p>
            </div>
        </div>
    </main>
  )
}

export default Main