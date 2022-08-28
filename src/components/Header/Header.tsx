import './Header.scss';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header'>
        <img src={require('assets/images/imedia_icon.jpg')} width={'10%'} />
        <span>Docs</span>
      </div>
      <h2 className='header-title'>Pokimon list</h2>
    </div>
  )
}