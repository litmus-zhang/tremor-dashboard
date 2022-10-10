import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

export default ()=>(
    <Card maxWidth="max-w-sm">
        <Text>Sales</Text>
        <Metric> $ 71,564</Metric>
        <Flex marginTop="mt-4">
            <Text> 32% of annual target</Text>
            <Text> $ 225,000</Text>
        </Flex>
        <ProgressBar percentageValue={90} marginTop="mt-2" />
    </Card>
);