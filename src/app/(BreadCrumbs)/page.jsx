// import Support from '@/components/common/Support';
// import HomeForm from '@/components/forms/HomeForm';
// import About from '@/components/home/About';
// import ProdDisp from '@/components/home/ProdDisp';
// import Section1 from '@/components/home/Section1';
// import ClientProvider from '@/components/utils/ClientProvider';
// import { bkend } from '../../axios/axiosInstance';
// import ProdDispC from '@/components/products/ProdDispC';

// export default async function Home() {

//   const response = await bkend.get('/getproduct');
// 	console.log("🚀 ~ ProductPage ~ response:", response.data);

//   if (response) {
//     return (
//       <>
//         <Section1 />
//         <Support />
//         <About />
//         <ClientProvider>
//           <ProdDispC data={response.data.data} />
//         </ClientProvider>
//         <HomeForm />
//       </>
//     );
//   }
// }