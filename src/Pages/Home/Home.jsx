import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeTitle}>Phonebook!</h1>
      <p className={css.homeDescription}>
        Ласкаво просимо на наш сайт Phonebook! Зареєструйтеся або увійдіть, щоб
        додавати, шукати та видаляти контакти.
       
      </p>
      
    </div>
  );
};
export default Home;