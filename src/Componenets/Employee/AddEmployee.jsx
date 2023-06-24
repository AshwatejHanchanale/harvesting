import React, { useState } from 'react';

const EmployeeForm = () => {
    const [name, setName] = useState('');
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [amountPaid, setAmountPaid] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can perform further operations like sending the form data to an API or updating state in the parent component.
        // For now, we'll just log the form data to the console.
        console.log({
            name,
            aadhaarNumber,
            dob,
            address,
            amountPaid,
        });

        // Reset the form fields
        setName('');
        setAadhaarNumber('');
        setDob('');
        setAddress('');
        setAmountPaid('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Employee Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="aadhaarNumber">Aadhaar Number:</label>
                <input
                    type="text"
                    id="aadhaarNumber"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="amountPaid">Amount Paid:</label>
                <input
                    type="text"
                    id="amountPaid"
                    value={amountPaid}
                    onChange={(e) => setAmountPaid(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
