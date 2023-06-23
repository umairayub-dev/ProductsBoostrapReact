import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // do action
    }
    return (
        <Card className='text-start m-5'>
            <Form onSubmit={handleSubmit} className='m-5'>
                <h2>CREATE AN ACCOUNT</h2>
                <Form.Group controlId="name">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>

                <Form.Group controlId="repeatPassword">
                    <Form.Label>Repeat your password</Form.Label>
                    <Form.Control
                        type="password"
                    />
                </Form.Group>

                <Form.Group controlId="termsAgreed">
                    <Form.Check
                        type="checkbox"
                        label="I agree to all statements in Terms of service"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>

                <p>
                    Have already an account? <Link to="/login">Login here</Link>
                </p>
            </Form>
        </Card>
    )
}

export default Signup