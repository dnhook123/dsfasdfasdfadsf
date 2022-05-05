import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi"
const stackConfig = new pulumi.Config('backend-api-aws');

// Create an AWS resorm -r node_modulesurce (S3 Bucket)
export function davidwengpang() {
    const bucket = new aws.s3.Bucket(stackConfig.require('purposeName'),);
}

