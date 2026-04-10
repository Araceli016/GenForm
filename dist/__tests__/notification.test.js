'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const notification_service_1 = require('../services/notification.service');
describe('Notification service', () => {
  it('should send notification successfully', async () => {
    await expect(
      (0, notification_service_1.sendNotification)('abby@test.com'),
    ).resolves.toBeUndefined();
  });
  it('should throw error if email is empty', async () => {
    await expect((0, notification_service_1.sendNotification)('')).rejects.toThrow(
      'Email inválido',
    );
  });
});
