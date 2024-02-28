import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";
import { FC } from "react";

const TransactionsDropdown: FC = () => {
    // TODO: mutate here @TeHox

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="flat" color="primary" className="border-0">
                    Check
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                    key="new"
                    color="success"
                    className="text-success border-0"
                >
                    Accept
                </DropdownItem>
                <DropdownItem key="copy" className="text-danger" color="danger">
                    Decline
                </DropdownItem>
                <DropdownItem key="copy" color="default">
                    Reset
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default TransactionsDropdown;
