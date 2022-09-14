const moonQuake = require('../models/moonQuake')
const getData = async (req,res)=>{
    const moonData = await moonQuake.find({}).sort({year:1})
    res.status(200).json(moonData)
}

module.exports={
    getData
}