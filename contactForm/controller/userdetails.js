const user = require("../model/user");

const alldetails = async (req, res) => {

    const data = await user.find({});

    res.status(200).json({
        data
    });
};


const enquiry = async (req, res) => {
    const details = new user({
        Name: req.body.Name,
        Company: req.body.company,
        Address: req.body.address,
        Email: req.body.Email,
        Phone: req.body.Phone,
        other: req.body.other

    });


    const data = await details.save();
    res.status(200).send("Data has been saved successful !!");
    console.log(data)
};



module.exports = {
    alldetails,
    enquiry
};