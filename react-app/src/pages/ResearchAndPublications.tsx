import React from "react";
import "./styles.css"; // Import stylesheet

const RandPPage: React.FC = () => {
  return (
    <div className="page-content">
      <h2>Past Research Projects</h2>
      <div className="CardHolder">
        <div className="Card">
          <p className="CardTitle">
            Real-time Broken Rail Detection for In-Service Locomotives
          </p>
          <p className="CardText">
            Real-time condition monitoring is crucial for infrastructure health,
            but indirect structural health monitoring (SHM) faces challenges
            like changing conditions and anomaly detection. Existing machine
            learning methods lack adaptability to new environments. This study
            proposes unsupervised anomaly detection using sensor data from
            diverse train conditions, employing techniques like PCA, ICA, and
            semantic segmentation for improved monitoring.
          </p>
        </div>
        <div className="Card">
          <p className="CardTitle">Laboratory Scale Broken Rail Detection</p>
          <p className="CardText">
            In recent research, focus has shifted towards detecting
            infrastructure damage using onboard acceleration signals, aiming for
            real-time track damage detection. However, a robust anomaly
            detection algorithm is lacking for rail crack detection. This study
            utilizes lab-scale track simulations to evaluate techniques, finding
            principal component analysis most effective. Meanwhile, there's an
            urgent need for consistent and automated rail crack detection
            methodologies, addressed through an open-source lab-scale rail
            testbed framework.
          </p>
        </div>
        <div className="Card">
          <p className="CardTitle">Aggregate Spoiling and Material Analysis</p>
          <p className="CardText">
            This study investigates the adverse effects of locomotive-induced
            repeated loading on railway aggregates, leading to aggregate
            spoiling. Focusing on mitigating this issue, the research evaluates
            various rail tie padding materials to reduce stress on the
            aggregate. By testing different padding types, the study aims to
            identify solutions that effectively minimize aggregate spoiling,
            thereby enhancing railway durability and performance under
            locomotive loading conditions.
          </p>
        </div>
        <div className="Card">
          <p className="CardTitle">Earthwork Optimization</p>
          <p className="CardText">
            This study addresses soil movement optimization in space-constrained
            environments like Singapore through earthwork optimization
            techniques. By integrating minimal spanning trees and linear
            programming, the research explores strategies to minimize soil
            movement while maximizing construction efficiency. The approach
            unlocks potential cut and fill patterns, optimizing earthwork
            operations to reduce soil disturbance. Implementing such methods
            could significantly enhance construction processes in densely
            populated areas, ensuring sustainable development and resource
            utilization.
          </p>
        </div>
      </div>
      <h2>Publications</h2>
      <ul className="Publications">
        <li>
          <h3>
            Anomaly identification algorithms for indirect structural health
            monitoring using a laboratory-scale railroad track system.
          </h3>
        </li>
        <li>
          <strong>Abstract: </strong>Presently, railroad monitoring strategies
          focus on preventative maintenance by detecting wheel anomalies using
          wayside detection methods (e.g., wheel-impact load detection), and
          direct detection of track anomalies using onboard systems (e.g., track
          geometry vehicles). Both approaches are periodic, manual, and do not
          support real-time track damage detection. Recent research has focused
          on detecting damage from acceleration signals obtained onboard moving
          vehicles and identifying anomalies from derived structural dynamic
          properties. Though promising due to inherent scalability and cost
          efficiency, its main goal is to detect damage on the supporting
          infrastructure and has never before been tested for detecting rail
          crack damage. Among other reasons, a robust anomaly detection
          algorithm is missing to allow the industry to embrace an automated and
          more cost-effective monitoring technique. In this work, we leverage a
          lab-scale track and moving vehicle actuation system that is scaled
          with the assistance of industry experts, and comprises a vehicle
          instrumented with two onboard vertical accelerometers. Cracked rails
          are simulated by introducing discontinuities (longitudinally and
          transversely). Several types of feature extraction and dimensionality
          reduction techniques are employed to evaluate their ability to
          separate damaged and undamaged records. Inspired from previous work,
          this work tests the ability of existing data-driven damage detection
          algorithms to detect local damage by using a novel super modular,
          precise, and realistically scaled down version of a train-track
          system. The results of the damage sensitivity show that principal
          component analysis has the highest balanced combination of recall and
          true negative rate, compared to other techniques.
        </li>
        <li className="Publication">
          Montero, G., <strong>Yin, J.</strong>, Flanigan, K. A., Bergés, M., &
          Brooks, J. D. (2023). Anomaly identification algorithms for indirect
          structural health monitoring using a laboratory-scale railroad track
          system. Health Monitoring of Structural and Biological Systems XVII.
          https://doi.org/10.1117/12.2658463
        </li>
        <hr />
        <li>
          <h3>
            Open-source hardware and software for a laboratory-scale track and
            moving vehicle actuation system used for indirect broken rail
            detection.
          </h3>
        </li>
        <li>
          <strong>Abstract: </strong>There is an urgent need to better
          understand vehicle-rail interaction dynamics to pave the way for more
          consistent and automated rail crack detection methodologies, as
          opposed to relying on periodic and manual detection via track circuits
          or dedicated track geometry cars. Designing an open-source hardware
          framework for a lab-scale rail testbed would open the doors to further
          data collection and analysis needed to understand the dynamic response
          of cracked rails. We present a framework and the corresponding
          open-source hardware and software (published to GitHub) for developing
          a laboratory-scale motorized railroad testbed, with a vehicle that is
          modularly tuned to the dynamics of an in-service rail car.
        </li>
        <li className="Publication">
          <strong>Yin, J.</strong>, Montero, G., Flanigan, K. A., Bergés, M., &
          Brooks, J. D. (2023). Open-source hardware and software for a
          laboratory-scale track and moving vehicle actuation system used for
          indirect broken rail detection. Sensors and Smart Structures
          Technologies for Civil, Mechanical, and Aerospace Systems 2023.
          https://doi.org/10.1117/12.2658438
        </li>
      </ul>
    </div>
  );
};

export default RandPPage;
