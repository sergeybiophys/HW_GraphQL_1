import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { join } from 'path';
// import * as hbs from 'hbs';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000).then(()=>{
  //   console.log(`Server ready at port: 3000`);
  // });
//----------------------------------------------------
const app = await NestFactory.create<NestExpressApplication>(AppModule);
//app.use(cookieParser());
// app.setGlobalPrefix('api/');
app.enableCors();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  next();
});
await app.listen(3000).then(()=>{
    console.log(`Server ready at port: 3000`);
  });

}
bootstrap();
