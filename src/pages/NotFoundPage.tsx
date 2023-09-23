import type { PropsWithChildren } from 'react';
import type React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ROUTES } from '../resources/routes-constants';

// const NotFoundPage: React.FC = () => {
// 	const navigate = useNavigate();

// 	/**
// 	 * Call this function to redirect the user to the homepage.
// 	 */
// 	const redirectToHomePage = () => {
// 		navigate(ROUTES.HOMEPAGE_ROUTE);
// 	};

// 	return (
// 		<div
// 			style={{
// 				position: 'relative',
// 				width: '100%',
// 				display: 'flex',
// 				justifyContent: 'center',
// 				alignItems: 'center',
// 				flexDirection: 'column',
// 			}}
// 		>
// 			<h1 style={{ fontSize: '4em' }}>Oops 404!</h1>
// 			<span style={{ cursor: 'pointer' }} onClick={() => redirectToHomePage()}>
// 				Homepage
// 			</span>
// 		</div>
// 	);
// };

// children 作为 props 有自带 memo 的功能
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AA() {
  console.log('AA');
  return 'AA';
}

const B = ({ children }: PropsWithChildren) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [v, setV] = useState(1);
  console.log(children);

  return (
    <div
      onClick={() => {
        setV(Math.random());
      }}
    >
      {children}
    </div>
  );
};

const A: React.FC = () => (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  <B>阿斯顿发斯蒂芬</B>
);
export default A;
