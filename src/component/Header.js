import Link from './Link';
import Logo from './Logo';

const Header = (props) => {
    return (
        <header>
            <div className="left-header">
                <Logo />
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
