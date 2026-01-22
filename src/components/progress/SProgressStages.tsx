import React, { useState } from 'react';
import './SProgressStages.scss';

interface Stage {
  title: string;
  status: 'completed' | 'in-progress' | 'pending' | 'delayed';
  subStages?: SubStage[];
}

interface SubStage {
  title: string;
  status: 'completed' | 'in-progress' | 'pending' | 'delayed';
  children?: SubStage[];
}

interface SProgressStagesProps {
  stages: Stage[];
}

export const SProgressStages: React.FC<SProgressStagesProps> = ({ stages = [] }) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleSubStage = (key: string) => {
    setExpanded(prev => {
      const index = prev.indexOf(key);
      if (index === -1) {
        return [...prev, key];
      } else {
        return prev.filter(k => k !== key);
      }
    });
  };

  const getStageHeaderClass = (stage: Stage) => {
    return {
      'stage-header--completed': stage.status === 'completed',
      'stage-header--in-progress': stage.status === 'in-progress',
      'stage-header--pending': stage.status === 'pending',
      'stage-header--delayed': stage.status === 'delayed',
    };
  };

  const getStageStatusClass = (stage: SubStage) => {
    return {
      'sub-stage-item--completed': stage.status === 'completed',
      'sub-stage-item--in-progress': stage.status === 'in-progress',
      'sub-stage-item--pending': stage.status === 'pending',
      'sub-stage-item--delayed': stage.status === 'delayed',
    };
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return 'mdi-check-circle';
      case 'in-progress':
        return 'mdi-progress-clock';
      default:
        return 'mdi-circle-outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#00BA88';
      case 'in-progress':
        return '#1297F2';
      default:
        return '#9E9E9E';
    }
  };

  const getTextColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#00BA88';
      case 'in-progress':
        return '#1297F2';
      default:
        return '#6C6C6C';
    }
  };

  return (
    <div className="progress-stages">
      {stages.map((stage, stageIndex) => (
        <div key={stageIndex} className="stage-item">
          <div className={`stage-header ${Object.entries(getStageHeaderClass(stage))
            .filter(([_, value]) => value)
            .map(([key]) => key)
            .join(' ')}`}>
            <div className="d-flex align-center">
              <i
                className={`mdi ${getStatusIcon(stage.status)} mr-2`}
                style={{ color: getStatusColor(stage.status), fontSize: '20px' }}
              />
              <span className="stage-title">{stage.title}</span>
            </div>
          </div>

          <div className="sub-stages">
            {(stage.subStages || []).map((subStage, subStageIndex) => {
              const key = `${stageIndex}-${subStageIndex}`;
              const isExpanded = expanded.includes(key);

              return (
                <div
                  key={key}
                  className={`sub-stage-item ${Object.entries(getStageStatusClass(subStage))
                    .filter(([_, value]) => value)
                    .map(([key]) => key)
                    .join(' ')}`}
                >
                  <div className="d-flex align-center justify-space-between">
                    <span style={{ color: getTextColor(subStage.status) }}>
                      {subStage.title}
                    </span>
                    {subStage.children?.length && (
                      <i
                        className={`mdi ${isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'}`}
                        style={{ cursor: 'pointer', fontSize: '20px' }}
                        onClick={() => toggleSubStage(key)}
                      />
                    )}
                  </div>

                  {isExpanded && subStage.children?.length && (
                    <div className="sub-stage-children">
                      {subStage.children.map((child, index) => (
                        <div
                          key={index}
                          className={`sub-stage-child ${Object.entries(getStageStatusClass(child))
                            .filter(([_, value]) => value)
                            .map(([key]) => key)
                            .join(' ')}`}
                        >
                          {child.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SProgressStages;
