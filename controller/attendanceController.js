const connection = require('../model/databaseConnection');

const create = async (req, resp) => {
    const {attendance_id, emp_id, attendance_status} = req.body;
    try {
        const result = await connection.query(
            'INSERT INTO userAttendance (attendance_id, emp_id, attendance_status) VALUES (?, ?, ?)',
            [attendance_id, emp_id, attendance_status]
        );

        if (result) {
            return resp.status(201).json({status: true, message: 'attendance record created successfully'});
        } else {
            return resp.status(500).json({status: false, message: 'Failed to create attendance record'});
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};


const findAll = async (req, resp) => {
    try {
        const [result] = await connection.query('SELECT * FROM userAttendance');

        if (result && result.length > 0) {
            return resp.status(200).json(result);
        } else {
            return resp.status(404).json({status: false, message: 'No attendance records found'});
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};

const findByID = async (req, resp) => {
    try {
        const [record] = await connection.query('SELECT * FROM userAttendance WHERE emp_Id = ?', [req.params.id]);

        if (!record || record.length === 0) {
            return resp.status(404).json({status: false, message: 'attendance was not found!'});
        } else {
            return resp.status(200).json(record);
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};

const deleteById = async (req, resp) => {
    try {
        const [result] = await connection.query('DELETE FROM userAttendance WHERE emp_Id = ?', [req.params.id]);

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
    const {attendance_id, emp_id, attendance_status} = req.body;

    try {
        const [record] = await connection.query('SELECT * FROM userAttendance WHERE emp_Id = ?', [emp_id]);

        if (!record || record.length === 0) {
            return resp.status(404).json({ status: false, message: 'employee record not found' });
        }

        const updateResult = await connection.query(
            'UPDATE userAttendance SET attendance_status=? WHERE emp_Id=?',
            [attendance_status, emp_id, attendance_id]
        );

        if (updateResult) {
            return resp.status(200).json({ status: true, message: 'employee attendance record updated successfully' });
        } else {
            return resp.status(500).json({ status: false, message: 'Failed to update employee attendance record' });
        }
    } catch (error) {
        return resp.status(500).json({ status: false, message: 'Internal server error' });
    }
};


module.exports = {
    create,
    findAll,
    findByID,
    deleteById,
    update
}