import React from 'react';
import './experience.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { DiJavascript } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { DiPhp } from 'react-icons/di';
import { FaLaravel } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

function Experience() {
	return (
		<section id="experience" className="bg-white snap-start">
			<h5 className="text-black">What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className="experience__container">
				<div className="experience__frontend">
					<h3 className="mb-12 text-xl text-center text-black">Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<AiFillHtml5 className="text-[#FF5733]" />
							<h4>HTML</h4>
							<small>Experienced</small>
						</article>
						<article className="experience__details">
							<IoLogoCss3 className="text-[#264de4]" />
							<h4>CSS</h4>
							<small>Intermediate</small>
						</article>
						<article className="experience__details">
							<DiJavascript className="text-[#F0DB4F]" />
							<h4>Javascript</h4>
							<small>Experienced</small>
						</article>
						<article className="experience__details">
							<SiTailwindcss className="text-[#3CB0AF]" />
							<h4>Tailwind CSS</h4>
							<small>Experienced</small>
						</article>
						<article className="experience__details">
							<GrReactjs className="text-[#61DBFB]" />
							<h4>ReactJS</h4>
							<small>Experienced</small>
						</article>
					</div>
				</div>
				{/* END OF FRONTEND EXPERIENCE */}

				<div className="experience__backend">
					<h3 className=" mb-12 text-xl text-center text-black">Backend Development</h3>
					<div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 experience__content">
						<article className="experience__details">
							<FaNodeJs className="text-[#68A063]" />
							<h4>Node JS</h4>
							<small>Experienced</small>
						</article>
						<article className="experience__details">
							<SiMongodb className="text-[#4DB33D]" />
							<h4>MongoDb</h4>
							<small>Intermediate</small>
						</article>
						<article className="experience__details">
							<DiPhp className="text-[#787CB5]" />
							<h4>PHP</h4>
							<small>Experienced</small>
						</article>
						<article className="experience__details">
							<FaLaravel className="text-[#F05340]" />
							<h4>Laravel</h4>
							<small>Experienced</small>
						</article>
						<article className="experience__details">
							<SiMysql className="text-[#F29111]" />
							<h4>MySQL</h4>
							<small>Experienced</small>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;
