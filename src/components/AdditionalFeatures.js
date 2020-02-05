import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

import { buyItem } from '../actions';

const AdditionalFeatures = props => {
	const handleBuyItem = item => {
		props.buyItem(item);
		console.log(item);
	};
	return (
		<div className='content'>
			<h4>Additional Features</h4>
			{props.additionalFeatures.length ? (
				<ol type='1'>
					{props.additionalFeatures.map((item, index) => (
						<AdditionalFeature key={item.id} feature={item} handleBuyItem={handleBuyItem} index={index} />
					))}
				</ol>
			) : (
				<p>Nice looking car!</p>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		additionalFeatures : state.additionalFeatures
	};
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeatures);
