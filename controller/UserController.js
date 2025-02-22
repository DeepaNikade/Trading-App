import executeQuery from "../database/executeQuery.js";

export async function getUserCompanyDataById(req, res){
    const {userId} = req.params;
    try {
        const GET_USER = `
            SELECT userId, company_name, gst, address, state, district
            from onlineUserDetails
            WHERE userId = '${userId}'
        `;
        const userData = await(await executeQuery(GET_USER))[0];

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
}

export async function getAllCompanyName(req, res){
    try {
       const GET_COMPANY_QUERY = `
        SELECT Ac_Name_E, accoid from nt_1_accountmaster 
        WHERE company_code = 1 AND userId is null
        ORDER BY Ac_Name_E
       ` 

       const companies = await executeQuery(GET_COMPANY_QUERY);
       res.status(200).json(companies);
    } catch (err) {
        res.status(500).json(err)
    }
}

export async function getUserDataFromNt1AccountMaster(req, res){
    const {accoid} = req.params;
    try {
        const GET_DATA_QUERY = `
            SELECT accoid, Ac_Code, Ac_Name_E, Address_E, Gst_No
            from nt_1_accountmaster
            WHERE accoid = '${accoid}'
        `

        const userData = await(await executeQuery(GET_DATA_QUERY))[0];
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err)
    }
}