import UsersTable from "@/pages/Users/components/UsersTable/UsersTable.tsx";

const Users = () => {
    return (
        <div className="w-full h-full bg-slate-100 p-8">
            <h1 className="text-center text-xl mb-10">Users</h1>
            <UsersTable />
        </div>
    );
};

export default Users;
