const comments = [
  {
    id: "1",
    author: "Alice",
    date: new Date("2024-07-25T10:00:00Z"),
    text: "This is a fantastic post! I really enjoyed reading it.",
    children: [
      {
        id: "1.1",
        author: "Bob",
        date: new Date("2024-07-25T11:00:00Z"),
        text: "I agree, Alice! The insights shared are very valuable.",
        children: [
          {
            id: "1.1.1",
            author: "Charlie",
            date: new Date("2024-07-25T12:00:00Z"),
            text: "I think Bob makes a great point. The analysis was thorough.",
            children: [],
          },
          {
            id: "1.1.2",
            author: "Daisy",
            date: new Date("2024-07-25T13:00:00Z"),
            text: "Yes, and the examples provided were spot on.",
            children: [
              {
                id: "1.1.2.1",
                author: "Alice",
                date: new Date("2024-07-25T14:00:00Z"),
                text: "Thanks, Daisy! I tried to cover a broad range of examples.",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "1.2",
        author: "Eva",
        date: new Date("2024-07-25T15:00:00Z"),
        text: "I found some of the points to be a bit unclear. Could you elaborate?",
        children: [
          {
            id: "1.2.1",
            author: "Alice",
            date: new Date("2024-07-25T16:00:00Z"),
            text: "Certainly, Eva. Which points would you like me to clarify?",
            children: [
              {
                id: "1.2.1.1",
                author: "Eva",
                date: new Date("2024-07-25T17:00:00Z"),
                text: "The section about market trends was a bit confusing.",
                children: [
                  {
                    id: "1.2.1.1.1",
                    author: "Alice",
                    date: new Date("2024-07-25T18:00:00Z"),
                    text: "Got it, I'll provide a more detailed explanation on market trends.",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    author: "David",
    date: new Date("2024-07-25T19:00:00Z"),
    text: "I have some feedback on the post. I think adding more data would be helpful.",
    children: [
      {
        id: "2.1",
        author: "Fiona",
        date: new Date("2024-07-25T20:00:00Z"),
        text: "That’s a good point, David. Data can definitely strengthen the argument.",
        children: [
          {
            id: "2.1.1",
            author: "David",
            date: new Date("2024-07-25T21:00:00Z"),
            text: "Exactly. Perhaps including some case studies or statistical data would be useful.",
            children: [],
          },
        ],
      },
      {
        id: "2.2",
        author: "George",
        date: new Date("2024-07-25T22:00:00Z"),
        text: "I think the qualitative aspects are already well covered, though.",
        children: [
          {
            id: "2.2.1",
            author: "David",
            date: new Date("2024-07-25T23:00:00Z"),
            text: "That’s true. Balancing both qualitative and quantitative data might be the key.",
            children: [],
          },
        ],
      },
    ],
  },
];

export default comments;
