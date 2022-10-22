import "./App.css";

function App() {
  return (
    <>
      <div className="me-2 ms-2">
        <div className="row">
          <div className="col-xs-12 col-5 mt-3">
            <div className="text-center">
              <a href="/" className="link-dark text-decoration-none">
                <span className="fs-4">Text Over Image</span>
              </a>
            </div>
            <hr />

            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <label className="mb-1" style={{ marginLeft: "0.9rem" }}>
                  <strong>Search photos:</strong>
                </label>
                <div
                  className="input-group mb-3"
                  style={{ width: "90%", marginLeft: "0.9rem" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search image here ..."
                    aria-label="Search image here ..."
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" aria-current="page">
                  Select a photo
                </a>
              </li>
              <li>
                <a href="/" className="nav-link link-dark">
                  Write/Generate text with emoji
                </a>
              </li>
              <li>
                <a href="/" className="nav-link link-dark">
                  Download image
                </a>
              </li>
            </ul>
            <hr />
          </div>
          <div className="col-xs-12 col-7">
            <div className="row justify-content-center h-100">
              <div className="col d-flex justify-content-center  my-auto">
                <div
                  className="alert alert-success"
                  role="alert"
                  style={{ maxWidth: "600px" }}
                >
                  Search from the top/left panel and choose one of the 2 million
                  photos of Unsplash.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div
          className="text-center"
          style={{
            position: "fixed",
            bottom: "0.2rem",
            width: "100%",
            backgroundColor: "transparent",
          }}
        >
          <hr
            style={{
              position: "fixed",
              bottom: "1rem",
              width: "100%",
            }}
          />
          <span className="text-muted">
            Text over Image by Luis Juarros . Thanks to Unsplash and
            WikiCommons.
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
