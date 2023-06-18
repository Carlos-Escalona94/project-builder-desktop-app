import { Container } from './styles'

// type ComponentWithChildProps = React.PropsWithChildren<{example?: string}>;

export function PageContent({title, children}: {title: string, children: any}) {
    return (
        <Container>
            <h1>{title}</h1>
            {children}
        </Container>
    )
} 