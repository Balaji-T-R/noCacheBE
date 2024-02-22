const client = require('../../Database/Db');

const getOrganisationData = async (req, res) => {
  try {
    const result = await client.query(
      `SELECT * FROM org where org_id='NOO-0043'`
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const insertOrganisationData = async (req, res) => {
  const {
    org_name,
    address_line1,
    address_line2,
    city,
    state,
    country,
    pincode,
    phone,
    email,
    gst,
  } = req.query;
  try {
    const result =
      await client.query(`insert into org(org_name,address_line1,address_line2,city,state,country, pincode,phone,email,gst,created_by,last_upd_by)
    VALUES('${org_name}','${address_line1}','${address_line2}','${city}','${state}','${country}','${pincode}','${phone}','${email}','${gst}','admin','admin')`);
    // res.json(result.rows);
    if (result.rowCount) {
      res.status(200).send('Data inserted Successfully');
    } else {
      res.status(400).send('Error in inserting data');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const updateOrganisationData = async (req, res) => {
  const {
    org_name,
    address_line1,
    address_line2,
    city,
    state,
    country,
    pincode,
    phone,
    email,
    gst,
  } = req.query;
  try {
    const result =
      await client.query(`Update org SET org_name='${org_name}',address_line1 ='${address_line1}',
      address_line2='${address_line2}',city='${city}',
      state='${state}',country = '${country}',
      pincode='${pincode}',phone='${phone}',email='${email}',gst='${gst}' where org_id='NOO-0043'`);
    // res.json(result.rows);
    if (result.rowCount) {
      res.status(200).send('Data Updated Successfully');
    } else {
      res.status(400).send('Error in inserting data');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getOrganisationData,
  insertOrganisationData,
  updateOrganisationData,
};
