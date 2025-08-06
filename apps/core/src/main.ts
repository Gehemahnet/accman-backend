import { NestFactory } from "@nestjs/core";
import { AppModule } from "@modules/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as process from "node:process";
import combinePlugins from "@/plugins";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Median")
    .setDescription("The api description")
    .setTitle(process.env.npm_package_version)
    .addBearerAuth()
    .build();

  combinePlugins(app);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
