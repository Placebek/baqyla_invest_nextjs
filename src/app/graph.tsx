'use client'

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'

const data = [
	{ year: '2001', household: 0.164, },
	{ year: '2002', household: 0.173, },
	{ year: '2003', household: 0.184, },
	{ year: '2004', household: 0.167, },
	{ year: '2005', household: 0.177, },
	{ year: '2006', household: 0.189, },
	{ year: '2007', household: 0.18, },
	{ year: '2008', household: 0.183, },
	{ year: '2009', household: 0.188, },
	{ year: '2010', household: 0.16, },
	{ year: '2011', household: 0.176, },
	{ year: '2012', household: 0.178, },
]


const CustomTooltip = ({ active, payload, label }: any) => {
	if (active && payload && payload.length) {
		return (
			<div className='bg-black bg-opacity-80 text-white p-2 rounded-md shadow-lg fixed'>
				<p className='text-sm font-semibold'>{`Год: ${label}`}</p>
				<p className='text-orange-300'>{`Бытовая: ${payload[0].value} EUR/kWh`}</p>
			</div>
		)
	}
	return null
}

export default function EnergyChart() {
	return (
		<div className='flex flex-col items-center justify-center  bg-[#0B0B0B] text-white'>
			<h2 className='text-xl font-semibold mb-4'>Aeroflot</h2>
			<div className='w-[30vw] max-w-4xl bg-[#1a1a1a2b] p-2 rounded-lg shadow-lg'>
				<ResponsiveContainer width='100%' height={400}>
					<LineChart data={data}>
						<CartesianGrid strokeDasharray='3 3' stroke='#2D2D2D' />
						<XAxis dataKey='year' stroke='#FFFFFF' />
						<YAxis stroke='#FFFFFF' />
						<Tooltip content={<CustomTooltip />} />
						<Legend />
						<Line
							type='monotone'
							dataKey='household'
							name='Бытовая'
							stroke='#FF8C00'
							strokeWidth={3}
							dot={{ r: 4 }}
						/>
    
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
