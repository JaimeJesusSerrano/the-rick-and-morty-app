import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from 'recharts'
import { Container } from '@material-ui/core'
import theme from '~Theme'

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

const BarChartComparator = ({
  values,
}: BarChartComparatorProps): JSX.Element => {
  return (
    <Container>
      <BarChart
        data={values.data}
        height={300}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        width={600}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 4]}>
          <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
            Maximum Similarity(4)
          </Label>
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar
          dataKey="similarity"
          fill={theme.palette.primary.main}
          name="Similarity Level"
        />
      </BarChart>
    </Container>
  )
}

export default BarChartComparator
