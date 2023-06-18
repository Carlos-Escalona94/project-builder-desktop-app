import React from 'react';

type AppProviderProps = {
    children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <React.Suspense 
            fallback={
                <div>
                    <Spinner />
                </div>
            }>

        </React.Suspense>
    );
}