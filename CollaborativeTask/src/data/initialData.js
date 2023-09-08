export const initialUsers = [
    {
      id: 1,
      username: 'user1',
      email: 'user1@example.com',
      password: 'password1',
      bio: 'User 1 bio.',
      profilePicture: 'user1.jpg',
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@example.com',
      password: 'password2',
      bio: 'User 2 bio.',
      profilePicture: 'user2.jpg',
    },
    
  ];
  
  
  export const initialTasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1.',
      dueDate: '2023-09-15',
      priority: 'high',
      assigneeId: 1, // Assigned to user with ID 1
      status: 'in progress',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2.',
      dueDate: '2023-09-20',
      priority: 'medium',
      assigneeId: 2, // Assigned to user with ID 2
      status: 'pending',
    },
    
  ];
  
  
  export const initialTeams = [
    {
      id: 1,
      name: 'Team A',
      description: 'Description for Team A.',
      members: [1, 2], // Team members' user IDs
      tasks: [1, 2], // Task IDs assigned to this team
    },
    {
      id: 2,
      name: 'Team B',
      description: 'Description for Team B.',
      members: [2],
      tasks: [],
    },
   
  ];
  