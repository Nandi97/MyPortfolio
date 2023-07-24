import React, { useEffect, useState } from 'react';
import './portfolio.css';
import { GIT_API_URL, gitApiOptions } from '../../api';

const Portfolio = () => {
	const [repoData, setRepoData] = useState([]);

	useEffect(() => {
		const getRepoList = async () => {
			const url = `${GIT_API_URL}/repos?per_page=6`;
			try {
				const response = await fetch(url, gitApiOptions);
				const data = await response.json();

				setRepoData(data);
			} catch (err) {
				console.error(err);
			}
		};
		getRepoList();
	}, []);
	return (
		<section id="portfolio" className="bg-white snap-start">
			<h2>My Portfolio</h2>
			<h5 className="pb-5 text-black">
				My half done projects live here for the world to see my shame 😑
			</h5>
			<div className="portfolio__container">
				<>
					{repoData.map((repo) => (
						<article key={repo.id} className="portfolio__item">
							{/* <div className="portfolio__item-image">
                                    <img src={image} alt={title} srcset="" />
                                </div> */}
							<h3>{repo.name}</h3>

							<div className="portfolio__item-cta">
								<a
									className="text-black btn"
									href={repo.html_url}
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
							</div>
						</article>
					))}
					;
				</>
			</div>
		</section>
	);
};

export default Portfolio;
