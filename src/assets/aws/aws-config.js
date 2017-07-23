    AWS.config.region = "us-east-1";
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: "us-east-1:7e5cdcca-b27d-48ab-857e-f6e64d4656b0"
        });
    AWS.config.update({customUserAgent: 'MobileHub v0.1'});