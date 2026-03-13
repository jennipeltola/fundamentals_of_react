const LoginForm = ({
    email, setEmail, password, setPassword, handleSubmit
}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                />
                <br />
                <label>Password:</label>
                <input
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm