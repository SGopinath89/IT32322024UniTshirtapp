import { useEffect } from 'react';

export default function Login({ setShowNav }) {
    useEffect(() => {
        setShowNav(false); // Hide the navigation bar when the Login component mounts
    }, [setShowNav]);

    return (
        <>
            <div className='card'></div>
            <h1>Login</h1>
        </>
    );
}
