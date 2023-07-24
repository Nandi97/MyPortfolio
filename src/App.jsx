import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// function App() {
//   return (
//     <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
//       <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
//       <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p>
//     </div>
//   );
// }

const App = () => {
	return (
		<>
			<div className="snap-proximity">
				<Header />
				<Nav />
				<About />
				<Experience />
				<Services />
				<Portfolio />
				<Testimonials />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default App;
