import React from 'react';

function ContentLeft() {
  return (
    <div className="content__left animate-left">
      <div className="section" id="about_me">
        <h2>About Me</h2>
        <h3>I&apos;m an INTP!</h3>
        <p>
          A curious and enthusiastic person, yet also a quick learner. Jack of
          all trades that try to master everything in this world. I code for fun
          and love filmmaking
          <span role="img" aria-label="wink">
            😉
          </span>
        </p>
      </div>
      <div className="section" id="favorite">
        <h2>What I Like</h2>
        <h3>Reading | Photography | Filming</h3>
        <p>
          I love to read! Most of the books I read are about self-improvement
          and psychology. I enjoy taking street photography and landscape. I
          also love making film!
        </p>
      </div>
      <div className="section" id="interest">
        <h2>My Interest</h2>
        <h4>Web Development</h4>
        <h4>Cloud Computing</h4>
        <h4>Natural Language Processing</h4>
      </div>
      <div className="section" id="language">
        <h2>Language</h2>
        <h4>Bahasa (Native)</h4>
        <h4>English</h4>
      </div>
    </div>
  );
}

export default ContentLeft;
