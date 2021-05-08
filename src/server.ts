import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import './utils/module-alias';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';
// import { Logger } from "@overnightjs/logger";
// import { UserController } from "./UserController";
// import { SignupController } from "./SignupController";

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super(process.env.NODE_ENV === 'development'); // setting showLogs to true
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();

    this.addControllers([forecastController]);
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  public getApp(): Application {
    return this.app;
  }
}
