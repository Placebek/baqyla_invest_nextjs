'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import StockCards from './UI/StockCards'
import Link from 'next/link'

// Интерфейс для карточек акций
interface StockCardsProps {
	id: number
	name: string
	lastDeal: string
	change: string
	volume: string
	updateTime: string
	open: number
	max: number
	min: number
	close: number
}

// Моковые данные для всех стран (одинаковые для простоты)
const stockDataByCountry: Record<string, StockCardsProps[]> = {
	Россия: [
		{
			id: 1,
			name: 'Aeroflot',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
		{
			id: 2,
			name: 'Gazprom',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
		{
			id: 3,
			name: 'Sberbank',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
		{
			id: 4,
			name: 'Rosneft',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
	],
	США: [
		{
			id: 1,
			name: 'Aeroflot',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
		{
			id: 2,
			name: 'Gazprom',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
		{
			id: 3,
			name: 'Sberbank',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
		{
			id: 4,
			name: 'Rosneft',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
	],
	'Все миры': [
		{
			id: 1,
			name: 'Aeroflot',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
		{
			id: 2,
			name: 'Gazprom',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
		{
			id: 3,
			name: 'Sberbank',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
		{
			id: 4,
			name: 'Rosneft',
			lastDeal: '1,000',
			change: '10',
			volume: '1,000',
			updateTime: '1,000',
			open: 1000,
			max: 1000,
			min: 1000,
			close: 1000,
		},
	],
}

export default function Home() {
	const [activeItem, setActiveItem] = useState('Россия')

	const handleItemClick = (item: string) => {
		setActiveItem(item)
	}

	const menuItems = ['Россия', 'Все миры', 'США']

	// Variants для анимации карточек акций
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.5,
			},
		}),
	}

	return (
		<div className='flex flex-col items-center min-h-screen mt-[7vh]'>
			{/* SVG Background */}

			{/* Основной контент */}
			<div className='relative  bg-gradient-to-r from-[#141414] to-[#101010] bg-opacity-95 w-[1140px] min-h-[600px] rounded-[50px] border-[1px] border-[#4B4C4E] border-opacity-25 p-8 z-20'>
				{/* Меню */}
				<div className='flex flex-row justify-between items-center border-b-[1px] pb-4 border-[#FFFFFF] border-opacity-[12%]'>
					<div className='font-bold text-white'>
						Baqyla<span className='text-orange-300'>Invest</span>
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

				{/* Анимированный контейнер для данных акций */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={activeItem}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						transition={{ duration: 0.5 }}
						className='grid grid-cols-1'
					>
						{stockDataByCountry[activeItem].map((stock, index) => (
							<motion.div
								key={stock.id}
								custom={index}
								variants={cardVariants}
								initial='hidden'
								animate='visible'
								exit='hidden'
								className='p-2 rounded-lg shadow-lg hover:shadow-xl transition'
							>
								<Link href={`/${stock.id}`}>
									<StockCards
										id={stock.id}
										name={stock.name}
										lastDeal={stock.lastDeal}
										change={stock.change}
										volume={stock.volume}
										updateTime={stock.updateTime}
										open={stock.open}
										max={stock.max}
										min={stock.min}
										close={stock.close}
									/>
								</Link>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Кнопка "Загрузить еще" */}
				<div className='relative z-10 flex justify-center items-center mt-8'>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='bg-orange-300 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-orange-400 transition'
					>
						Загрузить еще
					</motion.button>
				</div>
			</div>
		</div>
	)
}
