import Link from './Link';
import Title from './Title';

const Header = (props) => {
    return (
        <header>
            <div className="left-header">
                <Title title="Netflix" />
                <Link href="#" name="Home" />
                <Link href="#" name="TV Shows" />
                <Link href="#" name="Movies" />
                <Link href="#" name="New & Popular" />
                <Link href="#" name="My List" />
            </div>
        </header>
    );
};

export default Header;
