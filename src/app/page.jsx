import Support from '@/components/common/Support';
import HomeForm from '@/components/forms/HomeForm';
import About from '@/components/home/About';
import Section1 from '@/components/home/Section1';
import { bkend } from '../../axios/axiosInstance';
import ProdDispC from '@/components/products/ProdDispC';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FAQ from '@/components/home/FAQ';
import ReduxndQueryWrapper from '@/components/home/ReduxndQueryWrapper';

export default async function Home() {

  // const response = await bkend.get('/getproduct');
  let response = null;
  try {
    response = await bkend.get('/getproduct');
    console.log("🚀 ~ Home ~ response:", response.data.data);
  } catch (err) {
    console.log('🚗', err);
  }

  // try {
  //   const res = await bkend.get('/category/data');
  //   console.log("🚀 ~ Home ~ ♻️♻️♻️♻️♻️♻️ response:", res.data);
  // } catch (err) {
  //   console.log('🚗', err);
  // }

  if (response) {
    return (
      <>
        <div className="bg-[#F1FFF9]">
          <ReduxndQueryWrapper>
            <Header />
          </ReduxndQueryWrapper>
          <Section1 />
          <Support />
          <About />
          <ReduxndQueryWrapper>
            <ProdDispC data={response.data.data} />
          </ReduxndQueryWrapper>
          <FAQ />
          <HomeForm />
          <Footer />
        </div>
      </>
    );
  }
}


