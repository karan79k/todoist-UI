import Image from "next/image"

export function TemplatesSection() {
  const categories = ["Work", "Personal", "Education", "Management", "Marketing & Sales", "Customer Support"]

  const templates = [
    {
      title: "Accounting Tasks",
      description: "Create a system to keeps your books, receipts, and invoices organized.",
      icon: "https://images.unsplash.com/photo-1483247416020-58799b6de4c1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "List",
    },
    {
      title: "Business Travel Packing",
      description: "Never forget your laptop charger, lucky shoes, or passport again.",
      icon: "https://plus.unsplash.com/premium_photo-1680384692743-d636e33e060c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "List",
    },
    {
      title: "Client Management",
      description: "Organize your work with clients from the smallest to largest details.",
      icon: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "List",
    },
    {
      title: "Deep Work",
      description: "Practice prioritizing focus and eliminating distraction with this template.",
      icon: "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "List",
    },
    {
      title: "Meeting Agenda",
      description: "Waste less time in meetings, ensuring they're efficient and action-oriented.",
      icon: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "List",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Kickstart your next project with Todoist Templates
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          No need to create projects or setups from scratch when we have 50+ templates made for you.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-gray-700 ${index === 0 ? "bg-green-100" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {templates.map((template, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 flex justify-center">
                <Image
                  src={template.icon || "/placeholder.svg"}
                  alt={template.title}
                  width={100}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{template.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  {template.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

