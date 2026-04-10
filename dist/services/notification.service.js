'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.sendNotification = void 0;
const sendNotification = async (email) => {
  if (!email) {
    throw new Error('Email inválido');
  }
  // simulación de envío
  return Promise.resolve();
};
exports.sendNotification = sendNotification;
