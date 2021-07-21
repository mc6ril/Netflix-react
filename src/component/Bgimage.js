import bgimage from '../img/storm.jpeg';
import Title from './Title';

const Bgimage = (props) => {
    return (
        <div className="background-image">
            <img src={`${bgimage}`} alt="background-img" />
            <div className="info">
                <Title title="Star Wars" />
                <span>Le réveil de la force</span>
                <div className="button">
                    <button>Play</button>
                    <button>More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Bgimage;
