const getBackendUrl = (): Promise<string> => {
  const apiToUse = localStorage.getItem('apiUrl');
  return new Promise((resolve) => {
    resolve(apiToUse === 'api-platform' ? process.env.VUE_APP_API1_URL : process.env.VUE_APP_API2_URL);
  });
};

export default getBackendUrl;
