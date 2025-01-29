export function CardBanner(
  cardTitle?: string,
  cardObjective?: string,
  cardContribtion?: string,
  cardLink?: string | boolean,
  cardSkills?: string
) {
  return (
    <div className="Card left-border">
      <h3 className="CardTitle">{cardTitle}</h3>
      <div className="CardScroll">
        <p className="CardText">
          <strong>Objective: </strong>
          {cardObjective}
        </p>
        <p className="CardText">
          <strong>Contribution: </strong>
          {cardContribtion}
        </p>
        <p className="CardText">
          <strong>Skills: </strong>
          {cardSkills}
        </p>
        {(() => {
          if (cardLink == false) {
            return <></>;
          } else {
            return (
              <a
                className="CardText"
                href={cardLink as string}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>
                  <em>See more</em>
                </h4>
              </a>
            );
          }
        })()}
      </div>
    </div>
  );
}

export function PublicationFormat(
  pubTitle?: string,
  pubAbstract?: string,
  pubAuthorsBeg?: string,
  PubAuthorsEnd?: string,
  pubLink?: string,
  pubFile?: string
) {
  return (
    <>
      <li className="left-border">
        <a href={pubLink as string} target="_blank" rel="noopener noreferrer">
          <h3>
            <strong>{pubTitle}</strong>
          </h3>
        </a>
        <p>
          <strong>Abstract: </strong>
          {pubAbstract}
        </p>
        <h4>
          {pubAuthorsBeg} <strong>Yin, J.,</strong> {PubAuthorsEnd}
        </h4>
        <p>
          <a href={pubFile} target="_blank" rel="noopener noreferrer">
            <em>Read more</em>
          </a>
        </p>
      </li>
    </>
  );
}

export function TeachingLayout(
  schoolName: string,
  coursNumber: string,
  courseName: string,
  courseLink: string,
  leadInstructor1: string,
  leadInstructor1Link: string,
  role: string,
  semester: string,
  courseDescription: string,
  leadInstructor2?: string,
  leadInstructor2Link?: string
) {
  return (
    <li className="left-border">
      <h3>
        <a href={courseLink} target="_blank" rel="noopener noreferrer">
          <strong>
            {schoolName}: {coursNumber}
          </strong>{" "}
          - {courseName}
        </a>
      </h3>
      {(() => {
        if (leadInstructor2 == null) {
          return (
            <p className="no-bottom-margin">
              <strong>Lead instructor: </strong>
              <a
                href={leadInstructor1Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {leadInstructor1}
              </a>
            </p>
          );
        } else {
          return (
            <p className="no-bottom-margin">
              <strong>Lead instructors: </strong>
              <a
                href={leadInstructor1Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {leadInstructor1}
              </a>
              {" and "}
              <a
                href={leadInstructor2Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {leadInstructor2}
              </a>
            </p>
          );
        }
      })()}
      <p className="no-bottom-margin">
        <strong>Role: </strong>
        {role}
      </p>
      <p>
        <i>{semester}</i>
      </p>
      <p>
        <strong>Course Description: </strong>
        {courseDescription}
      </p>
    </li>
  );
}
