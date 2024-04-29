import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminNavbar() {
  let navigate = useNavigate();

  return (
    <div className="flex flex-row ">
      <div className="w-1/6 bg-slate-500 min-h-[79vh] ">
        <div className="mt-3">         
          <ul className="flex flex-col" id="parent">
            <li className="my-1">
              <button
                onClick={() => {
                  navigate('/app/admin/home');
                }}
                className="text-white flex items-center py-2 px-4 hover:bg-indigo-800"
                aria-current="page"
              >
                <i className="bi bi-speedometer2"></i>
                <span className="ml-2 hidden sm:inline">DASHBOARD</span>
              </button>
            </li>
            <li className="my-1">
              <button
                onClick={() => {
                  navigate('/app/admin/add');
                }}
                className="text-white flex items-center py-2 px-4 hover:bg-indigo-800"
                aria-current="page"
              >
                <i className="bi bi-gift"></i>
                <span className="ml-2 hidden sm:inline">ADD GIFTS</span>
              </button>
            </li>
            <li className="my-1">
              <button
                onClick={() => {
                  navigate('/app/admin/payment-history');
                }}
                className="text-white flex items-center py-2 px-4 hover:bg-indigo-800"
                aria-current="page"
              >
                <i className="bi bi-currency-rupee"></i>
                <span className="ml-2 hidden sm:inline">PAYMENT HISTORY</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
