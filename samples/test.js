const request = require('request');
require("dotenv").config();

// アクセストークン取得 : gcloud auth application-default print-access-token

try {
  request.post(
    {
      url: 'https://retail.googleapis.com/v2/projects/ritmo-371006/locations/global/catalogs/default_catalog/servingConfigs/recently_viewed_default:predict',
  headers: {
    'Authorization': `Bearer ${process.env.TOKEN}`,
    'Content-Type': 'application/json; charset=utf-8',
  },
  json: {
    // filter: 'FILTER_STRING',
    validateOnly: true,
    userEvent: {
      eventType: 'detail-page-view',
      visitorId: 'bjbs_group1_visitor1',
      // userInfo: {
      //   userId: 'USER_ID',
      //   ipAddress: 'IP_ADDRESS',
      //   userAgent: 'USER_AGENT',
      // },
      // experimentIds: 'EXPERIMENT_GROUP',
      productDetails: [
        {
          product: {
            id: 'GGCOGAEC100616',
          },
        },
      ],
    },
  },
    },
    (err, res, data) => {
      console.log(data);
    }
  );
} catch (error) {
  console.log(error);
}




