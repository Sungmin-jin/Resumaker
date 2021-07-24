import React from 'react';

interface Step {
    steps: string;
}
const Steps = ():JSX.Element => {
    const firstSteps: Step[] = [
        { steps: "signup or login as a member" },
        { steps: "choose a template for your own resume" },
        { steps: "insert of edit the template" }
    ]
    const secondSteps: Step[] = [
        { steps: "save your changes" },
        { steps: "Use Your unique link to complete" }
    ]
    
    return (
        <section className="steps-container">
            <h1 className="steps-title">5 easy steps to build your own resume</h1>
            <section className="steps">
                { firstSteps.map((step, index) => (
                    <div className="step-container" key={index}>
                        <div className="step-information">
                            <h3 className="step-h3-nth"> Step {++index}</h3>
                            <p className="step-p-nth">{step.steps}</p>
                        </div>
                        {index < firstSteps.length && <div className="arrow-container"/>}
                </div>
                ))}
            </section>
            <section className="steps">
                { secondSteps.map((step, index) => (
                    <div className="step-container" key={index}>
                        <div className="arrow-container"/>
                        <div className="step-information">
                            <h3 className="step-h3-nth"> Step {++firstSteps.length}</h3>
                            <p className="step-p-nth">{step.steps}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Steps;
