import React from "react";
import { Reminder } from "../interfaces/Reminder";

interface ReminderListProps {
  reminders: Reminder[];
  deleteReminder: Function;
}

const ReminderList = ({ reminders, deleteReminder }: ReminderListProps) => {
  return (
    <ul className="list-group">
      {reminders.map((reminder) => (
        <li className="list-group-item" key={reminder.id}>
          {reminder.title}
          <button
            className="btn btn-outline-danger mx-2 "
            onClick={() => {
              deleteReminder(reminder.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
