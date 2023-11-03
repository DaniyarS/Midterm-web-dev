export const users = [
    {
        id: 1,
        username: 'john_doe',
        fullName: 'John Doe',
        bio: 'I love coding and technology!',
        avatar: 'https://example.com/avatar1.jpg',
    },
    {
        id: 2,
        username: 'jane_smith',
        fullName: 'Jane Smith',
        bio: 'Travel enthusiast and food lover.',
        avatar: 'https://example.com/avatar2.jpg',
    },
    // ...more user data
];

export const posts = [
    {
        id: 1,
        userId: 1,
        text: 'Just finished a great coding project! #programming #coding',
        likes: 20,
        comments: [
            { id: 1, userId: 2, text: 'Awesome work!' },
            { id: 2, userId: 3, text: 'I love coding too!' },
        ],
        timestamp: '2023-10-28T09:00:00Z',
    },
    {
        id: 2,
        userId: 2,
        text: 'Exploring new places is always an adventure. #travel',
        likes: 15,
        comments: [
            { id: 3, userId: 1, text: 'Where are you traveling?' },
        ],
        timestamp: '2023-10-27T15:30:00Z',
    },
    // ...more post data
];
