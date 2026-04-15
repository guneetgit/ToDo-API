const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const KEYCLOAK_URL = process.env.KEYCLOAK_URL || 'http://localhost:8080';
const REALM = 'ToDo-app';

const requireAuth = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/certs`
  }),
  audience: 'account',
  issuer: `${KEYCLOAK_URL}/realms/${REALM}`,
  algorithms: ['RS256'],
  requestProperty: 'auth'
});

const protect = [
  requireAuth,
  (req, res, next) => {
    if (req.auth) {
      req.user = {
        id: req.auth.sub,
        email: req.auth.email,
        name: req.auth.name
      };
    }
    next();
  }
];

module.exports = protect;