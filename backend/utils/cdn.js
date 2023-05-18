

import { getSignedUrl } from "@aws-sdk/cloudfront-signer"; 
import { getObjectSignedUrl as getObjectSignedUrlS3 } from "./s3.js";
import dotenv from "dotenv";

dotenv.config();


const keyPairId = process.env.CDN_KEY_PAIR_ID;
const privateKey = process.env.CDN_PRIVATE_KEY
const cdnDist = "https://d1x3w7yck407nj.cloudfront.net"





// d1x3w7yck407nj.cloudfront.net

export async function getObjectSignedUrl(key) {


   const urlS3 = await getObjectSignedUrlS3(key)
   const signedURIS3Key = urlS3.split(process.env.AWS_BUCKET_URI)[1]

  
  const params = {
    url: `${cdnDist}${signedURIS3Key}`,
    keyPairId,
    privateKey,
    dateLessThan: new Date(Date.now() + 1000 *60 * 60 *24),
   

  };

  // https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/
  
  //console.log(command)
  
  const url = getSignedUrl(params);
  


  return url;
}
