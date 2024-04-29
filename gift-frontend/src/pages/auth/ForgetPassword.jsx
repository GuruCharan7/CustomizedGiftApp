import { Link } from 'react-router-dom'
import COVER_IMAGE from '../../assets/images/cover-register.jpg'
import GOOGLE from '../../assets/images/google.png'

const ForgetPassword = () => {

  return (
    <>
      <div className='w-full h-screen flex items-start'>

        <div className='w-1/2 h-full flex flex-col pt-44 justify-between items-center'>
          {/* <h1 className='text-4xl text-[#060606] font-semibold'>FERNS N PETALS</h1> */}

          <div className='w-full flex flex-col max-w-[500px]'>
            <div className='w-full flex flex-col mb-2'>
              <h3 className='text-3xl font-semibold mb-2'>FORGOT PASSWORD</h3>
              <p className='text-base mb-2'>Welcome! Please enter your details.</p>
            </div>

            <div className='w-full flex flex-col'>
              <input
                type='email'
                placeholder='Email*'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

              <input
                type='password'
                placeholder='Old Password*'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

              <input
                type='password'
                placeholder='Confirm Password*'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
            </div>

            {/* <Link className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2' to="/app/forgot-password">Forgot Password?</Link> */}

            <div className='w-full flex flex-col my-4'>
              <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                CHANGE PASSWORD
              </button>
              {/* <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer' onClick={()=>{navigate('/app/register')}}>
                REGISTER
              </button> */}
            </div>

            {/* <div className='w-full flex items-center justify-center relative py-2'>
              <div className='w-full h-[1px] bg-black'></div>
              <p className='text-lg absolute text-black bg-white'>or</p>
            </div>

            <div className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
              <img src={GOOGLE} className='h-6 mr-2' />
              Sign in with Google
            </div> */}

            <div className='w-full flex items-center justify-center'>
              <p className='text-sm font-normal text-[#060606]'>Already have an account? <Link className='font-semibold underline underline-offset cursor-pointer' to="/app/login">Login</Link></p>
            </div>
          </div>
        </div>

        <div className='relative w-1/2 h-full flex flex-col'>
          <div className='absolute top-[10%] left-[10%] flex flex-col'>
            <h1 className='text-4xl text-white font-bold my-4'>Turn Your Ideas into reality</h1>
            <p className='text-xl text-white font-normal'>Get Started for free and get exciting gifts for your loved ones.</p>
          </div>
          <img src={COVER_IMAGE} className='w-full h-full object-cover' />
        </div>
      </div>
    </>
  )
}

export default ForgetPassword