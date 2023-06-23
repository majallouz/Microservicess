const axios = require("axios")
const defaultData = require("../defaultdata")
const cv = require("../models/cv")
const { uniqueNamesGenerator, Config, starWars } = require ('unique-names-generator');

class condidateController {

    async uploadAndResolveCV(req,res) {
        console.log(req.file.filename)
        let api_result = null
        let candidate_data;
 
        if (api_result)
            candidate_data = api_result.data
        else{
            candidate_data = defaultData
            candidate_data.name = uniqueNamesGenerator({
                dictionaries: [starWars]
              })
        }

        const created_data = await cv.create({raw_data:candidate_data,path:req.file.path,fileName:req.file.filename})
        
        try{
        await axios.post("http://192.168.1.9:8083/candidates/",candidate_data)
        }catch(err){
            console.log(err)
        }
        candidate_data._id = created_data._id       
        return res.json({status:"done",candidate_data})
    }

    async downloadFile(req,res){
        const file = `./uploads/${req.params.name}`;
        return res.download(file);
    }


}

module.exports = condidateController