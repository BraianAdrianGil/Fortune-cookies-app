import "./Phrase.css";

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
