const connection = require('../model/databaseConnection');

const create = async (req, resp) => {
    const {report_id, title, report_description, report_file, emp_id} = req.body;
    try {
        const result = await connection.query(
            'INSERT INTO report (report_id, title, report_description, report_file, emp_id) VALUES (?, ?, ?, ?, ?)',
            [report_id, title, report_description, report_file, emp_id]
        );

        if (result) {
            return resp.status(201).json({status: true, message: 'report record created successfully'});
        } else {
            return resp.status(500).json({status: false, message: 'Failed to create report record'});
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};

const findAll = async (req, resp) => {
    try {
        const [result] = await connection.query('SELECT * FROM report');

        if (result && result.length > 0) {
            return resp.status(200).json(result);
        } else {
            return resp.status(404).json({status: false, message: 'No reports records found'});
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};


const findByID = async (req, resp) => {
    try {
        const [record] = await connection.query('SELECT * FROM report WHERE report_id = ?', [req.params.id]);

        if (!record || record.length === 0) {
            return resp.status(404).json({status: false, message: 'report was not found!'});
        } else {
            return resp.status(200).json(record);
        }
    } catch (error) {
        return resp.status(500).json({status: false, message: 'Internal server error'});
    }
};

const deleteById = async (req, resp) => {
    try {
        const [result] = await connection.query('DELETE FROM report WHERE report_id = ?', [req.params.id]);

        if (result.affectedRows > 0) {
            return resp.status(204).json({ status: true, message: 'Report was successfully deleted!' });
        } else {
            return resp.status(404).json({ status: false, message: 'Report was not found!' });
        }
    } catch (error) {
        return resp.status(500).json({ status: false, message: 'Internal server error' });
    }
};


const update = async (req, resp) => {
    const {report_id, title, report_description, report_file, emp_id} = req.body;

    try {
        const [record] = await connection.query('SELECT * FROM report WHERE report_id = ?', [report_id]);

        if (!record || record.length === 0) {
            return resp.status(404).json({ status: false, message: 'report record not found' });
        }

        const updateResult = await connection.query(
            'UPDATE report SET title=?, report_description=?, report_file=? WHERE report_id=?',
            [title, report_description, report_file, report_id, emp_id]
        );

        if (updateResult) {
            return resp.status(200).json({ status: true, message: 'report record updated successfully' });
        } else {
            return resp.status(500).json({ status: false, message: 'Failed to update report record' });
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
