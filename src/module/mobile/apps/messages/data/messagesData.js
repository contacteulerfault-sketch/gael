import { GITHUB_PROFILE } from "@constants";

export const INITIAL_CONVERSATIONS = [
  {
    id: "gael",
    name: "Gael (Developer)",
    avatarColor: "bg-gradient-to-tr from-blue-500 to-indigo-500",
    initials: "GA",
    avatar: "/images/owner-avatar.webp",
    unread: true,
    email: "gaelalves.business@gmail.com",
    github: GITHUB_PROFILE,
    messages: [
      {
        id: 1,
        text: "Hey there! Welcome to my macOS portfolio.",
        sender: "them",
        time: "10:00 AM",
      },
      {
        id: 2,
        text: "Feel free to ask me anything here. I have automated some quick replies!",
        sender: "them",
        time: "10:01 AM",
      },
      {
        id: 3,
        text: "Try asking about: 'projects', 'skills', or 'contact'.",
        sender: "them",
        time: "10:01 AM",
      },
    ],
  },
  {
    id: "james",
    name: "James Walker",
    avatarColor: "bg-gradient-to-tr from-indigo-500 to-purple-600",
    initials: "JW",
    avatar: "/images/contacts/Bhavesh.webp",
    unread: false,
    email: "james.walker@example.com",
    github: "https://github.com",
    messages: [
      {
        id: 1,
        text: "Hey Gael, did you check the new desktop mockup?",
        sender: "them",
        time: "Yesterday",
      },
      {
        id: 2,
        text: "Yeah, it looks super clean! The glassmorphism fits perfectly.",
        sender: "me",
        time: "Yesterday",
      },
      { id: 3, text: "Awesome! Let's get it deployed soon.", sender: "them", time: "Yesterday" },
    ],
  },
  {
    id: "thomas",
    name: "Thomas Reed",
    avatarColor: "bg-gradient-to-tr from-purple-500 to-pink-600",
    initials: "TR",
    avatar: "/images/contacts/mahabub.webp",
    unread: false,
    email: "thomas.reed@example.com",
    github: "https://github.com",
    messages: [
      {
        id: 1,
        text: "Hey Gael! I'm online now. Let me know if you need help with coding.",
        sender: "them",
        time: "Yesterday",
      },
    ],
  },
];
