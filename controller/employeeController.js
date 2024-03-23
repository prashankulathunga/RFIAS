const connection = require('../model/databaseConnection');

const create = async (req, resp) => {
    const {attendance_id, attendance_status, attendance_date, attendance_time, id_number} = req.body;
    try {
        const result = await connection.query(
            'INSERT INTO attendance (attendance_id, attendance_status, attendance_date, attendance_time, id_number) VALUES (?, ?, ?, ?, ?)',
            [attendance_id, attendance_status, attendance_date, attendance_time, id_number]
        );

        if (result) {
            return resp.status(201).json({status: true, message: 'Attendance record created successfully'});
        } else {
            return resp.status(500).json({status: false, message: 'Failed to create attendance record'});
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};


const findAll = async (req, resp) => {
    try {
        const [result] = await connection.query('SELECT * FROM attendance');

        if (result && result.length > 0) {
            return resp.status(200).json(result);
        } else {
            return resp.status(404).json({status: false, message: 'No attendance records found'});
        }
    } catch (error) {
        console.error('Error fetching attendance records:', error);
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};


const findByID = async (req, resp) => {
    try {
        const [record] = await connection.query('SELECT * FROM attendance WHERE attendance_id = ?', [req.params.id]);

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
        const [result] = await connection.query('DELETE FROM attendance WHERE attendance_id = ?', [req.params.id]);

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
    const { attendance_id, attendance_status, attendance_date, attendance_time, id_number } = req.body;

    try {
        const [record] = await connection.query('SELECT * FROM attendance WHERE attendance_id = ?', [attendance_id]);

        if (!record || record.length === 0) {
            return resp.status(404).json({ status: false, message: 'Attendance record not found' });
        }

        const updateResult = await connection.query(
            'UPDATE attendance SET attendance_status=?, attendance_date=?, attendance_time=?, id_number=? WHERE attendance_id=?',
            [attendance_status, attendance_date, attendance_time, id_number, attendance_id]
        );

        if (updateResult) {
            return resp.status(200).json({ status: true, message: 'Attendance record updated successfully' });
        } else {
            return resp.status(500).json({ status: false, message: 'Failed to update attendance record' });
        }
    } catch (error) {
        console.error('Error updating attendance record:', error);
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





