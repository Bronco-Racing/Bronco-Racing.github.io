export default function SponsorCard(props) {
  return (
    <a
      target="_blank"
      href={props.sponsor.link}
      className="mx-5 my-3 member is-flex is-flex-column is-align-items-center is-justify-content-center"
    >
      {/* <h4 className="subtitle title is-4">{props.sponsor.name}</h4> */}
      {props.sponsor.img ? (
        <img src={props.sponsor.img} className="image" />
      ) : (
        <h4 className="title is-4 has-text-centered">{props.sponsor.name}</h4>
      )}
    </a>
  );
}
