import './NotFound.css';

const NotFound = () => {
  return (
    <main translate="no">
      <section className="not-found">
        <div className="circles">
          <p>404</p>
          <p>
            <small>Page not found</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </main>
  );
};

export default NotFound
