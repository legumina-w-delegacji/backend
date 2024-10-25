import { HttpStatus, Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { NestConfig, NestConfigToken } from '@app/config/nest.config';
import helmet from 'helmet';

const logger = new Logger('Bootstrap');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const nestConfig = configService.getOrThrow<NestConfig>(NestConfigToken);

    app.getHttpAdapter().getInstance().disable('x-powered-by');

    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });

    app.use(helmet({ contentSecurityPolicy: nestConfig.nodeEnv === 'production' }));

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
            transformOptions: { enableImplicitConversion: true },
            forbidNonWhitelisted: true,
            forbidUnknownValues: false,
            validateCustomDecorators: true,
        }),
    );

    app.enableShutdownHooks();

    await app.listen(nestConfig.port, nestConfig.host);
}

bootstrap().catch((error) => {
    logger.error(error);
    process.exit(1);
});
