import axios from "axios";
import { Reminder } from "../interfaces/Reminder";

class RemindService {
  request = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    const response = await this.request.get<Reminder[]>("/todos");

    return response.data;
  }

  async addReminder(title: string) {
    const response = await this.request.post<Reminder>("/todos", {
      title: title,
    });

    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.request.delete("/todos/" + id);

    return response.data;
  }
}

export default new RemindService();
