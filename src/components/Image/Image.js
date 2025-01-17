import PropTypes from 'prop-types';
import classNames from 'classnames';
import {forwardRef, useState} from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {

    const [fallback, setFallback] = useState('');

    const handleFallback = () => {
        setFallback(images.noImage)
    }
    return ( 
        <img
            className={classNames(styles.wrapper, className)} 
            ref={ref} 
            src={fallback || src} 
            alt={alt} {...props} 
            onError={handleFallback}
        />
     );
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;