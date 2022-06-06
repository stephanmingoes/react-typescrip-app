import React, { useState } from "react";

interface AddReminder {
  submitForm: (state: string) => void;
}
function NewReminder({ submitForm }: AddReminder): JSX.Element {
  const [state, setstate] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!state) return;
        submitForm(state);
        setstate("");
      }}
    >
      <label htmlFor="title">Reminder</label>
      <input
        value={state}
        onChange={(e) => setstate(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary rounded pill my-3">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
