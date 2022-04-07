import ipn from '../img/logo_ipn.png';
import escom from '../img/logo_escom.png';


function Header() {
  return (
    <div className="d-flex justify-content-between py-1 px-2 bg-white">
          <img src={ipn} alt="logo ipn" />
          <img src={escom} alt="logo escom" />
    </div>
  )
}

export default Header