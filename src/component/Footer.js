const Footer = (props) => {
    return (
        <footer>
            <p>
                Made by <a href={props.href}>{props.name}</a> with React
            </p>
        </footer>
    );
};

export default Footer;
