import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import { Container } from './styles'

export function MainNavigation() {
    const token = useRouteLoaderData('root');


    return (
        <Container>
            <nav>
                <ul>
                   <li>
                    <NavLink
                        to="/"
                        end >
                            Home
                    </NavLink>
                    </li>
                    {
                        !token && (
                            <li>
                                <NavLink
                                    to = "/auth?mode=login">
                                        Authentication
                                </NavLink>
                            </li>
                        )
                    }
                    {
                        token && (
                            <li>
                                <Form action="/logout" method="post">
                                    <button>Logout</button>
                                </Form>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </Container>
    )
} 