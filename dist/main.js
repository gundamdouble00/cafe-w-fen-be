"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
if (!globalThis.crypto) {
    globalThis.crypto = crypto_1.webcrypto;
}
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOptions = {
        origin: [
            'http://localhost:3000',
            'http://localhost:3001',
            'http://localhost:3002',
            'https://cafe-k5p5.onrender.com',
            'https://doan2cafe.onrender.com',
            'https://testapi-roan.vercel.app',
            'https://doan2cafe-production.up.railway.app',
            'https://se-347-coffee-chain-system.vercel.app/',
            'http://103.209.34.233'
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Access-Control-Allow-Methods',
            'ngrok-skip-browser-warning',
            'access-control-allow-origin',
        ],
        credentials: true,
    };
    app.enableCors(corsOptions);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Coffee Management API')
        .setDescription('API documentation for the Coffee Shop Management System')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map