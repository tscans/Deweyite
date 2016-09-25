import React from 'react';
import HomeNavbar from '../components/navfoot/home_nav';

export const BetaLayout = ({content}) => (
	<div>
		<HomeNavbar />
		{content}
	</div>
);
