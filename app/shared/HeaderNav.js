import Link from 'next/link'

export const HeaderNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href={'/'}><a className="navbar-brand" href="#">Eng+</a></Link>      
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href={'/'}><a className="nav-link">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link href={'/lessons'}><a className="nav-link">Lessons</a></Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <Link href={'/about'}><a className="nav-link">About</a></Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )

}