module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ad85eee78b13b9fcde40cfe324efd6e9'),
  },
});
