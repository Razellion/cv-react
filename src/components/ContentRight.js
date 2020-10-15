import React, { useState } from 'react';
import { WorkExp } from './index';

function ContentRight() {
  const workList = [
    {
      id: 1,
      workPlace: 'Telkom University',
      type: 'Natural Language Processing',
      role: 'Assistant Lecturer',
      duration: '(Sep 2020 - Present)',
    },
    {
      id: 2,
      workPlace: 'Telkom Indonesia',
      type: 'Internship',
      role: 'Broadcast Engineer',
      duration: '(Aug 2020 - Sep 2020)',
    },
    {
      id: 3,
      workPlace: 'Telkom Indonesia',
      type: 'Internship',
      role: 'Web Developer',
      duration: '(Jun 2020 - Aug 2020)',
    },
  ];
  const workMapped = workList.map((workDet) => {
    return <WorkExp key={workDet.id} workDet={workDet} />;
  });
  const [workMap, setWorkMap] = useState(workMapped);
  const [click, setClick] = useState(0);
  const onClickHandler = () => {
    if (click === 0) {
      setWorkMap(
        workList
          .filter((workDet) => {
            return workDet.workPlace === 'Telkom Indonesia';
          })
          .map((filteredworkDet) => {
            return (
              <WorkExp key={filteredworkDet.id} workDet={filteredworkDet} />
            );
          })
      );
      setClick(click + 1);
    } else if (click === 1) {
      setWorkMap(
        workList
          .filter((workDet) => {
            return workDet.workPlace === 'Telkom University';
          })
          .map((filteredworkDet) => {
            return (
              <WorkExp key={filteredworkDet.id} workDet={filteredworkDet} />
            );
          })
      );
      setClick(click + 1);
    } else if (click === 2) {
      setWorkMap(workMapped);
      setClick(0);
    }
  };

  return (
    <div className="content__right animate-right">
      {/* EDUCATION */}
      <div className="section" id="education">
        <h2>Education</h2>
        <ul className="history">
          <li>
            <h4>Telkom University</h4>
          </li>
          <p>Informatics</p>
          <p>(2017 - Present)</p>
          <li>
            <h4>SMA Negeri 1 Pontianak</h4>
          </li>
          <p>(2014 - 2017)</p>
        </ul>
      </div>
      {/* WORK */}
      <div className="section" id="work">
        <div className="section__title">
          <h2 className="work__title no-select">Work Experience</h2>
          <button
            type="button"
            onClick={() => {
              onClickHandler();
            }}
            onKeyPress={() => {}}
          >
            Filter by Place
          </button>
          <ul className="history">{workMap}</ul>
        </div>
      </div>

      {/* CERTIFICATION */}
      <div className="section" id="certification">
        <h2>Certification</h2>
        <ul className="history">
          <li>
            <h4>Huawei Certified ICT Associate Cloud Computing</h4>
          </li>
          <p>Huawei</p>
          <p>Issued Sep 2020 - Expires Sep 2023</p>
          <p>Credential ID 01010080280805089633724</p>
        </ul>
      </div>
    </div>
  );
}

export default ContentRight;
