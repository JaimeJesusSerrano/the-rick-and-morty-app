import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { Container } from '@material-ui/core'

type DataValues = {
  name: string
  similarity: number
}

export type DataComparator = {
  characterCompared: string
  data: DataValues[]
}


interface BarChartComparatorProps {
 values: DataComparator
}

const BarChartComparator = ({values}:BarChartComparatorProps): JSX.Element => {

  return (
      <Container>
      <BarChart width={600} height={300} data={values.data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip/>
        <Legend  />
        <Bar dataKey="similarity" fill="#82ca9d" name="Level Similarity"/>
      </ BarChart>
      </Container>
  )
}

export default BarChartComparator
