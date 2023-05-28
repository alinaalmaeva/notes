import React, { useState, useEffect } from 'react';

const PasswordReminder = ({ passwordLastChanged, reminderInterval }) => {
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    const checkPasswordChange = () => {
      const currentTime = new Date().getTime();
      const timeSinceLastChange = currentTime - passwordLastChanged.getTime();
      const intervalInMilliseconds = reminderInterval * 24 * 60 * 60 * 1000;
      if (timeSinceLastChange >= intervalInMilliseconds) {
        setShowReminder(true);
      } else {
        setShowReminder(false);
      }
    };

    checkPasswordChange();
    const intervalId = setInterval(checkPasswordChange, 24 * 60 * 60 * 1000); // Проверка каждый день

    return () => {
      clearInterval(intervalId);
    };
  }, [passwordLastChanged, reminderInterval]);

  return (
    <div>
      {showReminder && (
        <div className="password-reminder">
          Пора сменить пароль! Прошло {reminderInterval} дней с последней смены.
        </div>
      )}
    </div>
  );
};
export default PasswordReminder;