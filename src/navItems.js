import { Link } from "react-router-dom";

const pages = [
    'Home',
    { label: 'Chat now', link: 'chat-now', key: 'chat-now' },
];

const guestPages = [
    'Register',
    'Login',
];

const authPages = [
    'Profile'
];

const allPagesItems = [
    ...pages,
    ...guestPages,
    ...authPages
].map(item => {
    if (typeof item === 'object') {
        return {
            ...item,
            label: (
                <Link to={`/${item?.link ? item.link : item.label.toLowerCase()}`}>
                    {item.label}
                </Link>
            )
        }
    }

    return { label: <Link to={`/${item.toLowerCase()}`}>{item}</Link>, key: item.toLowerCase() }
})

export default allPagesItems;
