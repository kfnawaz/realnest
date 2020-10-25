import React from 'react';
import Slider from './Slider';
import styles from './styles.css';
import horizontalCss from './horizontal.css';
import content from './content';

function InfoSlider() {
	return (
		<div className={styles.page}>
			<Slider classNames={horizontalCss} autoplay={3000}>
				{content.map((item, index) => (
					<div key={index} style={{ background: `url('${item.image}') no-repeat center center` }}>
						<div className="center">
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button>{item.button}</button>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default InfoSlider;
