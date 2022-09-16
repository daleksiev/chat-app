const Home = () => <h1>Home</h1>
const ChatNow = () => <h1>ChatNow</h1>
const Login = () => <h1>Login</h1>
const Register = () => <h1>Register</h1>
const Profile = () => <h1>Profile</h1>

const routes = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/chat-now',
        element: <ChatNow />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/profile',
        element: <Profile />
    },
]

export default routes;
