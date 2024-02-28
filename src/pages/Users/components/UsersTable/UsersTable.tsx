import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
} from "@nextui-org/react";
import { tableRows } from "@/pages/Users/constants/tableRows.ts";
import { Link, useSearchParams } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";

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
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn>LINK</TableColumn>
            </TableHeader>
            <TableBody>
                {tableRows.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell>{item.status}</TableCell>
                        <TableCell>
                            <Link to={item.link}>
                                <FaRegEye fill="#0070f0" />
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DashboardTable;
