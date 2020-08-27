import Link from 'next/link'

export const HeaderNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link href={'/'}><a className="navbar-brand h2">Eng+</a></Link>    
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href={'/'}><a className="nav-link">Главная</a></Link>
            </li>
            <li className="nav-item">
              <Link href={'/lessons'}><a className="nav-link">Учебник</a></Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ЕГЭ
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href={'/state-exam/essays'}><a className="dropdown-item text-dark">Эссе</a></Link>
                <Link href={'/state-exam/tasks'}><a className="dropdown-item text-dark">Разбор заданий</a></Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <Link href={'/lessons'}><a className="nav-link">Учиться у нас</a></Link>
            </li>
            <li className="nav-item">
              <Link href={'/about'}><a className="nav-link">Контакты</a></Link>
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