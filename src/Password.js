import React, { useState, useEffect } from 'react';
function AlarmInput({ onSetAlarm }) {
const [time, setTime] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
onSetAlarm(time);
};
return (
<form onSubmit={handleSubmit}>
<p>Установить время будильника:</p>
<input type="time" value={time} onChange={(e) => setTime(e.target.value)} /><br/>
<button type="submit">Установить</button>
<button type="submit">Очистить</button>
<p>Укажите дату последнего обновления пароля</p>
</form>
);
}

function MeditationAlarm() {
    const [alarmTime, setAlarmTime] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    useEffect(() => {
    if (alarmTime) {
    const interval = setInterval(() => {
    const currentTime = new Date();
    const [hours, minutes] = alarmTime.split(':');
    const alarm = new Date();
    alarm.setHours(hours, minutes, 0, 0);
    if (currentTime >= alarm) {
        setShowNotification(true);
        clearInterval(interval);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }
}, [alarmTime]);
return (
<div className="app-alarm">
<h2>Будильник для медитации</h2>
<AlarmInput onSetAlarm={setAlarmTime} />
{showNotification && alert("Пора медитировать!")}
</div>
);
}
export default MeditationAlarm;