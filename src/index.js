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
                <h1 className="display-1">Kevin Chan</h1>
                <h2>Software Developer/Web Developer</h2>
                <h3>Software Developer/Web Developer</h3>
                <h4>Software Developer/Web Developer</h4>
                <h5>Software Developer/Web Developer</h5>
                <h6>Software Developer/Web Developer</h6>
            </div>
        </header>
    )
}

function ProjectSection() {
    return (
        <div className="container-fluid projectContainer">
            <div className="card-deck">
                <Project
                    title="Proj title"
                    pic="http://bit.ly/1Rs9q0y"
                    desc="A short description describing the project."
                    link="https://github.com/kevinkid135"
                    tags={['html', 'css', 'bootstrap', 'react']}
                />
                <Project
                    title="Proj title2"
                    pic="http://bit.ly/1Rs9q0y"
                    desc="A short description describing the project."
                    link="https://github.com/kevinkid135"
                    tags={['html', 'css', 'bootstrap', 'react']}
                />
            </div>
        </div>
    )
}

function Project(props) {
    const title = props.title;
    const pic = props.pic;
    const description = props.desc;
    const link = props.link;
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
                <p className="card-text">{description}</p>
                <p className="card-text">
                    <a href={link} className="card-link">
                        Link
                    </a>
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