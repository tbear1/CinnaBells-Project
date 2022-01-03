const Form = () =>{
    return(
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" required />

        <label for="password">Password:</label>
        <input type="password" id="password" required />
        
        <label for="email">Email:</label>
        <input type="email" id="email" required />

        <label for="number">Phone Number:</label>
        <input type="tel" id="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />

        <label for="birthday">Date of Birth:</label>
        <input type="date" id="birthday" required />

        <label for="tos">I agree to the TOS</label>
        <input type="checkbox" id="tos" required />

        <button>Sign Up</button>
    </form>
    )
    export default Form;
}