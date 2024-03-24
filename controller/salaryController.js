const connection = require('../model/databaseConnection');

const create = async (req, resp) => {
    const {salary_id, emp_id, salary_amount, salary_month} = req.body;
    try {
        const result = await connection.query(
            'INSERT INTO salary (salary_id, emp_id, salary_amount, salary_month) VALUES (?, ?, ?, ?)',
            [salary_id, emp_id, salary_amount, salary_month]
        );

        if (result) {
            return resp.status(201).json({status: true, message: 'salary record created successfully'});
        } else {
            return resp.status(500).json({status: false, message: 'salary to create report record'});
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};

const findAll = async (req, resp) => {
    try {
        const [result] = await connection.query('SELECT * FROM salary');

        if (result && result.length > 0) {
            return resp.status(200).json(result);
        } else {
            return resp.status(404).json({status: false, message: 'No salary records found'});
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};


const findByID = async (req, resp) => {
    try {
        const [record] = await connection.query('SELECT * FROM salary WHERE salary_id = ?', [req.params.id]);

        if (!record || record.length === 0) {
            return resp.status(404).json({status: false, message: 'salary was not found!'});
        } else {
            return resp.status(200).json(record);
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};


const deleteById = async (req, resp) => {
    try {
        const [result] = await connection.query('DELETE FROM salary WHERE salary_id = ?', [req.params.id]);

        if (result.affectedRows > 0) {
            return resp.status(204).json({ status: true, message: 'salary was successfully deleted!' });
        } else {
            return resp.status(404).json({ status: false, message: 'salary was not found!' });
        }
    } catch (error) {
        return resp.status(500).json({ status: false, message: 'Internal server error' });
    }
};


const update = async (req, resp) => {
    const {salary_id, emp_id, salary_amount, salary_month} = req.body;

    try {
        const [record] = await connection.query('SELECT * FROM salary WHERE salary_id = ?', [salary_id]);

        if (!record || record.length === 0) {
            return resp.status(404).json({ status: false, message: 'salary record not found' });
        }

        const updateResult = await connection.query(
            'UPDATE salary SET salary_amount=?, salary_month=? WHERE salary_id=?',
            [salary_amount, salary_month, salary_id, emp_id]
        );

        if (updateResult) {
            return resp.status(200).json({ status: true, message: 'salary record updated successfully' });
        } else {
            return resp.status(500).json({ status: false, message: 'Failed to update salary record' });
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



