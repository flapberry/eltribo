import BreadCrumb from '@/components/common/BreadCrumb';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ReduxndQueryWrapper from '@/components/home/ReduxndQueryWrapper';

export default function layout({ children }) {
	return (
		<>
			<ReduxndQueryWrapper>
				<Header />
			</ReduxndQueryWrapper>
      {/* <BreadCrumb /> */}
				{children}
			<Footer />
		</>
	)
}
