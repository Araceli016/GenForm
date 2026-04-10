export const sendNotification = async (email: string): Promise<void> => {
  if (!email) {
    throw new Error('Email inválido');
  }

  // simulación de envío
  await Promise.resolve();
};
