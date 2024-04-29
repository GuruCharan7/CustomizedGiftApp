import React from 'react'

const OrdersList = () => {
    return (
        <>
            <div className='dashboard-container'>
                <h2 className="text-center text-2xl font-bold pr-24">ORDERS LIST</h2>
                <br />

                <div className='table-container'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>User ID</th>
                                <th> Gift Name</th>
                                <th> Theme Name</th>
                                <th> Price</th>
                                <th> Quantity</th>
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
                                <td> 1 </td>
                                <td> 1 </td>
                                <td> Anniversary Gift</td>
                                <td> Customized photo frame</td>
                                <td> ₹399/-</td>
                                <td> 1</td>                                
                            </tr>
                            <tr>
                                <td> 2 </td>
                                <td> 1 </td>
                                <td> Birthday Gift</td>
                                <td> Cake</td>
                                <td> ₹799/-</td>
                                <td> 1</td>                               
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}

export default OrdersList