export default function SponsorCard(props) {
  return (
    <a target="_blank" href={props.sponsor.link}>
      <div className="member">
        {/* <h4 className="subtitle title is-4">{props.sponsor.name}</h4> */}
        {props.sponsor.img ? (
          <img src={props.sponsor.img} className="image" />
        ) : (
          <h4 className="title is-4">{props.sponsor.name}</h4>
        )}
      </div>
    </a>
  );
}
