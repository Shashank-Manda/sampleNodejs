const axios = require('axios')

class JFrogArtifactory {
    constructor(baseUrl, apiKey) {
      this.baseUrl = baseUrl;
      this.apiKey = apiKey;
    }
    async listArtifacts(repository) {
        const url = `${this.baseUrl}/artifactory/api/storage/${repository}`;

        const headers = { 
            'Authorization': `Basic ${this.apiKey}`
          }
    
        try {
          const response = await axios.get(url, { headers });
          if (response.status === 200) {
            const artifacts = response.data.children.map((item) => item.uri);
            return artifacts;
          } else {
            throw new Error(`Failed to fetch artifacts: ${response.status} - ${response.statusText}`);
          }
        } catch (error) {
          throw new Error(`Error fetching artifacts: ${error.message}`);
        }
      }
  }
  module.exports = JFrogArtifactory;