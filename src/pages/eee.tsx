'use client'

import React from 'react'
import { getAllStocks, getStocksById } from '../app/services/stocks'

export default function PostPage() {
	return (
		<div>
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
