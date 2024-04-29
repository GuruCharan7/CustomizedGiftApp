import React from 'react'

const AddGifts = () => {
    return (
        <div className='dashboard-container'>
            <h2 className="text-center text-2xl font-bold pr-24">GIFTS LIST</h2>
            <div className='flex'>
                <button id='adderButton' className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">ADD GIFTS</button>
            </div>
            <br />
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">ADD GIFT</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter Gift name" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Theme" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputRole1" placeholder="Enter Price" />
                                </div>

                                <div className="modal-footer">
                                    <button className="btn btn-primary">SAVE GIFT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='table-container'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Gift ID</th>
                            <th> Gift Name</th>
                            <th> Theme</th>
                            <th> Price</th>
                            <th> Actions</th>
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
                            <td> Cake</td>
                            <td> Birthday Gift </td>
                            <td> ₹499/-</td>
                            <td>
                                <button id='updateButton' data-bs-toggle="modal" data-bs-target="#exampleUpdateCenter" className="btn" style={{ backgroundColor: '#005A9C', color: 'white' }}>Update</button>
                                <button data-bs-toggle="modal" data-bs-target="#exampleDeleteCenter" className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td> Customized Photo frame</td>
                            <td> Anniversary Gift </td>
                            <td> ₹799/-</td>
                            <td>
                                <button id='updateButton' data-bs-toggle="modal" data-bs-target="#exampleUpdateCenter" className="btn" style={{ backgroundColor: '#005A9C', color: 'white' }}>Update</button>
                                <button data-bs-toggle="modal" data-bs-target="#exampleDeleteCenter" className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="modal fade" id="exampleUpdateCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleUpdateCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleUpdateCenterTitle">UPDATE COURSE</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group"> 
                                        <input type="text" name='courseName' defaultValue='jsefgwrbg' className="form-control" id="exampleInputName1" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input type="text" name='duration' defaultValue='ekfuhwri' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input type="text" name='instructorName' defaultValue='kgusri' className="form-control" id="exampleInputRole1" />
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-primary">Update Course</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleDeleteCenter" tabIndex="-1" aria-labelledby="exampleDeleteCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">CONFIRM DELETE</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are You Sure? Want To Delete
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddGifts