import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    faCircleQuestion, 
    faCoins, 
    faEarthAsia, 
    faEllipsisVertical, 
    faGear, 
    faKeyboard, 
    faSignOut, 
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images/index';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'Enghlish',
                },
                {
                    code: 'vi',
                    title: 'Tiéng Việt',
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]

function Header() {

    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '@Quyen'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        }
    ]
     
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <Link to={config.routes.home}><img src={images.logo} alt='Tiktok'/></Link>
            </div>

        <Search />
        
            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                       <Tippy content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                       </Tippy>
                       <Tippy delay={[0, 50]} content="Message" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text >Upload</Button>
                        <Button primary >Log in</Button>
                   </>
                )}

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image 
                            className={cx('user-avatar')} 
                            alt='Nguyen Van A' 
                            src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/04290b44d3546ba18a1e709ce10edab0.jpeg?lk3s=a5d48078&x-expires=1712498400&x-signature=TrEfOgQDPinfgH4QljeUXo2RCD4%3D'
                        />
                    ) : (
                        <> 
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                        </>
                    )}
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;