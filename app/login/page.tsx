export default function Register() {
  return (
    <main>
      <div className='container'>
        <div className='register left'>
          <h2>
            <span>Login</span>.
          </h2>
        </div>
        <div className='register right'>
          <form action=''>
            <div>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' id='username' />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' />
            </div>
            <button type='submit' className='filled'>
              Login
            </button>
          </form>
          <div className='after-form'>
            Belum memiliki akun? <a href='/register'>Silakan register di sini.</a>
          </div>
        </div>
      </div>
    </main>
  );
}
