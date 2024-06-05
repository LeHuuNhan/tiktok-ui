import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Button( { 
    className,
    to, 
    href, 
    onClick, 
    children, 
    lefIcon,
    rightIcon,
    primary = false, 
    outline = false, 
    small = false, 
    large= false,
    text = false, 
    disabled = false,
    rounded = false,
    ...passProps 
} ) {

    let Comp = 'button';
    const props ={
        onClick,
        ...passProps,
    };

    //remove evant listener when btn is disabled
    if(disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
    }

    if(to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className] : className,
        primary, 
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        lefIcon,
        to, 
    });
    return ( 
        <Comp className={classes} {...props}>
            {lefIcon && <span className={cx('icon')}>{lefIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    lefIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
}

export default Button;