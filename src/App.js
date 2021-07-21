import './App.css';
import Bgimage from './component/Bgimage';
import Footer from './component/Footer';
import Header from './component/Header';
import Section from './component/Section';
import data from './data/movies_vze0mn.json';

function App() {
    return (
        <div className="App">
            <Header />
            <Bgimage />
            <section className="categories">
                {data.map((elem, index) => {
                    return (
                        <Section
                            category={elem.category}
                            images={elem.images}
                            key={index}
                        />
                    );
                })}
            </section>

            <Footer href="https://github.com/mc6ril" name="Cyril Lesot" />
        </div>
    );
}

export default App;
