const Card = (props) => {
  const contestant = props.data;
  return (
    <div className="card">
      <img className="card-image" src={`images/${contestant.id}.jpeg`} alt="" />
        <div className="card-info">
            <div className="candidate-votes">
                <span className={`vote-number-${contestant.id}`}>{contestant.vote}</span>
                <span className="vote-text">VOTE</span>
            </div>
            <div className="line"></div>
            <div className="candidate-info">
                <span className="candidate-name">{contestant.name}</span> 
                <span className="candidate-party">
                    <img className="image" src={`/images/${contestant.logo}.jpeg`} alt="" />
                    {contestant.party} 
                </span>
            </div>
        </div>
        <button className={`card-btn btn-${contestant.id}`} onClick={props.onClick}>VOTE</button>
    </div>
  );
};

export default Card;
