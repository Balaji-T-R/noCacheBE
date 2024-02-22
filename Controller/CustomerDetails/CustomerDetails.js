const client = require('../../Database/Db');

const getCustomerDetailsData = async (req, res) => {
  try {
    const result = await client.query(`SELECT * FROM customer`);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const insertCustomerDetailsData = async (req, res) => {
  const {
    customer_name,
    address_line1,
    address_line2,
    city,
    state,
    country,
    pincode,
    phone,
    email,
  } = req.query;
  try {
    const result =
      await client.query(`insert into customer(customer_name,address_line1,address_line2,city,state,country, pincode,phone,email,created_by,last_upd_by)
    VALUES('${customer_name}','${address_line1}','${address_line2}','${city}','${state}','${country}','${pincode}','${phone}','${email}','admin','admin') RETURNING *`);
    // res.json(result.rows);
    if (result.rowCount) {
      res.status(200).json({ rowId: result.rows[0].customer_id, status: 200 });
    } else {
      res.status(400).send('Error in inserting data');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getCustomerDetailsData, insertCustomerDetailsData };
