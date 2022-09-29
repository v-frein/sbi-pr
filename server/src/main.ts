import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = 3030;
  const app = await NestFactory.create(AppModule);

  app.listen(PORT, () => console.log('Server has been started'));
}

start();
