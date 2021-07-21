//import Categories from './Categories';

// const Section = (props) => {
//     return <Categories />;
// };

const Section = ({ category, images }) => {
    // const { category, images } = props;
    return (
        <div className="category">
            <h1>{category}</h1>
            <div className="movie">
                {images.map((url, i) => {
                    return <img alt={`images ${i}`} src={url} />;
                })}
            </div>
        </div>
    );
};

export default Section;
