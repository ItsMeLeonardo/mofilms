import css from "./index.module.css";

const pattern = [
  38, 49, 39, 40, 35, 59, 43, 27, 41, 39, 25, 27, 34, 36, 50, 74, 50, 72, 55,
  46,
];

export default function ListPosterLoader() {
  return (
    <>
      <div className={css.poster}>
        <div className={css.posterData}>
          <span className={css.title}></span>
          <div className={css.details}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={css.description}>
            {pattern.map((size, i) => (
              <span
                key={i}
                style={{
                  //@ts-ignore
                  "--size": `${size}%`,
                }}
              />
            ))}
          </div>
          <div className={css.footerButtons}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={css.posterSlot}>
          <div />
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
