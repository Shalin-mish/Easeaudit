const API = "http://localhost:5000/api";

export const getDashboardStats = async () => {
  const [audits, clients] = await Promise.all([
    fetch(`${API}/audits`).then(r => r.json()),
    fetch(`${API}/clients`).then(r => r.json())
  ]);

  return {
    totalTasks: audits.length,
    tasksAllotted: audits.length,
    tasksCompleted: audits.filter(a => a.status === "completed").length,
    tasksPending: audits.filter(a => a.status === "pending").length,

    weeklyActivity: [80, 45, 65, 30, 75, 55],

    expenses: {
      office: 35,
      personal: 30,
      software: 20,
      others: 15
    },

    dueFees: clients.map(c => ({
      client: c.name,
      company: c.company,
      amount: c.dueAmount || 0
    })),

    events: [
      "Internal Training – Aug 24, 2025",
      "Client Meeting – Sep 2, 2025",
      "Audit Review – Sep 10, 2025"
    ]
  };
};
