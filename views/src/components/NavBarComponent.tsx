import { GlobalContext } from '@/context/globalStateProvider'
import debounce from 'lodash.debounce'
import { ChangeEvent, FC, Fragment, useContext, useMemo, useEffect, useState } from 'react'
import { Container, Navbar, Nav, Form } from 'react-bootstrap'
import Link from 'next/link'
import ReactIf from './ReactIfComponent'
import { useRouter } from 'next/router'

const NavBar: FC = () => {
    const [{ userState }, dispatch] = useContext(GlobalContext)
    const router = useRouter()
    const [isAuthenticated, setAuthenticated] = useState(false)

    const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch('setDatasetRequestState', { searchQuery: event.target.value, offset: 0 })
        router.push('/datasetlibrary')
    }

    const debouncedChangeHandler = useMemo(() =>
        debounce(searchChangeHandler, 1000),
        []
    )

    useEffect(() => {
        if (localStorage.hasOwnProperty('accessToken')) {
            setAuthenticated(true)
        }

        else {
            setAuthenticated(false)
        }
    }, [router.pathname])

    return (
        <Fragment>
            <ReactIf condition={isAuthenticated}>
                <Navbar className='navbar-authorized' variant='dark' expand='lg' style={{ zoom: 0.85 }}>
                    <Container>
                        <Link href='/datasetlibrary'><Navbar.Brand style={{ fontSize: '1.3rem' }}>Evolake</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls='navbarScroll' />
                        <Navbar.Collapse id='navbarScroll'>
                            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '8rem' }} navbarScroll>
                                <Link href='/mysubscriptions'><Navbar.Brand>My Subscriptions</Navbar.Brand></Link>
                                <Link href='/account' className='user-link'><Navbar.Brand>Account</Navbar.Brand></Link>
                            </Nav>
                            <Form className='d-flex'>
                                <Form.Control
                                    type='search'
                                    placeholder='Search Library'
                                    className='searchbar-navbar'
                                    maxLength={40}
                                    aria-label='Search'
                                    onChange={debouncedChangeHandler}
                                />
                            </Form>
                            <Link href='/account'><button className='user-btn'>{userState.name[0]}</button></Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </ReactIf>
            <ReactIf condition={!isAuthenticated}>
                <Navbar className='navbar-unauthorized' variant='dark' expand='lg'>
                    <Container>
                        <Link href='/'>
                            <Navbar.Brand style={{ fontSize: '1.3rem' }}>Evolake</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle></Navbar.Toggle>
                        <Navbar.Collapse>
                            <Nav className='ms-auto'>
                                <Link href='/auth'><Navbar.Brand>Get Started</Navbar.Brand></Link>
                                <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/arnhazra/'><Navbar.Brand>Creator</Navbar.Brand></a>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </ReactIf>
        </Fragment >
    )
}

export default NavBar