const Footer = () => {
    const year = new Date();
    const currentYear = year.getFullYear();
  return (
    <footer className="footer fixed-bottom mt-auto py-3 bg-light">
        <div className="container text-center">
            <span className="text-muted">&#169; {`${currentYear}`} <b>The Scenery</b>. All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer