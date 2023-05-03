import "./Phrase.css";

// eslint-disable-next-line react/prop-types
const Phrase = ({ phrase }) => {
  return (
    <section className="phrase__container">
      <p>
        {phrase} <span>ʼʼ</span>
      </p>
    </section>
  );
};

export default Phrase;
