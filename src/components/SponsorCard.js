import './SponsorCard.scss';

export default function SponsorCard(props) {
  return (
    <a
      target="_blank"
      href={props.sponsor.link}
      className="member box is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
    >
      {/* <h4 className="subtitle title is-4">{props.sponsor.name}</h4> */}
      {props.sponsor.img ? (
        <img className="image" src={props.sponsor.img} />
      ) : (
        <h4 className="title is-4 has-text-centered">{props.sponsor.name}</h4>
      )}
      <p className="has-text-centered">{props.sponsor.description}</p>
    </a>
  )
}
