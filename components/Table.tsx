import { useState } from 'react';
import {
    BadgeDelta,
    Card,
    DeltaType,
    Dropdown,
    DropdownItem,
    Flex,
    MultiSelectBox,
    MultiSelectBoxItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

export type SalesPerson = {
    name: string,
    leads: number,
    sales: string,
    quota: string,
    variance: string,
    region: string,
    status: string,
    deltaType: DeltaType,
}

export const salesPeople: SalesPerson[] = [
    {
        name: 'Peter Doe',
        leads: 45,
        sales: '1,000,000',
        quota: '1,200,000',
        variance: 'low',
        region: 'Region A',
        status: 'overperforming',
        deltaType: 'moderateIncrease',
    },
    // ...
    {
        name: 'Joe Sachs',
        leads: 49,
        sales: '1,230,000',
        quota: '1,800,000',
        variance: 'medium',
        region: 'Region B',
        status: 'underperforming',
        deltaType: 'moderateDecrease',
    },
];

export default function TableView() {
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    const isSalesPersonSelected = (salesPerson: SalesPerson) => (
        (salesPerson.status === selectedStatus || selectedStatus === 'all')
            && (selectedNames.includes(salesPerson.name) || selectedNames.length === 0)
    );

    return (
        <Card>
            <Flex justifyContent="justify-start" spaceX="space-x-2">
                <MultiSelectBox
                    handleSelect={ (value) => setSelectedNames(value) }
                    placeholder="Select Salespeople"
                    maxWidth="max-w-xs"
                >
                    { salesPeople.map((item) => (
                        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />
                    )) }
                </MultiSelectBox>
                <Dropdown
                    maxWidth="max-w-xs"
                    defaultValue="all"
                    handleSelect={ (value) => setSelectedStatus(value) }
                >
                    <DropdownItem value="all" text="All Performances" />
                    <DropdownItem value="overperforming" text="Overperforming" />
                    <DropdownItem value="average" text="Average" />
                    <DropdownItem value="underperforming" text="Underperforming" />
                </Dropdown>
            </Flex>
            <Table marginTop="mt-6">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Leads</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Sales ($)</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Quota ($)</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Variance</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Region</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Status</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    { salesPeople.filter((item) => isSalesPersonSelected(item)).map((item) => (
                        <TableRow key={ item.name }>
                            <TableCell>{ item.name }</TableCell>
                            <TableCell textAlignment="text-right">{ item.leads }</TableCell>
                            <TableCell textAlignment="text-right">{ item.sales }</TableCell>
                            <TableCell textAlignment="text-right">{ item.quota }</TableCell>
                            <TableCell textAlignment="text-right">{ item.variance }</TableCell>
                            <TableCell textAlignment="text-right">{ item.region }</TableCell>
                            <TableCell textAlignment="text-right">
                                <BadgeDelta deltaType={ item.deltaType } text={ item.status } size="xs" />
                            </TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </Card>
    );
}