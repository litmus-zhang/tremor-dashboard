import { 
    Block,
    Card, 
    Text, 
    ColGrid,
    Tab,
    TabList,
    Title
} from "@tremor/react";
import { useState } from "react";
import ChartView from "../components/ChartView";
import KpiCard, { Kpi, kpiData } from "../components/KpiCard";
import TableView from "../components/Table";


export default function KpiCardGrid (){
    const [ selectedView, setSelectedView ] = useState(1);

    return (
        <main>
            <Title> Dashboard </Title>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <TabList defaultValue={1} handleSelect={value => setSelectedView(value)} marginTop="mt-6">
                <Tab value={1} text="Overview"/>
                <Tab value={2} text="Details"/>
            </TabList>
            {
                selectedView === 1 ? (
                    <>
                     <ColGrid numColsMd={ 2 } numColsLg={ 3 } marginTop="mt-6" gapX="gap-x-6" gapY="gap-y-6">
                   {
                          kpiData.map((kpi : Kpi, index: number) => (
                            <KpiCard key={kpi.title} {...kpi}/>
                          ))
                   }
                    </ColGrid>
                    <Block marginTop="mt-6">
                       <ChartView/>
                    </Block>
                    </>
                   
                ):(
                    <Block marginTop="mt-6">
                    <TableView/>
                    </Block>
                )
            }
        </main>
    )
}