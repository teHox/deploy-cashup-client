import DashboardTable from "@/pages/Dashboard/components/DashboardTable/DashboardTable.tsx";

const Dashboard = () => {
    return (
        <div className="w-full h-full bg-slate-100 p-8">
            <h1 className="text-center text-xl mb-10">Dashboard</h1>
            <DashboardTable />
        </div>
    );
};

export default Dashboard;
