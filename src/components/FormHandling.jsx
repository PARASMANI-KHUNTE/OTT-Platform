

const FormHandling = () => {
    const handleForm = (formData) =>{
        const {Name , Email , Username , Password} = formData.get
        console.log(`Name - ${Name} Email - ${Email} Username - ${Username} Password - ${Password}`)
    }
  return (
    <div>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="border p-1" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="border p-1" />
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="border p-1" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="border p-1" />
            <button onSubmit={handleForm}>Submit</button>
        </form>

    </div>
  )
}

export default FormHandling