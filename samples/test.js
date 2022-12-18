const {CatalogServiceClient} = require('@google-cloud/retail');
require("dotenv").config();

// Create a client
const client = new CatalogServiceClient();

// TODO(developer): uncomment these variables with your information
const projectId = 'ritmo-371006'
const location = 'global'

async function listCatalogs() {
  const catalogs = await client.listCatalogs({
    parent: `projects/${projectId}/locations/${location}`,
  });
  console.info(catalogs);
}
listCatalogs();

