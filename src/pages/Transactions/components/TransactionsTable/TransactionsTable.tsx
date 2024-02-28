import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    Pagination,
    TableCell,
    Button,
    TableRow,
    Chip,
} from "@nextui-org/react";
import { transactionsData } from "@/pages/Transactions/constans/transactionsData.ts";
import { useState } from "react";
import TransactionsDropdown from "@/pages/Transactions/components/TransactionsDropdown/TransactionsDropdown.tsx";
import { useSearchParams } from "react-router-dom";

export type statusColorProps = {
    value: string;
    color: string;
};

const statusStyles = {
    approve: "success",
    pending: "warning",
    decline: "danger",
};

const DashboardTable = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);

    const pages = 10;

    const handlePagination = (page: number) => {
        setPage(page);
        setSearchParams(`page=${page}`);
    };

    return (
        <Table
            aria-label="Example static collection table"
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => handlePagination(page)}
                    />
                </div>
            }
        >
            <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>COUNT</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn>ACTION</TableColumn>
                <TableColumn>APPROVE</TableColumn>
            </TableHeader>
            <TableBody>
                {transactionsData.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.count}</TableCell>
                        <TableCell>
                            <Chip
                                // @ts-ignore
                                color={statusStyles[item.status]}
                                className="text-white"
                            >
                                {item.status}
                            </Chip>
                        </TableCell>
                        <TableCell>
                            <TransactionsDropdown />
                        </TableCell>
                        <TableCell>
                            <Button color="primary"> Approve </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DashboardTable;
