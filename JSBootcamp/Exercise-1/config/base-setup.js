const config = {
  port: 3030,
  "db-link": "mongodb://localhost/booking",
  "salt-rounds": 2,
  secret: "borko",
  "cookie-name": "user-info",
};

module.exports = config;
