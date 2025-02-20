'use client'

import React from 'react'
import { getAllStocks, getStocksById } from '../app/services/stocks'

export default function StockPage() {
	return (
		<div>
			<div className='flex flex-col items-center mt-[7vh] mb-[7vh]'>
				<div className='absolute w-[1200px] min-h-[600px] rounded z-10'>
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
								y2='700'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#212121' />
								<stop offset='1' stopColor='#161616' stopOpacity='0' />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div className='bg-[#0B0B0B] bg-opacity-95 w-[1140px] min-h-[600px] rounded-[50px] border-[1px] border-[#4B4C4E] border-opacity-25 p-8'>
					<div className='relative flex flex-row z-10 gap-10 justify-start border-b-[1px] pb-4 border-[#FFFFFF] border-opacity-[12%]'>
						<div>
							Baqyla
							<span className='text-orange-300 font-semibold'>Invest</span>
						</div>

						
					</div>

					<div className='grid grid-flow-col w-full'>
						<div>
							<div className='relative z-10 flex justify-center items-center bg-[#3030302b] p-2 rounded-lg shadow-lg cursor-pointer hover:bg-[#303030]'>
								<button>Загрузить еще</button>
							</div>
						</div>
						{/* <div>
						<EnergyChart />
					</div> */}
					</div>
				</div>
			</div>
			<a href='/'>Назад</a>
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
