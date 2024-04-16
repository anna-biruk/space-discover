import PropTypes from 'prop-types';
const Button = ({ children, type = 'primary', ...props }) => {

    return (
        <button className={`button button_${type}`} {...props}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary'])
}
export default Button