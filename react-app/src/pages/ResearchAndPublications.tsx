import React from "react";
import "./styles.css"; // Import stylesheet
import anomaly from "../assets/Anomaly-detection.pdf";
import openSource from "../assets/Open-source.pdf";
import { CardBanner } from "../utils/Functions";
import { PublicationFormat } from "../utils/Functions";

const RandPPage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="Spacer"></div>
      <h2>Graduate Research Projects</h2>
      <div className="CardHolder">
        {CardBanner(
          `NASA Habitats Optimized for Missions of Exploration (HOME)`,
          `This project aims to improve reliability and safety of space habitats by developing robust fault detection systems that can operate independently of ground control. The project leverage machine learning algorithms and model selection techniques to identify and classify faults in the habitat systems.`,
          `I worked on updating a fault detection system for CO2 sensors in the habitat and dockerizing project files to be showen at the final project demonstration. This process taught me the importance of reproducibility and the benefits of containerization in software development. Additionally I was able to leverage my unique background exploring anomaly detection techniques and apply it to a fault detection space`,
          `https://www.nasa.gov/directorates/stmd/space-tech-research-grants/habitats-optimized-for-missions-of-exploration-home/`
        )}
        {CardBanner(
          `Real-time Broken Rail Detection for In-Service Locomotives`,
          `Real-time condition monitoring is crucial for infrastructure health, but indirect structural health monitoring (SHM) faces challenges like changing conditions and anomaly detection. Existing machine learning methods lack adaptability to new environments. This study proposes unsupervised anomaly detection using sensor data from diverse train conditions, employing techniques like PCA, ICA, and semantic segmentation for improved monitoring.`,
          `I led this research initiative, developing a custom data acquisition system that incorporatedI designed and built the data acquisition system, comprising of circuitry to interface the accelerometers, GPS, and regulated power sources while writing custom software to collect and process the data. During deployment, we could not “walk to track” to identify portions of broken rail due to safety concerns. This dilemma posed a challenge as our previous model relied on supervised classification models. I was inspired by unsupervised learning and anomaly detection literature, which led me to develop a stacked autoencoder ensemble that took the short-time Fourier transform as an input and aimed to separate “normal” regions of rail from “abnormal” sections using the reconstruction error as the metric for separation. In a surprising turn of events, we also discovered that the track was free of damaged rail. However, the model detected several locations later confirmed to contain broken cross-ties. I connected with the owner of RailPulse through a fortuitous conversation with my GIS professor, sparking a deal to run remote broken rail testing at his facilities. In preparation for deployment at both facilities, I duplicated the data acquisition system and added vision capabilities that tested a multi-modal classification pipeline that combines vision, acceleration, and GPS data. a novel unsupervised anomaly detection algorithm for real-time broken rail detection in in-service locomotives. The study involved data collection, preprocessing, and model training, culminating in a robust algorithm that outperformed existing methods.`,
          `https://www.flanigansaluslab.com/projects-publications`
        )}
        {CardBanner(
          `Laboratory Scale Simulation Model for Broken Rail Analysis`,
          `In recent research, focus has shifted towards detecting infrastructure damage using onboard acceleration signals, aiming for real-time track damage detection. However, a robust anomaly detection algorithm is lacking for rail crack detection. This study utilizes lab-scale track simulations to evaluate techniques, finding principal component analysis most effective. Meanwhile, there's an urgent need for consistent and automated rail crack detection methodologies, addressed through an open-source lab-scale rail testbed framework.`,
          `This project consisted of developing a lab-scale track-train model that could accurately simulate vibrations at the interface. I led the model development, collaborating with department staff and industry partners at Wabtec Corp. Working in tandem with a colleague, we built the lab model and identified the impacts of dimensionality reduction techniques (e.g., PCA, ICA, autoencoders, etc.) on support vector machine classification using experimental data: finding a 95% classification accuracy employing PCA. `,
          `https://github.com/JeremyYin-99/Lab-Scaled-Open-Source-Hardware.git`
        )}
        {CardBanner(
          "Fine grained Occupancy estimatoR using Kinect (FORK) Redeployment",
          'This project first introduced me to edge computing hardware deployments. The project aimed to optimize building energy consumption by developing a real-time occupancy detection system using "privacy-preserving" Kinect sensors. The project involved deploying a machine learning model to detect and track occupants in a room, interface with a sensor network via ssh, and coordinate with facilities management staff.',
          "I worked with department and university-wide staff to take down and redeploy odroids and intel sticks connected to the Microsoft Kinect sensors. I also worked on updating the systems to run pre-trained machine learning classification models that tracked people entering and leaving rooms.",
          "https://users.ece.cmu.edu/~agr/resources/publications/RTAS-FORK-17.pdf"
        )}
      </div>
      <div className="Spacer"></div>
      <h2>Undergraduate Research Projects</h2>
      <div className="CardHolder">
        {CardBanner(
          `Analysis of Railway Tie Padding on Load Dampening and Aggregate Spoiling`,
          `This study investigates the adverse effects of locomotive-induced repeated loading on railway aggregates, leading to aggregate spoiling. Focusing on mitigating this issue, the research evaluates various rail tie padding materials to reduce stress on the aggregate. By testing different padding types, the study aims to identify solutions that effectively minimize aggregate spoiling, thereby enhancing railway durability and performance under locomotive loading conditions.`,
          `Developed a custom MATLAB pipeline that incorporated digital filtering and peak detection algorithms to identify load peaks when analyzing under rail-tie padding material. Additionally, I had to overcome real-world challenges (e.g., faulty and broken pressure sensors) to ensure accurate data collection and analysis.`,
          false
        )}
        {CardBanner(
          `Earthwork Operation Optimization using Minimum Spanning Tree`,
          `This study addresses soil movement optimization in space-constrained environments like Singapore through earthwork optimization techniques. By integrating minimal spanning trees and linear programming, the research explores strategies to minimize soil movement while maximizing construction efficiency. The approach unlocks potential cut and fill patterns, optimizing earthwork operations to reduce soil disturbance. Implementing such methods could significantly enhance construction processes in densely populated areas, ensuring sustainable development and resource utilization.`,
          `This was my first exposure to reseach and I was tasked with exploring computational tools.`,
          false
        )}
      </div>
      <div className="Spacer"></div>
      <h2>Publications</h2>
      <ul>
        {PublicationFormat(
          `Anomaly identification algorithms for indirect structural health monitoring using a laboratory-scale railroad track system.`,
          `Presently, railroad monitoring strategies focus on preventative maintenance by detecting wheel anomalies using wayside detection methods (e.g., wheel-impact load detection), and direct detection of track anomalies using onboard systems (e.g., track geometry vehicles). Both approaches are periodic, manual, and do not support real-time track damage detection. Recent research has focused on detecting damage from acceleration signals obtained onboard moving vehicles and identifying anomalies from derived structural dynamic properties. Though promising due to inherent scalability and cost efficiency, its main goal is to detect damage on the supporting infrastructure and has never before been tested for detecting rail crack damage. Among other reasons, a robust anomaly detection algorithm is missing to allow the industry to embrace an automated and more cost-effective monitoring technique. In this work, we leverage a lab-scale track and moving vehicle actuation system that is scaled with the assistance of industry experts, and comprises a vehicle instrumented with two onboard vertical accelerometers. Cracked rails are simulated by introducing discontinuities (longitudinally and transversely). Several types of feature extraction and dimensionality reduction techniques are employed to evaluate their ability to separate damaged and undamaged records. Inspired from previous work, this work tests the ability of existing data-driven damage detection algorithms to detect local damage by using a novel super modular, precise, and realistically scaled down version of a train-track system. The results of the damage sensitivity show that principal component analysis has the highest balanced combination of recall and true negative rate, compared to other techniques.`,
          `Montero, G.,`,
          `Flanigan, K. A., Bergés, M., & Brooks, J. D. (2023). Anomaly identification algorithms for indirect structural health monitoring using a laboratory-scale railroad track system. Health Monitoring of Structural and Biological Systems XVII. https://doi.org/10.1117/12.2658463`,
          `https://doi.org/10.1117/12.2658463`,
          anomaly
        )}
        <hr />
        {PublicationFormat(
          `Open-source hardware and software for a laboratory-scale track and moving vehicle actuation system used for indirect broken rail detection.`,
          `There is an urgent need to better understand vehicle-rail interaction dynamics to pave the way for more consistent and automated rail crack detection methodologies, as opposed to relying on periodic and manual detection via track circuits or dedicated track geometry cars. Designing an open-source hardware framework for a lab-scale rail testbed would open the doors to further data collection and analysis needed to understand the dynamic response of cracked rails. We present a framework and the corresponding open-source hardware and software (published to GitHub) for developing a laboratory-scale motorized railroad testbed, with a vehicle that is modularly tuned to the dynamics of an in-service rail car.`,
          ``,
          `Montero, G., Flanigan, K. A., Bergés, M., & Brooks, J. D. (2023). Open-source hardware and software for a laboratory-scale track and moving vehicle actuation system used for indirect broken rail detection. Sensors and Smart Structures Technologies for Civil, Mechanical, and Aerospace Systems 2023. https://doi.org/10.1117/12.2658438`,
          `https://doi.org/10.1117/12.2658438`,
          openSource
        )}
      </ul>
    </div>
  );
};

export default RandPPage;
