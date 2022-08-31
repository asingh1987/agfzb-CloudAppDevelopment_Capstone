/**
 * Get all dealerships
 */

params={
    "COUCH_URL": "https://86d87c96-50df-4727-b755-a3b66f084bb4-bluemix.cloudantnosqldb.appdomain.cloud/api/dealership",
    "IAM_API_KEY": "NCBIQdAOHPDMgWha2bEZnF7dVP64i3wxnXARm0d3-Ra1",
    "COUCH_USERNAME": "86d87c96-50df-4727-b755-a3b66f084bb4-bluemix"
}



const { CloudantV1 } = require('@ibm-cloud/cloudant');
const { IamAuthenticator } = require('ibm-cloud-sdk-core');


async function main(params) {
      const authenticator = new IamAuthenticator({ apikey: params.IAM_API_KEY })
      const cloudant = CloudantV1.newInstance({
          authenticator: authenticator
      });
      cloudant.setServiceUrl(params.COUCH_URL);
      try {
        let dbList = await cloudant.getAllDbs();
        #return { "dbs": dbList.result };
		dbs=await dbList.result;
		for db in dbs {
		if db==dealerships{
			return db
		}
		
		}
		
		
      } catch (error) {
          return { error: error.description };
      }
}




/*{
/*    "dbs": [
/*        "dealerships",
/*        "reviews"
/*    ]
/*}