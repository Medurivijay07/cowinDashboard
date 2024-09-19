// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div className="gender-container">
      <h1 className="age-name">Vaccination by gender</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="50%"
          data={vaccinationByGender}
          startAngle={0}
          endAngle={180}
          outerRadius="70%"
          innerRadius="40%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
