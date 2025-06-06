import { AppController } from './app.controller';

// src/app.controller.test.ts

describe('AppController', () => {
    let appController: AppController;

    beforeEach(() => {
        appController = new AppController();
    });

    it('should return { status: "ok" } from healthCheck', () => {
        expect(appController.healthCheck()).toEqual({ status: 'ok' });
    });

    it('useless test that always passes', () => {
        expect(true).toBe(true);
    });
});