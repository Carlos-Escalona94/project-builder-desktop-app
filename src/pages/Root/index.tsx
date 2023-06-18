import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import { MainNavigation } from '../../components';
import { getTokenDuration } from '../../utils/auth';


export function RootLayout() {
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if(!token){
            return;
        }

        if(token === 'EXPIRED'){
            submit(null, {action: '/logout', method: 'post'})
            return;
        }

        const tokenDuration = getTokenDuration();
        console.log(tokenDuration);

        // setTimeout(() => {
        //     submit(null, { action: '/logout', method: 'post' })
        // }, tokenDuration)
    }, [token, submit]);

    return (
        <>
            <MainNavigation/>
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet></Outlet>
            </main>
        </>
    )
}