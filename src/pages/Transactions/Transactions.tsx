import TransactionsTable from "@/pages/Transactions/components/TransactionsTable/TransactionsTable.tsx";

const Transactions = () => {
    return (
        <div className="w-full h-full bg-slate-100 p-8">
            <h1 className="text-center text-xl mb-10">Transactions</h1>
            <TransactionsTable />
        </div>
    );
};

export default Transactions;
