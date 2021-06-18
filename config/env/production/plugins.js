module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'scaleway',
    providerOptions: {
      accessKeyId: env('SCALEWAY_ACCESS_KEY_ID'),
      secretAccessKey: env('SCALEWAY_ACCESS_SECRET'),
      endpoint: env('SCALEWAY_ENDPOINT'),
      sslEnabled: env.bool('SCALEWAY_SSL', true),
      params: {
        Bucket: env('SCALEWAY_BUCKET')
      }
    }
  },
  // ...
});
