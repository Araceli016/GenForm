'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.registerTeacher = exports.validateTeacher = void 0;
const institution_service_1 = require('./institution.service');
const notification_service_1 = require('./notification.service');
const validateTeacher = (teacher) => {
  if (!teacher.fullName || !teacher.email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(teacher.email);
};
exports.validateTeacher = validateTeacher;
const registerTeacher = async (teacher) => {
  const isValid = (0, exports.validateTeacher)(teacher);
  if (!isValid) return false;
  (0, institution_service_1.findOrCreateInstitution)(teacher.institution);
  await (0, notification_service_1.sendNotification)(teacher.email);
  return true;
};
exports.registerTeacher = registerTeacher;
