module.exports = () => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            accessKeyId:'AKIA5ZOTNGW6HGIKCX5P',
            secretAccessKey:'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',
            region:'us-east-1#',
            params: {
              ACL:'public-read',
              signedUrlExpires: 15 * 60,
              Bucket:'g-winkle-ecomerce',
            },
          },
        },
      },
    },
  });