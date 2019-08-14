import React from 'react'

import CollectionItem from '../collection-item/collection-item.component.jsx'

import './collection-preview.style.scss'

const PreviewCollection = ({ title, items }) => (
	<div className='collection-preview'>
		<h1>Title</h1>
		<div className='preview'>
			{items
				.filter((item, idx) => idx < 4)
				.map(({ id, ...itemProps }) => (
					<CollectionItem ket={id} {...itemProps} />
				))}
		</div>
	</div>
)

export default PreviewCollection
