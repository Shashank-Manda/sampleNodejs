# sampleNodejs
# How to use 
```
const JFrogArtifactory = require('./jfrog-artifactory');

const baseUrl = 'artifactory-base-url'; // Replace with your Artifactory URL
const apiKey = 'artifactory-api-key'; // Replace with your Artifactory API key
const repository = 'repo-name'; // Replace with the repository name you want to fetch artifacts from

const jfrog = new JFrogArtifactory(baseUrl, apiKey);

jfrog.listArtifacts(repository)
  .then((artifacts) => {
    console.log('Artifacts:');
    artifacts.forEach((artifact) => {
      console.log(artifact);
    });
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

```