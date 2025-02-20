'use client'

import React from 'react'
import { motion } from 'framer-motion'
import EnergyChart from '@/app/graph'
import { getAllStocks, getStocksById } from '../app/services/stocks'
import '../app/globals.css'

export default function StockPage() {
	return (
		<div className='flex flex-col items-center min-h-screen mt-[7vh]'>
			<div className=' bg-gradient-to-r from-[#141414] to-[#000000] bg-opacity-95 w-[1140px] min-h-[600px] rounded-[50px] border-[1px] border-[#4B4C4E] border-opacity-25 p-8 z-20'>
				<div className='flex flex-row justify-between items-center border-b-[1px] pb-4 border-[#FFFFFF] border-opacity-[12%]'>
					<div className=' font-bold text-white'>
						Baqyla<span className='text-orange-300'>Invest</span>
					</div>
					<a
						href='/'
						className='text-orange-300 hover:text-orange-400 transition'
					>
						Назад
					</a>
				</div>

				<div className='grid grid-cols-2 gap-8 mt-8'>
					<div className='flex flex-col space-y-4'>
						<motion.h1
							className='text-4xl font-bold text-white'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Aeroflot
						</motion.h1>
						<motion.p
							className='text-lg text-gray-300'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Публичное акционерное общество "Аэрофлот - российские авиалинии"
						</motion.p>
						<div className='grid grid-cols-2 gap-4'>
							<motion.div
								className='bg-orange-400 bg-opacity-95 p-4 rounded-lg'
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<p className='text-sm text-gray-400'>Цена</p>
								<p className='text-2xl font-semibold text-white'>1000</p>
							</motion.div>
							<motion.div
								className='bg-orange-400 bg-opacity-95 p-4 rounded-lg'
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<p className='text-sm text-gray-400'>Объем</p>
								<p className='text-2xl font-semibold text-white'>1000</p>
							</motion.div>
							<motion.div
								className='bg-orange-400 bg-opacity-95 p-4 rounded-lg'
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								<p className='text-sm text-gray-400'>Макс.</p>
								<p className='text-2xl font-semibold text-white'>1000</p>
							</motion.div>
							<motion.div
								className='bg-orange-400 bg-opacity-95 p-4 rounded-lg'
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
							>
								<p className='text-sm text-gray-400'>Мин.</p>
								<p className='text-2xl font-semibold text-white'>1000</p>
							</motion.div>
							<motion.div
								className='bg-orange-400 bg-opacity-95 p-4 rounded-lg'
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								<p className='text-sm text-gray-400'>Закрытие</p>
								<p className='text-2xl font-semibold text-white'>1000</p>
							</motion.div>
							<motion.div
								className='bg-orange-400 bg-opacity-95 p-4 rounded-lg'
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.7 }}
							>
								<p className='text-sm text-gray-400'>Время обн.</p>
								<p className='text-2xl font-semibold text-white'>1000</p>
							</motion.div>
						</div>
					</div>

					<div className='relative'>
						<EnergyChart />
					</div>
				</div>
			</div>
		</div>
	)
}

// // Генерация путей для статической страницы
// export async function getStaticPaths() {
// 	const posts = await getAllStocks()
// 	const paths = posts.map(post => ({
// 		params: { id: post.id.toString() },
// 	}))

// 	return { paths, fallback: 'blocking' }
// }

// // Получение данных для конкретного поста
// export async function getStaticProps({ params }) {
// 	const post = await getStocksById(params.id)

// 	return {
// 		props: { post },
// 		revalidate: 10, // Автообновление данных
// 	}
// }
