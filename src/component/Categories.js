import data from '../data/movies_vze0mn.json';
const Categories = (props) => {
    return (
        <section className="categories">
            {data.map((elem, index) => {
                return (
                    <div className="category">
                        <h1>{elem.category}</h1>

                        <div className="movie">
                            {elem.images.map((element, i) => {
                                return <img alt={`images ${i}`} src={`${element}`} />;
                            })}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
export default Categories;
