import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <header className="hero is-large is-info">
      <div className="hero-body">
        <p className="title">
          今日のねこ!
        </p>
        <p className="subtitle">
          今日のねこをみよう!
        </p>
      </div>
    </header>
  );
}

function Image(props){

  return (
        <figure>
          
          <img src={props.src} alt="cat img"  width={300} height={400}/>
        </figure>
  );
}
function Loading() {
  return <p>Loading...</p>;
}
function Gallery(props) {
  const {url}=props;
  if (url == null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcentered is-multiline">
         <Image src={url}/>
    </div>
  );
}
function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onFormSubmit();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         
            <button type="submit" className="button is-dark">
              Another One
            </button>
          
      </form>
    </div>
  );
}

function Main() {
  const [url, setUrls] = useState(null);
  useEffect(() => {
    fetchImages().then((url) => {
      setUrls(url);
    });
  }, []);
  function reloadImages() {
    fetchImages().then((url) => {
      setUrls(url);
    });
  }
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery url={url}/>
        </div>
      </section>
      <section className="section">
        <div className="container">
        <Form onFormSubmit={reloadImages} />
        </div>
      </section>
    </main>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Cat images are retrieved from random cat API</p>
        <p>
          <a href="https://aws.random.cat/meow">random cat</a>
        </p>
        
      </div>
      <p>日本大学文理学部情報科学科 Webプログラミングの演習課題 5420037 井上大輝</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;