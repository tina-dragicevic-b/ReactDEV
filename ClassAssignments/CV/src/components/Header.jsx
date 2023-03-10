import profilePhoto from '../assets/profile-picture.jpg'
function Header () {
    return (
      <>
        <div>
          <div className="imageBorder w-72 lg:w-80 sm:w-60">
            <img className='profilePhoto' src={profilePhoto} />
          </div>
          <p className='name text-orange-300' >Tina Dragičević</p>
          <p className='swd text-orange-100'>SOFTWARE DEVELOPER</p>
        </div>
      </>
      
    );
}
export default Header;