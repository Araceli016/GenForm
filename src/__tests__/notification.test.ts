import { sendNotification } from '../services/notification.service';

describe('Notification service', () => {
  it('should send notification successfully', async () => {
    await expect(sendNotification('abby@test.com')).resolves.toBeUndefined();
  });

  it('should throw error if email is empty', async () => {
    await expect(sendNotification('')).rejects.toThrow('Email inválido');
  });
});
