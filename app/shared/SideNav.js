export const SideNav = () => {
  return (
    <>
      <div className="row pt-2 w-25 mr-4">
        <div className="col pr-0">
          <div className="nav flex-column nav-tabs" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" data-toggle="pill" role="tab" aria-selected="true">Home</a>
            <a className="nav-link" data-toggle="pill" role="tab" aria-selected="false">Profile</a>
            <a className="nav-link" data-toggle="pill" role="tab" aria-selected="false">Messages</a>
            <a className="nav-link" data-toggle="pill" role="tab"aria-selected="false">Settings</a>
          </div>
        </div>
      </div>
    </>
  )
}