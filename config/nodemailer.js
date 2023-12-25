const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'mailwalker.noreply@gmail.com',
        clientId: '472245683355-34u3sjqutb46mv5mujsqmk3piskh6d4k.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//04CRh3bqOtMBUCgYIARAAGAQSNwF-L9Irf9Sn0Atqg9IazkX-uSj0-ZyhjVAJV3zzI3rW2PybI0hkbJ_s5j8sSE3heYMd0DKfszM',
        accessToken: 'ya29.a0AfB_byCswwueNVtjAFv7Xv88mEyuokLZ40wllbohfjy7FAG3PYGjPEM6Y3oNPNQNXFrHHcpeCc3wWsOUhl-3NMiZn3U7TjKfCoyGPTMF4Uohx1cxJ0qO1iz1XQpL2rABEDnorecmff3osMy9nRWaYDb3H-Y_k1uS7eVYaCgYKAVwSARMSFQHGX2Mit6Zj9lJ1ui5uUCLRUPddKw0171',
    },
});

module.exports = transporter;
