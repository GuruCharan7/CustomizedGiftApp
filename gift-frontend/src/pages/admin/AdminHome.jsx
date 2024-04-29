import '../../assets/css/AdminHome.css'
import { useNavigate } from "react-router-dom"

const AdminHome = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-slate-300">     
      <div className="dashboard-container">

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

            <div className='col-span-1'>
              <h4 className='text-2xl pb-1 font-bold'>HELLO ADMIN !</h4>
              <p className="text-lg ">Hey Admin..! Wassup?</p>
            </div>

            <div className='col-span-3'>
              <h4 className='text-2xl pb-1 font-bold'>OVERVIEW</h4>
            </div>

            <div className='col-span-1'>
              <div className="Card bg-slate-500 max-w-xs max-h-72 cursor-pointer" onClick={()=>{navigate('/app/admin/add')}}>
                <div className="p-4 text-center">
                  <h1 className="text-white text-xl">
                    2
                  </h1>
                  <h1 className="text-white text-xl">
                    NO OF GIFTS
                  </h1>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className="Card bg-slate-500 max-w-xs max-h-72 cursor-pointer" onClick={()=>{navigate('/app/admin/orders')}}>
                <div className="p-4 text-center">
                  <h1 className="text-white text-xl">
                    2
                  </h1>
                  <h1 className="text-white text-xl">
                    NO OF ORDERS
                  </h1>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              {/* <div className="Card bg-slate-500 max-w-xs max-h-72">
                <div className="p-4 text-center">
                  <h1 className="text-white text-xl">
                    5
                  </h1>
                  <h1 className="text-white text-xl">
                    NO OF REQUESTS
                  </h1>
                </div>
              </div> */}
            </div>

          </div>

      </div>
    </div>
  )
}

export default AdminHome