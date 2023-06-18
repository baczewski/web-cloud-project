import nodemailer from 'nodemailer';
import { NoteEntity } from '../entity/NoteEntity';
import todoService from './todoService';

const transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'susnotesweb@yahoo.com', 
    pass: 'ekip7web',
  },
});

const sendReminderEmail = async (todoTitle: string, email: string) => {
  try {
    await transporter.sendMail({
      from: 'your-email-address',
      to: email,
      subject: 'Reminder that a note is due',
      text: `Reminder: ${todoTitle}`,
    });

    console.log(`Reminder email sent for note: ${todoTitle}`);
  } catch (error) {
    console.error('Error sending reminder email:', error);
  }
};

export const fetchAndCheckTodos = async () => {
  try {
    const todos = await todoService.findAll();

    for (const todo of todos) {
      if (todo.dueDate >= new Date(new Date().getTime() - 60 * 60 * 1000)) {
        sendReminderEmail(todo.title, todo.user.email);
      }
    }
  } catch (error) {
    console.error('Error fetching todo:', error);
  }
};
