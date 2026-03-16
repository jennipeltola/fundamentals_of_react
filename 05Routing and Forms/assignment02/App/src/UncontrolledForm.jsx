const UncontrolledForm = ({ handleSubmit, inputRef, message }) => {
 return (
    <div>
        <input ref={inputRef}
            type='text'
            placeholder='Type here...'
        />
        <button onClick={handleSubmit}>Show Value</button>
        <p>{message}</p>
    </div>
 )
}

export default UncontrolledForm