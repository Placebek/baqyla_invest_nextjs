import StockCardsProps from '../interfaces/StockCardsProps'

function StockCards({
	name,
	lastDeal,
	change,
	volume,
	max,
	min,
	close,
	updateTime,
}: StockCardsProps) {
	return (
		<div className='relative z-10 mt-2 w-[70vw] p-1 rounded-lg hover:bg-[#343435]'>
			<div className='flex justify-between items-center text-center gap-4'>
				<div className='text-lg font-semibold w-[150px]'>{name}</div>

				<CardItem label='Посл. сделка' value={lastDeal} />
				<CardItem
					label='% Изм. цены'
					value={`${change}%`}
					valueClass={Number(change) > 0 ? 'text-green-500' : 'text-red-500'}
				/>
				<CardItem label='Объем' value={volume} />
				<CardItem label='Макс.' value={max} />
				<CardItem label='Мин.' value={min} />
				<CardItem label='Закрытие' value={close} />
				<CardItem label='Время обн.' value={updateTime} />
			</div>
		</div>
	)
}

function CardItem({
	label,
	value,
	valueClass = '',
}: {
	label: string
	value: string | number
	valueClass?: string
}) {
	return (
		<div className='flex flex-col w-[120px]'>
			<div className='text-sm text-[#8D8D8D]'>{label}</div>
			<div className={`text-base font-medium ${valueClass}`}>{value}</div>
		</div>
	)
}

export default StockCards
