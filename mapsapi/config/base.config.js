const PUBLIC_HOST = process.env.PUBLIC_HOST || 'localhost';
const PUBLIC_PORT = process.env.PUBLIC_PORT || '80';
const PUBLIC_URL = (
  PUBLIC_PORT == '80' || PUBLIC_PORT == '443'
  ? PUBLIC_HOST
  : `${PUBLIC_HOST}:${PUBLIC_PORT}`
);

module.exports = {
  host: '0.0.0.0',
  user_from_host: '^([^\\.]+)\\.',
  postgres: {
    host: 'cartodb-postgis',
  },
  redis: {
    host: 'cartodb-redis',
  },
  resources_url_templates: {
    http: 'http://' + PUBLIC_URL + '/user/{{=it.user}}/api/v1/map',
    https: 'https://' + PUBLIC_URL + '/user/{{=it.user}}/api/v1/map'
  },
  serverMetadata: {
    cdn_url: {
      http: PUBLIC_URL + '/user',
      https: PUBLIC_URL + '/user'
    }
  },
  analysis: {
    batch: {
      endpoint: "http://cartodb-sqlapi:8080/api/v2/sql/job",
      hostHeaderTemplate: "{{=it.username}}.localhost.lan"
    }
  }
};
