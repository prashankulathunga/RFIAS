const connection = require('../model/databaseConnection');

const create = async (req, resp) => {
    const {emp_Id, NIC, emp_name, gender, dob, e_mail, phone, street, city, postal_code, designation} = req.body;
    try {
        const result = await connection.query(
            'INSERT INTO employee (emp_Id, NIC, emp_name, gender, dob, e_mail, phone, street, city, postal_code, designation) VALUES (?, ?, ?, ?, ?,?, ?, ?,?,?,?)',
            [emp_Id, NIC, emp_name, gender, dob, e_mail, phone, street, city, postal_code, designation]
        );

        if (result) {
            return resp.status(201).json({status: true, message: 'employee record created successfully'});
        } else {
            return resp.status(500).json({status: false, message: 'Failed to create employee record'});
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};


const findAll = async (req, resp) => {
    try {
        const [result] = await connection.query('SELECT * FROM employee');

        if (result && result.length > 0) {
            return resp.status(200).json(result);
        } else {
            return resp.status(404).json({status: false, message: 'No employee records found'});
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};


const findByID = async (req, resp) => {
    try {
        const [record] = await connection.query('SELECT * FROM employee WHERE emp_Id = ?', [req.params.id]);

        if (!record || record.length === 0) {
            return resp.status(404).json({status: false, message: 'Employee was not found!'});
        } else {
            return resp.status(200).json(record);
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};


const deleteById = async (req, resp) => {
    try {
        const [result] = await connection.query('DELETE FROM employee WHERE emp_Id = ?', [req.params.id]);

        if (result.affectedRows > 0) {
            return resp.status(204).json({ status: true, message: 'Employee was successfully deleted!' });
        } else {
            return resp.status(404).json({ status: false, message: 'Employee was not found!' });
        }
    } catch (error) {
        return resp.status(500).json({ status: false, message: 'Internal server error' });
    }
};


const update = async (req, resp) => {
    const {emp_Id, NIC, emp_name, gender, dob, e_mail, phone, street, city, postal_code, designation} = req.body;

    try {
        const [record] = await connection.query('SELECT * FROM employee WHERE emp_Id = ?', [emp_Id]);

        if (!record || record.length === 0) {
            return resp.status(404).json({ status: false, message: 'employee record not found' });
        }

        const updateResult = await connection.query(
            'UPDATE employee SET NIC=?, emp_name=?, gender=?, dob=?, e_mail=?, phone=?, street=?, city=?, postal_code=?, designation=? WHERE emp_Id=?',
            [NIC, emp_name, gender, dob, e_mail, phone, street, city, postal_code, designation, emp_Id]
        );

        if (updateResult) {
            return resp.status(200).json({ status: true, message: 'employee record updated successfully' });
        } else {
            return resp.status(500).json({ status: false, message: 'Failed to update employee record' });
        }
    } catch (error) {
        return resp.status(500).json({ status: false, message: 'Internal server error' });
    }
};


module.exports = {
    findByID,
    create,
    findAll,
    deleteById,
    update
}





