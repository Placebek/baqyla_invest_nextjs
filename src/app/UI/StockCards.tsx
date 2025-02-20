import React from 'react'
import StockCardsProps from '../interfaces/StockCardsProps'


function StockCards({ name, lastDeal, change, volume, updateTime }: StockCardsProps) {
  return (
		<div>
			<div className='relative z-10 mt-2 flex flex-row gap-4 rounded-[10px] hover:bg-[#343435] w-full p-2 items-center'>
				<div>{name}</div>
				<div className='flex flex-col leading-4'>
					<div className='text-sm text-[#8D8D8D]'>Посл. сделка</div>
					<div className='text-base'>{lastDeal}</div>
				</div>
				<div className='flex flex-col leading-4'>
					<div className='text-sm text-[#8D8D8D]'>% Изм. цены</div>
					<div
						className={`text-base ${
							parseFloat(change) > 0 ? 'text-green-500' : 'text-red-500'
						}`}
					>
						{change}%
					</div>
				</div>
				<div className='flex flex-col leading-4'>
					<div className='text-sm text-[#8D8D8D]'>Объем, шт.</div>
					<div className='text-base'>{volume}</div>
				</div>
				<div className='flex flex-col leading-4'>
					<div className='text-sm text-[#8D8D8D]'>Время обн.</div>
					<div className='text-base'>{updateTime}</div>
				</div>
			</div>
		</div>
	)
}

export default StockCards