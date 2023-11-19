export default function Register() {
  return (
    <main>
      <div className='container'>
        <div className='register left'>
          <h2>
            <span>Register</span>.
          </h2>
        </div>
        <div className='register right'>
          <form action=''>
            <div>
              <label htmlFor='firstName'>Nama depan</label>
              <input type='text' name='firstName' id='firstName' />
            </div>
            <div>
              <label htmlFor='lastName'>Nama belakang</label>
              <input type='text' name='lastName' id='lastName' />
            </div>
            <div>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' id='username' />
            </div>
            <div>
              <label htmlFor='phoneNumber'>Nomor telepon</label>
              <input type='text' name='phoneNumber' id='phoneNumber' />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' />
            </div>
            <div>
              <label htmlFor='confirmPassword'>Ulangi password</label>
              <input type='password' name='confirmPassword' id='confirmPassword' />
            </div>
            <button type='submit' className='filled'>
              Register
            </button>
          </form>
          <div className='after-form'>
            Sudah memiliki akun? <a href='/login'>Silakan login di sini.</a>
          </div>
        </div>
      </div>
    </main>
  );
}
