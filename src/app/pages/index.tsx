'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import EnergyChart from '../graph'
import StockCards from '../UI/StockCards'
import { getAllStocks } from '../services/stocks'
import StockCardsProps from '../interfaces/StockCardsProps'

interface HomeProps {
	stocks: StockCardsProps[]
}

export default function Home({ stocks }: HomeProps) {
	const [activeItem, setActiveItem] = useState('Россия')

	const handleItemClick = (item: string) => {
		setActiveItem(item)
	}

	const menuItems = ['Россия', 'Все миры', 'США']

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='absolute w-[1200px] h-[600px] rounded z-10'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='900px'
					height='600px'
					viewBox='0 0 1437 1023'
					fill='none'
				>
					<path
						d='M-3.62396e-05 952C-3.62396e-05 991.765 32.2461 1024.13 71.9854 1022.72C236.495 1016.86 398.558 990.974 551.064 946.053C725.773 894.592 884.517 819.165 1018.23 724.077C1151.95 628.99 1258.02 516.105 1330.39 391.868C1389.83 289.82 1425.57 181.754 1436.45 71.8835C1440.36 32.3123 1407.76 5.96688e-05 1368 5.79834e-05L72 3.05176e-06C32.2355 1.36632e-06 -3.62396e-05 32.2355 -3.62396e-05 72V952Z'
						fill='url(#paint0_linear_2_6)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_2_6'
							x1='0'
							y1='0'
							x2='900'
							y2='600'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#212121' />
							<stop offset='1' stopColor='#161616' stopOpacity='0' />
						</linearGradient>
					</defs>
				</svg>
			</div>

			<div className='bg-[#0B0B0B] bg-opacity-95 w-[1140px] h-[600px] rounded-[50px] border-[1px] border-[#4B4C4E] border-opacity-25 p-8'>
				<div className='relative flex flex-row z-10 gap-10 justify-start border-b-[1px] pb-4 border-[#FFFFFF] border-opacity-[12%]'>
					<div>
						Baqyla<span className='text-orange-300 font-semibold'>Invest</span>
					</div>

					<div className='relative flex gap-10 ml-[5vw]'>
						{menuItems.map(item => (
							<div
								key={item}
								className={`relative text-[#B1AFAF] cursor-pointer px-4 pb-2 transition ${
									activeItem === item ? 'text-white' : 'hover:text-[#D3D3D3]'
								}`}
								onClick={() => handleItemClick(item)}
							>
								{item}
								{activeItem === item && (
									<motion.div
										layoutId='underline'
										className='absolute bottom-[-2px] left-0 w-full h-[3px] bg-orange-300 rounded-full'
										transition={{ type: 'spring', stiffness: 300, damping: 20 }}
									/>
								)}
							</div>
						))}
					</div>
				</div>

				<div className='grid grid-flow-col w-full'>
					<div>
						{stocks.map(stock => (
							<StockCards
								key={stock.name}
								name={stock.name}
								lastDeal={stock.lastDeal}
								change={stock.change}
								volume={stock.volume}
								updateTime={stock.updateTime}
							/>
						))}
					</div>
					<div>
						<EnergyChart />
					</div>
				</div>
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const stocks = await getAllStocks()
	return {
		props: { stocks },
	}
}
