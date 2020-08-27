import { HeaderNav } from "../shared/HeaderNav";
import { SideNav } from "../shared/SideNav";

export function MainLayout({ children }) {
  return (
    <>
      <main>
        <div className="container bg-light w-75 pl-0 pr-0">
          <HeaderNav />
          <div className="d-flex" style={{height: '85vh'}}>
            <SideNav />
            <div className="w-100 overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}