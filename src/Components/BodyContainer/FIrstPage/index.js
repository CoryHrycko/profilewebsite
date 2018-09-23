import React from 'react'
import './index1.css'

const BodyContainer1 = props => (
		<div className="sectionNarrow"> 
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="attractionBlock">
							<i class="fa fa-circle-o-notch" aria-hidden="true"></i>
								<h3>Projects &amp; Api's</h3>
									<p></p><p>This is where my projects get posted</p>
									<p>This is were there is going to be a scrapper to load the latest project I am working on.</p>
										<p>
										<a href="https://github.com/CoryHrycko" className='space'>See More</a></p><p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> <i class="fa fa-thumbs-o-down" aria-hidden="true"></i></p>
						</div>
					</div>
						
						<div className="col-md-4">
							<div className="attractionBlock">
								<i class="fa fa-circle-o-notch" aria-hidden="true"></i>
								<h3>Skills</h3>
								<div className='Skills'>
									<ul className='onestColumn'>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>JavsScript</li>
									<li>React</li>
									<li>Python</li>
									</ul>
									<div className='moreSpace'></div>
									<ul className='secondColumn'>
									<li>Ruby</li>
									<li>Ruby on Rails</li>
									<li>Git Version Control</li>
									<li>Node.js</li>
									<li>SQL</li>
									<li>MySQL</li>
									</ul>
								</div>
								<p><a href="X">Blog</a></p><p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> <i class="fa fa-thumbs-o-down" aria-hidden="true"></i></p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="attractionBlock">
								<i class="fa fa-circle-o-notch" aria-hidden="true"></i>
								<h3>Projects</h3>
								<p></p><p>
									Here is going to be a scrap from my github
									</p><p></p>
								<p><a href="">View Projects</a></p><p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> <i class="fa fa-thumbs-o-down" aria-hidden="true"></i></p>
							</div>
						</div>
				</div>
			</div>
	</div>
);

export default BodyContainer1