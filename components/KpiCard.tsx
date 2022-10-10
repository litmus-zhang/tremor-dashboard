import {
    BadgeDelta,
    Block,
    Card,
    Flex,
    DeltaType,
    Metric,
    ProgressBar,
    Text
} from "@tremor/react";
import { type } from "os";

export type Kpi = {
    title: string;
    metric: string;
    progress: number;
    delta: string;
    target: string;
    deltaType: DeltaType,
}

export const kpiData: Kpi[] = [
    {
        title: 'Sales',
        metric: '$ 12,699',
        progress: 15.9,
        target: '$ 80,000',
        delta: '13.2%',
        deltaType: 'moderateIncrease',
    },
    {
        title: 'Profit',
        metric: '$ 45,564',
        progress: 36.5,
        target: '$ 125,000',
        delta: '23.9%',
        deltaType: 'increase',
    },
    {
        title: 'Customers',
        metric: '1,072',
        progress: 53.6,
        target: '2,000',
        delta: '10.1%',
        deltaType: 'moderateDecrease',
    },
]

export default function KpiCard(props: Kpi) {
    return(
        <Card maxWidth="max-w-lg" >
            <Flex alignItems="items-start">
            <Block truncate={true}>
                <Text> {props.title} </Text>
                <Metric truncate={true}> {props.metric} </Metric>
            </Block>
            <BadgeDelta deltaType={props.deltaType} text={props.delta}/>
            </Flex>
           <Flex marginTop="mt-4" spaceX="space-x-2">
             <Text truncate={true}>{`${props.progress}% (${props.metric})`}</Text>
             <Text>{props.target}</Text>
           </Flex>
              <ProgressBar percentageValue={props.progress} marginTop="mt-2"/>
        </Card>

    )
}