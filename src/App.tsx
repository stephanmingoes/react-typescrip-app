import React, { useState, useEffect } from "react";
import { Reminder } from "./interfaces/Reminder";
import "./App.css";
import ReminderList from "./components/ReminderList";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminders();
    return () => {};
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const deleteReminder = async (id: number) => {
    const newReminders: Reminder[] = reminders.filter((r) => r.id !== id);
    setReminders(newReminders);
  };

  const submitForm = (title: string) => {
    setReminders((prev) => [{ title: title, id: prev.length + 1 }, ...prev]);
  };
  return (
    <div className="App">
      <NewReminder submitForm={submitForm} />
      <ReminderList reminders={reminders} deleteReminder={deleteReminder} />
    </div>
  );
}

export default App;
