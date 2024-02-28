import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import { useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams();

    return (
        <div className="w-full h-lvh bg-slate-100 p-8">
            <h1 className="text-center text-xl mb-10">User</h1>
            <form className="max-w-screen-md w-full flex flex-col gap-4 mb-10">
                <input
                    placeholder="email"
                    type="email"
                    className="py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />
                <input
                    placeholder="email"
                    type="email"
                    className="py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />
                <input
                    placeholder="email"
                    type="email"
                    className="py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />
                <input
                    placeholder="email"
                    type="email"
                    className="py-3 px-4 border border-blue-500 rounded outline-0 focus:border-blue-700 focus:border-2"
                />
                <Button color="primary">Button</Button>
            </form>
            <Table
                className="max-w-screen-md w-full"
                aria-label="Example static collection table"
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>BUDGET</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>{id}</TableCell>
                        <TableCell>Oleg</TableCell>
                        <TableCell>1200</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default User;
