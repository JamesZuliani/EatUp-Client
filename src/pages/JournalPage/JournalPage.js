import Header from "../../components/Header/Header";
import Shake from "../../assests/images/healthy-shakes-svgrepo-com.svg"
import "./JournalPage.scss"

export default function JournalPage() {
  return (
    <>
      <Header />
      <div className="coming-soon">
        <h1 className="coming-soon__title">Daily Journal Page</h1>
        <img className="coming-soon__image" src={Shake} alt="feature-journal"></img>
        <p className="coming-soon__description">The Daily Journal Page is coming soon! stay tuned for meal comparisons, data visualization through charts, and goal tracking!</p>
      </div>
    </>
  );
}
