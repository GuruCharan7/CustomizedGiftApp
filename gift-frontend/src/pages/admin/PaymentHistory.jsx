import React from 'react'

const PaymentHistory = () => {
    return (
        <>
            <div className='dashboard-container'>
                <h2 className="text-center text-2xl font-bold pr-24">PAYMENT HISTORY</h2>
                <br />

                <div className='table-container'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Payment ID</th>
                                <th> User ID</th>
                                <th> Status</th>
                                <th> Total Amount</th>
                                <th> Payment date</th>
                                <th> Payment mode</th>
                                {/* <th> Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                            details.map((current) => {
                                return (
                                    )
                                })
                            } */}
                            <tr>
                                <td> 789 </td>
                                <td> 101 </td>
                                <td> Success</td>
                                <td> ₹599/-</td>
                                <td> 15/02/2024</td>
                                <td> UPI</td>
                            </tr>
                            <tr>
                                <td> 700 </td>
                                <td> 102 </td>
                                <td> Success</td>
                                <td> ₹799/-</td>
                                <td> 01/03/2024</td>
                                <td> COD</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}

export default PaymentHistory