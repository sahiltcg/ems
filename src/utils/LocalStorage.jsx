const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];
  
  const employees = [
    {
      "id": 2,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Submit Project Proposal",
          "taskDescription": "Prepare and submit the project proposal to the management.",
          "taskDate": "2025-01-20",
          "taskCategory": "Management",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failed": false
        },
        {
          "taskTitle": "Update Inventory Records",
          "taskDescription": "Ensure all inventory records are up to date in the system.",
          "taskDate": "2025-01-19",
          "taskCategory": "Operations",
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failed": false
        },
        {
          "taskTitle": "Coordinate Client Meeting",
          "taskDescription": "Organize and coordinate the upcoming client meeting.",
          "taskDate": "2025-01-22",
          "taskCategory": "Client Relations",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare Budget Analysis",
          "taskDescription": "Analyze last quarter's expenses and prepare a detailed budget report.",
          "taskDate": "2025-01-18",
          "taskCategory": "Finance",
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failed": false
        },
        {
          "taskTitle": "Research Market Trends",
          "taskDescription": "Conduct research on the latest market trends and compile a report.",
          "taskDate": "2025-01-21",
          "taskCategory": "Research",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failed": false
        },
        {
          "taskTitle": "Review Supplier Contracts",
          "taskDescription": "Review and renew contracts with current suppliers.",
          "taskDate": "2025-01-19",
          "taskCategory": "Operations",
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Marketing Campaign",
          "taskDescription": "Create and design materials for the upcoming marketing campaign.",
          "taskDate": "2025-01-22",
          "taskCategory": "Marketing",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failed": false
        },
        {
          "taskTitle": "Organize Team Lunch",
          "taskDescription": "Plan and arrange a lunch for the team to celebrate recent success.",
          "taskDate": "2025-01-19",
          "taskCategory": "HR",
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failed": false
        },
        {
          "taskTitle": "Develop Training Schedule",
          "taskDescription": "Create a detailed training schedule for new hires.",
          "taskDate": "2025-01-23",
          "taskCategory": "Training",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failed": false
        },
        {
          "taskTitle": "Revise Policy Manual",
          "taskDescription": "Review and update the company policy manual.",
          "taskDate": "2025-01-18",
          "taskCategory": "Compliance",
          "active": false,
          "newTask": false,
          "completedTask": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Test Software Update",
          "taskDescription": "Test the latest update of the internal software for bugs.",
          "taskDate": "2025-01-20",
          "taskCategory": "IT",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failed": false
        },
        {
          "taskTitle": "Conduct Staff Interviews",
          "taskDescription": "Interview candidates for the open positions in the department.",
          "taskDate": "2025-01-22",
          "taskCategory": "HR",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failed": false
        },
        {
          "taskTitle": "Organize Company Event",
          "taskDescription": "Coordinate logistics for the upcoming company-wide event.",
          "taskDate": "2025-01-21",
          "taskCategory": "Events",
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failed": false
        }
      ]
    },
    {
      "id": 6,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Write Product Documentation",
          "taskDescription": "Draft detailed documentation for the new product release.",
          "taskDate": "2025-01-20",
          "taskCategory": "Product",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failed": false
        },
        {
          "taskTitle": "Update Team Dashboard",
          "taskDescription": "Ensure the team dashboard reflects the latest data.",
          "taskDate": "2025-01-18",
          "taskCategory": "IT",
          "active": false,
          "newTask": false,
          "completedTask": true,
          "failed": false
        },
        {
          "taskTitle": "Plan Budget Allocation",
          "taskDescription": "Work with the finance team to plan the quarterly budget allocation.",
          "taskDate": "2025-01-23",
          "taskCategory": "Finance",
          "active": true,
          "newTask": true,
          "completedTask": false,
          "failed": false
        }
      ]
    }
  ];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () =>{
   const employees =  JSON.parse(localStorage.getItem('employees'))
   const admin =  JSON.parse(localStorage.getItem('admin'))

   return {employees, admin}
   
}