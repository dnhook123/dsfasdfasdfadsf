import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi"
const stackConfig = new pulumi.Config('backend-api-aws');

// Create an AWS resorm -r node_modulesurce (S3 Bucket)
// Create an AWS resource (S3 Bucket)

const pulumiProgram = async () => {
    const bucket = new aws.s3.Bucket(stackConfig.require('purposeName'));


// Export the name of the bucket
    return {
        bucketName: bucket.id;
    };
}
