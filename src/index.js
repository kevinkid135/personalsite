import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Main() {
    return (
        <main>
            {/*<Test />*/}
            <Cover />
            <ProjectSection />
        </main>
    )
}

function Test() {
    return (
        <ul className="list-inline">
            <li className="list-inline-item">Hi</li>
            <li className="list-inline-item">Hi</li>
            <li className="list-inline-item">Hi</li>
        </ul>
    )
}

function Cover() {
    return (
        <header>
            <div id="info">
                <h1 className="display-1 animated bounceInLeft">Kevin Chan</h1>
                <h2 className="animated bounceInRight">Software Developer</h2>
                <h3 className="animated bounceInLeft">Web Developer</h3>
                <h4 className="animated bounceInRight">Problem Solver</h4>
                <h5 className="animated bounceInLeft">Friend</h5>
                <h6 className="animated bounceInRight">Status: Looking for an Internship</h6>
            </div>
        </header>
    )
}

function ProjectSection() {
    return (
        <div className="container-fluid projectContainer">
            <h2 className="sectionTitle">Projects</h2>
            <div className="card-deck">
                <Project
                    title="Personal Website"
                    pic="http://bit.ly/1Rs9q0y"
                    desc={<p>You're looking at it!<p>Responsive design for all devices.</p></p>}
                    link="https://github.com/kevinkid135" // TODO
                    tags={['HTML5', 'CSS3', 'Bootstrap4', 'React.js', 'animate.css']}
                />
                <Project
                    title="League of Legends Chest Checker"
                    pic="http://bit.ly/1Rs9q0y"
                    desc={<p>LoLCC calculates 'First Win of the Day', in addition to displaying game data through Riot Games' API.</p>}
                    link="http://lolcc.me"
                    git="https://github.com/kevinkid135/LoLChestChecker"
                    tags={['HTML5', 'CSS3', 'JavaScript', 'Bootstrap3', 'jQuery', 'API']}
                />
                <Project
                    title="Eliza Clone"
                    pic="http://bit.ly/1Rs9q0y"
                    desc={<p>Eliza mimics texting Rogerian psychotherapist by using AI methodologies such as pattern matching and substitution.</p>}
                    link="https://cdn.rawgit.com/kevinkid135/ElizaClone/d7981ea7/index.html"
                    git="https://github.com/kevinkid135/ElizaClone"
                    tags={['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AI']}
                />
                <Project
                    title="Facebook VR"
                    pic="http://bit.ly/1Rs9q0y"
                    desc={<p>Facebook VR is a protoype of how we may use virtual reality as a social media platform.</p>}
                    git="https://github.com/victormimo/CISC325"
                    tags={['Unity', 'C#']}
                />
            </div>
        </div>
    )
}

function Project(props) {
    const title = props.title;
    const pic = props.pic;
    const description = props.desc;
    const link = props.link; // optional
    const git = props.git; // optional
    const tags = props.tags;

    const tagList = tags.map((val) =>
        <li className="list-inline-item">
            <p>#{val}</p>
        </li>
    );

    return (
        <article className="card">
            <div className="card-block">
                <h3 className="card-title">{title}</h3>
            </div>

            <img className="card-img-top" alt={title + " screenshot"}
                 src={pic}/>

            <div className="card-block">
                <div className="card-text">{description}</div>
                <p className="card-text">
                    <ul className="list-inline">
                        {link && <li>
                            <a href={link} className="card-link">
                                Project Link
                            </a>
                        </li>}
                        {git && <li>
                            <a href={git} className="card-link">
                                GitHub
                            </a>
                        </li>}
                    </ul>
                </p>

            </div>
            <div className="card-footer">
                <small className="text-muted">
                    <ul className="list-inline">{tagList}</ul>
                </small>
            </div>
        </article>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));