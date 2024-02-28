import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import { tableRows } from "@/pages/Dashboard/constans/tableRows.ts";

const DashboardTable = () => {
    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
                {tableRows.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell>{item.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DashboardTable;
